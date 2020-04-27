import React from 'react';
import './App.css';
import Main from './components/main.js';
import Nav from './components/nav.js';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'resorts'
      },
      formInputs: {
        location: null,
        photo: null,
        id: null
      }
    }
  }

  handleView = (view, resortData) => {
    let pageTitle = '';
    let formInputs = {
      location: '',
      photo: '',
      id: null
    }
    switch (view) {
      case 'home':
        pageTitle = 'Resorts'
        break
      case 'addJoke':
        pageTitle = 'Create reosorts'
        break
      case 'editResort':
        pageTitle = 'Edit resorts'
        formInputs = {
          location: resortData.location,
          photo: resortData.photo,
          id: resortData.id
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
        formInputs: formInputs
    })
  }


  render() {
    return (
      <div>

        <header class='top'>
          <h1>Ski Resort Tracker </h1>
          <h5>Keep Shredding!</h5>
        </header>

    

      </div>
    )
  }
}

export default App;
