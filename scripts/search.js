function searchDuckDuckGo() {
    const query = document.getElementById('searchInput').value;
    const url = `https://noai.duckduckgo.com/?q=${encodeURIComponent(query)}`;
    window.location.href = url;
}

function searchEcosia() {
    const query = document.getElementById('searchInput').value;
    const url = `https://www.ecosia.org/search?method=index&q=${encodeURIComponent(query)}`;
    window.location.href = url;
}

function searchQwant() {
    const query = document.getElementById('searchInput').value;
    const url = `https://www.qwant.com/?q=${encodeURIComponent(query)}`;
    window.location.href = url;
}

document.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        searchDuckDuckGo();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key) {
        document.getElementById('searchInput').focus();
    }
});