import React, { Component } from 'react'

class Information extends Component {
  render() {
    const el = this.props.el
    return (
      <li key={el.title} className="article-item">
          <ol className="inline">
            {
              el.author && el.author.length > 15 ? null : el.author.map(author => <li className="author">
                <span data-suffix="," className="family-name">{author.family}, </span>
                <span data-suffix=";" className="given-name">{author.given}; </span>
              </li>)
            }
            { el.title ? <li className="title"><span>"{el.title}". </span></li> : null}
            { el.journal ? <li className="journal"><span>{el.journal}. </span></li> : null}
            { el.issued['date-parts'][0][0] ? <li className="year"><span>({el.issued['date-parts'][0][0]}) </span></li> : null}
            { el['container-title'] ? <li className="journal"><span>{el['container-title']}. </span></li> : null}
            { el['event'] ? <li className="series"><span>{el['event']}. </span></li> : null}
            { el['event-place'] ? <li className="series"><span>{el['event-place']}. </span></li> : null}
            { el.series ? <li className="series"><span>{el.series} </span></li> : null}
            { el.volume ? <li className="volume"><span>Volume {el.volume} </span></li> : null}
            { el.issue ? <li className="issue"><span>Issue {el.issue} </span></li> : null}
            { el.page ? <li className="pages"><span>page {el.page} </span></li> : null}
            { el.URL ? <li className="url"><a href={el.URL}>{el.DOI ? el.DOI : 'link'}</a></li> : null}
          </ol>
        </li>
    )
  }
}

export default Information
