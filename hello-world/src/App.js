
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Greet/>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;
