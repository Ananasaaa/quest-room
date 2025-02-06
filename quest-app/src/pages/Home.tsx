import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Quest } from '../utils/type';

const Home = () => {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<Quest['type'] | null>(
    null
  );

  useEffect(() => {
    fetch('http://localhost:3000/quests')
      .then(res => res.json())
      .then(data => setQuests(data))
      .catch(() => console.log('Ошибка загрузки'));
  }, []);

  let filteredQuests = quests;
  if (selectedGenre) {
    filteredQuests = quests.filter(
      q => q.type.toLowerCase() === selectedGenre.toLowerCase()
    );
  }

  const genres = [
    { id: 1, label: 'All quests', type: null, icon: '/icons/all_quests.svg' },
    {
      id: 2,
      label: 'Adventure',
      type: 'Adventure',
      icon: '/icons/adventure.svg',
    },
    { id: 3, label: 'Horror', type: 'Horror', icon: '/icons/horror.svg' },
    {
      id: 4,
      label: 'Mysticism',
      type: 'Mysticism',
      icon: '/icons/mysticism.svg',
    },
    {
      id: 5,
      label: 'Detective',
      type: 'Detective',
      icon: '/icons/detective.svg',
    },
    { id: 6, label: 'Sci-Fi', type: 'Sci-Fi', icon: '/icons/sci-fi.svg' },
  ];

  return (
    <div className="bg-bgcolor text-primary p-4">
      <main className="container mx-auto py-8">
        <p className="text-accent text-lg pl-4 md:pl-32">Quests in Toronto</p>
        <h1 className="text-6xl font-bold mb-20 mt-4 text-white pl-4 md:pl-32">
          Choose a theme
        </h1>
        <section className="flex flex-wrap justify-center items-center gap-6 md:gap-x-12 px-4 md:px-32 w-full">
          {genres.map(({ id, label, type, icon }) => (
            <div
              key={id}
              className="flex items-center space-x-4 group cursor-pointer"
              onClick={() => setSelectedGenre(type)}
            >
              <img src={icon} alt={label} className="h-8 w-8" />
              <p
                className={`text-lg text-primary ${
                  selectedGenre === type ? 'border-b-2 border-accent' : ''
                }`}
              >
                {label}
              </p>
            </div>
          ))}
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-32 mt-12">
          {filteredQuests.length > 0 ? (
            filteredQuests.map(quest => (
              <Link to={`/quests/${quest.id}`} key={quest.id}>
                <div className="relative overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105 p-4">
                  <img
                    src={`/img/${quest.name.replace(/\s/g, '')}.jpg`}
                    alt={quest.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B1BE5] to-[#2E2E2E00]"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="text-xl font-bold">{quest.name}</h3>
                    <div className="flex items-center gap-2">
                      <img
                        src="/icons/puzzle.svg"
                        alt="Level"
                        className="h-5 w-5"
                      />
                      <p>Level: {quest.level}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <img
                        src="/icons/person.svg"
                        alt="Players"
                        className="h-5 w-5"
                      />
                      <p>Players: {quest.countPeople}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-white">Loading quests...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
