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
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        </div>
      </div>
    </section>
  );
}

function CardComp(){
  return 
}

function App() {
  return (
    <div className="App">
      <HeaderComp />
      <CardExpandedComp />
    </div>
  );
}

export default App;
