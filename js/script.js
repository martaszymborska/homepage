let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let hideTableButton = document.querySelector(".js-hideTableButton");
let header = document.querySelector(".header");
let table = document.querySelector("table");


header.classList.add("newBackground");

changeBackgroundButton.addEventListener("click", () => {
    header.classList.toggle("newBackground")
        ();
})




hideTableButton.addEventListener("click", () => {
    table.classList.toggle("hidden");

    hideTableButton.innerText = table.classList.contains("hidden") ? "Pokaż tabelę" : "Ukryj tabelę";
});
