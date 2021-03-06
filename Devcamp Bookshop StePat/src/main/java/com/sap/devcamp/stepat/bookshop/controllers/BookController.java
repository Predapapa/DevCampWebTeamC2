package com.sap.devcamp.stepat.bookshop.controllers;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import com.sap.devcamp.stepat.bookshop.conf.MapperConfig;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.ParseException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sap.devcamp.stepat.bookshop.DTO.BookDTO;
import com.sap.devcamp.stepat.bookshop.model.Book;
import com.sap.devcamp.stepat.bookshop.service.BookService;

@RestController
@RequestMapping("/api/v1")
public class BookController {

	private final BookService bookService;
	@Autowired
	private ModelMapper modelMapper;
	
	public BookController(BookService bookService) {
		this.bookService = bookService;
		bookService.createBook(new Book(1234567891, "Der Hobbit", "J.R.R. Tolkien", "1937", "George Allen & Unwin", 100, 22.54));
		bookService.createBook(new Book(1234567892, "Der Herr der Ringe", "J.R.R. Tolkien", "1954", "George Allen & Unwin", 50, 88));
		bookService.createBook(new Book(1234567893, "GW100 SAP Gateway", "Studio SAP", "2018", "Studio Sap", 200, 50.50));
		bookService.createBook(new Book(1234567894, "S4D400", "Andreas Nicola", "2018", "Studio Sap", 150, 50.99));
		bookService.createBook(new Book(1234567895, "Harry Potter und der Stein der Weisen", "J. K. Rowling", "1997", "Carlsen", 100, 8.99));
		bookService.createBook(new Book(1234567896, "Der Hundertjährige, der aus dem Fenster stieg und verschwand", "Jonas Jonasson", "2009", "Piratförlaget", 10, 7.99));
	}
	
	@GetMapping(path = "/customer/getBooks", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity <List<BookDTO>> bookForCustomers() {
		return new ResponseEntity<List<BookDTO>>(bookService.getAll().stream()
				.map(this::convertToDto)
				.collect(Collectors.toList())
				, HttpStatus.OK);
	}
	
	@GetMapping(path = "/{isbn}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity <Book> findByIsbn(@PathVariable(name = "isbn") int isbn) {
		return new ResponseEntity<Book>(bookService.findBookByIsbn(isbn), HttpStatus.OK);
	}
	
	@GetMapping(path = "/manager/getBooks", produces = MediaType.APPLICATION_JSON_VALUE)
		public ResponseEntity<List<Book>> book(){
			return new ResponseEntity<List<Book>>(bookService.getAll(), HttpStatus.OK);
		}
	
	@GetMapping(path = "/manager/getBooks/author/{author}", produces = MediaType.APPLICATION_JSON_VALUE) 
		public ResponseEntity <List<Book>> author(@PathVariable(name = "author") String author) {
			return new ResponseEntity<List<Book>>
			(bookService.getAllBooksFromAuthor(author),HttpStatus.OK);
		}
	
	@GetMapping(path = "/customer/getBooks/author/{author}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity <List<BookDTO>> bookForCustomersByAuthor(@PathVariable(name = "author") String author) {
		return new ResponseEntity<List<BookDTO>>(bookService.getAllBooksFromAuthor(author).stream()
				.map(this::convertToDto)
				.collect(Collectors.toList())
				, HttpStatus.OK);
	}
	
	@DeleteMapping(path = "/deleteBook/{uuid}")
	public ResponseEntity <List<Book>> deleteBook(@PathVariable(name = "uuid") UUID uuid) {
		bookService.deleteBook(uuid);
		return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
	}
	
	@GetMapping(path = "/findBook/{title}", produces = MediaType.APPLICATION_JSON_VALUE) 
	public ResponseEntity <Book> findBookByTitle(@PathVariable(name = "title") String title) {
		return new ResponseEntity<>(bookService.findBookByTitle(title),HttpStatus.OK);
	}
	
	@PostMapping(path = "/saveBook", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity saveBook(@RequestBody Book book) {
		bookService.createBook(book);
		return new ResponseEntity<>(book, HttpStatus.CREATED);
	}
	
	@PutMapping(path = "/updateBook", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity updateBook(@RequestBody Book book) {
		bookService.updateBook(book);
		return new ResponseEntity<>(book,HttpStatus.OK);
	}
	
	private BookDTO convertToDto(Book book) {
		BookDTO bookDto = modelMapper.map(book, BookDTO.class);
		return bookDto;
	}
	
	private Book convertToEntity(BookDTO bookDto) throws ParseException  {
		Book book = modelMapper.map(bookDto, Book.class);
		return book;
		
	}
	
	
	
}


