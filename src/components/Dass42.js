import React, { Component } from 'react'
import data from './data/Dass42-statements.json'
import './../css/Dass42.sass'
let { log, error, info, warn, dir } = console
class Dass42 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selections: [],
      statements: data
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validate     = this.validate.bind(this)
  }

  handleChange(event) {
    const [id, value] = event.target.value.split('-')
    this.setState({
      selections: {
          ...this.state.selections,
          [id]: parseInt(value, 10)
      }
    })
    log(JSON.stringify(this.state.selections))
  }

  validate() {
    if (Object.keys(this.state.selections).length !== 42) {
      log('nopp enuf keys')
      return false
    }
    for(let i = 0, valid = false; i < Object.keys(this.state.selections).length; i++) {
      valid = ( this.state.selections[i] === 0 || this.state.selections[i] === 1 ||
                    this.state.selections[i] === 2 || this.state.selections[i] === 3 )
      if (!valid) {
        log('nopp values')
        return false
      }
    }
    return true
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.validate()) {
      alert("Valid!")
      return true
    } else {
      alert("not yet")
      return false
    }
  }

  // 0 Did not apply to me at all
  // 1 Applied to me to some degree, or some of the time
  // 2 Applied to me to a considerable degree, or a good part of time
  // 3 Applied to me very much, or most of the time
  render() {
    return (
      <div className="dass">
        <h2>Dass42</h2>
        <hr />
        <h3>
          Please read each statement and select a number 0, 1, 2 or 3 which indicates
          how much the statement applied to you <b>over the past week</b>.
          There are no right or wrong answers. Do not spend too much time on any statement.
        </h3>
        <form className="pure-form" onSubmit={this.handleSubmit}>
          {
            this.state.statements.map(
              (statement, index) => (
                <div key={`radio-group-${index}`} className="pure-g">
                  <div className="pure-u-1 pure-u-md-21-24 pure-control-group dass-keys">
                    <h4 className="form-control">{index+1}. &nbsp; {statement}</h4>
                    <div className="pure-u-5-24">
                      <input type="radio" value={`${index}-0`} key={`${index}-0`} id={`${index}-0`}
                        checked={this.state.selections[index] === 0 }
                        onChange={this.handleChange} />
                      <label htmlFor={`${index}-0`} className="pure-radio">  0 </label>
                    </div>
                    <div className="pure-u-5-24">
                      <input type="radio" value={`${index}-1`} key={`${index}-1`} id={`${index}-1`}
                        checked={this.state.selections[index] === 1}
                        onChange={this.handleChange } />
                      <label htmlFor={`${index}-1`} className="pure-radio">  1 </label>
                    </div>
                    <div className="pure-u-5-24">
                      <input type="radio" value={`${index}-2`} key={`${index}-2`} id={`${index}-2`}
                        checked={this.state.selections[index] === 2 }
                        onChange={this.handleChange } />
                      <label htmlFor={`${index}-2`} className="pure-radio">  2 </label>
                    </div>
                    <div className="pure-u-5-24">
                      <input type="radio" value={`${index}-3`} key={`${index}-3`} id={`${index}-3`}
                        checked={this.state.selections[index] === 3 }
                        onChange={this.handleChange } />
                      <label htmlFor={`${index}-3`} className="pure-radio">  3 </label>
                    </div>
                  </div>
                </div>
              )
            )
          }
          <button type="submit" className="pure-button pure-button-primary">
            See Results
          </button>
        </form>
      </div>
    )
  }
}

export default Dass42
