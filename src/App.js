import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import PedidoAdd from './Componentes/PedidoAdd';
import PedidosList from './Componentes/PedidosList';

function App() {

const Home = () => {
  return <h1>La home de mi pagina</h1>;
}
const prueba = process.env.REACT_APP_URL;

// prueba + 'config.properties'

// const reader = new FileReader();
//     reader.onload = async (e) => { 
//       const text = (e.target.result)
//       console.log(text)
//       alert(text)
//     };
    
//     reader.readAsText(prueba + 'config.properties');
//     console.log(reader);

    // const file = require(prueba + 'config.properties');
    // console.log(file);

  return (
    
    <BrowserRouter>
      <div className="App">
        <header className="jumbotron text-center mb-0">
          <h1>React clase 4</h1>
          <h2>Pedidos ya! -{prueba}- </h2>
        </header>
        <nav className="navbar navbar-expand bg-dark">
          <ul className="navbar-nav nav">
          <li className="nav-item">
              <Link className="nav-link" to="/">
                Home 
            </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">
                Lista pedidos
            </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new">
                Nuevo pedido
            </Link>
            </li>
          </ul>
        </nav>
        <main className="container mt-3">
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/list" component={PedidosList}></Route>
            <Route path="/new" component={PedidoAdd}></Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
