function openModal() {
    document.getElementById('myModal').style.display = 'flex';
}


function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}


window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target === modal) {
        closeModal();
    }
}

function toggleDropdown(element) {
    element.classList.toggle('active');
}

// Закрытие меню при клике вне его
document.addEventListener('click', function (event) {
    const selector = document.querySelector('.language-selector');
    if (!selector.contains(event.target)) {
        selector.classList.remove('active');
    }
});