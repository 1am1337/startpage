<<<<<<< HEAD
function searchEcosia() {
    const query = document.getElementById('searchInput').value;
    const url = `https://www.ecosia.org/search?method=index&q=${encodeURIComponent(query)}`;
=======
function fireSearch() {
    const searchEngine = document.getElementById('searchInput').placeholder;
    if (searchEngine === "Search DuckDuckGo...") {
        const query = document.getElementById('searchInput').value;
        const url = `https://noai.duckduckgo.com/?q=${encodeURIComponent(query)}`;
        window.location.href = url;
    } else if (searchEngine === "Search Qwant...") {
        const query = document.getElementById('searchInput').value;
        const url = `https://www.qwant.com/?q=${encodeURIComponent(query)}`;
        window.location.href = url;
    } else if (searchEngine === "Search Ecosia...") {
        const query = document.getElementById('searchInput').value;
        const url = `https://www.ecosia.org/search?method=index&q=${encodeURIComponent(query)}`;
        window.location.href = url;
    } else {
        window.location.href = `https://startpage.moyie.xyz/`;
    }
}

function searchDuckDuckGo() {
    const query = document.getElementById('searchInput').value;
    const url = `https://noai.duckduckgo.com/?q=${encodeURIComponent(query)}`;
>>>>>>> f91409453251ba191a85d3ac33b3f7b63c9a1877
    window.location.href = url;
}

document.addEventListener('keydown', function(event) {  
    if(event.key == 'Enter') {
<<<<<<< HEAD
        searchEcosia();
=======
        fireSearch();
>>>>>>> f91409453251ba191a85d3ac33b3f7b63c9a1877
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key) {
        document.getElementById('searchInput').focus();
    }
});