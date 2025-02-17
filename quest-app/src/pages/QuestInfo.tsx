import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Quest } from '../utils/type';
import BookingModal from './BookingModal';

const QuestDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [quest, setQuest] = useState<Quest | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const fetchQuest = async () => {
      try {
        const response = await fetch(`http://localhost:3000/quests/${id}`);
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных о квесте');
        }
        const data = await response.json();
        setQuest(data);
      } catch (err) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error('Произошла неизвестная ошибка');
        }
      }
    };

    fetchQuest();
  }, [id]);

  if (!quest) {
    return <p className="text-center text-white">Loading quest details...</p>;
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-left"
      style={{
        backgroundImage: `url(/img/cover-${quest?.name?.replace(/\s/g, '').toLowerCase() || ''}.jpg)`,
        backgroundPosition: '-80px center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex items-center justify-end min-h-screen container mx-auto px-4 py-16 sm:pr-16 md:pr-24 lg:pr-52">
        <div className="text-white max-w-lg p-8 sm:max-w-md md:max-w-lg lg:max-w-xl">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-6">
            {quest.name}
          </h1>
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <img src="/icons/clock.svg" alt="Duration" className="h-5 w-5" />
              <p>{quest.time}</p>
            </div>
            <div className="h-8 border-l border-white"></div>
            <div className="flex items-center gap-2">
              <img src="/icons/person.svg" alt="Players" className="h-5 w-5" />
              <p>{quest.countPeople}</p>
            </div>
            <div className="h-8 border-l border-white"></div>
            <div className="flex items-center gap-2">
              <img src="/icons/puzzle.svg" alt="Level" className="h-5 w-5" />
              <p>{quest.level}</p>
            </div>
          </div>
          <p className="text-lg mb-8">{quest.description}</p>
          <button
            className="bg-accent text-white font-bold py-5 px-14 rounded-full"
            onClick={() => setIsBookingOpen(true)}
          >
            Забронировать
          </button>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
};

export default QuestDetails;
