
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
        studentCourses:[{courseId:11,courseName:"Math",courseGrade:7},{courseId:12,courseName:"Biology",courseGrade:10},{courseId:13,courseName:"Chemistry",courseGrade:8},{courseId:14,courseName:"History",courseGrade:10},{courseId:15,courseName:"Literature",courseGrade:8}]
        },
        {
        id:2,
        studentName:"Marius Craiovan",
        studentCourses:[{courseId:21,courseName:"Math",courseGrade:5},{courseId:22,courseName:"Biology",courseGrade:8},{courseId:23,courseName:"Chemistry",courseGrade:10},{courseId:24,courseName:"History",courseGrade:5},{courseId:25,courseName:"Literature",courseGrade:10}]
        },
        {
        id:3,
        studentName:"Barbara Roge",
        studentCourses:[{courseId:31,courseName:"Math",courseGrade:9},{courseId:32,courseName:"Biology",courseGrade:6},{courseId:33,courseName:"Chemistry",courseGrade:9},{courseId:34,courseName:"History",courseGrade:7},{courseId:35,courseName:"Literature",courseGrade:8}]
        },
        {
        id:4,
        studentName:"Ioan Rus",
        studentCourses:[{courseId:41,courseName:"Math",courseGrade:8},{courseId:42,courseName:"Biology",courseGrade:2},{courseId:43,courseName:"Chemistry",courseGrade:7},{courseId:44,courseName:"History",courseGrade:9},{courseId:45,courseName:"Literature",courseGrade:9}]
        },
        {
        id:5,
        studentName:"Catalin Josan",
        studentCourses:[{courseId:51,courseName:"Math",courseGrade:7},{courseId:52,courseName:"Biology",courseGrade:4},{courseId:53,courseName:"Chemistry",courseGrade:7},{courseId:54,courseName:"History",courseGrade:8},{courseId:55,courseName:"Literature",courseGrade:6}]
        },
        {
        id:6,
        studentName:"Maria Beregoi",
        studentCourses:[{courseId:61,courseName:"Math",courseGrade:10},{courseId:62,courseName:"Biology",courseGrade:9},{courseId:63,courseName:"Chemistry",courseGrade:6},{courseId:64,courseName:"History",courseGrade:9},{courseId:65,courseName:"Literature",courseGrade:10}]
        },
        {
        id:7,
        studentName:"Sara Rat",
        studentCourses:[{courseId:71,courseName:"Math",courseGrade:3},{courseId:72,courseName:"Biology",courseGrade:9},{courseId:73,courseName:"Chemistry",courseGrade:8},{courseId:74,courseName:"History",courseGrade:7},{courseId:75,courseName:"Literature",courseGrade:8}]
        },
        {
        id:8,
        studentName:"Cosmin Tatou",
        studentCourses:[{courseId:81,courseName:"Math",courseGrade:9},{courseId:82,courseName:"Biology",courseGrade:10},{courseId:83,courseName:"Chemistry",courseGrade:10},{courseId:84,courseName:"History",courseGrade:10},{courseId:85,courseName:"Literature",courseGrade:4}]
        },
        {
        id:9,
        studentName:"Marian Salahor",
        studentCourses:[{courseId:91,courseName:"Math",courseGrade:10},{courseId:92,courseName:"Biology",courseGrade:8},{courseId:93,courseName:"Chemistry",courseGrade:8},{courseId:94,courseName:"History",courseGrade:7},{courseId:95,courseName:"Literature",courseGrade:10}]
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
    return {students,teachers}
  }
}
