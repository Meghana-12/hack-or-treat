import React, { Component } from 'react';
import AudioPlayer from 'react-playlist-player';
import './style.css';
import { IconButton } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

class MusicPlayer extends Component {
    state = {
      currentPlayList: {},
      on: false,
    }

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
              songName: 'Main Title (Chucky Theme)',
              songUrl:
                'https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/Main%20Title%20(Chucky%20Theme).mp3?alt=media&token=7ad23ea0-c60b-4e57-a5ae-c6806294d201'
            },
            {
              position: '2',
              songName: 'The Exorcist Theme',
              songUrl:
                'https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/The%20Exorcist%20Theme%20Song%20FULL.mp3?alt=media&token=874db1ab-b9aa-4d5c-891e-04f0f881f784'
            },
            {
              position: '3',
              songName: 'Shadows Alive',
              songUrl:
                "https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/Shadows%20Alive.mp3?alt=media&token=7b741beb-ef81-48bf-aca4-084c033f6eff"
            },
            {
              position: '4',
              songName: 'Bad Moon Rising',
              songUrl:
                'https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/Bad%20Moon%20Rising.mp3?alt=media&token=892c007e-abfa-4ca0-a3ff-8b26088e9d22'
            },
            {
              position: '5',
              songName: 'Cruella De Vil (Original Song)',
              songUrl:
                'https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/Cruella%20De%20Vil%20(Original%20Song).mp3?alt=media&token=64ce4d02-30bd-4edd-89ba-0d843692c07b'
            },
            {
              position: '6',
              songName: 'Good to be Bad',
              songUrl:
                "https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/Good%20to%20Be%20Bad%20(From%20'Descendants%203'_Official%20Video).mp3?alt=media&token=5df8170d-6076-4954-b4c0-7b71c0ce20eb"
            },
            {
              position: '7',
              songName: 'This is halloween',
              songUrl:
                'https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/This%20is%20Halloween.mp3?alt=media&token=a069dd9c-e736-49ba-950a-8585e7ccf52a'
            },
            {
              position: '8',
              songName: 'The Murderer',
              songUrl:
                'https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/The%20Murder.mp3?alt=media&token=fb57913b-306f-455e-a9ce-a63c278215f4'
            },
            {
              position: '9',
              songName: 'Thriller',
              songUrl:
                "https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/Michael_Jackson_-_Thriller_Qoret.com.mp3?alt=media&token=9a27e9b3-84cd-4904-a528-fdb2d61aa53f"
            },
            {
              position: '10',
              songName: 'Unsolved Mysteries',
              songUrl:
                "https://firebasestorage.googleapis.com/v0/b/hack-or-treat-e41fc.appspot.com/o/Unsolved%20Mysteries.mp3?alt=media&token=c1a57a3b-e389-4745-b5e2-59823bab2b23"
            }

          ],
          type: 'album'
        }
      })
   
    render() {
      return (
        <React.Fragment>
          <IconButton style={{marginRight:"10px"}} onClick={this.loadPlayList }>
        <MusicNoteIcon color="secondary"/> 
          </IconButton>
          <AudioPlayer currentPlayList={this.state.currentPlayList} onToggle={({audioPlaying}) => console.log({audioPlaying})}/>
        </React.Fragment>
      )
    }
  }

export default MusicPlayer;