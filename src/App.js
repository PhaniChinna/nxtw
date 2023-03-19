import {Switch, Route} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import HomePage from './components/HomeRoute'
import TrendingPageList from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import YouTubeDetails from './components/YoutubeVideoListDetails'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginRoute} />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/trending" component={TrendingPageList} />
    <Route exact path="/gaming" component={GamingRoute} />
    <Route exact path="/videos/:id" component={YouTubeDetails} />
  </Switch>
)

export default App
