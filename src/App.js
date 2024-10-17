import './index.css';
import React, { useState, useEffect } from 'react';

function HeaderComp() {
  return (
    <header>
      <nav className='navbar common-properties'>
        <ul>
          <li><a href='/'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg> <br /> <small>Home</small></a></li>
          <li><a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M220-80q-58 0-99-41t-41-99q0-58 41-99t99-41q18 0 35 4.5t32 12.5l153-153v-110q-44-13-72-49.5T340-740q0-58 41-99t99-41q58 0 99 41t41 99q0 48-28 84.5T520-606v110l154 153q15-8 31.5-12.5T740-360q58 0 99 41t41 99q0 58-41 99t-99 41q-58 0-99-41t-41-99q0-18 4.5-35t12.5-32L480-424 343-287q8 15 12.5 32t4.5 35q0 58-41 99t-99 41Zm520-80q25 0 42.5-17.5T800-220q0-25-17.5-42.5T740-280q-25 0-42.5 17.5T680-220q0 25 17.5 42.5T740-160ZM480-680q25 0 42.5-17.5T540-740q0-25-17.5-42.5T480-800q-25 0-42.5 17.5T420-740q0 25 17.5 42.5T480-680ZM220-160q25 0 42.5-17.5T280-220q0-25-17.5-42.5T220-280q-25 0-42.5 17.5T160-220q0 25 17.5 42.5T220-160Z" /></svg> <br /> <small>Explain</small> </a></li>
          <li><a href='#'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" /></svg> <br /> <small>Contact</small></a></li>
        </ul>
      </nav>
    </header>
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
    <form method='POST' onSubmit={(e) => (e.preventDefault())}>
      
      <div className='card common-properties'>
      <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M360-860v-60h240v60H360Zm90 447h60v-230h-60v230Zm30 332q-74 0-139.5-28.5T226-187q-49-49-77.5-114.5T120-441q0-74 28.5-139.5T226-695q49-49 114.5-77.5T480-801q67 0 126 22.5T711-716l51-51 42 42-51 51q36 40 61.5 97T840-441q0 74-28.5 139.5T734-187q-49 49-114.5 77.5T480-81Zm0-60q125 0 212.5-87.5T780-441q0-125-87.5-212.5T480-741q-125 0-212.5 87.5T180-441q0 125 87.5 212.5T480-141Zm0-299Z"/></svg>

        <h1>Timer</h1>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>

          <div>
            <h4>Hours</h4>
            <input type='text' className='timer' id='hours-timer' name='hours-timer' value={timerParameter.hour} onChange={handleHoursParameter} />
          </div>

          <div>
            <h4>Minutes</h4>
            <input type='text' className='timer' id='minutes-timer' name='minutes-timer' value={timerParameter.minute} onChange={handleMinutesParameter} />
          </div>

          <div>
            <h4>Seconds</h4>
            <input type='text' className='timer' id='seconds-timer' name='seconds-timer' value={timerParameter.second} onChange={handleSecondsParameter} />
          </div>

        </div>

        <div style={{ textAlign: 'center' }}>
          <h1>{timerParameter.hour} : {timerParameter.minute} : {timerParameter.second}</h1>
          <button type='sumbit' id='timer-sumbit-btn' className='btn btn-peace'><i>START</i></button>
        </div>

      </div>
    </form>
  );
};

function IrrigationInfoComp() {
  return (
    <div>
      <div className='irrigation-sys-info common-properties'>
      <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M480-478q-17.42 0-29.21-11.79T439-519q0-17.42 11.79-29.21T480-560q17.42 0 29.21 11.79T521-519q0 17.42-11.79 29.21T480-478Zm0-160q-17.42 0-29.21-11.79T439-679q0-17.42 11.79-29.21T480-720q17.42 0 29.21 11.79T521-679q0 17.42-11.79 29.21T480-638Zm0-160q-17.42 0-29.21-11.79T439-839q0-17.42 11.79-29.21T480-880q17.42 0 29.21 11.79T521-839q0 17.42-11.79 29.21T480-798Zm119 399q-17.42 0-29.21-11.79T558-440q0-17.42 11.79-29.21T599-481q17.42 0 29.21 11.79T640-440q0 17.42-11.79 29.21T599-399Zm113-114q-17.42 0-29.21-11.79T671-554q0-17.42 11.79-29.21T712-595q17.42 0 29.21 11.79T753-554q0 17.42-11.79 29.21T712-513Zm113-112q-17.42 0-29.21-11.79T784-666q0-17.42 11.79-29.21T825-707q17.42 0 29.21 11.79T866-666q0 17.42-11.79 29.21T825-625ZM361-399q-17.42 0-29.21-11.79T320-440q0-17.42 11.79-29.21T361-481q17.42 0 29.21 11.79T402-440q0 17.42-11.79 29.21T361-399ZM248-513q-17.43 0-29.21-11.79Q207-536.58 207-554t11.79-29.21Q230.57-595 248-595q17.42 0 29.21 11.79T289-554q0 17.42-11.79 29.21T248-513ZM135-625q-17.43 0-29.21-11.79Q94-648.58 94-666t11.79-29.21Q117.57-707 135-707t29.21 11.79Q176-683.42 176-666t-11.79 29.21Q152.43-625 135-625ZM450-80v-170H290v-60h380v60H510v170h-60Z"/></svg>
        <h1>Your Irrigation System:</h1>

        <h2>Irrigating: </h2>
        <h2>Will Rain: </h2> {/* also tell in how many hours */}
        <h2>Irrigate in for: </h2> {/* Irrigate in (x hours ) for (x hours) */}
        <h2>Next round of irrigation in: </h2>
        <h2>Crop: </h2>
        <h2>Soil Type: </h2> {/* Soil type and its factors such as water retaining ability etc. */}
      </div>
    </div>
  );
};

