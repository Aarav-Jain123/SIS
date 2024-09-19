import './App.css';
import React, { useState, useEffect } from 'react';

const url = 'http://127.0.0.1:8000/'
function HeaderComp(){
  return (
    <header className='nav-header'>
      <nav>
        <h3 className='nav-branding'>SMART IRRIGATION SYSTEM</h3>
      </nav>
    </header>
  );
};

function CardExpandedComp(){
  return (
    <section>
      <div className='card-expanded'>
        <div className='card-body'>
        <h3 className='card-title'>Welcome user,</h3>
        <p className="card-text">
        Let's continue our wornderful journey in your farms.
        </p>
        </div>
      </div>
    </section>
  );
};

function CardComp({title, text}){
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

function BtnComp({text, type}){
  return (
    <button className={`btn btn-${type}`}>{text}</button>
  );
};

async function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      function x() {
        fetch(url)
        .then(response => response.json())
        .then(response => setData(response))
        .catch(error => console.error('Error fetching data:', error));
      }
      x()
  }, []);


  return (
    <div className="App">
      <div>
      <h1>Data Display</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name}: {item.value}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;
