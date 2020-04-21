import React ,{Component} from 'react';

class HeaderVideo extends Component {

headerVideoStyle =() => {
    return {
  backgroundColor : '#413f3f',
  paddingLeft : '2px',
  margingLeft : '100px',
  paddingBottom : '10px',
  paddingTop : '10px',
  display : 'grid',
  gridTemplateColumns : '1fr 1fr',
  gridColumnGap : '100px 400px',
    }
}

    render(){
        return (
        <div style={this.headerVideoStyle()}>
                <a href="/" ><img src="/images/logo/logo-dark.svg" alt="logo-dark" className = "App-logo"></img></a>
                <div className = "search-bar">
                  <input type = 'text' placeholder='Search'/>
                  <a href="/">Search</a>
                </div>
            </div>
          )
       }
}

export default HeaderVideo;