
import './App.css';
import Left from './components/left';
import Middle from './components/middle';
import Right from './components/right';

function App() {
  return (
    <div className="App">
      <div className="left">
        <Left/>
      </div>
      <div className="middle">
        <Middle/>
      </div>
      <div className="right">
        <Right/>
      </div>
    </div>
  );
}

export default App;
