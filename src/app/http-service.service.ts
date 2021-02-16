import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Container {
  albums: Albums;
}

export interface Albums {
  album: Album[];
}

export interface Album {
  artist: Artist;
  image: Image[];
  mbid: string;
  name: string;
  url: string;
}

export interface Artist {
  mbid: string;
  name: string;
  url: string;
}

export interface Image {
  url: string;
  size: string;
}

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {

  constructor(private http: HttpClient) {
  }

  albumsUrl: string;
  resAlbums: Album[] = [];

  getAlbums() {
    return this.http.get(this.albumsUrl).subscribe((res: Container) => {
      this.resAlbums = res.albums.album;
    });
  }

  getRock() {
    this.albumsUrl = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&api_key=22e5dcb7293a23da484afeacce80c247&format=json';
    this.getAlbums();
  }

  getElectro() {
    this.albumsUrl = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=electro&api_key=22e5dcb7293a23da484afeacce80c247&format=json';
    this.getAlbums();
  }

  getHipHop() {
    this.albumsUrl = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=hip-hop&api_key=22e5dcb7293a23da484afeacce80c247&format=json';
    this.getAlbums();
  }

  getPop() {
    this.albumsUrl = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=22e5dcb7293a23da484afeacce80c247&format=json';
    this.getAlbums();
  }

  getRnB() {
    this.albumsUrl = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rnb&api_key=22e5dcb7293a23da484afeacce80c247&format=json';
    this.getAlbums();
  }

  getIndie() {
    this.albumsUrl = 'http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=indie&api_key=22e5dcb7293a23da484afeacce80c247&format=json';
    this.getAlbums();
  }
}
