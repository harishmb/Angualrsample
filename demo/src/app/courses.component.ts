import { Component,Directive } from '@angular/core';
import {CourseService} from './course.service';


@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    providers:[CourseService]
  })
  export class CourseComponent {
    //For showing array elements using service functionality
    courses;
    constructor(CourseService: CourseService){
      this.courses = CourseService.getCourses();
    }
    //For showing images:
    imageUrl="http://lorempixel.com/400/200/sports/";

    //For showing button classes(attributs and properties)
    isActive = false;
    //For accessing onclick events examples
    onClick($event){
      console.log("button clicked");
      console.log("button clicked",$event);
      this.isActive = !this.isActive;
    }

    //ng-switch example 
      viewMode = 'map';
    
  }
  export class DemoCarouseBasicComponent {}
