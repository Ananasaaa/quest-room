import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const bookingSchema = z.object({
  name: z
    .string()
    .min(2, 'The name must contain at least 2 characters')
    .regex(/^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+$/, 'The name must contain only letters'),
  phone: z.string().regex(/^\d{10,15}$/, 'Invalid phone number'),
  participants: z.number().min(1, 'At least 1 participant is required'),
  agreement: z.boolean().refine(value => value === true, 'Consent is required'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  if (!isOpen) return null;

  const onSubmit = async (data: BookingFormData) => {
    try {
      const response = await fetch('http://localhost:3000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        onClose();
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error while submitting:', error);
      alert('An error occurred while booking.');
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(61, 51, 51, 0.8)' }}
    >
      <div className="text-white p-6 rounded-lg w-full min-h-[500px] max-w-md relative bg-gradient-to-b from-[#141414] to-[#1F1D1D]">
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-4xl font-bold mb-6">Submit an application</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-lg mb-4">Your name</label>
            <input
              {...register('name')}
              placeholder="Your name"
              className="w-full p-3 border border-white bg-transparent outline-none rounded appearance-none"
              autoComplete="off"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-4">Contact phone</label>
            <input
              {...register('phone')}
              placeholder="Contact phone"
              className="w-full p-3 border border-white bg-transparent outline-none rounded focus:ring-0 focus:outline-none appearance-none"
              autoComplete="off"
            />
            {errors.phone && (
              <p className="text-red-400 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-4">Number of participants</label>
            <input
              type="number"
              {...register('participants', { valueAsNumber: true })}
              placeholder="Number of participants"
              className="w-full p-3 border border-white bg-transparent outline-none rounded focus:ring-0 focus:outline-none"
            />
            {errors.participants && (
              <p className="text-red-400 text-sm">
                {errors.participants.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-btnform hover:bg-accent py-3 rounded mt-10 mx-auto block w-64 rounded-3xl"
          >
            Submit application
          </button>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              {...register('agreement')}
              className="mr-2 accent-[#F2890F]"
            />
            <label className="text-sm mt-5">
              I agree with the{' '}
              <a href="#" className="border-b border-white">
                personal data processing policy
              </a>{' '}
              and the user agreement.
            </label>
          </div>
          {errors.agreement && (
            <p className="text-red-400 text-sm">{errors.agreement.message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
