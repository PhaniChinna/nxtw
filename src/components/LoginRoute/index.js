import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    visibility: false,
    ShowErrorMsg: false,
    errorMsg: '',
  }

  onSubmitSuccessData = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      ShowErrorMsg: true,
      errorMsg,
    })
  }

  onSubmitSuccess = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const UserDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccessData(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  showPasswordUser = event => {
    if (event.target.checked) {
      this.setState({visibility: true})
    } else {
      this.setState({visibility: false})
    }
  }

  render() {
    const {username, password, visibility, ShowErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="LoginRoute-container">
        <div className="LoginRoute1-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            className="LoginRoute-Logo"
            alt="Website logo"
          />
          <form
            className="LoginRoute-Form-container"
            onSubmit={this.onSubmitSuccess}
          >
            <label className="Label-user" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              className="Input-type-user"
              placeholder="Username"
              value={username}
              onChange={this.onChangeUsername}
            />
            <label className="Label-Password" htmlFor="Password">
              PASSWORD
            </label>
            <input
              type={visibility ? 'text' : 'password'}
              id="Password"
              className="Input-password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
            />
            <div>
              <input
                id="ShowPassword"
                type="checkbox"
                className="Label-Input-Checkbox"
                value={visibility}
                onChange={this.showPasswordUser}
              />
              <label className="Label-Show-Password" htmlFor="ShowPassword">
                Show Password
              </label>
            </div>
            <button type="submit" className="Login-Route-Button">
              Login
            </button>
          </form>
          {ShowErrorMsg && <p className="LoginRoute-Error-msg">*{errorMsg}</p>}
        </div>
      </div>
    )
  }
}

export default LoginRoute
