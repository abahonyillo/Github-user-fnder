import './App.css';
import User from './Components/Profile';
import DisplayTable from './Components/DisplayTable';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Github User finder
        </p>
      </header>
      <User/>
    </div>
  );
}

export default App;
