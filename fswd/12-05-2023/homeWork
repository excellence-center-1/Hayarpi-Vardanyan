//Task1
const books = [
  {title: "To Kill a Mockingbird", author: "Harper Lee", pages: 336},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
  {title: "1984", author: "George Orwell", pages: 328},
  {title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 224},
  {title: "Brave New World", author: "Aldous Huxley", pages: 288},
  {title: "Title", author: "Harper Lee", pages: 300},
];
console.log(books)
//Task2
for(let i=0;i<books.length;i++)
console.log(books[i].title)
//Task3
let pages=0;
for(let i=0;i<books.length;i++)
{
    pages=pages+books[i].pages;
}
console.log("\n\nTotal number of pages",pages)
//Task4
let maxPages=books[0].pages;
let MostPages;
for(let i=1;i<books.length;i++)
{
    if(maxPages<books[i].pages)
    maxPages=books[i].pages;
    MostPages=books[i].title;
}
console.log("\nThe book with the most pages is",MostPages,"with",maxPages);
//Task5
let shortestTitle = books[0].title;
for (let i = 1; i < books.length; i++) {
  if (books[i].title.length < shortestTitle.length) {
    shortestTitle = books[i].title;
  }
}
console.log("\nThe book with the shortest title is '",shortestTitle,"' ");
//Task6
const authors=[]
for (let i = 0; i < books.length; i++) {
  authors.push(books[i].author);
}
console.log(authors);
//Task7
console.log("\n");
const authorsBooks = [];
for (let i = 0; i < books.length; i++) {
  let authorName = books[i].author;
  let bookTitle = books[i].title;
  let authorIndex = authorsBooks.findIndex(author => author.name === authorName);
  if (authorIndex === -1) {
    authorsBooks.push({name: authorName, books: [bookTitle]});
  } else {
    authorsBooks[authorIndex].books.push(bookTitle);
  }
}
console.log(authorsBooks);

