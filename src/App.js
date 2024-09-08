import './App.css';


function HeaderComp(){
  return (
    <header className='nav-header'>
      <nav>
        <h3 className='nav-branding'>SMART IRRIGATION SYSTEM</h3>
      </nav>
    </header>
  )
}

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
}

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
  )
}

function BtnComp({text}){
  return (
    <button className='btn btn-primary'>{text}</button>
  )
}

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <CardExpandedComp />
      <CardComp title={'Hello'} text={'World'} />
      <BtnComp text={'+ Add'}/>
    </div>
  );
}

export default App;
