import React from 'react'
import { BrowserRouter as Router,Route,Link ,Switch} from 'react-router-dom'
import Home from '../Home'
import  './Navbar.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from 'antd';
import Payment from '../Payment/Payment';

const Navbar = () => {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Payment" component={Payment} />

          </Switch>
    
   
      </Router>
    )
}

export default Navbar
