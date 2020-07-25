package com.soutam.todo.app.service.impl;

import com.soutam.todo.app.model.Todo;
import com.soutam.todo.app.service.ToDoService;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class ToDoServiceImpl implements ToDoService  {

    private static List<Todo> todoList = new ArrayList<>();
    private static long  idCounter = 0l;
    /*static {
        todoList.add(new Todo(++idCounter,"audit",new Date(), false));
        todoList.add(new Todo(++idCounter,"office meeting",new Date(), true));
        todoList.add(new Todo(++idCounter,"presentation",new Date(), false));
    }*/

    @Override
    public List<Todo> getAllTodoItems() {
        return todoList;
    }

    @Override
    public Todo getTodoItemById(Long id) {
        return todoList.stream().filter(x-> id.equals(x.getId())).findAny().orElse(null);
    }

    @Override
    public void deleteTodoItemById(Long id) {
        Todo todoToRemove = todoList.stream().filter(x-> id.equals(x.getId())).findAny().orElse(null);
        todoList.remove(todoToRemove);
    }

    @Override
    public List<Todo> addTodo(Todo todo) {
        todo.setId(++idCounter);
        todoList.add(todo);
        return todoList;
    }

    @Override
    public List<Todo> updateTodo(Long id, Todo todo) {

        Todo todoToUpdate = todoList.stream().filter(x-> id.equals(x.getId())).findAny().orElse(null);
        todoList.remove(todoToUpdate);
        todoToUpdate.setDescription(todo.getDescription());
        todoToUpdate.setCompleted(todo.isCompleted());
        todoToUpdate.setTargetDate(todo.getTargetDate());
        todoList.add(todoToUpdate);
        return  todoList;
    }


}
