const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");

function searchGoogle() {

    const text = input.value.trim();

    if(text === "") return;

    window.open(
        "https://www.google.com/search?q=" + encodeURIComponent(text),
        "_blank"
    );
}

button.addEventListener("click", searchGoogle);

input.addEventListener("keydown", function(e){

    if(e.key === "Enter"){
        searchGoogle();
    }

});