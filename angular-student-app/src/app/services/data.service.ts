import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError} from 'rxjs';
import {map, tap, catchError} from 'rxjs/operators';
import { Student } from '../models/students';
import { Teachers } from '../models/teachers';
import { TrackerError } from '../models/student-tracker-error';
import { Courses } from '../models/courses';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private httpErrorhandler(error: HttpErrorResponse):Observable<TrackerError>{
  let dataError = new TrackerError()
  dataError.errorNumber=100;
  dataError.errorStaus=error.status
  dataError.message = error.statusText;
  dataError.friendlyMessage=" An error ocured while retrieving data. "
  console.log(dataError)
  return throwError(dataError)
  }
  constructor(private http:HttpClient) { }
  
  getAllStudents():Observable<Student[]|TrackerError>{
  let dataUrl = 'api/students'
  return this.http.get<Student[]>(dataUrl)
  .pipe(
    catchError(error=>this.httpErrorhandler(error))
  )
  }

  getAllTeachers():Observable<Teachers[]|TrackerError>{
    let dataUrl = 'api/teachers'
    return this.http.get<Teachers[]>(dataUrl)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
    )
  }

getAllCourses(){
  let dataUrl = 'api/courses'
  return this.http.get<Courses[]|TrackerError>(dataUrl)
  .pipe(
    catchError(error=>this.httpErrorhandler(error))
  )
}
  getStudent(studentID:number):Observable<Student|TrackerError>{
    let dataUrl = `api/students/${studentID}`
    return this.http.get<Student>(dataUrl)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
    )
  }


  addStudent(newStudent:Student):Observable<Student|TrackerError>{
    let dataUrl = 'api/students'
    return this.http.post<Student>(dataUrl,newStudent)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
    )
  }

  updateStudent(updatedStudent:Student):Observable<void|TrackerError>{
    let dataUrl = `api/students/${updatedStudent.id}`
    return this.http.put<void>(dataUrl,updatedStudent)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
    )
  }
  
  deleteStudent(studentID):Observable<void|TrackerError>{
    let dataUrl = `api/students/${studentID}`
    return this.http.delete<void>(dataUrl)
    .pipe(
      catchError(error=>this.httpErrorhandler(error))
    )
  }

}
