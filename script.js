const shelf = document.querySelector("#shelf");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".add-btn");
const close = document.getElementsByClassName("close-modal")[0];
const addbookbtn = document.getElementById("submit");

const myLibrary = new Library();

function Book(author, title, pageCount, image, isRead) {
  this.author = author;
  this.title = title;
  this.pageCount = pageCount;
  this.image = image;
  this.isRead = this.isRead;
}

function Library() {}

Library.prototype.myLibrary = [];

Library.prototype.addBookToLibrary = function (e) {
  e.preventDefault();
  const author = document.getElementById("title").value;
  const title = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const img = document.getElementById("images");
  const image = img.value.slice(img.value.lastIndexOf("\\") + 1) || "book.jpg";
  const isRead = document.getElementById("checkbox").value;
  this.myLibrary.push(new Book(author, title, pages, image, isRead));
  myLibrary.displayBooks();
  closeModal();
};

Library.prototype.displayBooks = function () {
  shelf.innerHTML = "";
  if (this.myLibrary.length === 0) {
    shelf.innerHTML += "Library is empty";
  } else {
    for (let i = 0; i < this.myLibrary.length; i++) {
      const book = `
        <article class="book" data-title="${this.myLibrary[i].title}">
          <img src="./assets/images/${this.myLibrary[i].image}" alt="${this.myLibrary[i].image}" />
          <div class="book-deets-1 mt-10">
            <div>
              <h4>${this.myLibrary[i].title}</h4>
              <h5>${this.myLibrary[i].author}</h5>
            </div>
          </div>
          <div class="book-deets-2 mt-10">
          <a href="#" >
              <img src="./assets/icons/check.svg" alt="read" />
           </a>
           <a href="#" id="deleteBtn">
              <img src="./assets/icons/delete.svg" alt="delete" />
           </a>
          <p>${this.myLibrary[i].pageCount} pages</p>
          </div>
        </article>
    `;
      const deleteBtn = document.querySelector(`[data-title="${this.title}"`);

      shelf.innerHTML += book;
    }
  }
};

Library.prototype.deleteBook = function (title) {
  myLibrary = myLibrary.filter((item, index) => {
    item.title !== title;
  });
  myLibrary.displayBooks();
};

function closeModal() {
  modal.style.display = "none";
}

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  closeModal();
});

addbookbtn.addEventListener("click", (e) => {
  myLibrary.addBookToLibrary(e);
});

deleteBtn.addEventListener("click", (e) => {
  console.log(e);
  /* myLibrary.deleteBook(); */
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

myLibrary.displayBooks();
