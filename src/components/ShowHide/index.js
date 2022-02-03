import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    firstName: false,
    lastName: false,
  }
  onClickShowFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }
  onClickShowLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              type="button"
              className="show-hide-btn"
              onClick={this.onClickShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              type="button"
              className="show-hide-btn"
              onClick={this.onClickShowLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
