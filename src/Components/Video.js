import React ,{Component} from 'react';
import { Player } from 'video-react';
import HeaderVideo from './HearderVideo';
import video1 from '../videos/another-way-to-die.mp4';
import video2 from '../videos/boeing-737-max.mp4';
import video3 from '../videos/gameboy-pocket-review.mp4';
import video4 from '../videos/no-time-to-die.mp4';
import video5 from '../videos/plane-tires.mp4';
import video6 from '../videos/skyfall.mp4';
import video7 from '../videos/sonic-boom-problem.mp4';
import video8 from '../videos/supersonic-flight.mp4';
import video9 from '../videos/switch-lite.mp4';
import video10 from '../videos/unboxing-gameboy-color.mp4';
import video11 from '../videos/unboxing-gameboy.mp4';
import video12 from '../videos/you-know-my-name.mp4';

class Video extends Component { 

videoThumbnails = () => {
    return{
   width : '85%',
  margin : 'auto',
    }
}

    render(){
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
        const videos = {
            1 : video1,
            2 : video2,
            3 : video3,
            4 : video4,
            5 : video5,
            6 : video6,
            7 : video7,
            8 : video8,
            9 : video9,
            10 : video10,
            11 : video11,
            12 : video12,
        };

        // filtering the id through the data to get the video thumbnails
        let thumbnails = this.props.allData.filter((data) => {
              return (data.id === this.props.idVideo)
            });

     const {id,title,views,uploadDate,channelName,channelThumb,suscribers,description } = thumbnails[0];
        
        console.log(thumbnails[0].id);
        return ( <div>
                    <HeaderVideo/>
                    <div className="video">
                        <Player >
                            <source src={videos[this.props.idVideo]}/>
                        </Player>
                    </div>
                    <div  style={this.videoThumbnails()}>    
                        <h2>{title}</h2>
                        <p>{views} views - {uploadDate} </p>   
                        <hr/>
                        <div className="meta-data">
                            <div className='left'> 
                            <img className='channels' src={channels[id]} alt={channelThumb}></img>
                            </div>
                            <div className='right'> 
                            <span>{channelName}</span>
                            <p>{suscribers} suscribers</p>
                            <p>{description}</p>
                            </div> 
                         </div>   
                        <hr/>
                       <a className="button" href="/">Back to home</a>
                    </div>
                </div>
              );
        }
}
export default Video;