/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books */
  class Book {
  constructor(title, author, pages, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`You borrowed "${this.title}".`);
    } else {
      console.log(`${this.title} is not available.`);
    }
  }

  returnBook() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`You returned ${this.title}`);
    } 
  }

  getInfo() {
    console.log(`${this.title} by ${this.author} (${this.pages} pages)`);
  }

  isLongBook() {
    return this.pages > 300;
  }
}

let user1 = new Book("Harry Potter", "J.K. Rowling", 350,true);
let user2 = new Book("1984", "xyz", 328,false);
let user3 = new Book("The Hobbit", "abc", 310,true);
let user4 = new Book("1234", "yyy", 277,true);
let user5 = new Book("To Kill a Mockingbird", "abc", 281,true);

let books = [user1, user2, user3, user4, user5];


console.log(user1)
console.log(user2)
console.log(user3)
console.log(user4)
console.log("is the book avalible",user1.isAvailable)
console.log("is the book avalible ",user2.isAvailable)

console.log("return the book",user3.isAvailable=true)
console.log(user3)
let count=0
for(let y of books){
    if(y.isLongBook())
        count++
}
console.log("the books with more than 300 pages ",count)
console.log("the books avalible are :")
for(let y of books){
    if(y.isAvailable)
        console.log(y.getInfo())
}