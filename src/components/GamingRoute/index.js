import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import HeaderSide from '../HeaderSideBar'

import GamingVideo from '../GamingVideo'

import './index.css'

class GamingRoute extends Component {
  renderGamingViewLine = () => (
    <div className="RenderGaming-Route-container">
      <div className="Render-Route-Gaming">
        <div>
          <SiYoutubegaming className="Gaming-SiYoutubegaming" />
          <h1 className="Gaming-Route-gaming">Gaming</h1>
        </div>
      </div>
    </div>
  )

  render() {
    return (
      <>
        <div className="Gaming-Header-container">
          <HeaderSide />
        </div>
        <div className="Gaming-container">
          {this.renderGamingViewLine()}
          <GamingVideo />
        </div>
      </>
    )
  }
}

export default GamingRoute
