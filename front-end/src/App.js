import './App.css';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';
import loginPage from './Pages/login/loginPage';
import mainPage from './Pages/main/mainPage';
import rolPage from './Pages/rolError/rolPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={loginPage}></Route>
        <Route exact path="/main" component={mainPage}></Route>
        <Route exact path="/rolerror" component={rolPage}></Route>
        {/* <Route component = {notFound}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
