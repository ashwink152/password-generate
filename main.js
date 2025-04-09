document.addEventListener("DOMContentLoaded", () => {
    const passwordOtp = document.querySelector(".password");
    const copy = document.querySelector(".copy");
    const rangeOtp = document.querySelector(".length span");
    const range = document.querySelector(".length input");
    const settings = document.querySelectorAll(".settings input"); // fixed class
    const generateBtn = document.querySelector(".generateBtn");

    const allCharacters = {
        Uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        Lowercase: "abcdefghijklmnopqrstuvwxyz",
        Numbers: "0123456789",
        Symbols: "!\"#$%&'()*+,-./:;=?@[\\]^_`{|}~"
    };

    let length = parseInt(range.value);
    let characters = "";

    range.addEventListener("input", () => {
        length = parseInt(range.value);
        rangeOtp.textContent = length;
    });

    settings.forEach(setting => {
        setting.addEventListener("click", ev => {
            let target = ev.target;
            let character = allCharacters[target.id];

            if (target.checked) {
                characters += character;
            } else if (characters.includes(character)) {
                characters = characters.replace(character, "");
            }
        });
    });

    generateBtn.addEventListener("click", () => {
        if (characters) {
            let password = "";
            for (let i = 0; i < length; i++) {
                password += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            passwordOtp.textContent = password;
        }
    });
    copy.addEventListener("click", () => {
        const text = passwordOtp.textContent;
        if (text) {
            navigator.clipboard.writeText(text).then(() => {
                alert("Password copied to clipboard!");
            });
        }
    });
    updateCharacters();
});