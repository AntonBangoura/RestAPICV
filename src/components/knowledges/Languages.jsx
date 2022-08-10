import React, { Component } from 'react'
import ProgressBar from './ProgressBar';
export default class Languages extends Component {

        state = {
           languages: [
            {id: 1, value: "JavaScript", xp: 1.2},
            {id: 2, value: "CSS", xp: 2},
            {id: 3, value: "Python", xp: 0.4},
            {id: 4, value: "Linux", xp: 1.8}
            ],
            frameworks: [
                {id: 1, value: "Pentest", xp: 1.4},
                {id: 2, value: "Travail sur serveurs", xp: 0.5},
                {id: 3, value: "Développement web", xp: 1.5},
                {id: 4, value: "Analyste VoIP", xp: 0.4}
            ]
        }

  render() {

let {languages, frameworks} = this.state;


    return (
      <div className='languagesFrameworks'>
        <ProgressBar languages={languages} className="languageDisplay" title="Technologies"/>

        <ProgressBar title="Savoir-faire" className="frameworksDisplay" languages={frameworks} />

      </div>
    )
  }
}
