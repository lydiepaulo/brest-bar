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

  console.log(bars);

  const barList = bars.map((data, i) => {
    return <Bar key={i} {...data} />;
  });

  return (
    <div className="ui-primary flex max-h-screen min-h-screen flex-col overflow-hidden bg-ui">
      <Navbar />
      <div className='custom-scrollbar relative z-10 min-h-full flex-1 origin-left bg-bg text-white shadow-xl transition-all lg:w-1/3 w-4/5 overflow-y-scroll'>
        <div className="p-4">
          <h1 class="text-4xl font-bold tx-inverted">
            Trouvez le bar qu'il vous faut <span class="gradient bg-clip-text text-transparent">selon votre humeur</span>
          </h1>
        </div>

        {barList}
      </div>
    </div>
  );
}

export default Home;
