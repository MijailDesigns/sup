
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Subtitulo from './Components/Subtitulo/Subtitulo';
import NavBar from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
     <Switch>
      {/* <Route path='/subtitulo'  component={Subtitulo}  /> */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/subtitulo">
        <Subtitulo />
      </Route>
     </Switch>

      
    </BrowserRouter>
  );
}

export default App;
