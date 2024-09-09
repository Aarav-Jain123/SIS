import './App.css';


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

async function pullData(){
  const res = await fetch('127.0.0.1:8000');
  const data = await res.json()
  return data;
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

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <CardExpandedComp />
      <CardComp title={'Hello'} text={'World'} />
      <BtnComp text={'+ Add'} type={'primary'}/>
      <BtnComp text={'- Delete'} type={'danger'}/>
    </div>
  );
};

export default App;
