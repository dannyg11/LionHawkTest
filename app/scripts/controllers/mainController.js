'use strict';


/**
 * @ngdoc function
 * @name newAngAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newAngAppApp
 */
// Code goes here


  app.controller('MainCtrl', function ($scope, ClassShare) {

  	


 $scope.courses = [
  
  { id : "53d7b22a3ec72131232a93fb",  courseFull : "COMSW1001",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "INTRO TO INFORMATION SCIENCE",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKRX9",  course : "COMS1001",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "INTRO TO INFORMATION SCIENCE",  prefixLongname : "COMPUTER SCIENCE" },

{  id : "53d7b2263ec72131232a8360",  courseFull : "COMSW1004",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "INTRO-COMPUT SCI/PROG IN JAVA",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKRX9",  course : "COMS1004",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "INTRO-COMPUT SCI/PROG IN JAVA",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8361",  courseFull : "COMSW1005",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "INTRO-COMPUT SCI/PROG-MATLAB",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKRX9",  course : "COMS1005",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "INTRO-COMPUT SCI/PROG-MATLAB",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a93fc",  courseFull : "COMSW1007",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "HONORS INTRO TO COMPUTER SCI",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKRX9",  course : "COMS1007",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "HONORS INTRO TO COMPUTER SCI",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8362",  courseFull : "COMSW1404",  departmentName : "COMPUTER SCIENCE",  classNotes : "STUDENTS MAY ONLY ENROLL WITH INSTRUCTOR PERMISSION",  schoolName: "INTERFACULTY",  courseTitle: "EMERGING SCHOLARS PROG SEMINAR",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKRX9",  course : "COMS1404",  numFixedUnits : 10,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "INS",  divisionCode : "IF",  courseSubtitle : "EMERGING SCHOLARS PROG SEMINAR",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8363",  courseFull : "COMSW3101",  departmentName : "COMPUTER SCIENCE",  classNotes : "CLASS MEETS 2/3/14 - 3/14/14",  schoolName: "INTERFACULTY",  courseTitle: "PROGRAMMING LANGUAGES",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS3101",  numFixedUnits : 10,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "PROGRAMMING LANG (RAILS",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8364",  courseFull : "COMSW3134",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "DATA STRUCTURES IN JAVA",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS3134",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "DATA STRUCTURES IN JAVA",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a93fd",  courseFull : "COMSW3136",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "ESSENTIAL DATA STRUCTURES",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "",  course : "COMS3136",  numFixedUnits : 40,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "ESSENTIAL DATA STRUCTURES",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8365",  courseFull : "COMSW3137",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "HONORS DATA STRUCTURES & ALGOL",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS3137",  numFixedUnits : 40,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "DATA STRUCTURES/ALGORITHMS",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8366",  courseFull : "COMSW3157",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "ADVANCED PROGRAMMING",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS3157",  numFixedUnits : 40,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "ADVANCED PROGRAMMING",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8367",  courseFull : "COMSW3203",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "DISCRETE MATHEMATICS",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS3203",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "COMBINATORICS/GRAPH THEORY",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a93fe",  courseFull : "COMSW3251",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "COMPUTATIONAL LINEAR ALGEBRA",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS3251",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "F",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "COMPUTATIONAL LINEAR ALGEBRA",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8368",  courseFull : "COMSW3261",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "COMPUTER SCIENCE THEORY",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS3261",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "COMPUTER SCIENCE THEORY",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8369",  courseFull : "COMSW3902",  departmentName : "COMPUTER SCIENCE",  classNotes : "SIGN UP FOR SECTIONS IN DEPT. DO NOT SIGN UP FOR SEC 1",  schoolName: "INTERFACULTY",  courseTitle: "UNDERGRADUATE THESIS",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS3902",  numFixedUnits : 0,  maxUnits : 0,  enrollmentStatus : "F",  departmentCode : "COMS",  approval : "INS",  divisionCode : "IF",  courseSubtitle : "UNDERGRADUATE THESIS",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a836a",  courseFull : "COMSW3998",  departmentName : "COMPUTER SCIENCE",  classNotes : "SIGN UP FOR SECTIONS IN DEPT. DO NOT SIGN UP FOR SEC 1",  schoolName: "INTERFACULTY",  courseTitle: "UNDERGRAD PROJECTS IN COMP SCI",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS3998",  numFixedUnits : 0,  maxUnits : 0,  enrollmentStatus : "F",  departmentCode : "COMS",  approval : "INS",  divisionCode : "IF",  courseSubtitle : "UNDERGRAD PROJECTS IN COMP SCI",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a836b",  courseFull : "COMSW4111",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "INTRODUCTION TO DATABASES",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4111",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "INTRODUCTION TO DATABASES",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a836c",  courseFull : "COMSW4112",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "DATABASE SYSTEM IMPLEMENTATION",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4112",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "DATABASE SYSTEM IMPLEMENTATION",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a836d",  courseFull : "COMSW4115",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "PROGRAMMING LANG & TRANSLATORS",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4115",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "PROGRAMMING LANG & TRANSLATORS",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a836e",  courseFull : "COMSW4118",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "OPERATING SYSTEMS I",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4118",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "OPERATING SYSTEMS I",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a93ff",  courseFull : "COMSW4156",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "ADVANCED SOFTWARE ENGINEERING",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4156",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "ADVANCED SOFTWARE ENGINEERING",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a836f",  courseFull : "COMSW4160",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "COMPUTER GRAPHICS",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4160",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "COMPUTER GRAPHICS",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a9400",  courseFull : "COMSW4162",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "ADVANCED COMPUTER GRAPHICS",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4162",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "ADVANCED COMPUTER GRAPHICS",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a9401",  courseFull : "COMSW4167",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "COMPUTER ANIMATION",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4167",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "COMPUTER ANIMATION",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a9402",  courseFull : "COMSW4170",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "USER INTERFACE DESIGN",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4170",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "F",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "USER INTERFACE DESIGN",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8370",  courseFull : "COMSW4172",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "3D UI AND AUGMENTED REALITY",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4172",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "3D UI AND AUGMENTED REALITY",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8371",  courseFull : "COMSW4180",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "NETWORK SECURITY",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4180",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "NETWORK SECURITY",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a9403",  courseFull : "COMSW4187",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "SECURITY ARCH & ENGINEERING",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4187",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "SECURITY ARCH & ENGINEERING",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8372",  courseFull : "COMSW4236",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "INTRO-COMPUTATIONAL COMPLEXITY",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4236",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "INTRO-COMPUTATIONAL COMPLEXITY",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a9404",  courseFull : "COMSW4241",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "NUMERICL ALGORITHMS-COMPLEXITY",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4241",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "NUMRCL ALGORTHMS-COMPLEXITY I",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a9405",  courseFull : "COMSW4252",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "INTRO-COMPUTATIONAL LEARN THRY",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4252",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "INTRO-COMPUTATIONAL LEARN THRY",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a9406",  courseFull : "COMSW4261",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "INTRO TO CRYPTOGRAPHY",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4261",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "INTRO TO CRYPTOGRAPHY",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8373",  courseFull : "COMSW4281",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "INTRO TO QUANTUM COMPUTING",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4281",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "INTRO TO QUANTUM COMPUTING",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a9407",  courseFull : "COMSW4444",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "PROGRAMMING & PROBLEM SOLVING",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4444",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "PROGRAMMING & PROBLEM SOLVING",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a9408",  courseFull : "COMSW4460",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "PRIN-INNOVATN/ENTREPRENEURSHIP",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4460",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "F",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "PRIN-INNOVATN/ENTREPRENEURSHIP",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a9409",  courseFull : "COMSW4701",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "ARTIFICIAL INTELLIGENCE",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4701",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "F",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "ARTIFICIAL INTELLIGENCE",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a940a",  courseFull : "COMSW4705",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "NATURAL LANGUAGE PROCESSING",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4705",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "F",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "NATURAL LANGUAGE PROCESSING",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8374",  courseFull : "COMSW4721",  departmentName : "COMPUTER SCIENCE",  classNotes : "OPEN TO DATA SCI STUDENTS OR WITH IDSE APPROVAL",  schoolName: "INTERFACULTY",  courseTitle: "MACHINE LEARNING FOR DATA SCI",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "I",  course : "COMS4721",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "MACHINE LEARNING FOR DATA SCI",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8375",  courseFull : "COMSW4731",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "COMPUTER VISION",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4731",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "COMPUTER VISION",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a940b",  courseFull : "COMSW4733",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "COMPUTATNL ASPECTS OF ROBOTICS",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4733",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "COMPUTATNL ASPECTS OF ROBOTICS",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b22a3ec72131232a940c",  courseFull : "COMSW4737",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "BIOMETRICS",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFGIX",  course : "COMS4737",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "F",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "BIOMETRICS",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8376",  courseFull : "COMSW4771",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "MACHINE LEARNING",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4771",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "MACHINE LEARNING",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8377",  courseFull : "COMSW4772",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "ADVANCED MACHINE LEARNING",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4772",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "ADVANCED MACHINE LEARNING",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8378",  courseFull : "COMSW4901",  departmentName : "COMPUTER SCIENCE",  classNotes : "SIGN UP FOR SECTIONS IN DEPT. DO NOT SIGN UP FOR SEC 1",  schoolName: "INTERFACULTY",  courseTitle: "PROJECTS IN COMPUTER SCIENCE",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4901",  numFixedUnits : 0,  maxUnits : 0,  enrollmentStatus : "F",  departmentCode : "COMS",  approval : "INS",  divisionCode : "IF",  courseSubtitle : "PROJECTS IN COMPUTER SCIENCE",  prefixLongname : "COMPUTER SCIENCE" }
,
{  id : "53d7b2263ec72131232a8379",  courseFull : "COMSW4995",  departmentName : "COMPUTER SCIENCE",  classNotes : "",  schoolName: "INTERFACULTY",  courseTitle: "TOPICS IN COMPUTER SCIENCE",  schoolCode: "INTF",  minUnits : 0,  prefixName : "COMPUT SCI",  divisionName : "INTERFACULTY",  bulletinFlags : "CEFKGRUXI",  course : "COMS4995",  numFixedUnits : 30,  maxUnits : 0,  enrollmentStatus : "O",  departmentCode : "COMS",  approval : "",  divisionCode : "IF",  courseSubtitle : "DIGITAL GEOMETRY PROCESSING",  prefixLongname : "COMPUTER SCIENCE" }
    
    
    ];
  $scope.search = {};

  $scope.searchBy = function () {
    return function (course) {
      if ( $scope.search[course.id] === true ) {
        return true;
      }
    };
  };



  });


 


