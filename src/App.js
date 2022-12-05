import './App.css';
import Lists from './components/Lists';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewRestaurant from './components/NewRestaurant';
import Search from './components/Search';
import { Nav, ButtonGroup, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom'


function App() {

  return (
    <Router>
      <div className="App">
      <Nav className="navbar navbar-dark bg-dark">
        <Container className="justify-content-center">
          <ButtonGroup>
            <Link to="/" className="btn btn-success">Inicio</Link>
            <Link to="/search" className="btn btn-success">Buscar Restaurante</Link>
            <Link to="/new" className="btn btn-success">Crear Restaurante</Link>
          </ButtonGroup>
        </Container>
      </Nav>
      <Routes>
        <Route path="/" exact element={
          <Lists/>
        }>
        </Route>
        <Route path="/new" element= { <NewRestaurant />}>
        </Route>
        <Route path="/search" element={
          <Search/>
        }>
        </Route>
      </Routes>
    </div>  
    </Router>
    
  );
}

export default App;
