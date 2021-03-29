import React, {Component} from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
/*import logo from './logo.svg';*/
import './App.css';

class App extends Component {
  render () {
   return (
    <div className="App">
      <header className="container gradient">
        <div className="row">
            <div className="col-2 navbar-brand mr-0" aria-label="WorldHistGeo"><a href="#"><img className="d-block" width="60"
                        height="60" focusable="false" alt='Website Icon'>
                    </img>
                </a></div>
            <div className="col-10 navbarTitle"><b>WorldHistGeo - World History and Geography for Kids</b></div>
          </div>
            <div className="row navbar navbar-expand">
                <ul className="nav">
                    <li className="nav-item">
                      <a className="nav-link" href="aboutFAQ.html">About/FAQs</a></li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Reviews</a></li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact</a></li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Partners</a></li>
                </ul>
            </div>
            <a id="signIn" className="nav-link ml-auto mb-0" role="button" data-toggle="modal" data-target="#loginModal">
                <i className="fa fa-sign-in"></i> Sign-in</a>
      </header>
    </div>
    );
  }
}



export default App;

/* old app div: trash soon... 
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>*/