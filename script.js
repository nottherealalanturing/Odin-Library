const shelf = document.querySelector("#shelf");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".add-btn");
const close = document.getElementsByClassName("close-modal")[0];
const addbookbtn = document.getElementById("submit");

const myLibrary = new Library();

function Book(author, title, pageCount, image) {
  this.author = author;
  this.title = title;
  this.pageCount = pageCount;
  this.image = image;
}

function Library() {}

Library.prototype.myLibrary = [];

Library.prototype.addBookToLibrary = function (e) {
  e.preventDefault();
  const author = document.getElementById("title").value;
  const title = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const img = document.getElementById("img");
  const image = img.value.slice(img.value.lastIndexOf("\\") + 1);
  const isRead = document.getElementById("checkbox").value;
  this.myLibrary.push(new Book(author, title, pages, image));
  myLibrary.displayBooks();
};

Library.prototype.displayBooks = function () {
  shelf.innerHTML = "";
  if (this.myLibrary.length === 0) {
    shelf.innerHTML += "Library is empty";
  } else {
    for (let i = 0; i < this.myLibrary.length; i++) {
      const book = `
    <article class="book">
          <img src="./assets/images/${this.myLibrary[i].image}" alt="${this.myLibrary[i].image}" />
          <div class="book-deets mt-10">
            <div>
              <h4>${this.myLibrary[i].title}</h4>
              <h5>${this.myLibrary[i].author}</h5>
            </div>
            <button type="button">
              <img src="./assets/icons/star-plus-outline.svg" alt="read" />
            </button>
          </div>
          <p class="page-count">${this.myLibrary[i].pageCount} pages</p>
        </article>
    `;
      shelf.innerHTML += book;
    }
  }
};

modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

addbookbtn.addEventListener("click", (e) => {
  myLibrary.addBookToLibrary(e);
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

myLibrary.displayBooks();
