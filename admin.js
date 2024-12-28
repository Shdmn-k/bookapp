const books = [
    
    {title: "book1", author : "author1", category: "fiction"},
    {title: "book2", author : "author2", category: "non-fiction"},
    {title: "book3", author : "author3", category: "fiction"},
    {title: "book4", author : "author5", category: "non-fiction"},
    {title: "book5", author : "author5", category: "fiction"},
    {title: "book6", author : "author6", category: "non-fiction"}
]
// now we need dom to get the elemetns
const bookForm = document.getElementById('book-form');
const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const bookCategory = document.getElementById('book-category');
const bookList = document.getElementById('book-list');
// function to display books list
function DisplayBooksList(){
    bookList.innerHTML='';
    //using for each to add book in book list
    books.forEach((book, index)=>{
        const li = document.createElement('li');
        li.innerHTML= `${book.title} by ${book.author} Genre :${book.category}
       <button class="remove"> Remove This </button> `;
       bookList.appendChild(li);
    });
}
//to add books
bookForm.addEventListener('submit', function(event){
    event.preventDefault();
    const title = bookTitle.value;
    const author = bookAuthor.value;
    const category = bookCategory.value;
    if(category==""){
        alert("select category from drop down");
        return;
    }
    //now we got a book lets push it in our books
    books.push({title, author, category});
    // call our funtion
    DisplayBooksList();
    bookTitle.value='';
    bookAuthor.value='';
    bookCategory.value='';
});
DisplayBooksList();

