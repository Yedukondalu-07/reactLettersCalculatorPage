// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeValue = event => {
    this.setState({inputPhrase: event.target.value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
        <div className="search-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label-heading" htmlFor="phraseText">
            Enter the phrase
          </label>
          <br />
          <input
            className="input-element"
            type="text"
            placeholder="Enter the phrase"
            id="phraseText"
            onChange={this.onChangeValue}
            value={inputPhrase}
          />
          <p className="count">No.of letters: 0 {inputPhrase.length}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
