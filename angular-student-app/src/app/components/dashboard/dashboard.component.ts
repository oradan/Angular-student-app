import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Student } from '../../models/students';
import { Teachers } from '../../models/teachers';
import { TrackerError } from '../../models/student-tracker-error';
import { Courses } from '../../models/courses';
import { from, concat } from 'rxjs';
import { filter, mergeMap, map } from 'rxjs/operators';
import { Course } from '../../models/course';
import { ValueTransformer } from '../../../../node_modules/@angular/compiler/src/util';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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
  private teachers:Teachers[];


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

  // gradesCourseMatcher(){
  //     let students$ =from(this.students);
  //     let cources$=from(this.studentsCourses)
  //     // concat(students$,cources$)
  //     // .subscribe(data=>console.log(data))

  //     students$.subscribe(student=>{
  //       let currentStudentgrades=[]
   
  //       console.log(student.id)
  //       let studentcourses$=from(student.studentCourses)
  //           cources$.subscribe(courseId=>{
  //            // console.log(courseId)
  //             studentcourses$.subscribe(currentstudentcources=>{
  //              if(courseId.id===currentstudentcources.courseId){
                
  //                 this.currentCourse["courseId"]=currentstudentcources.courseId;
  //                 this.currentCourse["courseGrade"]=currentstudentcources.courseGrade;
  //                 console.log(this.currentCourse)
  //                 this.studentsSortedgrades.push(this.currentCourse)
  //                 return
  //               // console.log( `CourceId ${courseId.id} currentstudent courceId ${currentstudentcources.courseId} grade ${currentstudentcources.courseGrade}`)
                
                  
  //              }
          
  //             })

             
  //           })
           
  //     })
  // console.log(this.studentsSortedgrades)
  // }  


  // gradesCourseMatcher(){
  //   this.currentstudentsSortedgrades=[]
  //   this.students.forEach(currentStudent=>{
      
  //     console.log(currentStudent.id,"current student Id")
  //     this.studentsCourses.forEach(currentCourse=>{
  //       let currentcourseId=currentCourse.id;
  //       console.log(currentcourseId, "current course Id")
  //       currentStudent.studentCourses.forEach(currentStudentCourse=>{
  //        // console.log(currentStudentCourse, "current student course")
  //         if(currentcourseId===currentStudentCourse.courseId){
  //           this.currentCourse["courseId"]=currentStudentCourse.courseId;
  //           this.currentCourse["courseGrade"]=currentStudentCourse.courseGrade;
  //           console.log(this.currentCourse)
  //           return 
  //           //this.currentstudentsSortedgrades.push(this.currentCourse)
  //        //   console.log(this.currentstudentsSortedgrades)
  //         }
  //       })
  //     })

  //   //  this.studentsSortedgrades.push( this.currentstudentsSortedgrades)
  //    // console.log(this.studentsSortedgrades)
  //   })
  // }


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
       
       data.map(values=>
      {
        values.studentCourses.sort((a:any,b:any)=>a.courseId-b.courseId)
      })

      this.students= data;
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
     (data:Courses[])=> {
      data.sort((a:any,b:any)=>a.id-b.id)
      this.studentsCourses=data
     },
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
