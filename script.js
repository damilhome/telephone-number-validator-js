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

    const usPhoneRegex = /^(1)?(\s?\(?[0-9][0-9][0-9]\)?)([-\s]?[0-9][0-9][0-9])([-\s]?[0-9][0-9][0-9][0-9])$/

    const valid = `Valid US number:<br>${phone}`;
    const invalid = `Invalid US number:<br>${phone}`;

    if(usPhoneRegex.test(phone)) {
        const paragraph = document.createElement('p');
        paragraph.classList.add('phone__result');
        paragraph.classList.add('valid');
        paragraph.innerHTML = valid;
        resultsDiv.appendChild(paragraph);
    } else {
        const paragraph = document.createElement('p');
        paragraph.classList.add('phone__result');
        paragraph.classList.add('invalid');
        paragraph.innerHTML = invalid;
        resultsDiv.appendChild(paragraph);
    }
})