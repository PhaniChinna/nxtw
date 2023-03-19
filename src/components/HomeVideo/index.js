import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import HomeVideoRoute from '../HomeVideoList'

import './index.css'

const ApiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomePageVideo extends Component {
  state = {
    YouTube: [],
    apiStatus: ApiStatusConstant.initial,
  }

  componentDidMount() {
    this.getYouTubeData()
  }

  getYouTubeData = async () => {
    this.setState({
      apiStatus: ApiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const ApiUrl = 'https://apis.ccbp.in/videos/all'
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
      const YouTubeUpdated = data.videos.map(eachVideo => ({
        title: eachVideo.title,
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        YouTube: YouTubeUpdated,
        apiStatus: ApiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: ApiStatusConstant.failure,
      })
    }
  }

  renderFailureDetailView = () => (
    <div className="Home-failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        className="HomeVideo-failure"
        alt="FailureView"
      />
      <h1 className="Home-failure-heading">Oops! Something Went Wrong</h1>
      <p className="Home-failure-Para">
        We are having some trouble to complete the request
      </p>
      <p className="HomeFailure-para">Please try again</p>
      <button className="Home-failure-button" type="button">
        Retry
      </button>
    </div>
  )

  renderLoaderView = () => (
    <div className="HomeVideo-loader-view">
      <Loader
        className="HomeVideo-loader-loader"
        type="ThreeDots"
        color="#ffffff"
        height="50"
        width="50"
      />
    </div>
  )

  renderYouTubeData = () => {
    const {YouTube} = this.state
    return (
      <ul className="HomeVideo-unOrder-list">
        {YouTube.map(each => (
          <HomeVideoRoute key={each.id} HomeVideoDetail={each} />
        ))}
      </ul>
    )
  }

  renderFinalYouTubeData = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case ApiStatusConstant.success:
        return this.renderYouTubeData()
      case ApiStatusConstant.inProgress:
        return this.renderLoaderView()
      case ApiStatusConstant.failure:
        return this.renderFailureDetailView()
      default:
        return null
    }
  }

  render() {
    return <div className="List-p">{this.renderFinalYouTubeData()}</div>
  }
}

export default HomePageVideo
