import React ,{Component} from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
    
    render(){
        const images = {
            1 :'/images/another-way-to-die.jpg',
            2 :'/images/boeing-737-max.jpg',
            3 :'/images/gameboy-pocket-review.jpg',
            4 :'/images/no-time-to-die.jpg',
            5 :'/images/plane-tires.jpg',
            6 : '/images/skyfall.jpg',
            7 : '/images/sonic-boom-problem.jpg',
            8 : '/images/supersonic-flight.jpg',
            9 : '/images/switch-lite.jpg',
            10 : '/images/unboxing-gameboy-color.jpg',
            11 :'/images/unboxing-gameboy.jpg',
            12 : '/images/you-know-my-name.jpg',
        };
        const channels = {
            1 :'/images/channels/alicia-keys.jpg',
            2 :'/images/channels/vox.jpg',
            3 :'/images/channels/classic-game-room.jpg',
            4 :'/images/channels/billie-eilish.jpg',
            5 :'/images/channels/tech-insider.jpg',
            6 : '/images/channels/adele.jpg',
            7 : '/images/channels/ted-ed.jpg',
            8 : '/images/channels/real-engineering.jpg',
            9 : '/images/channels/ign.jpg',
            10 : '/images/channels/austin-evans.jpg',
            11 :'/images/channels/austin-evans.jpg',
            12 : '/images/channels/chis-cornell.jpg',
        };
        const { id,title,channelName,channelThumb,views} = this.props.data;
        const link = (id) => {
            return "/video/"+id;
        };
        return(
            <article>
             <div>
                <Link to={link(id)} >
                    <img className='item-image' onClick={this.props.getId.bind(this,id)} src={images[id]} alt={channelThumb}></img>
                </Link>     
              </div> 
              <div className='thumbnail'> 
                  <div className='icone'> 
                      <img className='channels' src={channels[id]} alt={channelThumb}></img>
                  </div> 
                  <div className='info'> 
                      <span>{title}</span>
                      <p>{channelName}</p>
                      <p>{views} views</p>
                  </div> 
              </div> 
            </article>
        );
    }
}
export default Item;