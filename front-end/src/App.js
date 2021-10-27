import './App.css';
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import loginPage from './Pages/login/loginPage';
import mainPage from './Pages/main/mainPage';
import rolPage from './Pages/rolError/rolPage';
import notFoundUser from './Pages/notFoundUser/notFoundUser';
import gestionUsers from './Pages/gestionUsers/gestionUsers';
import maestroUsers from './Pages/maestroUsers/maestroUsers';
// import asigRoles from './Pages/asignacionRoles/asigRoles';
// import exitoAsigRoles from './Pages/exitoAsignarRol/exitoAsigRoles';
// import exitoRegUsers from './Pages/exitoRegistroUser/exitoRegUsers';
import RegistroProducto from './Pages/Productos/RegistroProducto';
import MaestroProducto from './Pages/Productos/MaestroProducto';
import MaestroVentas from './Pages/Ventas/MaestroVentas';
import RegistroVentas from './Pages/Ventas/RegistroVentas';


function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={loginPage}></Route>
        <Route exact path="/main" component={mainPage}></Route>
        <Route exact path="/rolerror" component={rolPage}></Route>
        <Route exact path="/notFoundUser" component={notFoundUser}></Route>
        <Route exact path="/gestionUsers" component={gestionUsers}></Route>
        <Route exact path="/maestroUsers" component={maestroUsers}></Route>
        {/* <Route exact path="/asigRoles" component={asigRoles}></Route>
        <Route exact path="/exitoAsigRoles" component={exitoAsigRoles}></Route>
        <Route exact path="/exitoRegUsers" component={exitoRegUsers}></Route> */}
        <Route exact path="/Productos" component={RegistroProducto}></Route>
        <Route exact path="/MaestroProductos" component={MaestroProducto}></Route>
        <Route exact path="/MaestroVentas" component={MaestroVentas}></Route>
        <Route exact path="/RegistroVentas" component={RegistroVentas}></Route>
        {/* <Route component = {notFound}></Route> */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;