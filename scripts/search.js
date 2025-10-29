function searchEcosia() {
    const query = document.getElementById('searchInput').value;
    const url = `https://www.ecosia.org/search?method=index&q=${encodeURIComponent(query)}`;
    window.location.href = url;
}

document.addEventListener('keydown', function(event) {
    if(event.key == 'Enter') {
        searchEcosia();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key) {
        document.getElementById('searchInput').focus();
    }
});