let buttonChange = document.querySelector(".js-buttonChange");
let buttonHide = document.querySelector(".js-buttonHide");
let main = document.querySelector(".main");
let table = document.querySelector("table");


main.classList.add("newBackground");

buttonChange.addEventListener("click", () => {
    main.classList.toggle("newBackground")
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
