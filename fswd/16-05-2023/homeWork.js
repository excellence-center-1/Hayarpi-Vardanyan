//1.Write a function that takes in an array of numbers and returns the sum of all the even numbers in the array.
const arr=[1,2,3,4,5,6,7,8,9,10]
const sum=(arr) => {
let s=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
      s+=(arr[i])  
    }
  }
  return s;
}
const res=sum(arr);
console.log(res)

//2.Write a function that takes in a string and returns the string reversed.
const reverse=(str) => {
  let reversedString='';
  index=str.length;  
while(index>0){
    reversedString += str[ index - 1 ];
    index -=1;
  }
  return reversedString;
}
const reversed = reverse("Hello, world!");
console.log(reversed); 

//2.1
const reverse=(str) => {
  let reversedString='';
for(let i=str.length-1;i>=0;i--) {
    reversedString += str[ i ];
  }
  return reversedString;
}
const reversed = reverse("Hello, world!");
console.log(reversed); 

//3. Write a function that takes in an array of strings and returns a new array with all the strings capitalized.
const arr=["string1","string2","Hello World!"];
const string=(arr) => {
  const arr1=[];
for(let i=0;i<arr.length;i++) {
    const string = arr[i].toUpperCase();
    arr1.push(string);
  }

  return arr1;
}
const s = string(arr);
console.log(s); 


//Task 6: Use a loop to create an array of all the authors in the array of books
const books = [
  {title: "To Kill a Mockingbird", author: "Harper Lee", pages: 336},
  {title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180},
  {title: "1984", author: "George Orwell", pages: 328},
  {title: "The Catcher in the Rye", author: "J.D. Salinger", pages: 224},
  {title: "Brave New World", author: "Aldous Huxley", pages: 288},
  {title: "Title",author: "Harper Lee", pages: 300},
]
const authorsSet = new Set();
books.forEach(book => {
  authorsSet.add(book.author);
});
const authors = Array.from(authorsSet);

console.log(authors);
