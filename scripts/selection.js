let cookieValue = document.cookie

if (cookieValue === "engine=duckduckgo") {
    selectDuckDuckGo();
} else if (cookieValue === "engine=qwant") {
    selectQwant();
} else if (cookieValue === "engine=ecosia") {
    selectEcosia();
} else {
    console.log(cookieValue);
}

function selectDuckDuckGo() {
    document.getElementById('searchInput').placeholder = "Search DuckDuckGo...";
    document.cookie = "engine=duckduckgo";
    hide();
}

function selectQwant() {
    document.getElementById('searchInput').placeholder = "Search Qwant...";
    document.cookie = "engine=qwant";
    hide();
}

function selectEcosia() {
    document.getElementById('searchInput').placeholder = "Search Ecosia...";
    document.cookie = "engine=ecosia";
    hide();
}