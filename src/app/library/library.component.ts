//.emit, @Input, @Output come from angular/core
import { Component, OnInit } from '@angular/core';
import { Howl } from 'howler';
import Song from "../models/Song";
import {DataService} from "../data.service";
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  songs: Song[] = [];
  songName: String = "Agnus Dei X";
  term: String;
  playButton: boolean = true;
  sound:Howl; 
  currSongIndex: number = 0;
  currSong:Song;
  currSongArray:Array<boolean> = [];

  constructor(private dataService : DataService) { 
  }

  //
  //Can call ajax call here, will call on page initialization 
  ngOnInit() {

       // using api
       var response = this.dataService.fetchData();
       this.dataService.fetchData().subscribe(
         d => this.songs = d as Song[] )
  }

  playMusic(song: Song) {
    this.songName = song.name;
    this.currSong = song;
    this.playButton = false;

    //Toggle which song in the library shows as playing
    this.handleCurrSongArray(this.currSongIndex, song.index);

    if(!this.sound) {
      this.sound = new Howl({
        src: ['../../assets/mp3s/' + this.songName + '.mp3'],
        html5 : true
      });
      this.sound.play();
    } else {
      //stop previous song
      this.sound.stop();

      //play new song
      this.sound = new Howl({
        src: ['../../assets/mp3s/' + this.songName + '.mp3'],
        html5 : true
      });
      this.sound.play();

    }

    //Update current song index
    this.currSongIndex = song.index;

    
  }

  playMusicButton() {
    const songName : String = this.songName;
    
    //if play button is currently in play position
    if(this.playButton) {
      //signal play button to change to pause button
      this.playButton = false;

      //check if current index has been set
      if(this.currSong) {
        this.currSongIndex = this.currSong.index;
      }
      //no song has been chosen to play yet
      else {
        this.currSong = this.songs[0];
        this.currSongIndex = this.currSong.index;
        //Toggle which song in the library shows as playing
        this.handleCurrSongArray(-1, this.currSongIndex);
      }

      if(!this.sound) {
        console.log("!this.sound");
        //Need to create howl
        this.sound = new Howl({
          src: ['../../assets/mp3s/' + songName + '.mp3'],
          html5 : true
        });
        this.sound.play();
      } else {
        this.sound.play();
      }
    }
    //if play button is currently in pause position
    else if(this.playButton == false) {
      this.playButton = true;

      //Need to pause howl
      this.sound.pause();
      
    }
    else {
      console.error("error occured in playMusicButton()");
    }
  }

  playPrevTrack() {
    const prevSongIndex : number = (this.currSongIndex - 1 + this.songs.length) % (this.songs.length);
    
    //Toggle which song in the library shows as playing
    this.handleCurrSongArray(this.currSongIndex, prevSongIndex);

    //update song index to be the one we are moving to
    this.currSongIndex = prevSongIndex;
    this.currSong = this.songs[this.currSongIndex];

    if(this.sound) {
      this.sound.stop();
    }
    this.currSongIndex = prevSongIndex;
    
      //Need to create howl
      this.playButton = false;
      this.sound = new Howl({
        src: ['../../assets/mp3s/' + this.songs[this.currSongIndex].name + '.mp3'],
        html5 : true
      });
      this.sound.play();

  }

  playNextTrack() {
    const nextSongIndex : number = (this.currSongIndex + 1 + this.songs.length) % (this.songs.length);
    
    //Toggle which song in the library shows as playing
    this.handleCurrSongArray(this.currSongIndex, nextSongIndex);

    //update song index to be the one we are moving to
    this.currSongIndex = nextSongIndex;

    //update which song is currently playing
    this.currSong = this.songs[this.currSongIndex];

    if(this.sound) {
      this.sound.stop();
    }
    this.currSongIndex = nextSongIndex;
    
      //Need to create howl
      this.playButton = false;
      this.sound = new Howl({
        src: ['../../assets/mp3s/' + this.songs[this.currSongIndex].name + '.mp3'],
        html5 : true
      });
      this.sound.play();

  }

  handleCurrSongArray(previndex, currindex) {
    //initialize current song array to keep track of which is playing
    if(this.currSongArray === undefined || this.currSongArray.length == 0) {
      for(let i=0; i<this.songs.length; i++) {
        if(currindex == i) {
          this.currSongArray.push(true);
        }
        else{
          this.currSongArray.push(false);
        }
      }
    }
    else {
      this.currSongArray[previndex] = false;
      this.currSongArray[currindex] = true;

    }
  }
}

