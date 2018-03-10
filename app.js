class Todo {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false;
    }
}

class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        TodoService.todoId++;
        let newTodo = new Todo(TodoService.todoId, title);
        this.todos.push(newTodo);
    }
    editTodo(title,newTitle) {
        this.todos.forEach((item,idx) => {
            if (item.title === title) {
              item.title=newTitle;
            }
        });
    }
    deleteBytitle(title) {
        this.todos.forEach((item) => {
            if (item.title === title) {
                let idx = this.todos.indexOf(item);
                this.todos.splice(idx, 1);
            }
        });
    }
    completeTodo(id) {
        this.todos.forEach((item)=>{
            if(item.id === id){
                item.completed=true;
            }
        });       
    }
    clearCompleted() {
        this.todos.forEach((item)=>{
            if(item.completed===true){
                let idx = this.todos.indexOf(item);
                this.todos.splice(idx,1);
            }
        });
    }
    completeAll() {
        this.todos.forEach((item)=>{
                item.completed=true;
        });
    }
    viewAll() {
        console.log(this.todos);
     }

}

//---------------------------------------------------------------------------------------------------
TodoService.todoId = 0;
let service = new TodoService();
service.addTodo('eat lunch');
service.addTodo('sleep');
service.addTodo('walk');
service.addTodo('party');
service.addTodo('study');
service.editTodo('walk','walking');
service.deleteBytitle('sleep');
service.completeTodo();
service.completeAll();
service.viewAll();
