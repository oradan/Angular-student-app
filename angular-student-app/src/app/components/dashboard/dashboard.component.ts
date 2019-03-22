import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/students';
import { Teachers } from '../../models/teachers';
import { TrackerError } from '../../models/student-tracker-error';
import { Courses } from '../../models/courses';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private students: Student[];
  private studentsCourses:Courses[];
  private student: Student;
  private newStudent:Student;
  private updatedStudent:Student;
  private teachers:Teachers[]
  constructor(private dataService:DataService) { }


  logStudents(){
    this.dataService.getAllStudents()
    .subscribe(
    (data :Student[])=>this.students= data,
    (err:TrackerError)=> {
      if(err.errorStaus===404){
        console.log(err.friendlyMessage)
      }else{console.log("unknown error")}
    },
    ()=>console.log(this.students, "The students are loged")
 
   )

  }

  logTeatchers(){
    this.dataService.getAllTeachers()
    .subscribe(
      (data:Teachers[])=>this.teachers=data,
      (err:TrackerError)=> console.log(err.friendlyMessage),
      ()=>console.log(this.teachers)
    )
  }

 gradesCourseMatcher(){
   this.students.forEach(data=>{
     
   })
 }


  ngOnInit() {
   
   this.newStudent={
      id:11,
      studentName:"Maria Test",
      studentCourses:[{courseId:11,courseGrade:7},{courseId:12,courseGrade:10},{courseId:13,courseGrade:8},{courseId:14,courseGrade:10},{courseId:15,courseGrade:8}]
      
    }

    this.updatedStudent={
      id:11,
      studentName:"Maria test updated",
      studentCourses:[{courseId:11,courseGrade:7},{courseId:12,courseGrade:10},{courseId:13,courseGrade:8},{courseId:14,courseGrade:10},{courseId:15,courseGrade:8}]
      
    }

    // this.dataService.addStudent(this.newStudent)
    // .subscribe(
    //   (data:Student)=>console.log(data),
    //   (err:TrackerError)=> console.log(err)
     
    // )
    // this.dataService.updateStudent(this.updatedStudent)
    // .subscribe(
    //   (data:void)=>console.log(`${this.updatedStudent.studentName} was successfully updated`),
    //   (err:TrackerError)=> console.log(err.friendlyMessage),
    //   ()=>console.log("uraaa")
    // )
    this.dataService.getAllStudents()
    .subscribe(
    (data :Student[])=>{
      this.students= data
    },
    (err:TrackerError)=> {
      if(err.errorStaus===404){
        console.log(err.friendlyMessage)
      }else{console.log("unknown error")}
    },
    ()=>console.log(this.students)
 
   )

   this.dataService.getAllCourses()
   .subscribe(
     (data:Courses[])=> this.studentsCourses=data,
     (err:TrackerError)=> console.log(err.friendlyMessage),
   ()=> console.log(this.studentsCourses,"cources")
   )
 
    // this.dataService.deleteStudent(1)
    // .subscribe(
    //   (data:void)=>console.log("start delede"),
    //   (err:TrackerError)=> console.log(err.friendlyMessage),
    //   ()=>console.log("This item was successfully deleted")
      
    // )
  
  // this.dataService.getStudent(8)
  // .subscribe(
  //  (data :Student)=>this.student= data,
  //  (err:TrackerError)=> console.log(err.friendlyMessage),
  //  ()=>console.log(this.student)

  // )
  this.dataService.getAllTeachers()
  .subscribe(
    (data:Teachers[])=>this.teachers=data,
    (err:TrackerError)=> console.log(err.friendlyMessage),
    ()=>console.log(this.teachers)
  )
 
  }
  

  

}
