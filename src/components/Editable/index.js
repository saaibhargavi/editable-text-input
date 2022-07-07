import {Component} from 'react'

import './index.css'

class Editable extends Component {
  state = {
    isedit: false,
  }

  onclickbutton = () => {
    this.setState(prevState => ({isedit: !prevState.isedit}))
  }

  getbuttonText = () => {
    const {isedit} = this.state

    return isedit ? 'Edit' : 'Save'
  }

  render() {
    const buttonText = this.getbuttonText()

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1>Editable Text Input</h1>
          <div>
            <input type="text" />
            <button
              type="button"
              className="button-text"
              onClick={this.onclickbutton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Editable
