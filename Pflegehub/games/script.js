function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '250px';
    }
}

// Artikel-Daten simulieren
const articles = [
    { img: 'news/article1.jpg', title: 'Artikel 1', link: 'news/article1.html' },
    { img: 'news/article2.jpg', title: 'Artikel 2', link: 'news/article2.html' },
    { img: 'news/article3.jpg', title: 'Artikel 3', link: 'news/article3.html' }
];

let currentArticleIndex = 0;

function displayArticle() {
    const container = document.getElementById('article-container');
    const article = articles[currentArticleIndex];
    container.innerHTML = `
        <div class="article" onclick="location.href='${article.link}'">
            <img src="${article.img}" alt="${article.title}">
            <h3>${article.title}</h3>
        </div>
    `;
    currentArticleIndex = (currentArticleIndex + 1) % articles.length;
}

setInterval(displayArticle, 5000); // Wechseln Sie die Artikel alle 5 Sekunden

window.onload = function() {
    displayArticle();
};
