import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{
  constructor(
    public empId:string,
    public name:string,
    public designation:string,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getEmployees()
  {
    return this.httpClient.get<Employee[]>('http://localhost:8080/employee/getall');
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete("http://localhost:8080/employee" + "/delete/"+ employee.empId,{ responseType:'text'as 'json'});
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/employee/create", employee,{ responseType:'text'as 'json'});
  }
}