import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
