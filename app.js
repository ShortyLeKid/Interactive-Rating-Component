const app = {

    init: () => {
        app.eventListeners();
    },

    eventListeners: () => {

        const allOptions = document.querySelectorAll('.option');
        for (const iterator of allOptions) {
            iterator.addEventListener('click', app.handleSelectedItem)
        }

        const submitBtn = document.querySelector('#submit-btn');
        submitBtn.addEventListener('click', app.handleFormSubmit);
    },

    handleSelectedItem: (event) => {
        const allOptions = document.querySelectorAll('.option');
        for (const iterator of allOptions) {
            iterator.classList.remove('selected')
        }

        const clickedOption = event.target;
        clickedOption.classList.add('selected');

    },

    handleFormSubmit: () => {

        const selectedOption = document.querySelector('.option.selected');
        const errorMessage = document.querySelector('#error-message');

        if (!selectedOption) {
            errorMessage.style.display = 'block';
            return;
        }

        const formDiv = document.querySelector('#form');
        formDiv.classList.add('hidden');

        const resultDiv = document.querySelector('#result');
        resultDiv.classList.remove('hidden');

        const selectedValue = selectedOption.dataset.value;
        const resultParagraph = document.querySelector('#selected-result');
        resultParagraph.textContent = `You selected ${selectedValue} out of 5`;
    },


}

document.addEventListener('DOMContentLoaded', app.init);