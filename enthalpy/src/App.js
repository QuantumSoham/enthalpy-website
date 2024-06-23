import Navbar from './components/navbar'
import './App.css';
import HoverButton from './components/button';
function App() {
  return (
    <>
      
        <Navbar />
      
       <div className='FirstPage'>
        <div className="Content1">
          <span className='Teamtxt'>Team</span>
          <span className='Enthalpytxt'>ENTHALPY</span>
          <div className="Meetbtn1">
          <HoverButton text="Meet The Team" />
          </div>
          


        </div>
      </div>
      <div className='SecondPage'>
        
      </div>
      <div className='ThirdPage'>
      </div>
    </>
  
  );
}

export default App;
