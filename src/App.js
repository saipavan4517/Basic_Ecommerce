import Home from "./Components/Home";
import {Layout,Menu} from "antd";
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter as Router,Route,Link ,Switch} from 'react-router-dom'
import Payment from "./Components/Payment/Payment";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
        <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
         <Router>
         <Menu.Item><Link to="/">Home</Link></Menu.Item> 
         <Menu.Item><Link to="/Cart">Cart </Link></Menu.Item>
         <Menu.Item><Link to="/Payment">Payment </Link></Menu.Item>
         <Route exact path="/Payment" component={Payment} />
        </Router>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Navbar />
    </Content>
    <Footer style={{ textAlign: 'center' }}>SaiPavan@2021</Footer>
  </Layout>,
 
    </div>
  );
}

export default App;
