import './index.css'

const GamingRoute = props => {
  const {GamingRouteList} = props
  const {title, thumbnailUrl, viewCount} = GamingRouteList
  return (
    <li className="Gaming-Video-list">
      <img src={thumbnailUrl} alt="title" className="Gaming-route" />
      <h1 className="Gaming-title">{title}</h1>
      <p className="Gaming-ViewCount">{viewCount} Watching WorldWide</p>
    </li>
  )
}

export default GamingRoute
