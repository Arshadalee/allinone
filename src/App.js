import logo from './logo.svg';
import './App.css';
import Accordian from './comp/accordian/Accordian';
import StarRating from './comp/starRating/StarRating';

function App() {
  return (
    <div className="App">
      <h2>Hello this is my new project</h2>
      <Accordian/>
      <StarRating/>
    </div>
  );
}

export default App;
