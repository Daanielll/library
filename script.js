let myLibrary = [];
const addBookDiv = document.querySelector(".add-book");
const addBookBtn = document.querySelector(".btn");
const closebtn = document.querySelector(".closebtn");
const container = document.querySelector(".container");
const form = document.querySelector(".form");
const submitBtn = document.querySelector("#submitBtn");
addBookBtn.addEventListener("click", () => {
  addBookDiv.classList.add("active");
});
closebtn.addEventListener("click", () => {
  addBookDiv.classList.remove("active");
});
form.addEventListener("submit", () => {
  addBookToLibrary();
  while (container.firstChild) container.removeChild(container.firstChild);
  displayBooks();
});
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () =>
    `${title} by ${author}, ${pages}, ${read ? "read" : "not read yet"}`;
}

function addBookToLibrary() {
  const title = document.getElementById("addTitle").value;
  const author = document.getElementById("addAuthor").value;
  const pages = document.getElementById("addPages").value;
  const read = document.getElementById("readit").checked;
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  for (let i in myLibrary) {
    const card = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const readbtn = document.createElement("button");
    const removebtn = document.createElement("button");
    title.textContent = `"${myLibrary[i].title}"`;
    author.textContent = `${myLibrary[i].author}`;
    pages.textContent = `${myLibrary[i].pages} Pages`;
    card.classList.add("card");
    readbtn.textContent = myLibrary[i].read ? "Read" : "Not read";
    if (!myLibrary[i].read) readbtn.style.cssText = "background:red;";
    else readbtn.style.cssText = "background:green;";
    removebtn.textContent = "Remove";
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(readbtn);
    card.appendChild(removebtn);
    container.appendChild(card);
    removebtn.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      while (container.firstChild) container.removeChild(container.firstChild);
      displayBooks();
    });
    readbtn.addEventListener("click", () => {
      myLibrary[i].read = myLibrary[i].read ? false : true;
      if (!myLibrary[i].read) readbtn.style.cssText = "background:red;";
      else readbtn.style.cssText = "background:green;";
      readbtn.textContent = myLibrary[i].read ? "Read" : "Not read";
    });
  }
}
