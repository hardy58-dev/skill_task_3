const View = {
    progressText: document.getElementById("progress-text"),
    questionText: document.getElementById("question-text"),
    flagImage: document.getElementById("flag-image"),
    /**
     * @type {HTMLFormElement}
    */
    form: document.getElementById("option-form"),

    showNotification: function (message, type) {
        if (type !== 'success' && type !== 'error') return;
        const el = document.createElement("div");
        if (type === "success") {
            el.classList.add("green-notice", "notify-slide");
        }
        else if (type === "error") {
            el.classList.add("red-notice", "notify-slide");
        }
        el.innerText = message;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
    },

    /**
     * Displaying the question on the view.
     *
     * @param {string} questionCountry The question country.
     * @param {string} countryCode The country code for the flg image.
     * @param {string} index The current question id.
    */
    updateView: function (questionCountry, countryCode, index) {
        this.questionText.innerText = questionCountry;
        flagImage.src = ```https://flagcdn.com/${countryCode}.svg```;
        this.flagImage.onerror = () => {

        }
        this.progressText.innerText = ```${index} / 10```
    },

    /**
     * Reset the form. Clear the selection.
    */
    clearForm: function () {
        this.form.reset();
    },
}
