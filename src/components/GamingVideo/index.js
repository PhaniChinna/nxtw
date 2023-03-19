import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import GamingRoute from '../GamingVideoList'

import './index.css'

const ApiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingVideo extends Component {
  state = {
    Gaming: [],
    apiStatus: ApiStatusConstant.initial,
  }

  componentDidMount() {
    this.getGamingVideoList()
  }

  getGamingVideoList = async () => {
    this.setState({
      apiStatus: ApiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const ApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(ApiUrl, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const UpdatedData = data.videos.map(eachVideo => ({
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({Gaming: UpdatedData, apiStatus: ApiStatusConstant.success})
    } else {
      this.setState({
        apiStatus: ApiStatusConstant.failure,
      })
    }
  }

  renderGamingVideoList = () => {
    const {Gaming} = this.state
    return (
      <ul className="Gaming-Route">
        {Gaming.map(each => (
          <GamingRoute key={each.id} GamingRouteList={each} />
        ))}
      </ul>
    )
  }

  renderLoaderView = () => (
    <div className="Render-Loader-Gaming">
      <Loader
        className="Loader-render-gaming"
        type="ThreeDots"
        color="#ffffff"
        height="50"
        width="50"
      />
    </div>
  )

  renderFailureView = () => (
    <div className="Render-failure-view-list">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        className="RenderFailure-view-image"
        alt="Failure-dark"
      />
      <h1 className="Gaming-Trending-Route-Heading">
        Oops!Some thing Went Wrong
      </h1>
      <p className="Gaming-Route-Para">
        We are having Some trouble to complete your request.{' '}
      </p>
      <p className="Gaming-Route-Paragraph">please try again</p>
      <button className="Gaming-Route-Button" type="button">
        Retry
      </button>
    </div>
  )

  renderFinalGamingRouteList = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case ApiStatusConstant.success:
        return this.renderGamingVideoList()
      case ApiStatusConstant.inProgress:
        return this.renderLoaderView()
      case ApiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.renderFinalGamingRouteList()}</div>
  }
}

export default GamingVideo
