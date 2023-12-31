// Variáveis para elementos do DOM
const checkButton = document.getElementById('checkButton');
const resetButton = document.getElementById('resetButton');
const resultMessage = document.getElementById('resultMessage');
const meuCabecalho = document.querySelector('#nome');
const gifContainer = document.getElementById('gifContainer'); // Nova div para conter os GIFs

// Função para limpar o formulário e o GIF container
function resetForm() {
    document.getElementById('dayInput').value = '';
    document.getElementById('monthInput').value = '';
    document.getElementById('yearInput').value = '';
    resultMessage.textContent = '';
    gifContainer.innerHTML = ''; // Limpa o conteúdo do gifContainer
}

// Função para calcular a idade e exibir o GIF correspondente
function calculateAge() {
    const day = parseInt(document.getElementById('dayInput').value);
    const month = parseInt(document.getElementById('monthInput').value);
    const year = parseInt(document.getElementById('yearInput').value);

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    let meuNome = prompt('Por favor, digite seu nome.');
    if (meuNome) {
        localStorage.setItem('nome', meuNome);
        meuCabecalho.textContent = 'Vamos verificar sua idade, ' + meuNome + ' ...';
    } else {
        meuCabecalho.textContent = ' ';
    }

    // Verifica se é maior ou igual a 18 anos e adiciona o GIF correspondente
    if (ageInYears >= 18) {
        gifContainer.innerHTML = '<iframe src="https://giphy.com/embed/rEIkMTmkU7tpNpFxbe" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/SpiderVerseMovie-spider-man-spiderverse-movie-spicer-man-across-the-spider-verse-rEIkMTmkU7tpNpFxbe">via GIPHY</a></p>';
    } else {
        gifContainer.innerHTML = '<iframe src="https://giphy.com/embed/n6Ux5rKzeXZsObXR8i" width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/sony-pictures-de-spiderman-milesmorales-spiderversefilm-n6Ux5rKzeXZsObXR8i">via GIPHY</a></p>';
    }

    if (isNaN(ageInYears)) {
        resultMessage.textContent = 'Por favor, insira uma data válida.';
    } else if (ageInYears >= 18) {
        resultMessage.textContent = 'Você é maior de idade!';
    } else {
        resultMessage.textContent = 'Você é menor de idade.';
    }
}

// Event listeners
checkButton.addEventListener('click', calculateAge);
resetButton.addEventListener('click', resetForm);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        calculateAge();
    }
});
