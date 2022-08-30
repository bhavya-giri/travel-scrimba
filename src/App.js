
import './App.css';
import data from './components/data'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
function App() {
  const heros = data.map((item)=>{
    return(
    <Hero
    {...item}
        />
    )
  })

  return (
    <div className="App">
     <Navbar/>
     {heros}
    </div>
  );
}

export default App;
