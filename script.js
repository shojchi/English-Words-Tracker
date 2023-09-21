const headerTimeEl = document.getElementById('header-time');
const submitNewWordButton = document.getElementById('submit-new-word');
const newWordField = document.getElementById('words-input');
const wordsListEl = document.getElementById('words-list');
const testArr = [
    { id: 1, word: 'narrow', dateAdded: '20/09/2023' },
    { id: 2, word: 'seamlessly', dateAdded: '21/09/2023' },
    { id: 3, word: 'go forth', dateAdded: '22/09/2023' },
    { id: 4, word: 'strum', dateAdded: '23/09/2023' },
    { id: 5, word: 'bid you adieu', dateAdded: '23/09/2023' }
];


submitNewWordButton.addEventListener("click", () => {
    if (newWordField.value !== '') {
        const currentDate = new Date().toLocaleDateString();
        testArr.push({ id: null, word: newWordField.value, dateAdded: currentDate });

        wordsListEl.innerHTML += `<li>${newWordField.value}</li>`;
        newWordField.value = '';
    } else {
        alert('Bruhh... the field is empty!')
    }
});

function setCurrentTime() {
    const currentTime = new Date().toLocaleString();
    headerTimeEl.textContent = 'Hello! Today is: ' + currentTime;

    setTimeout(setCurrentTime, 1000);
}
setCurrentTime();

function renderWords() {
    wordsListEl.innerHTML = '';

    for (el of testArr) {
        wordsListEl.innerHTML += `<li>${el.word}</li>`;
    }
}
renderWords();