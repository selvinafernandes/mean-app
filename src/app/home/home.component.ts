import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	todos: any;
	todoObj:any;
	items: any;
	title: string;

	constructor(){
		this.items = [];
		this.title = '';
	}

	addNewList() {
		this.items.push({ todos: [] });
	}

	addTodo(newTodo: string, item: any) {
		this.todoObj = {
			newTodo: newTodo,
			completed:false,
			isEditing:false
		}
		item.todos.push(this.todoObj);
	}

	deleteTodo(item: any, i: any) {
		item.todos.splice(i, 1);
	}

	deleteTodoItems(item:any){
		for(let i = item.todos.length - 1; i >= 0 ; i--){
			if(item.todos[i].completed){
				item.todos.splice(i, 1);
			}
		}
	}
	editTodo(todo:any){
		todo.isEditing = !todo.isEditing;
	}

	ngOnInit() {
	}
}