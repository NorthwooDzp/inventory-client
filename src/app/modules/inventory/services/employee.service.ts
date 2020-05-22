import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Employee, EmployeeDTO } from '../models';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private baseUrl = `${environment.ApiUrl}/employee`;

    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.baseUrl);
    }

    public getById(id: string): Observable<Employee> {
        return this.http.get<Employee>(`${this.baseUrl}/${id}`);
    }

    public create(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.baseUrl, employee);
    }

    public update(id: string, employee: EmployeeDTO): Observable<Employee> {
        return this.http.put<Employee>(`${this.baseUrl}/${id}`, employee);
    }

    public delete(id: string): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }


}
