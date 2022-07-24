import { Injectable } from '@angular/core';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users: User[] = [];
  constructor() { }

  create(user: User): void {
    this.users.push(user);
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
