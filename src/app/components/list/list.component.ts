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
                      this.todos = this.todosDataService.getTodos();
  }
  public addTodo(): void {
    let newTodo = {
      value:'',
      isDone: false
    }
    if(this.newTodo !=='') {
        newTodo.value = this.newTodo
      this.todos.push(newTodo);
      this.newTodo='';
    }    
  }
}
