import './index.css';
import React, { useState, useEffect } from 'react';

function HeaderComp() {
  return (
    <header>
      <nav className='navbar common-properties'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='#'>Settings</a></li>
          <li><a href='#'>Explain working</a></li>
        </ul>
      </nav>
    </header>
  );
};

// function CardComp({ title, text }) {
//   return (
//     <section>
//       <div className='card'>
//         <div className='card-body'>
//           <h3 className='card-title'>{title}</h3>
//           <p className='card-text'>{text}</p>
//         </div>
//       </div>
//     </section>
//   );
// };

function BtnComp({ text, type }) {
  return (
    <button className={`btn btn-${type}`}>{text}</button>
  );
};

function TimerComp() {
  const [timerParameter, setTimerParameters] = useState({
    hour: 0,
    minute: 0,
    second: 0
  });

  function handleHoursParameter(h) {
    setTimerParameters({
      ...timerParameter,
      hour: h.target.value,
    }
    );
  };

  function handleMinutesParameter(m) {
    setTimerParameters({
      ...timerParameter,
      minute: m.target.value,
    });
  };

  function handleSecondsParameter(s) {
    setTimerParameters({
      ...timerParameter,
      second: s.target.value,
    })
  };

  return (
    <div className='card common-properties'>
      <h1>Timer</h1>
      <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>

        <div>
          <h4>Hours</h4>
          <input type='text' id='hours-timer' value={timerParameter.hour} onChange={handleHoursParameter} />
        </div>

        <div>
          <h4>Minutes</h4>
          <input type='text' id='minutes-timer' value={timerParameter.minute} onChange={handleMinutesParameter} />
        </div>

        <div>
          <h4>Seconds</h4>
          <input type='text' id='seconds-timer' value={timerParameter.second} onChange={handleSecondsParameter} />
        </div>

      </div>

      <div style={{ textAlign: 'center' }}>
        <h1>{timerParameter.hour}:{timerParameter.minute}:{timerParameter.second}</h1>
        <BtnComp type={'peace'} text={'START'} />
      </div>

    </div>
  );
}

function App() {
  let [data, setData] = useState([]);

  let getData = async () => {
    let response = await fetch('https://8c9dw08c-8000.inc1.devtunnels.ms/api/weather/');
    let data = await response.json();
    console.log(data.weather_data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      
      <HeaderComp />
      
      <section>
        <div className='slider common-properties'>
          <div className='slider-body'>

            <h4 className='slider-title'>Current Weather:</h4>

            {data.map((item) => (

              <div>
                <h1 style={{ textAlign: 'center' }}>{item.weather_data[0]}, {item.weather_data[1]}</h1>
                <h1>{item.weather_data[2]}<sup>o</sup>C, {item.weather_data[3]}<sup>o</sup>F</h1>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                  <h4 style={{ textAlign: 'left' }}>Humdity</h4>
                  <h4 style={{ textAlign: "center" }}>Visibility</h4>
                  <h4 style={{ textAlign: "right" }}>Wind speed</h4>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                  <h3 style={{ textAlign: 'left' }}>{item.weather_data[4]}%</h3>
                  <h3 style={{ textAlign: "center" }}>{item.weather_data[5]} KM</h3>
                  <h3 style={{ textAlign: "right" }}>{item.weather_data[6]} KM</h3>
                </div>
                <hr />
                <h1 style={{ textAlign: 'center' }}>{item.weather_data[7]}, {item.weather_data[8]}</h1>
              </div>))}
          </div>
        </div>
      </section>

      <section>
        <TimerComp />
      </section>

    </main>
  );
};


export default App;