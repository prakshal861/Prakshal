
export enum UserType {
  Admin = 'admin',
  User = 'user',
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}
