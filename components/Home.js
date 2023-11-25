import { useEffect, useState } from 'react';
import Bar from './Bar';
import Navbar from './Navbar';

function Home() {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    fetch('https://api.brest.bar/items/bars')
      .then(response => response.json())
      .then(data => {
        setBars(data.data);
      });
  }, []);

  let barList = bars.map((data, i) => {
    return <Bar key={i} {...data} />;
  });

  const sortAll = () => {
  }

  const sortOpen = () => {
  }

  return (
    <div className="ui-primary flex max-h-screen min-h-screen flex-col overflow-hidden bg-ui">
      <Navbar />
      <div className='custom-scrollbar relative z-10 min-h-full flex-1 shadow-xl transition-all lg:w-1/3 w-4/5 overflow-y-scroll'>
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
          {barList}
        </div>
      </div>
    </div>
  );
}

export default Home;
