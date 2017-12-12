import { Component } from '@angular/core';

@Component ({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
}) 

export class AppComponent { 
	newTodo: string;
	todos: any;
	todoObj:any;
	mainObj:any;
	items: any;

	constructor(){
		this.newTodo = '';
		this.items = [];
		this.items.todos = [];
	}

	addNewList(j:any) {
		this.mainObj =  this.todos;
		this.items.push(this.mainObj);
		console.log(this.items);
	}

	addTodo(event:any) {
		this.todoObj = {
			newTodo: this.newTodo,
			completed:false,
			isEditing:false
		}
		this.items.todos.push(this.todoObj);
		this.newTodo = '';
		event.preventDefault();
	}

	deleteTodo(i:any) {
		this.items.todos.splice(i, 1);
	}

	deleteTodoItems(){
		for(let i = this.items.todos.length - 1; i >= 0 ; i--){
			if(this.items.todos[i].completed){
				this.items.todos.splice(i, 1);
			}
		}
	}
	editTodo(todo:any){
		todo.isEditing = !todo.isEditing;
	}
}