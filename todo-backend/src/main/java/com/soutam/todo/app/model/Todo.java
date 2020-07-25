package com.soutam.todo.app.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class Todo {

    private Long Id;
    private String description;
    private Date targetDate;
    @JsonProperty("completed")
    private String isCompleted;

    public Todo() {
    }

    public Todo(Long id, String description, Date targetDate, String isCompleted) {
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

    public String isCompleted() {
        return isCompleted;
    }

    public void setCompleted(String completed) {
        isCompleted = completed;
    }
}
