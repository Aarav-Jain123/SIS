import './index.css';
import React, { useState, useEffect } from 'react';

function HeaderComp() {
  return (
    <header>
      <nav className='navbar'>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='#'>About us</a></li>
          <li><a href='#'>Contact us</a></li>
        </ul>
      </nav>
    </header>
  );
};

function CardComp({ title, text }) {
  return (
    <section>
      <div className='card'>
        <div className='card-body'>
          <h3 className='card-title'>{title}</h3>
          <p className='card-text'>{text}</p>
        </div>
      </div>
    </section>
  );
};

function BtnComp({ text, type }) {
  return (
    <button className={`btn btn-${type}`}>{text}</button>
  );
};

function App() {
  let [data, setData] = useState([]);

  let getData = async () => {
    let response = await fetch('http://127.0.0.1:8000/');
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
        <div className='slider'>
          <div className='slider-body'>

            <h4 className='slider-title'>Current Weather:</h4>

            {data.map((item) => (

              <div>
                <h1 style={{ textAlign: 'center' }}>{item.weather_data[0]}, {item.weather_data[1]}</h1>
                <h1>{item.weather_data[2]}<sup>o</sup>C, {item.weather_data[3]}<sup>o</sup>F</h1>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                  <h5 style={{ textAlign: 'left' }}>Humdity</h5>
                  <h5 style={{ textAlign: "center" }}>Visibility</h5>
                  <h5 style={{ textAlign: "right" }}>Wind speed</h5>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                  <h3 style={{ textAlign: 'left' }}>{item.weather_data[4]}%</h3>
                  <h3 style={{ textAlign: "center" }}>{item.weather_data[5]} KM</h3>
                  <h3 style={{ textAlign: "right" }}>{item.weather_data[6]} KM</h3>
                </div>
                <hr/>
                <h1 style={{textAlign: 'center'}}>{item.weather_data[7]}, {item.weather_data[8]}</h1>
              </div>))}
          </div>
        </div>
      </section>
    </main>
  );
};


export default App;

{/*  <br/> {item.weather_data[2]}, {item.weather_data[3]}</h1>
          <h4 style={{margin: '0px'}}>Humdity <h4 style={{margin: '0px', textAlign: 'center'}}>Visibility</h4> </h4>
          <h3 style={{margin: '8px'}}> <h3 style={{margin: '8px', textAlign: 'center'}}> KM</h3> </h3> */}