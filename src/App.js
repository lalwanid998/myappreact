import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count :0
    }
  }
  
  btnClick()
  {
     this.setState({
      count:this.state.count + 1
     })
  }

render(){
  return(
    <div>
      <Router>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      <h1>Value is {this.state.count}</h1>
      <button onClick={this.btnClick.bind(this)}>Click Me</button>
    </div>
    )
  }
}

export default App;