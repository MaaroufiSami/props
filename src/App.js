
import './App.css';
import { Navbarr } from './component/navbar/Navbarr';

import { ListCard } from './component/listcard/ListCard';
import { team } from '../src/data'

export default App;

function App() {
  return (
    <div className="App">
      <Navbarr/>
      <ListCard team={team}/>
   

    </div>
  
  );
  
}

