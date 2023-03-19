import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import TrendingVideoList from '../TrendingVideoList'

import './index.css'

const ApiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingPage extends Component {
  state = {
    TrendingVideo: [],
    apiStatus: ApiStatusConstant.initial,
  }

  componentDidMount() {
    this.getTrendingVideo()
  }

  getTrendingVideo = async () => {
    this.setState({
      apiStatus: ApiStatusConstant.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const UpdatedTrending = data.videos.map(eachVideo => ({
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        channel: {
          name: eachVideo.channel.name,
        },
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        TrendingVideo: UpdatedTrending,
        apiStatus: ApiStatusConstant.success,
      })
    } else {
      this.setState({
        apiStatus: ApiStatusConstant.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div className="RenderLoaderView">
      <Loader
        className="Loader-view"
        type="ThreeDots"
        color="#ffffff"
        height="50"
        width="50"
      />
    </div>
  )

  renderFailureView = () => (
    <div className="Trending-failure">
      <img
        src=" https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
        className="Trending-failure-view"
        alt="Failure-view"
      />
      <h1 className="Trending-failure-heading">Oops! SomeThing Went Wrong</h1>
      <p className="Trending-Para">
        We are having some trouble to complete your request .{' '}
      </p>
      <p className="Trending-Please-try">Please try again</p>
      <button className="Trending-button" type="button">
        Retry
      </button>
    </div>
  )

  renderTrendingVideoListDetails = () => {
    const {TrendingVideo} = this.state
    return (
      <ul className="Trending-video-unOrdered-List">
        {TrendingVideo.map(each => (
          <TrendingVideoList key={each} TrendingVideoListDetails={each} />
        ))}
      </ul>
    )
  }

  renderFinalTrendingViewDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case ApiStatusConstant.success:
        return this.renderTrendingVideoListDetails()
      case ApiStatusConstant.inProgress:
        return this.renderLoadingView()
      case ApiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="TrendingVideo-container-Route">
        {this.renderFinalTrendingViewDetails()}
      </div>
    )
  }
}

export default TrendingPage
