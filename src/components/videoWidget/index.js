import React from 'react';
import YouTube from 'react-youtube';

export default class VideoWidget extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const {videoId} = this.props
    return (
<<<<<<< HEAD
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
=======

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
>>>>>>> origin/develop
  }
}
