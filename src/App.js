import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import yaml from 'js-yaml'

import './app.scss'
import './app.css'
import Information from './Information.js'
import JournalItem from './JournalItem.js'
import Logos from './Logos.js'

import infoRaw from '../data/info.yml'
import journal from '../data/journal.json'
import conferences from '../data/conferences.json'
import posters from '../data/posters.json'

import descriptionRaw from '../data/description.md'

const info = yaml.safeLoad(Buffer.from(infoRaw.replace('data:text/yaml;base64,', ''), 'base64').toString('utf8'))
const description = Buffer.from(descriptionRaw.replace('data:text/markdown;base64,', ''), 'base64').toString('utf8')

class App extends Component {
  render() {
    console.log('journal',journal)
    return (
      <div className="App" id="content">
        <header className="App-header">
          <div id="photo"><img className='name photo' alt={info.person.name} src={info.person.photo}/></div>
          <Information person={info.person} contact={info.contact}/>
          <Logos logos={info.logos}/>
        </header>
        <div style={{clear: "both"}}></div>
        <main>

        <div id="description"></div>

          <ReactMarkdown source={description}/>

          <h2 className="light">Relevant software contributions</h2>
          <div id="links">
          <ol className="">
            {
              info.links.map(el => <li key={el.site} className="links">
                <a className="big name" href={el.site}>{el.name}</a>: <span className="description">{el.description}</span>
              </li>)
            }
          </ol>
          </div>

          <h2>Education</h2>
          <div id="education">
          <ol>
            {
              info.education.map(el => <li key={el.description} className="education">
                <ol>
                  <li className="range">{el.range}</li>
                  <li><hr className="subtitle"/>{el.subtitle}</li>
                  <li><a className="where" href={el.site}>{el.where}</a></li>
                  <li className="description">{el.description}</li>
                  { el['thesis-title'] ? <li className="thesis-title"><span className='dark-gray'>Title: </span>{el['thesis-title']}</li> : null }
                  { el.supervisor ? <li className="supervisor"><span className='dark-gray'>Supervisor:</span> <span dangerouslySetInnerHTML={{__html: el['supervisor']}}/></li> : null }
                  {
                    el['co-supervisor'] ? <li className="co-supervisor"><span className='dark-gray'>Co-supervisor:</span> <span dangerouslySetInnerHTML={{__html: el['co-supervisor']}}/></li> : null
                  }
                </ol>
              </li>)
            }
          </ol>
          </div>

          <div style={{clear: "both"}}></div>

          <h2>Projects</h2>

          <div id="projects">
          <ol>
            {
              info.project.map(el => <li key={el.name} className="project">
                <span><a className="name" href={el.site}>{el.name}</a></span>
                - <span className="range light">{el.range}</span> -
                <span className="description">{el.description}</span>
              </li>)
            }
          </ol>
          </div>

          <h2>Publications</h2>

          <h3>Journal</h3>
          <hr className="subtitle"/>

          <div id="journals">
          <ol className="articles-list">
            { journal.map(el => <JournalItem key={el.title} el={el}/>) }
          </ol>
          </div>

          <h3>Conference</h3>
          <hr className="subtitle"/>

          <div id="conferences">
          <ol className="articles-list">
            { conferences.map(el => <JournalItem key={el.title} el={el}/>) }
          </ol>
          </div>

          <h3>Poster</h3>
          <hr className="subtitle"/>

          <div id="posters">
          <ol className="articles-list">
            { posters.map(el => <JournalItem key={el.title} el={el}/>) }
          </ol>
          </div>

          <h2>Professional Experience</h2>
          <div id="experience">
          <ol>
            {
              info.experience.map(el => <li key={el.title} className="experience">
                <ol>
                  <li className="range">{el.range}</li>
                  <li><span className="title h4">{el.title}</span> at <a className="where" href={el.site}>{el.where}</a></li>
                  <li><hr className="subtitle"/></li>
                  <li className="description" dangerouslySetInnerHTML={{__html: el.description}}/>
                </ol>
              </li>)
            }
          </ol>
          </div>

          <div className="last_updated"></div>
          <div className="center light font-12px">This website was generated using <a href="https://github.com/averissimo/website">averissimo/website</a> (layout inspired by <a href="http://www.mit.edu/~adalca/">Adrian Dalca's page</a>).</div>

        </main>
      </div>
    )
  }
}

export default App
