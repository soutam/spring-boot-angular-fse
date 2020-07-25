package com.soutam.todo.app.controller;

import com.soutam.todo.app.model.Todo;
import com.soutam.todo.app.service.ToDoService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class TodoCtrl {

    private static final Logger logger = LoggerFactory.getLogger(TodoCtrl.class);

    private final ToDoService toDoService;

    public TodoCtrl(ToDoService toDoService) {
        this.toDoService = toDoService;
    }

    @GetMapping("/{user}/todos/")
    public ResponseEntity<List<Todo>> getAllTodoItems(@PathVariable String user){
        logger.info("returning todo list for user {}", user);
        List<Todo> todoList= toDoService.getAllTodoItems();
        return new ResponseEntity<>(todoList, HttpStatus.OK);
    }

    @GetMapping("/{user}/todo/{id}")
    public ResponseEntity<Todo> getTodoItemById(@PathVariable Long id){

        Todo todo = toDoService.getTodoItemById(id);
        if(null != todo)
        {
            return new ResponseEntity<>(todo, HttpStatus.OK);
        }else{
            return new ResponseEntity<>(todo, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{user}/todo/{id}")
    public ResponseEntity deleteTodoItemById(@PathVariable Long id){
        toDoService.deleteTodoItemById(id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{user}/todo/")
    public ResponseEntity<List<Todo>> addTodo(@RequestBody Todo todo){
        return new ResponseEntity<>(toDoService.addTodo(todo), HttpStatus.CREATED);

    }

    @PutMapping("/{user}/todo/{id}")
    public ResponseEntity updateTodo(@PathVariable Long id, @RequestBody Todo todo){
        toDoService.updateTodo(id,todo);
        return ResponseEntity.accepted().build();

    }
}
