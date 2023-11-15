const myLibrary = [];

class Album {
    constructor(artist, album, year, genre) {
        this.artist = artist
        this.album = album
        this.year = year
        this.genre = genre
    }
}

const displayForm = document.querySelector("#new-album-form");
const addAlbumBtn = document.querySelector(".add-album-btn");
addAlbumBtn.addEventListener("click", ()=> {
    displayForm.style.display = "block";
})

const cancelBtn = document.querySelector(".cancelBtn");
cancelBtn.addEventListener("click", ()=> {
    displayForm.style.display = "none";
})

displayForm.addEventListener("submit", function(event) {
    event.preventDefault();
    addAlbumToLibrary();
})

function addAlbumToLibrary() {
    let artist = document.querySelector("#artist").value;
    let album = document.querySelector("#album").value;
    let year = document.querySelector("#year").value;
    let genre = document.querySelector("#genre").value;
    let newAlbum = new Album(artist, album, year, genre);
    myLibrary.push(newAlbum);
    render();
}

function render() {
    let library = document.querySelector("#library")
    library.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let myAlbum = myLibrary[i];
        let myAlbumEl = document.createElement("div");
        myAlbumEl.innerHTML = 
    `<div class="album">
    <div>${myAlbum.artist}</div>
    <div>${myAlbum.album}</div>
    <div>${myAlbum.year}</div>
    <div>${myAlbum.genre}</div>
    </div>`
    library.appendChild(myAlbumEl);
    }
}