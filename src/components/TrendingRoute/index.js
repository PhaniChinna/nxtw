import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import HeaderSide from '../HeaderSideBar'

import TrendingPage from '../TrendingVideo'

import './index.css'

class TrendingPageList extends Component {
  renderGamingViewLine = () => (
    <div className="RenderTrending-Route-container">
      <div className="Render-Route-Trending">
        <div>
          <AiFillFire className="Trending-AiFillFire" />
          <h1 className="Trending-Route-Trending">Trending</h1>
        </div>
      </div>
    </div>
  )

  render() {
    return (
      <>
        <div className="TrendingPage-Header-container">
          <HeaderSide />
        </div>
        <div className="TrendingPage-container">
          {this.renderGamingViewLine()}
          <TrendingPage />
        </div>
      </>
    )
  }
}

export default TrendingPageList
