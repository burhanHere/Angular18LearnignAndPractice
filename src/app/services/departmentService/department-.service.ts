import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  private apiLink: string;

  constructor(private httpClient: HttpClient) {
    this.apiLink = 'https://freeapi.gerasim.in/api/TicketsNew';
  }

  public getAllDepartments(): Observable<any> {
    return this.httpClient.get(`${this.apiLink}/GetDepartments`).pipe(
      catchError((error) => {
        console.error('Error fetching departments:', error);
        return throwError(error); // Re-throw the error after logging it
      })
    );
  }

  public postDepartments(newDepartmernt: object) {
    return this.httpClient.post(
      `${this.apiLink}/CreateDepartment`,
      newDepartmernt
    );
  }

  public putDepartments(updatedDepartmernt: object): Observable<any> {
    return this.httpClient.put(
      `${this.apiLink}/UpdateDepartment`,
      updatedDepartmernt
    );
  }

  public deleteDepartments(targetDepartmentID: number): Observable<any> {
    return this.httpClient.delete(
      `${this.apiLink}/DeleteDepartment?id=${targetDepartmentID}`
    );
  }
}
