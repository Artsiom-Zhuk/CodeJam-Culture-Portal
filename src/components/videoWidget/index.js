import React, {Fragment} from 'react';
import ReactPlayer from 'react-player'

export default class VideoWidget extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isVideoPlaying: false
    }
  }
  toggleVideoPlaying (){
    const { isVideoPlaying } = this.state;
    this.setState({
      isVideoPlaying: !isVideoPlaying
    });
  }

  render() {
    const {isVideoPlaying} = this.state;
    return (

      <Fragment>
        <div className = 'text-translate caption videoButton'  onClick={() => {
                this.toggleVideoPlaying();
              }}>Посмотреть видео о {this.props.producer.name}</div>
        {isVideoPlaying && (
       <div className='player-wrapper'>
          <ReactPlayer url={this.props.producer.videoUrl} playing />
          <div className='buttonClose' onClick={() => {
                this.toggleVideoPlaying();}
              }></div>
        </div>
      )}
    </Fragment>
    )
  }
}
