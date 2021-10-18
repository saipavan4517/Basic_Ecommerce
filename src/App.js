import Home from "./Components/Home";
import {Layout,Menu} from "antd";
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router,Route,Link ,Switch} from 'react-router-dom'
import Payment from "./Components/Payment/Payment";
import { fontSize } from "@mui/system";

const { Header, Content, Footer } = Layout;
function App() {
  const NavStyles ={
    marginRight : "30px",
    fontSize :"30px",
    color : "white"
  }
  
  return (
    <div className="App">
        <Layout className="layout">
    <Header>
         <Router >
         <Link  style={NavStyles} to="/">Home</Link>
         <Link style={NavStyles} to="/Payment">Payment</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Payment" component={Payment} />
          </Switch>  
      </Router>
    </Header>
  
  </Layout>,
 
    </div>
  );
}

export default App;
