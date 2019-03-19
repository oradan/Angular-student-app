import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
import { Student } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) { }
  
  getAllStudents():Observable<Student[]>{
  let dataUrl = 'api/students'
  return this.http.get<Student[]>(dataUrl)
  }
  getStudent(studentID:number):Observable<Student>{
    let dataUrl = `api/students/${studentID}`
    return this.http.get<Student>(dataUrl)
  }
  addStudent(newStudent:Student):Observable<Student>{
    let dataUrl = 'api/students'
    return this.http.post<Student>(dataUrl,newStudent)
  }
}
