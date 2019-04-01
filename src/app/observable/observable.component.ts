import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Book } from '../book';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit { 
   books: Book[];
   errorMessage: String;
   bookName: String;
   book = new Book();   
   constructor(private bookService: BookService) { }
   ngOnInit(): void {
        this.fetchBooks();
   }
   fetchBooks(): void {
        this.bookService.getBooksWithObservable()
	    .subscribe( books => this.books = books,
                        error => this.errorMessage = <any>error);    
   }
   addBook(): void {
     this.bookService.addBookWithObservable(this.book)
	     .subscribe( book => {
			            this.fetchBooks();		
                                    this.reset();   
		                    this.bookName = book.name;						   
			 },
                         error => this.errorMessage = <any>error);
   }
   private reset() {
           this.book.id = null;	 
	   this.book.name = null;
	   this.errorMessage = null;
	   this.bookName = null;
   }
} 
