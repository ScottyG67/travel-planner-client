
import './App.css';
import Flights from './containers/Flights'
import SearchForm from './components/SearchForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Travel Planner</h1>
        <SearchForm />
        <Flights />
      </header>
    </div>
  );
}

export default App;
