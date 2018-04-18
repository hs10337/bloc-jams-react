import React, { Component } from 'react';

class PlayerBar extends Component {
  convertTime(){
    var duration = this.props.currentTime;
    var minutes = Math.floor(duration / 60);
    var seconds = Math.round(duration % 60);

    if(isNaN(seconds)) {
      return "-:--";
    }else if(seconds < 10){
      seconds = "0" + seconds;
      return minutes + ":" + seconds;
    }else {
    return minutes + ":" + seconds;
    }
  }

  convertDurationTime(){
    var duration = this.props.duration;
    var minutes = Math.floor(duration / 60);
    var seconds = Math.round(duration % 60);

    if(isNaN(seconds)) {
      return "-:--";
    }else if(seconds < 10){
      seconds = "0" + seconds;
      return minutes + ":" + seconds;
    }else {
    return minutes + ":" + seconds;
    }
  }



  render() {
    return(
      <section className="player-bar">
        <section id="buttons">
        <button id="previous">
          <span className="ion-skip-backward" onClick={this.props.handlePrevClick}></span>
        </button>
        <button id="play-pause" onClick={this.props.handleSongClick}>
          <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
        </button>
        <button id="next">
          <span className="ion-skip-forward" onClick={this.props.handleNextClick}></span>
        </button>
        </section>
        <section id="time-control">
          <div className="current-time">{this.convertTime()}</div>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
            />
          <div className="total-time">{this.convertDurationTime()}</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-volume-low"></div>
          <input type="range" className="seek-bar" value="80" />
          <div className="icon ion-volume-high"></div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
