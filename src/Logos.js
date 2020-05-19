import React, { Component } from 'react'

class Logos extends Component {
  render() {
    return (
      <div id="logos">
        <ol>
          {
            this.props.logos.map(el => <li key={el.site} className='logos'>
                <a href={el.site}><img alt={el.name} src={el.logo}/></a>
              </li>)
          }
        </ol>
      </div>
    )
  }
}

export default Logos
