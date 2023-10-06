const headerTimeEl = document.getElementById('header-time');
const submitNewWordButton = document.getElementById('submit-new-word');
const newWordField = document.getElementById('words-input');
const wordsListEl = document.getElementById('words-list');
const testWordsArr = [
    { id: 1, word: 'narrow', dateAdded: '20/09/2023' },
    { id: 2, word: 'seamlessly', dateAdded: '21/09/2023' },
    { id: 3, word: 'go forth', dateAdded: '22/09/2023' },
    { id: 4, word: 'strum', dateAdded: '23/09/2023' },
    { id: 5, word: 'bid you adieu', dateAdded: '23/09/2023' }
];
const testTranscriptionArr = [
    { id: 1, word: "|ˈnærəʊ|", dateAdded: '20/09/2023' },
    { id: 2, word: "test2", dateAdded: '21/09/2023' },
    { id: 3, word: "test3", dateAdded: '22/09/2023' },
    { id: 4, word: "test4", dateAdded: '23/09/2023' },
    { id: 5, word: "test5", dateAdded: '23/09/2023' }
];
const testTranslateArr = [
    { id: 1, translation: '', dateAdded: '20/09/2023' },
    { id: 2, translation: 'seamlessly', dateAdded: '21/09/2023' },
    { id: 3, translation: 'go forth', dateAdded: '22/09/2023' },
    { id: 4, translation: 'strum', dateAdded: '23/09/2023' },
    { id: 5, translation: 'bid you adieu', dateAdded: '23/09/2023' }
];


submitNewWordButton.addEventListener("click", () => {
    if (newWordField.value !== '') {
        const currentDate = new Date().toLocaleDateString();
        testWordsArr.push({ id: null, word: newWordField.value, dateAdded: currentDate });

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

    for (el of testWordsArr) {
        wordsListEl.innerHTML += `<li>${el.word}</li>`;
    }
}
renderWords();