import { useEffect, useState } from 'react';
import Bar from './Bar';
import Navbar from './Navbar';
import MapBrest from './MapBrest';

function Home() {
  const [bars, setBars] = useState([]);
  const [openFilter, setOpenFilter] = useState('all');
  const [visibleBars, setVisibleBars] = useState(5);

  useEffect(() => {
    fetch('https://api.brest.bar/items/bars')
      .then(response => response.json())
      .then(data => {
        setBars(data.data);
      });
  }, []);

  const sortedBars = openFilter === 'open'
    ? bars.filter(bar => bar.isOpen)
    : bars;

  const visibleBarList = sortedBars.slice(0, visibleBars).map((data, i) => <Bar key={i} {...data} />);

  const loadMore = () => {
    setVisibleBars(prevVisibleBars => prevVisibleBars + 5);
  };

  const sortAll = () => {
    setOpenFilter('all');
    setVisibleBars(5); // Reset visible bars when changing the filter
  };

  const sortOpen = () => {
    setOpenFilter('open');
    setVisibleBars(5); // Reset visible bars when changing the filter
  };

  return (
    <div className="flex max-h-screen min-h-screen flex-col overflow-hidden">
      <Navbar />

      {/* left bar */}
      <div className='ui-primary custom-scrollbar relative z-10 min-h-full flex-1 shadow-xl transition-all lg:w-1/3 w-4/5 overflow-y-scroll'>
        <div className="p-4">
          <h1 className="text-4xl font-bold tx-inverted">
            Trouvez le bar qu'il vous faut <span className="gradient bg-clip-text text-transparent">selon votre humeur</span>
          </h1>
        </div>
        <div className="divider"></div>
        <div className="p-4">
          <h3 className="subtitle">Où boire à Brest ?</h3>
          <div className="flex gap-4">
            <button className="tri-buttons" onClick={sortAll}>
              <span className="text-4xl">🍺</span> <span>Tous</span>
            </button>
            <button className="tri-buttons" onClick={sortOpen}>
              <span className="text-4xl">🍹</span> <span>Ouverts</span>
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="p-4">
          <h3 className="subtitle">Explorer</h3>
          {visibleBarList}
          {visibleBars < sortedBars.length && (
            <button className="ui-secondary block mx-auto px-6 py-2 rounded-lg" onClick={loadMore}>
              Voir plus
            </button>
          )}
        </div>
      </div>

      {/* map */}
      <div className="!absolute z-0 top-0 left-0 right-0 w-[100%] h-[100%] bg-gray-secondary mapboxgl-map">
        <MapBrest />
      </div>
    </div>
  );
}

export default Home;
