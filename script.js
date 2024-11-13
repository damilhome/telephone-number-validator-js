const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

clearBtn.addEventListener('click', () => {
    console.log('entrou clear')
    resultsDiv.innerHTML = '';
})

checkBtn.addEventListener('click', () => {
    console.log('entrou check')
    const phone = userInput.value;

    if(phone === '') {
        alert('Please provide a phone number');
        return
    }

    const usPhoneRegex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})([-\s]?[0-9]{3})([-\s]?[0-9]{4})$/;

    const valid = `Valid US number: ${phone}`;
    const invalid = `Invalid US number: ${phone}`;

    if(usPhoneRegex.test(phone)) {
        resultsDiv.classList.remove('invalid');
        resultsDiv.classList.add('valid');
        resultsDiv.textContent = valid;
    } else {
        resultsDiv.classList.remove('valid');
        resultsDiv.classList.add('invalid');
        resultsDiv.textContent = invalid;
    }
})