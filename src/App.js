
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Subtitulo from './Components/Subtitulo/Subtitulo';
import NavBar from './Components/NavBar';
import store from './store';
import { Provider } from 'react-redux';
import Detail from './Components/Detail';

function App() {
  return (

    <Provider store={store}>
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
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>

        
      </BrowserRouter>
    </ Provider>
  );
}

export default App;
