import React, { Component } from 'react'

class Information extends Component {
  render() {
    const person = this.props.person
    const contact = this.props.contact
    return (
      <div id="information">
        <div id="who">
            <h1 className="name">{person.name}</h1>
            <h4 className="position">{person.position}</h4>
            <ol id="affiliations">
            { person.affiliations.map(el => <li key={el.site}>
                <a className="name" href={el.site} dangerouslySetInnerHTML={{__html: el.name}}/>
              </li>
            )
            }
            </ol>
        </div>

        <div id="contact">
          <ol>
            <li className="address">{contact.address}</li>
            <li className="office" dangerouslySetInnerHTML={{__html: contact.office}}/>
            <li><img alt={contact.email_alt} src={contact.email}/></li>
          </ol>

          <ol className="cv-links">
            {
              contact.cv.map(el => <li key={el.site} className={`cv ${el.class}`}>
                <a className='name' href={el.site}>{el.name}</a>
              </li>)
            }
          </ol>
        </div>

      </div>
    )
  }
}

export default Information
