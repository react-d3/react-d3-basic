import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect} from 'react-router'
import Container from './container'

import Area from './src/area'
import AreaNegative from './src/area_negative'
import AreaStack from './src/area_stack'
import AreaStackNegative from './src/area_stack_negative'
import Bar from './src/bar'
import BarGroup from './src/bar_group'

import BarGroupHorizontal from './src/bar_group_horizontal'
import BarGroupNegative from './src/bar_group_horizontal'
import BarHorizontal from './src/bar_horizontal'
import BarNegative from './src/bar_negative'
import BarStack from './src/bar_stack'
import BarStackHorizontal from './src/bar_stack_horizontal'
import BarStackNegative from './src/bar_stack_negative'

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
        
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/example" component={Container}>
      <IndexRedirect to="area"/>
    	<Route path="area" component={Area}/>
      <Route path="area_negative" component={AreaNegative}/>
      <Route path="area_stack" component={AreaStack}/>
      <Route path="area_stack_negative" component={AreaStackNegative}/>
      <Route path="bar" component={Bar}/>
      <Route path="bar_group" component={BarGroup}/>
      <Route path="bar_group_horizontal" component={BarGroupHorizontal}/>
      <Route path="bar_group_negative" component={BarGroupNegative}/>
      <Route path="bar_horizontal" component={BarHorizontal}/>
      <Route path="bar_negative" component={BarNegative}/>
      <Route path="bar_stack" component={BarStack}/>
      <Route path="bar_stack_horizontal" component={BarStackHorizontal}/>
      <Route path="bar_stack_negative" component={BarStackNegative}/>
    </Route>
  </Router>
  ), document.getElementById('root')
)