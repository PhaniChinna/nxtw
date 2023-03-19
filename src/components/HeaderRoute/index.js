import {Component} from 'react'

import Cookies from 'js-cookie'
import {FiSun, FiMenu, FiLogOut} from 'react-icons/fi'
import {Link, withRouter} from 'react-router-dom'

import './index.css'

class Header extends Component {
  onClickLogOut = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <div className="Header-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            className="Header-Website-logo"
            alt="Website logo"
          />
        </Link>
        <div className="Header-Second-lay">
          <FiSun className="Header-FiSun" />
          <FiSun className="FiSun" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            className="Header-profile-logo"
            alt="profile"
          />
          <FiMenu className="FiMenu" />
          <button
            className="Header-Logout-button"
            type="button"
            onClick={this.onClickLogOut}
          >
            Logout
          </button>
          <FiLogOut className="FiLogout" />
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
