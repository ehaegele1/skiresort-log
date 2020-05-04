
import React from 'react'

class Nav extends React.Component {

  render() {
    return (
      <aside>

        {/* Menu List */}

    <nav>
        <button class='homeButton' onClick={() => {
            this.props.handleView('home')
          }}>HOME</button>


          <button class='addResortButton'onClick={() => {
            this.props.handleView('addResort')
          }}>ADD Resort</button>


        </nav>

      </aside>
    )
  }
}
export default Nav
