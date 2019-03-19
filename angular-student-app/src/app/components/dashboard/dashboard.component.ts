import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/students';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private students: Student[];
  private student: Student;
  private newStudent:Student;
  constructor(private dataService:DataService) { }

  ngOnInit() {
   this.newStudent={
      id:0,
      studentName:"Maria Test",
      studentCourses:[{courseId:11,courseName:"Math",courseGrade:7},{courseId:12,courseName:"Biology",courseGrade:10},{courseId:13,courseName:"Chemistry",courseGrade:8},{courseId:14,courseName:"History",courseGrade:10},{courseId:15,courseName:"Literature",courseGrade:8}]
      
    }

    this.dataService.addStudent(this.newStudent)
    .subscribe(
      (data:Student)=>console.log(data),
      (err:any)=> console.log(err)
     
    )
   
   this.dataService.getAllStudents()
  .subscribe(
   (data :Student[])=>this.students= data,
   (err:any)=> console.log(err),
   ()=>console.log(this.students)

  )

  this.dataService.getStudent(7)
  .subscribe(
   (data :Student)=>this.student= data,
   (err:any)=> console.log(err),
   ()=>console.log(this.student)

  )


  }
  

  

}
