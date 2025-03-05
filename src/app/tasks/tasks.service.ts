import { Injectable, signal } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private task =signal<Task[]>([])
  alltask = this.task.asReadonly();
  
  addTask(taskData:{title : string, description : string}){
    const newTask : Task ={
      ...taskData,
      id : Math.random().toString(),
      status: 'OPEN'
    }
    this.task.update(oldtask => [...oldtask, newTask])
    console.log("task ", this.task);
    
  }
}
