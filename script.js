const emojis = document.querySelectorAll('.emoji-list li');
const descriptions = ['Smile', 'Heart', 'Body', 'Family', 'Animals & Nature', 'Food & Drink', 'Activities', 'Travel & Places', 'Shop', 'Fire', 'Flag'];


document.getElementById('sidebar').addEventListener('mouseenter', () => {
    emojis.forEach((item, index) => {
        const description = descriptions[index];
        item.innerHTML = `<span>${item.innerHTML}</span><span>${description}</span>`;
    });
});

document.getElementById('sidebar').addEventListener('mouseleave', () => {
    emojis.forEach(item => {
        item.innerHTML = item.firstElementChild.innerHTML;
    });
});


const emojiContainer = document.getElementById("emojiContainer");

window.addEventListener('load', (event) => {

    emojiList.forEach(item => {

        const card = document.createElement('div');
        card.classList.add('card');

        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = item.emoji;

        const description = document.createElement('p');
        description.classList.add('emoji-desc');
        description.textContent = item.description;

        card.appendChild(emoji);
        card.appendChild(description);
        emojiContainer.appendChild(card);
    });
});



const searchInput = document.querySelector('.search-input');

function renderEmojiList(filteredEmojis) {
    emojiContainer.innerHTML = ''; // Clear previous results

    filteredEmojis.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.textContent = item.emoji;

        const description = document.createElement('p');
        description.classList.add('emoji-desc');
        description.textContent = item.description;

        card.appendChild(emoji);
        card.appendChild(description);
        emojiContainer.appendChild(card);
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredEmojis = emojiList.filter(item =>
        item.description.toLowerCase().includes(searchTerm) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        item.aliases.some(alias => alias.toLowerCase().includes(searchTerm))
    );

    renderEmojiList(filteredEmojis);
});

emojis.forEach((emoji, index) => {
    emoji.addEventListener('click', () => {
        const searchTerm = descriptions[index].toLowerCase();

        const filteredEmojis = emojiList.filter(item =>
            (item.description.toLowerCase().includes(searchTerm) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                item.aliases.some(alias => alias.toLowerCase().includes(searchTerm))) ||
            item.category.toLowerCase().includes(searchTerm)
        );

        renderEmojiList(filteredEmojis);
    });
});
