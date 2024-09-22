import './App.css';
import React, { useState, useEffect } from 'react';

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
  const [data, setData] = useState(null);

  let getData = async () => {
    let response = await fetch('http://127.0.0.1:8000/');
    let data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.map(item => (
          <li>
            <h2>{item}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default App;