import {Component} from 'react'
import HeaderSide from '../HeaderSideBar'
import HomePageVideo from '../HomeVideo'

import './index.css'

class HomePage extends Component {
  render() {
    return (
      <>
        <div className="HomePage-Header-container">
          <HeaderSide />
        </div>
        <div className="HomePage-container">
          <HomePageVideo />
        </div>
      </>
    )
  }
}

export default HomePage
