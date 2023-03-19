import {Component} from 'react'
import Cookies from 'js-cookie'
import HeaderSide from '../HeaderSideBar'

import './index.css'

class YouTubeDetails extends Component {
  state = {
    YouTubeDetailList: {},
  }

  componentDidMount() {
    this.getYouTubeDetailList()
  }

  getYouTubeDetailList = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const ApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(ApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const UpdatedYouTubeDetailsData = data.video_details.map(
        eachYouTubeDetail => ({
          id: eachYouTubeDetail.id,
          title: eachYouTubeDetail.title,
          videoUrl: eachYouTubeDetail.video_url,
          thumbnailUrl: eachYouTubeDetail.thumbnail_url,
          channel: {
            name: eachYouTubeDetail.channel.name,
            profileImageUrl: eachYouTubeDetail.channel.profile_image_url,
            subscriberCount: eachYouTubeDetail.channel.subscriber_count,
          },
          viewCount: eachYouTubeDetail.view_count,
          publishedAt: eachYouTubeDetail.published_at,
          description: eachYouTubeDetail.description,
        }),
      )
      this.setState({
        YouTubeDetailList: UpdatedYouTubeDetailsData,
      })
    }
  }

  renderYouTubeDetailListView = () => {
    const {YouTubeDetailList} = this.state
    const {
      title,
      videoUrl,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = YouTubeDetailList
    const {name, profileImageUrl, subscriberCount} = channel
    return (
      <div>
        <h1>{title}</h1>
        <img src={videoUrl} alt="title" />
        <img src={thumbnailUrl} alt="Title" />
        <p>{viewCount}</p>
        <p>{publishedAt}</p>
        <p>{description}</p>
        <p>{name}</p>
        <p>{subscriberCount}</p>
        <img src={profileImageUrl} alt="name" />
      </div>
    )
  }

  render() {
    return (
      <>
        <div className="YouTubeDetails-Header-container">
          <HeaderSide />
        </div>
        <div className="YouTubeDetails-container">
          {this.renderYouTubeDetailListView}
        </div>
      </>
    )
  }
}

export default YouTubeDetails
