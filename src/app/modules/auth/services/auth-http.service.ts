import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthCredentials } from '../models';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpService {
    private baseUrl = `${environment.ApiUrl}/auth`;

    constructor(private httpClient: HttpClient) {
    }

    public login(data: AuthCredentials): Observable<{ token: string }> {
        return this.httpClient.post<{ token: string }>(`${this.baseUrl}/login`, data);
    }

}
