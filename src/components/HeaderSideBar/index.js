import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'

import Header from '../HeaderRoute'

import './index.css'

class HeaderSide extends Component {
  render() {
    return (
      <>
        <div className="HederSide-header">
          <Header />
          <div className="Header-Side-bar-container">
            <ul className="Header-side-unOrdered-list">
              <div className="Header-side-Home-container">
                <AiFillHome className="Header-AiFillHome" />
                <li>
                  <Link className="Header-side-Home" to="/">
                    Home
                  </Link>
                </li>
              </div>
              <div className="Header-Side-Trending-container">
                <AiFillFire className="Header-AiFire" />
                <li>
                  <Link className="Header-side-Trending" to="/trending">
                    Trending
                  </Link>
                </li>
              </div>
              <div className="Header-side-Gaming-container">
                <SiYoutubegaming className="Header-SiYouTubegaming" />
                <li>
                  <Link className="Header-side-Gaming" to="/gaming">
                    Gaming
                  </Link>
                </li>
              </div>
              <div className="Header-side-saved-Container">
                <MdPlaylistAdd className="Header-MdPlayed" />
                <li className="Header-side-saved">Saved Video</li>
              </div>
            </ul>
            <div className="Header-side-contact-us">
              <h1 className="Header-side-us">Contact us</h1>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                  className="Header-side-facebook-logo"
                />
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                  className="Header-side-twitter-logo"
                />
                <img
                  src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt=" linked in logo"
                  className="Header-side-linked-in-logo"
                />
              </div>
              <p className="Header-side-Paragraph">
                Enjoy!Now to see your channel and recommendations!{' '}
              </p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default HeaderSide
