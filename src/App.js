import React, { Component } from 'react'

import './app.scss'
import logo from './logo.png'
import Information from './Information.js'
import Logos from './Logos.js'


class App extends Component {
  render() {
    return (
      <div className="App" id="content">
        <header className="App-header">
          <div id="photo"><img className="name@alt photo@src"/></div>
          <Information/>
          <Logos/>
        </header>
        <div style={{clear: "both"}}></div>
        <main>

        <div id="description"></div>

          <h2 className="light">Applications & designs</h2>
          <div id="links">
          <ol className="inline-block">
            <li className="links"><a className="name site@href"></a><span className="dark-gray description"></span></li>
          </ol>
          </div>

          <h2>Education</h2>
          <div id="education">
          <ol>
            <li className="education">
              <ol>
                <li className="range">range</li>
                <li><hr className="subtitle"/>subtitle</li>
                <li><a className="where site@href">where</a></li>
                <li className="description">description</li>
                <li data-prefix="<span className='dark-gray'>Title:</span> "      className="thesis-title">title</li>
                <li data-prefix="<span className='dark-gray'>Supervisor:</span> " className="supervisor">supervisor</li>
                <li data-prefix="<span className='dark-gray'>Co-supervisor:</span> " className="co-supervisor">co-supervisor</li>
              </ol>
            </li>
          </ol>
          </div>

          <div style={{clear: "both"}}></div>

          <h2>Projects</h2>

          <div id="projects">
          <ol>
            <li className="project">
              <span><a className="name site@href">link to project</a></span>
              - <span className="range light">range</span> -
              <span className="description">a description</span>
            </li>
          </ol>
          </div>

          <h2>Publications</h2>

          <h3>Journal</h3>
          <hr className="subtitle"/>

          <div id="journals">
          <ol className="articles-list">
            <li className="article-item">
              <ol className="inline">
                <li className="author">
                  <span data-suffix="," className="family-name"></span>
                  <span data-suffix=";" className="given-name"></span>
                </li>
                <li className="title" data-prefix='"' data-suffix='".'>       <span></span></li>
                <li className="journal" data-suffix=".">                      <span></span></li>
                <li className="series">                                       <span></span></li>
                <li className="volume" data-prefix="Volume " data-suffix=","> <span></span></li>
                <li className="issue">                                        <span></span></li>
                <li className="year" data-prefix="(" data-suffix=")">         <span></span></li>
                <li className="pages" data-prefix="page ">                    <span></span></li>
                <li className="url">                                          <a href=""></a></li>
              </ol>
            </li>
          </ol>
          </div>

          <h3>Conference</h3>
          <hr className="subtitle"/>

          <div id="conferences">
          <ol className="articles-list">
            <li className="article-item">
              <ol className="inline">
                <li className="author">
                  <span className="family-name"></span>
                  <span data-suffix="," className="given-name"></span>
                </li>
                <li className="title" data-prefix='"' data-suffix='".'>       <span></span></li>
                <li className="journal" data-suffix=".">                      <span></span></li>
                <li className="series">                                       <span></span></li>
                <li className="volume" data-prefix="Volume " data-suffix=","> <span></span></li>
                <li className="issue">                                        <span></span></li>
                <li className="year" data-prefix="(" data-suffix=")">         <span></span></li>
                <li className="pages" data-prefix="page ">                    <span></span></li>
                <li className="url">                                          <a href=""></a></li>
              </ol>
            </li>
          </ol>
          </div>

          <h3>Poster</h3>
          <hr className="subtitle"/>

          <div id="posters">
          <ol className="articles-list">
            <li className="article-item">
              <ol className="inline">
                <li className="author">
                  <span className="family-name"></span>
                  <span data-suffix="," className="given-name"></span>
                </li>
                <li className="title" data-prefix='"' data-suffix='".'>       <span></span></li>
                <li className="journal" data-suffix=".">                      <span></span></li>
                <li className="series">                                       <span></span></li>
                <li className="volume" data-prefix="Volume " data-suffix=","> <span></span></li>
                <li className="issue">                                        <span></span></li>
                <li className="year" data-prefix="(" data-suffix=")">         <span></span></li>
                <li className="pages" data-prefix="page ">                    <span></span></li>
                <li className="url">                                          <a href=""></a></li>
              </ol>
            </li>
          </ol>
          </div>

          <h3>Invited talks</h3>
          <hr className="subtitle"/>

          <div id="invited-talks">
          <ol className="articles-list">
            <li className="article-item">
              <ol className="inline">
                <li className="author">
                  <span className="family-name"></span>
                  <span data-suffix="," className="given-name"></span>
                </li>
                <li className="title" data-prefix='"' data-suffix='".'>       <span></span></li>
                <li className="journal" data-suffix=".">                      <span></span></li>
                <li className="series">                                       <span></span></li>
                <li className="volume" data-prefix="Volume " data-suffix=","> <span></span></li>
                <li className="issue">                                        <span></span></li>
                <li className="year" data-prefix="(" data-suffix=")">         <span></span></li>
                <li className="pages" data-prefix="page ">                    <span></span></li>
                <li className="url">                                          <a href=""></a></li>
              </ol>
            </li>
          </ol>
          </div>

          <h2>Professional Experience</h2>
          <div id="experience">
          <ol>
            <li className="experience">
              <ol>
                <li className="range"></li>
                <li><span className="title h4"></span> at <a className="where site@href"></a></li>
                <li><hr className="subtitle"/></li>
                <li className="description"></li>
              </ol>
            </li>
          </ol>
          </div>

          <div className="last_updated"></div>
          <div className="center light font-12px">This website was generated using <a href="https://github.com/averissimo/personal-site">Personal Site</a> (layout inspired by <a href="http://www.mit.edu/~adalca/">Adrian Dalca's page</a>).</div>

        </main>
      </div>
    )
  }
}

export default App
