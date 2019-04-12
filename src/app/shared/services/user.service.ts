import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  

@Injectable({ providedIn: 'root' })

export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>('/users');
    }

    getById(id: number) {
        return this.http.get('/users/${id}');
    }

    update(user: any) {
        return this.http.put('/users/${user.id}', user);
    }
}
