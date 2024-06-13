import { Component, Input } from '@angular/core';
// import { TaskComponent } from "./task/task.component";
// import { AppComponent } from '../app.component';
// import { NewTaskComponent } from "./new-task/new-task.component";
import {type  NewTaskDta } from './task/task.model';
import { TasksService } from './tasks.service';
@Component({
    selector: 'app-tasks',
    // standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    // imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {

  @Input({required:true}) userid!:string;
  @Input({required:true}) name!:string;
  isAddingTask=false;
 // public tasksService = new TasksService();
  constructor(private  tasksService : TasksService){}


  //constructor(public taskService:TasksService){
   

//  super();edrtgy

get selectedUserTasks(){
  return this.tasksService.getUserTasks(this.userid);
}
onCompleteTask(id:string){}

onStartAddTask(){ 

  this.isAddingTask=true;
}
onCloseAddTask(){
  this.isAddingTask=false;
}
onAddTask(taskData:NewTaskDta){
  this.tasksService.addTask(taskData,this.userid);
}

}
