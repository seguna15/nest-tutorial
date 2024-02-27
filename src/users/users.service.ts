import { Injectable } from '@nestjs/common';
import { SerializedUser, User } from './types';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: "user1",
            password: "user1@123"
        },
        {
            username: "user2",
            password: "user2@123"
        },
        {
            username: "user3",
            password: "user3@123"
        },
        {
            username: "user4",
            password: "user4@123"
        },
        {
            username: "user5",
            password: "user5@123"
        },
        {
            username: "user6",
            password: "user6@123"
        }
    ]

    getUsers(){
        return this.users.map((user) => new SerializedUser(user));
    }

    getUserByUsername(username: string){
        const user = this.users.find((user) => user.username === username);
        return new SerializedUser(user);
    }

}
