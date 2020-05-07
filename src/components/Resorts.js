// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Resorts extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <article class='createResort'>

        <div>
          {this.props.resortData.location}
          {this.props.resortData.mountain}
        </div>
        <div className="resort-options">
          <ul>
            <li onClick={() => {
              this.props.handleView('editResort',
              this.props.resortData)}}>edit Resort</li>
            <li onClick={() => {this.props.handleDelete(this.props.resortData.id)}}>Delete Resort</li>
          </ul>
        </div>
      </article>

    )
  }
}

// =============================
// EXPORT
// =============================
export default Resorts;
