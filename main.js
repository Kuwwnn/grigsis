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