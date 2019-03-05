import { API_URL } from './common/constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Album, Image } from './models/index';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  getUserList() {
    return this.http.get(`${API_URL}/users`);
  }

  getAlbumList(userId: number) {
    return this.http.get(`${API_URL}/albums?userId=${userId}`);
  }

  getImageList(albumId: number) {
    return this.http.get(`${API_URL}/photos?albumId=${albumId}`);
  }
}
