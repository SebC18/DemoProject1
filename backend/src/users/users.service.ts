import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    username: string;
    password: string;
}

@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            name: 'Marius',
            username: 'marius',
            password: 'sosecure',
        },
        {
            id: 2,
            name: 'Marion',
            username: 'marion',
            password: 'sosecure1',
        },
        {
            id: 1,
            name: 'Martine',
            username: 'martine',
            password: 'sosecure3',
        },
    ];

    async findOne(username: string):Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}
