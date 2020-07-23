package com.soutam.todo.app.model;

import java.util.Date;

public class Todo {

    private Long Id;
    private String description;
    private Date targetDate;
    private boolean isCompleted;

    public Todo() {
    }

    public Todo(Long id, String description, Date targetDate, boolean isCompleted) {
        Id = id;
        this.description = description;
        this.targetDate = targetDate;
        this.isCompleted = isCompleted;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getTargetDate() {
        return targetDate;
    }

    public void setTargetDate(Date targetDate) {
        this.targetDate = targetDate;
    }

    public boolean isCompleted() {
        return isCompleted;
    }

    public void setCompleted(boolean completed) {
        isCompleted = completed;
    }
}
