const app = {

    init: () => {
        console.log("app.init");
        app.eventListeners();
    },

    eventListeners: () => {

        const allOptions = document.querySelectorAll('.option');
        for (const iterator of allOptions) {
            iterator.addEventListener('click', app.handleSelectedItem)
        }

    },

    handleSelectedItem: (event) => {
        const allOptions = document.querySelectorAll('.option');
        for (const iterator of allOptions) {
            iterator.classList.remove('selected')
        }

        const clickedOption = event.target;
        console.log(clickedOption);

        clickedOption.classList.add('selected');

    }
}

document.addEventListener('DOMContentLoaded', app.init);