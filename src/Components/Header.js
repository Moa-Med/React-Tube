import React ,{Component} from 'react';

class Header extends Component {

  headerDark = () => {
    return{
   background : '#413f3f',
   display : 'flex',
    }
}

headerStyle =() => {
return {
  backgroundColor: '#fff',
  padding: '2px 6px',
  paddingBottom: '6px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: '100px 400px',
    
  }
}
  
    render(){
        return (this.props.checkColor ?
            <div style={this.headerStyle()}>
                <a href="/" ><img src="/images/logo/logo-light.svg" alt="logo-light" className = "App-logo"></img></a>
                <div className = "search-bar">
                  <input type = 'text' placeholder='Search'/>
                  <a href="/">Search</a>
                </div>
            </div>
        
            : <div style={this.headerStyle()}>
                <a href="/" ><img src="/images/logo/logo-dark.svg" alt="logo-dark" className = "App-logo"></img></a>
                <div className = "search-bar">
                  <input type = 'text' placeholder='Search'/>
                  <a href="/">Search</a>
                </div>
            </div>
          )
       }
}

export default Header;