const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const userInput = document.getElementById('user-input');
const resultsDiv = document.getElementById('results-div');

clearBtn.addEventListener('click', () => {
    resultsDiv.innerHTML = '';
})

const checkPhone = () => {
    const phone = userInput.value;

    if(phone === '') {
        alert('Please provide a phone number');
        return
    }

    const usPhoneRegex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})([-\s]?[0-9]{3})([-\s]?[0-9]{4})$/;

    const valid = `Valid US number: ${phone}`;
    const invalid = `Invalid US number: ${phone}`;

    if(usPhoneRegex.test(phone)) {
        const paragraph = document.createElement('p');
        paragraph.classList.add('phone__result');
        paragraph.classList.add('valid');
        paragraph.textContent = valid;
        resultsDiv.insertBefore(paragraph, resultsDiv.firstChild);
    } else {
        const paragraph = document.createElement('p');
        paragraph.classList.add('phone__result');
        paragraph.classList.add('invalid');
        paragraph.textContent = invalid;
        resultsDiv.insertBefore(paragraph, resultsDiv.firstChild);
    }
}

checkBtn.addEventListener('click', checkPhone);
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      checkPhone();
    }
});  