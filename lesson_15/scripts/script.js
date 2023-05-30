document.getElementById('myForm').addEventListener('submit', function (event) {
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var agreementCheckbox = document.getElementById('agreement');

    var isValid = true;
    var errorMessage = "";

    // Проверка на пустые поля
    if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.classList.add('error');
        errorMessage += "Поле 'Имя' не может быть пустым.<br>";
    } else {
        nameInput.classList.remove('error');
    }

    if (phoneInput.value.trim() === '') {
        isValid = false;
        phoneInput.classList.add('error');
        errorMessage += "Поле 'Телефон' не может быть пустым.<br>";
    } else {
        phoneInput.classList.remove('error');
    }

    // Проверка на ввод только цифр в поле телефона
    if (!/^\d+$/.test(phoneInput.value.trim())) {
        isValid = false;
        phoneInput.classList.add('error');
        errorMessage += "Поле 'Телефон' должно содержать только цифры.<br>";
    } else {
        phoneInput.classList.remove('error');
    }

    // Проверка активации чекбокса
    if (!agreementCheckbox.checked) {
        isValid = false;
        agreementCheckbox.classList.add('error');
        errorMessage += "Необходимо согласиться с условиями.<br>";
    } else {
        agreementCheckbox.classList.remove('error');
    }

    if (!isValid) {
        event.preventDefault();
        document.getElementById('errorMessage').innerHTML = errorMessage;
        document.getElementById('myModal').style.display = "block";
    }
});

document.querySelector('.modal-close').addEventListener('click', function () {
    document.getElementById('myModal').style.display = "none";
});