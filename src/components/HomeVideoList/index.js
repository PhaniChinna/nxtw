import {Link} from 'react-router-dom'

import './index.css'

const HomeVideoRoute = props => {
  const {HomeVideoDetail} = props
  const {
    channel,
    title,
    thumbnailUrl,
    id,
    viewCount,
    publishedAt,
  } = HomeVideoDetail
  const {name, profileImageUrl} = channel
  return (
    <Link to={`/videos/${id}`} className="Link-Home-Video-List">
      <li className="HomeVideo-list-container">
        <img
          src={thumbnailUrl}
          alt="Title"
          className="HomeVideoRoute-thumbNail-img"
        />
        <div className="HomeVideoRoute-title-container">
          <img
            src={profileImageUrl}
            alt="name"
            className="HomeVideo-Profile-image"
          />
          <h1 className="HomeVideo-Title">{title}</h1>
        </div>
        <p className="HomeVideo-name">{name}</p>
        <div className="HomeVideo-view-pub-container">
          <p className="HomeVideo-viewCount">{viewCount} views</p>
          <p className="HomeVideo-PublishedAt">{publishedAt}</p>
        </div>
      </li>
    </Link>
  )
}

export default HomeVideoRoute
