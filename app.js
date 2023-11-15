const addAlbumBtn = document.querySelector(".add-album-btn");
addAlbumBtn.addEventListener("click", ()=> {
    const displayForm = document.querySelector("#new-album-form");
    displayForm.style.display = "block";
})
const cancelBtn = document.querySelector(".cancelBtn");
cancelBtn.addEventListener("click", ()=> {
    displayForm.style.display = "none";
})