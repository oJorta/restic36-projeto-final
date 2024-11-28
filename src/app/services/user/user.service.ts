import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User, Video } from '../../types/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getUserById(id: number) {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }

  getUserByEmail(email: string) {
    return this.http.get<User[]>(`${this.apiUrl}/users?email=${email}`)
  }

  createUser(user: Partial<User>) {
    return this.http.post<User>(`${this.apiUrl}/users`, user);
  }

  getFavorites(userId: number) {
    return this.http.get<Video[]>(`${this.apiUrl}/favorites?userId=${userId}`);
  }

  addFavorite(userId: number, videoId: number) {
    return this.http.post<void>(`${this.apiUrl}/favorites`, { userId, videoId });
  }

  removeFavorite(userId: number, videoId: number) {
    const url = `${this.apiUrl}/favorites?userId=${userId}&videoId=${videoId}`;
    return this.http.delete<void>(url);
  }

  getWatchLater(userId: number) {
    return this.http.get<Video[]>(`${this.apiUrl}/watchLater?userId=${userId}`);
  }

  addToWatchLater(userId: number, videoId: number) {
    return this.http.post<void>(`${this.apiUrl}/watchLater`, { userId, videoId });
  }

  removeFromWatchLater(userId: number, videoId: number) {
    const url = `${this.apiUrl}/watchLater?userId=${userId}&videoId=${videoId}`;
    return this.http.delete<void>(url);
  }
}
