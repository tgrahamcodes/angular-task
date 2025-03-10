import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {

    id: number;
    name: string;
    favorite: boolean;
    username: string;
    email: string;
    phone: string;
    website: string;
    company: { name: string };
    address: { street: string; city: string };

}

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private apiUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor (private http: HttpClient) {}

    getUsers (): Observable<User[]> {

        return this.http.get<User[]>(this.apiUrl);

    }

    getUserById (id: number): Observable<User> {

        return this.http.get<User>(`${this.apiUrl}/${id}`);

    }

}
