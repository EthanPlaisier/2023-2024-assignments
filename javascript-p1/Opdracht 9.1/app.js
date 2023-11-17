function showAgePopup() {
    document.getElementById('Overlay').style.display = 'block';
    document.getElementById('agePopup').style.display = 'block';
}

function checkAge() {
    var age = document.getElementById('ageInput').value;

    if (age < 18) {
        document.getElementById('AgeRestriction').style.display = 'block';
    } else {
        window.location.href = "https://www.youtube.com";
    }
}