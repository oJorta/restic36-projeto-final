import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VideoInteraction, User, Video } from '../../types/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUserById(id: string) {
    return this.http.get<User[]>(`${this.apiUrl}/users?id=${id}`);
  }

  getUserByEmail(email: string) {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`)
  }

  createUser(user: Partial<User>) {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  getFavorites(userId: string) {
    return this.http.get<VideoInteraction[]>(`${this.apiUrl}/favorites?userId=${userId}&_embed=video`);
  }

  addFavorite(userId: string, videoId: number) {
    return this.http.post<void>(`${this.apiUrl}/favorites`, { userId, videoId });
  }

  removeFavorite(userId: string, videoId: number) {
    const url = `${this.apiUrl}/favorites?userId=${userId}&videoId=${videoId}`;
    return this.http.delete<void>(url);
  }

  getWatchLater(userId: string) {
    return this.http.get<VideoInteraction[]>(`${this.apiUrl}/watchLater?userId=${userId}&_embed=video`);
  }

  addToWatchLater(userId: string, videoId: number) {
    return this.http.post<void>(`${this.apiUrl}/watchLater`, { userId, videoId });
  }

  removeFromWatchLater(userId: string, videoId: number) {
    const url = `${this.apiUrl}/watchLater?userId=${userId}&videoId=${videoId}`;
    return this.http.delete<void>(url);
  }
}
