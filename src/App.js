import React, { useState } from 'react';
import axios from 'axios'
import FirstScreen from './components/FirstScreen';
import Header from './components/Header';
import TopOfWeek from './components/TopOfWeek';

import './style/app.scss';



function App() {

  const [buns, setBuns] = useState([]);
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setBuns(data.buns);
    })
  }, [])

  const sortBuns = (a, b) => a.rating < b.rating ? 1 : -1;
  const topBuns = [].concat(buns).sort(sortBuns).filter((_, index) => index < 3);

  return (
    <div>
      <div className='wrapper'>
        <Header />
        <FirstScreen topBuns={topBuns} />
      </div>
      <TopOfWeek topBuns={topBuns} />
    </div>
  );
}

export default App;
