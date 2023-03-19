import './index.css'

const TrendingVideoList = props => {
  const {TrendingVideoListDetails} = props
  const {
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = TrendingVideoListDetails
  const {name} = channel
  return (
    <li className="Trending-list-list-items">
      <div className="Trending-Video-list-container">
        <img className="Trending-Video-list" src={thumbnailUrl} alt="Title" />
        <div className="Trending-container-list-Route">
          <h1 className="Trending-Title">{title}</h1>
          <p className="Trending-name">{name}</p>
          <div className="Trending-View-publish">
            <p className="Trending-ViewCount">{viewCount} Views</p>
            <p className="Trending-PublishedAt">{publishedAt}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TrendingVideoList
