let buttonChange = document.querySelector(".js-buttonChange");
let buttonHide = document.querySelector(".js-buttonHide");
let header = document.querySelector(".header");
let table = document.querySelector("table");


header.classList.add("newBackground");

buttonChange.addEventListener("click", () => {
    header.classList.toggle("newBackground")
        ();
})


buttonHide.addEventListener("click", () => {
    table.classList.toggle("hidden");

    if (table.classList.contains("hidden")) {
        buttonHide.innerText = "Pokaż tabelę";
    }
    else {
        buttonHide.innerText = "Ukryj tabelę";

    }

});
