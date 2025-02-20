import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { LatLngExpression, Icon } from 'leaflet';

const customIcon = new Icon({
  iconUrl: '/icons/marker-icon.svg',
  iconSize: [40, 60],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Contacts = () => {
  const position: LatLngExpression = [43.6532, -79.3832];

  return (
    <section
      className="text-white py-12 px-6 md:px-16 bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(/img/contacts-bg.jpg)`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 mt-16">
        <div className="md:w-1/2">
          <p className="text-md text-accent mb-6">Quests in Toronto</p>
          <h2 className="text-6xl font-bold mb-4">Contacts</h2>
          <div className="border-t border-gray-500 pt-16 w-[95vw] max-w-[1300px]  mx-auto">
            <div className="mb-8">
              <h3 className="text-lg font-semibold">Address</h3>
              <p>Toronto,</p>
              <p>123 Queen St W</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold">Opening hours</h3>
              <p>Daily, from 9:00 AM to 8:00 PM</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-accent">+1 (416) 555-0123</p>
            </div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold">E-mail</h3>
              <p className="text-accent">info@escape-room.com</p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[700px] mt-36 mx-auto ml-[-100px]">
          <MapContainer
            center={position}
            zoom={16}
            className="w-full h-64 md:h-full rounded-lg"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={customIcon}>
              <Popup>123 Queen St W</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
