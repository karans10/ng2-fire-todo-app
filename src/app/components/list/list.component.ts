import { Component, OnInit } from '@angular/core';

import { FirebaseListObservable } from 'angularfire2';
import { TodosDataService } from '../../services/todos-data.service';
@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public todos: FirebaseListObservable<any>;
public newTodo: string;
  constructor(private todosDataService: TodosDataService) { }

  ngOnInit() {
    // this.todos = ['Create first weekend app', 
    //               'Integrate with firebase', 
    //               'add authentication', 
    //               'add styles', 
    //               'deploy'];
                  this.todos = this.todosDataService.getTodos();
                  console.log(this.todos);
  }
  public addTodo(): void {
    if(this.newTodo !=='') {
      this.todos.push(this.newTodo);
      this.newTodo='';
    }    
  }
}
