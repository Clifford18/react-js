
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>

      <Greet name="John" heroName="Batman">
        <h3>This is children props</h3>
      </Greet>
      <Greet name="Cliff" heroName="Robin">
        <button>Child prop Action</button>
      </Greet>
      <Greet name="CJ" heroName="Superman"/>

      
    <Welcome name="John" heroName="Batman">
    <h3>This is a class components children props</h3>
    </Welcome>
    <Welcome name="Cliff" heroName="Robin">

    </Welcome>
    <Welcome name="CJ" heroName="Superman"/>


      <Hello/>
    </div>
  );
}

export default App;
