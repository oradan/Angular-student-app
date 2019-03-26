
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Student } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const students:Student[]=[
      {
        id:1,
        studentName:"Olga Radan",
        studentCourses:[{courseId:14,courseGrade:10},{courseId:13,courseGrade:8},{courseId:15,courseGrade:8}]
        },
        {
        id:2,
        studentName:"Marius Craiovan",
        studentCourses:[{courseId:11,courseGrade:5},{courseId:12,courseGrade:8},{courseId:13,courseGrade:10},{courseId:14,courseGrade:5},{courseId:15,courseGrade:10}]
        },
        {
        id:3,
        studentName:"Barbara Roge",
        studentCourses:[{courseId:11,courseGrade:9},{courseId:12,courseGrade:6},{courseId:13,courseGrade:9},{courseId:14,courseGrade:7},{courseId:15,courseGrade:8}]
        },
        {
        id:4,
        studentName:"Ioan Rus",
        studentCourses:[{courseId:11,courseGrade:8},{courseId:12,courseGrade:2},{courseId:13,courseGrade:7},{courseId:14,courseGrade:9},{courseId:15,courseGrade:9}]
        },
        {
        id:5,
        studentName:"Catalin Josan",
        studentCourses:[{courseId:11,courseGrade:7},{courseId:12,courseGrade:4},{courseId:13,courseGrade:7},{courseId:14,courseGrade:8},{courseId:15,courseGrade:6}]
        },
        {
        id:6,
        studentName:"Maria Beregoi",
        studentCourses:[{courseId:11,courseGrade:10},{courseId:12,courseGrade:9},{courseId:13,courseGrade:6},{courseId:14,courseGrade:9},{courseId:15,courseGrade:10}]
        },
        {
        id:7,
        studentName:"Sara Rat",
        studentCourses:[{courseId:11,courseGrade:3},{courseId:12,courseGrade:9},{courseId:13,courseGrade:8},{courseId:14,courseGrade:7},{courseId:15,courseGrade:8}]
        },
        {
        id:8,
        studentName:"Cosmin Tatou",
        studentCourses:[{courseId:11,courseGrade:9},{courseId:12,courseGrade:10},{courseId:13,courseGrade:10},{courseId:14,courseGrade:10},{courseId:15,courseGrade:4}]
        },
        {
        id:9,
        studentName:"Marian Salahor",
        studentCourses:[{courseId:11,courseGrade:10},{courseId:12,courseGrade:8},{courseId:13,courseGrade:8},{courseId:14,courseGrade:7},{courseId:15,courseGrade:10}]
        }


    ]

    const teachers=[
      {
        id:111,
        teacherName:"Marian teacher",
        teacherCours:"Biology"
      },
      {
        id:222,
        teacherName:"Maria Voica",
        teacherCours:"Math"
      },
      {
        id:333,
        teacherName:"Herieta Hans",
        teacherCours:"Chemistry"
      },
      {
        id:444,
        teacherName:"Biserca Slovensky",
        teacherCours:"History"
      },
      {
        id:555,
        teacherName:"Ana Manole",
        teacherCours:"Literature"
      }
    ]

    const courses=[
      {
        id:15,
        courseName:"Literature"
       
      }, 
      {
        id:12,
        courseName:"Biology"
      },
      {
        id:14,
        courseName:"History"
        
      },
      {
        id:13,
        courseName:"Chemistry"
      },
      {
        id:11,
        courseName:"Math"
      }
    ]
    return {students,teachers,courses}
  }
}
