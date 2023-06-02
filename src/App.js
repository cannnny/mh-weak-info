import './reset.css';
import './App.css';
import Select from './components/Select';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        モンハン弱点教えてくれるくん
      </header>
      <Select />
      <Result />
    </div>
  );
}

export default App;
