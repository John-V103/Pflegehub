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
    { img: 'Bilder/karl.jpg', title: 'Krankenhausreform: Die Rettung der Pflege?', link: 'news/article1.html' },
    { img: 'Bilder/leh.jpg', title: 'Interview: Was braucht die Pflege Sofort!', link: 'news/article2.html' },
    { img: 'Bilder/merz.jpg', title: 'Miserabele Pflegepolitik unter Merz zu erwarten!', link: 'news/article3.html' },
    { img: 'Bilder/erb.jpg', title: 'Rettet die Erbschaftssteuer die Rente der heutigen Jugend?', link: 'news/article4.html' }
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
