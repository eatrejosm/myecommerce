import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

import { Container, Row } from 'react-bootstrap'


const App = () => {
  return (
    <Router>
    <Header />
    <main className="py-3">
      <Container>
      <h1>Welcome to COMPRAONLINE &copy;</h1>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
      </Container>

    </main> 
    <Footer />
    </Router>
  );
}

export default App;
