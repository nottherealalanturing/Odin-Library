const shl = document.querySelector("#shelf");

let myLibrary = [
  {
    title: "Indiana Jones",
    image: "./assets/images/book.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae totam quae ea itaque.",
  },
  {
    title: "Big Bang Jones",
    image: "./assets/images/book.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae totam quae ea itaque.",
  },
  {
    title: "Larry Jones",
    image: "./assets/images/book.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae totam quae ea itaque.",
  },
  {
    title: "Flora Indes",
    image: "./assets/images/book.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt molestiae totam quae ea itaque.",
  },
];

function Book(bookTitle) {
  this.bookTitle = bookTitle;
}

function addBookToLibrary(bookTitle) {
  myLibrary.push(new Book(bookTitle));
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    const book = document.createElement("article");
    book.setAttribute("class", "book");
    const bookTitle = document.createElement("h4");
    const bookImage = document.createElement("img");
    const bookDesc = document.createElement("p");
    bookTitle.innerText = myLibrary[i].title;
    bookImage.setAttribute("src", myLibrary[i].image);
    bookDesc.innerText = myLibrary[i].desc;
    book.appendChild(bookImage);
    book.appendChild(bookTitle);
    book.appendChild(bookDesc);
    shl.appendChild(book);
  }
}

displayBooks();
