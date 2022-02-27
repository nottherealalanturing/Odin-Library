const shelf = document.querySelector("#shelf");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".add-btn");
const close = document.getElementsByClassName("close-modal")[0];

let myLibrary = [];

function Book(author, title, pageCount, image) {
  this.author = author;
  this.title = title;
  this.pageCount = pageCount;
  this.image = image;
}

function addBookToLibrary(bookTitle) {
  const author = prompt("Name of Author?");
  const title = prompt("Title of Book?");
  const pages = prompt("Number of pages?");
  const img = prompt("Title of image file?");
  myLibrary.push(new Book(author, title, pages, img));
  displayBooks();
}

function displayBooks() {
  shelf.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const book = `
    <article class="book">
          <img src="./assets/images/${myLibrary[i].image}" alt="${myLibrary[i].image}" />
          <div class="book-deets mt-10">
            <div>
              <h4>${myLibrary[i].title}</h4>
              <h5>${myLibrary[i].author}</h5>
            </div>
            <button type="button">
              <img src="./assets/icons/star-plus-outline.svg" alt="read" />
            </button>
          </div>
          <p class="page-count">${myLibrary[i].pageCount} pages</p>
        </article>
    `;
    shelf.innerHTML += book;
  }
}

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

displayBooks();
