document.getElementById('showTimeBtn').addEventListener('click', function() {
    const now = new Date();
    document.getElementById('dateTimeDisplay').textContent = 'Fecha y Hora: ' + now.toLocaleString();
});