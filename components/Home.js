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
      <div className=''>
        {/* {barList} */}
      </div>
    </div>
  );
}

export default Home;
