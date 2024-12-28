const books = [
    
    {title: "book1", author : "author1", category: "fiction"},
    {title: "book2", author : "author2", category: "non-fiction"},
    {title: "book3", author : "author3", category: "fiction"},
    {title: "book4", author : "author5", category: "non-fiction"},
    {title: "book5", author : "author5", category: "fiction"},
    {title: "book6", author : "author6", category: "non-fiction"}
]
// now we need dom to get the elemetns
// const bookForm = document.getElementById('book-form');
// const bookTitle = document.getElementById('book-title');
// const bookAuthor = document.getElementById('book-author');
// const bookCategory = document.getElementById('book-category');
const bookList = document.getElementById('book-list');
// function to display books list
function DisplayBooksList(){
    bookList.innerHTML='';
    //using for each to add book in book list
    books.forEach((book, index)=>{
        const list = document.createElement('li');
        list.innerHTML= `${book.title} by ${book.author} Genre :${book.category}`;
 
       bookList.appendChild(li);
    });
}
DisplayBooksList()