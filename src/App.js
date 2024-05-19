import './App.css';
import Counter from './components/Counter';
import { LoginProfile } from './components/LoginProfile';
import PlayerSoccor from './components/PlayerSoccor';

function App() {
  return (
    <div className="App">

      <Counter  />
      <Counter  />
      <Counter  />
      <PlayerSoccor />

      <LoginProfile />
      
    </div>
  );
}

export default App;
