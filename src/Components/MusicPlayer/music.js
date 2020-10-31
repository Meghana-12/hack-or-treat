import React, { Component } from 'react';
import AudioPlayer from 'react-playlist-player';
import './style.css';
import { IconButton } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import {MusicOff} from '@material-ui/icons';

// const[ on, setOn] = React.setState(false) ;
class MusicPlayer extends Component {
    state = {
      currentPlayList: {},
      on: false,
    }
    // musicOnOff = () =>
    //   this.setState({
    //     on:!on
    //   })

    loadPlayList = () =>
      this.setState({
        // on :true,
        currentPlayList: {
          playlistCoverUrl:
            'https://static.vecteezy.com/system/resources/thumbnails/000/133/319/small_2x/haunted-house-halloween-background.jpg',
          albumName: 'Halloween Playlist',
          bandName: '',
          songs: [
            {
              position: '1',
              songName: 'Bad Moon Rising',
              songUrl:
                'https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/Bad%20Moon%20Rising.mp3?alt=media&token=892c007e-abfa-4ca0-a3ff-8b26088e9d22'
            },
            {
              position: '2',
              songName: 'Cruella De Vil (Original Song)',
              songUrl:
                'https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/Cruella%20De%20Vil%20(Original%20Song).mp3?alt=media&token=64ce4d02-30bd-4edd-89ba-0d843692c07b'
            },
            {
              position: '3',
              songName: 'Good to be Bad',
              songUrl:
                "https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/Good%20to%20Be%20Bad%20(From%20'Descendants%203'_Official%20Video).mp3?alt=media&token=5df8170d-6076-4954-b4c0-7b71c0ce20eb"
            }
          ],
          type: 'album'
        }
      })
    // componentDidUpdate(){

    //   }
    render() {
      return (
        <React.Fragment>
          {/* <button className="demo-button" >
            Load playlist
          </button> */}
          <IconButton style={{marginRight:"10px"}} onClick={this.loadPlayList }>
        {/* {this.on === true ?  */}
        <MusicNoteIcon color="secondary"/> 
        {/* // : <MusicOff color="secondary"/>} */}
          </IconButton>
          <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
        </React.Fragment>
      )
    }
  }

export default MusicPlayer;