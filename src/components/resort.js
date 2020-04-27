// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Resort extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <article class='createResort'>
        <div className="resort-body">
          {this.props.resortData.location}<br/>
          {this.props.jokeData.photo}
        </div>
        <div className="resort-options">
          <ul>
            <li onClick={() => {
              this.props.handleView('editResort',
              this.props.resortData)}}>edit Resort</li>
            <li onClick={() => {this.props.handleDelete(this.props.resortData.id)}}>delete Resort</li>
          </ul>
        </div>
      </article>

    )
  }
}

// =============================
// EXPORT
// =============================
export default Resort;
