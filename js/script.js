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

    if (table.classList.contains("hidden")) {
        hideTableButton.innerText = "Pokaż tabelę";
    }
    else {
        hideTableButton.innerText = "Ukryj tabelę";

    }

});
