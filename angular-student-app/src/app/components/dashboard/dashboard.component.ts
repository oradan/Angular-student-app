import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/students';
import { Teachers } from '../../models/teachers';
import { TrackerError } from '../../models/student-tracker-error';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private students: Student[];
  private student: Student;
  private newStudent:Student;
  private updatedStudent:Student;
  private teachers:Teachers[]
  constructor(private dataService:DataService) { }

  ngOnInit() {
   this.newStudent={
      id:11,
      studentName:"Maria Test",
      studentCourses:[{courseId:11,courseName:"Math",courseGrade:7},{courseId:12,courseName:"Biology",courseGrade:10},{courseId:13,courseName:"Chemistry",courseGrade:8},{courseId:14,courseName:"History",courseGrade:10},{courseId:15,courseName:"Literature",courseGrade:8}]
      
    }

    this.updatedStudent={
      id:11,
      studentName:"Maria test updated",
      studentCourses:[{courseId:11,courseName:"Math",courseGrade:7},{courseId:12,courseName:"Biology",courseGrade:10},{courseId:13,courseName:"Chemistry",courseGrade:8},{courseId:14,courseName:"History",courseGrade:10},{courseId:15,courseName:"Literature",courseGrade:8}]
      
    }

    this.dataService.addStudent(this.newStudent)
    .subscribe(
      (data:Student)=>console.log(data),
      (err:TrackerError)=> console.log(err)
     
    )
    this.dataService.updateStudent(this.updatedStudent)
    .subscribe(
      (data:void)=>console.log(`${this.updatedStudent.studentName} was successfully updated`),
      (err:TrackerError)=> console.log(err.friendlyMessage),
      ()=>console.log("uraaa")
    )
    this.dataService.getAllStudents()
    .subscribe(
    (data :Student[])=>this.students= data,
    (err:TrackerError)=> {
      if(err.errorStaus===404){
        console.log(err.friendlyMessage)
      }else{console.log("unknown error")}
    },
    ()=>console.log(this.students)
 
   )
 
    this.dataService.deleteStudent(1)
    .subscribe(
      (data:void)=>console.log("start delede"),
      (err:TrackerError)=> console.log(err.friendlyMessage),
      ()=>console.log("This item was successfully deleted")
      
    )
    this.dataService.getAllStudents()
    .subscribe(
    (data :Student[])=>this.students= data,
    (err:TrackerError)=> {
      if(err.errorStaus===404){
        console.log(err.friendlyMessage)
      }else{console.log("unknown error")}
    },
    ()=>console.log(this.students)
 
   )
  this.dataService.getStudent(8)
  .subscribe(
   (data :Student)=>this.student= data,
   (err:TrackerError)=> console.log(err.friendlyMessage),
   ()=>console.log(this.student)

  )
  this.dataService.getAllTeachers()
  .subscribe(
    (data:Teachers[])=>this.teachers=data,
    (err:TrackerError)=> console.log(err.friendlyMessage),
    ()=>console.log(this.teachers)
  )

  }
  

  

}
