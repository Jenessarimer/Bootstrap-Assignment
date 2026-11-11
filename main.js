let button = document.querySelector("#button");
let img1 =document.querySelector("#img1");
let img2 =document.querySelector("#img2");
let img3 = document.querySelector("#img3");

button.addEventListener("click", () =>{
    img1.classList.remove("bg-danger");
    img1.classList.add("bg-success");
    img2.classList.remove("bg-warning");
    img2.classList.add("bg-success");
    img3.classList.remove("bg-info");
    img3.classList.add("bg-success");
});