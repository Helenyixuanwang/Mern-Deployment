
import './App.css';
import { Router} from '@reach/router';
import Main from './views/Main';
import Detail from './components/Detail';
import Edit from './components/Edit';
import Create from './components/Create';

function App() {
  return (
    <div >
       <h1> Pet Shelter</h1>
       <Router>                            

        <Main path="/"/>
        <Detail path="/pets/:id" />
        <Create path="/pets/new"  />
        <Edit path="/pets/:id/edit"/>
      </Router>  
    </div>
  );
}

export default App;
