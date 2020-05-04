import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Form extends React.Component {
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
      location: '',
      mountain: ''
    }
  }

  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  // handles submit
  handleSubmit = (event) => {
    event.preventDefault()
    if (this.props.view.page === 'addResort') {
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editResort') {
      this.props.handleUpdate(this.state)
    }
  }

  componentDidMount() {
    this.setState({
      location: this.props.formInputs.location,
      mountain: this.props.formInputs.mountain
    })
  }

  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label class='location'>
          Location
          <input class='placerholderLocation' type="text" placeholder="location" id="setup" value={this.state.location} onChange={this.handleChange}/>
        </label>
        <label class='photo'>
          Photo
          <input class='placerholderMountain' type="text" placeholder="your mountain" id="mountain" value={this.state.mountain} onChange={this.handleChange}/>
        </label>
        <input class='formButton' type="submit" value="Add Resort"/>
      </form>
    )
  }
}

// =============================
// EXPORT
// =============================
export default Form
