
{
    const hideTableButton = document.querySelector(".js-hideTableButton");
    const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");

    const hideTable = () => {
        const table = document.querySelector("table");
        table.classList.toggle("hidden");
        hideTableButton.innerText = table.classList.contains("hidden") ? "Pokaż tabelę" : "Ukryj tabelę";
    };



    const toggleBackground = () => {

        const header = document.querySelector(".header");
        header.classList.add("newBackground");
        header.classList.toggle("newBackground");
    };
    
    const init = () => {

        hideTableButton.addEventListener("click", hideTable);
        changeBackgroundButton.addEventListener("click", toggleBackground);
    }
    init();
}















