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
        mountain: null,
        id: null
      }
    }
  }

  handleView = (view, resortData) => {
    let pageTitle = '';
    let formInputs = {
      location: '',
      mountain: '',
      id: null
    }
    switch (view) {
      case 'home':
        pageTitle = 'Resorts'
        break
      case 'addResorts':
        pageTitle = 'Create resorts'
        break
      case 'editResort':
        pageTitle = 'Edit resorts'
        formInputs = {
          location: resortData.location,
          mountain: resortData.mountain,
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
        <div class='navbar'>
        <Nav handleView={this.handleView} />
        </div>
        
        
        <div >
        <Main
          view={this.state.view}
          handleView={this.handleView}
          formInputs={this.state.formInputs}
        />
      </div>
      <div class="grid-container">
  <div class="grid-item1"></div>
  <div class="grid-item2"></div>
  <div class="grid-item3">Aspen Snowmass</div>
  <div class="grid-item4"></div>
  <div class="grid-item5"></div>
  <div class="grid-item6"></div>
  <div class="grid-item7"></div>
  <div class="grid-item8">Breckenridge</div>
  <div class="grid-item9">Whistler Blackcomb</div>
 
</div>

      </div>
    )
  }
}

export default App;
