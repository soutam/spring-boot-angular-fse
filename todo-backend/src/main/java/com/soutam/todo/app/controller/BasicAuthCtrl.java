package com.soutam.todo.app.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class BasicAuthCtrl {
    Logger logger = LoggerFactory.getLogger(BasicAuthCtrl.class);
    @GetMapping("/authenticate")
    public ResponseEntity authenticate(){
        logger.info("authenticated");
            return ResponseEntity.ok().build();
    }


}
