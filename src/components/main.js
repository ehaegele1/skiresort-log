import React from 'react';
import Form from './form.js';
import Resorts from './Resorts.js';

let baseURL = '';
if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8000';
} else {
  baseURL = 'https://resortsapi.herokuapp.com'
}

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            resorts: []
        }
    }
fetchResorts = () => {
      fetch(`${baseURL}/resorts`)
      .then(data => data.json())
      .then(jData => {
        this.setState({
          resorts: jData
        })
      }).catch(err => console.log(err))
    }

    handleCreate = (createResort) => {
        fetch(`${baseURL}/resorts`, {
          body: JSON.stringify(createResort),
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
          .then(createdResort => {
            return createdResort.json()
          })
          .then(jsonedResort => {
            this.props.handleView('home')
            this.setState(prevState => {
              prevState.resorts = jsonedResort
              return {
                resorts: prevState.resorts
              }
            })
          }).catch(err => console.log(err))
      }

    handleUpdate = (updateData) => {
        fetch(`${baseURL}/resorts/${updateData.id}`, {
            body: JSON.stringify(updateData),
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        }).then(updateResort => {
            this.props.handleView('home')
            this.fetchResorts()
        }).catch((err) => console.log(err))
    }

    handleDelete = (id) => {
        fetch(`${baseURL}/resorts/${id}`,{
          method:'DELETE',
          headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
          }
        }).then(json => {
          this.setState(prevState => {
            const resorts = prevState.resorts.filter(resort => resort.id !==id)
            return {resorts}
          })
        }).catch(err => console.log(err))
      }

    //   render after parents
    componentDidMount(){
        this.fetchResorts()

    }

    //=======| RENDER |========
    render() {
        return (
            <>
            <div class='resortCreator'>
            <h1 class='resortsTitle'>{this.props.view.pageTitle}</h1>
            {this.props.view.page === 'home' ? this.state.resorts.map((resortData) => (
              <Resorts
                key={resortData.id}
                resortData={resortData}
                handleView = {this.props.handleView}
                handleDelete = {this.handleDelete}
              />
            )): <Form class='Resorts'
                  handleCreate={this.handleCreate}
                  handleUpdate={this.handleUpdate}
                  formInputs={this.props.formInputs}
                  view={this.props.view}
                />}
          </div>
          </>
        )
    }
    // Component end
}

export default Main;
