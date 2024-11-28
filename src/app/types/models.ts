export interface User {
  id: number;
  name: string;
  email: string;
  socialLinkProvider: string;
}

export interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  views: number;
  uploadedAt: string;
}
