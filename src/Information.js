import React, { Component } from 'react'

import './app.css'
import logo from './logo.png'

class Information extends Component {
  render() {
    return (
      <div id="information">
        <div id="who">
            <h1 class="name">name</h1>
            <h4 class="position">position</h4>
            <ol id="affiliations">
              <li class="affiliations">
                <a class="name site@href">affiliation1</a>
              </li>
            </ol>

        </div>

        <div id="contact">
          <ol>
            <li class="address">addres</li>
            <li class="office">office</li>
            <li><img class="email_alt@alt email@src"/>email image</li>
          </ol>

          <ol class="cv-links">
            <li class="cv class@class"><a class="name site@href">cv link1</a></li>
          </ol>
        </div>

      </div>
    )
  }
}

export default Information
