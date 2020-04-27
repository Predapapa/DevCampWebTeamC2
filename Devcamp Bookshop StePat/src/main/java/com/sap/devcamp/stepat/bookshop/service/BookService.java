package com.sap.devcamp.stepat.bookshop.service;

import java.util.List;
import java.util.UUID;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sap.devcamp.stepat.bookshop.model.Book;
import com.sap.devcamp.stepat.bookshop.repositories.BookRepository;

@Service
public class BookService {

	private BookRepository bookRepository;
	
	
	
	public BookService(BookRepository bookRepository) {
		this.bookRepository = bookRepository;
	}
	
	public void createBook(final Book book) {
		if (!bookRepository.existsBookByIsbn(book.getIsbn())) {
			bookRepository.save(book);
		} else {
			throw new EntityExistsException("Could not save Book entity with ISBN " + book.getIsbn() + " . An entity with that ISBN already exists.")
;		}
		
	}
	
	public List<Book> getAll() {
		return bookRepository.getAll();
	}
	
	public List<Book> getAllBooksFromAuthor(String author) {
		return bookRepository.getAllBooksFromAuthor(author);
	}
	
	public void deleteBook(UUID uuid) {
		if(bookRepository.existsBookByUuid(uuid)) {
		bookRepository.deleteBookByUuid(uuid);
		} else {
		throw new EntityNotFoundException("Could not delete Book entity with uuid: "+ uuid + " because the Book entity does not exist. ");
		}
				
	}
	
	public Book findBookByTitle(String title) {
		if(bookRepository.existsBookByTitle(title)) {
		return bookRepository.findBookByTitle(title);
		} else {
		
		throw new EntityNotFoundException("Could not find Book entity with Title: " + title ); 
		}
		
	}
	
	public Book updateBook(final Book book) {
		if (bookRepository.existsBookByIsbn(book.getIsbn()) && bookRepository.existsBookByUuid(book.getUuid()))  {
			bookRepository.save(book);
			return bookRepository.findBookByIsbn(book.getIsbn());
	}else {
		throw new EntityNotFoundException("Could not update Book entity because it does not exist. " + book.getIsbn() + ", " + book.getUuid());
	}}
	
	public Book findBookByIsbn(int isbn) {
		return bookRepository.findBookByIsbn(isbn);
	}
	
	
	
	
}
