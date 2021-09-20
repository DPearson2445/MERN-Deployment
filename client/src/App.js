import './App.css';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import NewPet from './components/NewPet';
import EditPet from './components/EditPet';

import {BrowserRouter,
  Switch,
  Link,
  Route} from 'react-router-dom'; 


function App() {
  return (
    <BrowserRouter>
    <h1>Pet Shelter</h1>
    <div className="App">
      
      <Switch>
        <Route exact path="/">
        <Link to="/pet/new">Add New Pet</Link>
          <AllPets></AllPets>
        </Route>
        <Route exact path="/pet/new">
        <Link to="/">Home</Link>
        <br></br>
        <NewPet></NewPet>
        </Route>
        <Route exact path="/pet/:_id">
        <Link to="/">Home</Link>
        <br></br>
          <OnePet></OnePet>
        </Route>
        <Route exact path="/pet/:_id/edit">
        <Link to="/">Home</Link>
        <br></br>
        <EditPet></EditPet>
        </Route>
        

      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;

