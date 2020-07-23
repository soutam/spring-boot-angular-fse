package com.soutam.todo.app.service;

import com.soutam.todo.app.model.Todo;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface ToDoService {

    List<Todo> getAllTodoItems();

    Todo getTodoItemById(Long id);

    void deleteTodoItemById(Long id);

    List<Todo> addTodo(Todo todo);

    List<Todo> updateTodo(Long id, Todo todo);
}
