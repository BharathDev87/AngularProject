import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { type NewTaskDta } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required:true}) userid!:string;
@Output() close = new EventEmitter<void>()
//@Output() add = new EventEmitter<NewTaskDta>();
enteredTitle='';
enteredSummary='';
enteredDate='';

private tasksService=inject(TasksService)
addTask: any;

onCancel(){
  this.close.emit();
}
onSubmit()
{
  console.log('shyamGanti')
  this.tasksService.addTask({
  
       title:this.enteredTitle,
  summary:this.enteredSummary,
  date:this.enteredDate
  },this.userid);
  this.close.emit();

}
}