function ControlIrrigationSystem() {
  const irrBtn = document.getElementById('irr-btn');

  irrBtn.addEventListener('click', () => {
    
  });
  return (
    <div className='card common-properties'>
      <button className='btn btn-peace' id='irr-btn'>Irrigate</button>
    </div>
  )

}

function FarmCareAIComp() {
  // const [aiText, setAiText] = useState(
  //  {aIText:  document.getElementById('farmcare-ai').value}
  // )

  // function alterAIText() {
    
  // }
   return (
    <div className='ai-card common-properties'>
      <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l55 218q4 14-5 25.5T853-360h-93v140q0 24.75-17.62 42.37Q724.75-160 700-160H600v80h-60v-140h160v-200h114l-45-180q-24-97-105-158.5T480-820q-125 0-212.5 86.5T180-522.46q0 64.42 26.32 122.39Q232.65-342.09 281-297l19 18v199h-60Zm257-370Zm-48 76h60l3-44q12-2 22.47-8.46Q544.94-432.92 553-441l42 14 28-48-30-24q5-14 5-29t-5-29l30-24-28-48-42 14q-8.33-7.69-19.17-13.85Q523-635 512-638l-3-44h-60l-3 44q-11 3-21.83 9.15Q413.33-622.69 405-615l-42-14-28 48 30 24q-5 14-5 29t5 29l-30 24 28 48 42-14q8.06 8.08 18.53 14.54Q434-420 446-418l3 44Zm30.12-84q-29.12 0-49.62-20.38-20.5-20.38-20.5-49.5t20.38-49.62q20.38-20.5 49.5-20.5t49.62 20.38q20.5 20.38 20.5 49.5t-20.38 49.62q-20.38 20.5-49.5 20.5Z"/></svg>
      <h1>FarmCare AI</h1>
      <p id='farmcare-ai'>FarmCare: Hello there! How can I help you?</p>
      <input type='text' id='query' className='query' name='query' />
      <button className='btn btn-peace' id='farmcare-smbt'>Sumbit</button>
    </div>
  );
}

function App() {
  let [data, setData] = useState([]);
  let getData = async () => {
    // let response = await fetch('https://8c9dw08c-8000.inc1.devtunnels.ms/api/weather/');
    let response = await fetch('http://127.0.0.1:8000/api/weather/')
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
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path d="M523-580v-60h230v60H523Zm0-120v-60h320v60H523ZM296-121q-75.53 0-128.76-53.24Q114-227.47 114-303q0-48 24-90.5t66-68.5v-286q0-38.33 26.76-65.17 26.77-26.83 65-26.83Q334-840 361-813.17q27 26.84 27 65.17v286q42 26 66 68.5t24 90.5q0 75.53-53.23 128.76Q371.53-121 296-121ZM174-303h244q0-40-19-71.5T348-420l-20-9v-319q0-13.6-9.2-22.8-9.2-9.2-22.8-9.2-13.6 0-22.8 9.2-9.2 9.2-9.2 22.8v319l-20 9q-32 14-51 46t-19 71Z" /></svg>
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

      <section>
        <IrrigationInfoComp />
      </section>

      <section>
        <ControlIrrigationSystem />
      </section>

      <section>
        <FarmCareAIComp />
      </section>

    </main>
  );
};


export default App;

// (event) => {
//   event.preventDefault();
//   const formEl = document.querySelector('#form-el'); 
//   const formData = new FormData(formEl);
//   const data = Object.fromEntries(formData);

//   fetch('http://127.0.0.1:8000/api/timer/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });