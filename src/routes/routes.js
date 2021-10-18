import React from 'react'
import { BrowserRouter as Router,Route,Link ,Switch} from 'react-router-dom'
import Payment  from '../Components/Payment/Payment'

const routes = () => {
    return (
        <div>
             <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Payment" component={Payment} />
  

          </Switch>
    
      </Router>
            </div>
        
    )
}

export default routes
