import { NgModule } from "@angular/core";

import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/card/card.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
//AA

@NgModule({
  declarations: [ TasksComponent,
    TaskComponent,
    NewTaskComponent],
  //root components to run (start)
  bootstrap: [],
  imports: [SharedModule,CommonModule,FormsModule],
  exports: [TasksComponent]
})
export class TasksModule {}
