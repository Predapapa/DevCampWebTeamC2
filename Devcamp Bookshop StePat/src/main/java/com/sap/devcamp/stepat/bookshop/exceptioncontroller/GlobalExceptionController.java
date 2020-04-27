package com.sap.devcamp.stepat.bookshop.exceptioncontroller;

import java.util.Date;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.sap.devcamp.stepat.bookshop.model.ErrorResponse;

import lombok.extern.slf4j.Slf4j;


@ControllerAdvice
public class GlobalExceptionController {

	@ExceptionHandler ( value = { EntityNotFoundException.class, NullPointerException.class} )
	public ResponseEntity handleNotFoundException(final HttpServletRequest request, final Exception exception) {
		HttpStatus status = HttpStatus.NOT_FOUND;
		return getEntity(status, exception, request);
	}
	
	@ExceptionHandler ( value = EntityExistsException.class )
	public ResponseEntity handleBadRequesException(final HttpServletRequest request, final Exception exception) {
		HttpStatus status = HttpStatus.BAD_REQUEST;
		return getEntity(status, exception, request);
	}
	
	@ExceptionHandler ( value = { Exception.class } )
	public ResponseEntity handleInternalServerErrorException(final HttpServletRequest request, final Exception exception) {
		HttpStatus status = HttpStatus.INTERNAL_SERVER_ERROR;
		return getEntity(status, exception, request);
	}

	private ResponseEntity getEntity(HttpStatus status, Exception exception, HttpServletRequest request) {

	
		return new ResponseEntity("Exception: "+exception.getMessage().toString()+"At Request "+request.getMethod()+" .",status);
	}
	
}
	

	
