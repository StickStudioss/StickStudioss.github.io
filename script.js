document.getElementById('toggleSidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('overlay');

    if (sidebar.style.transform === 'translateX(0px)') {
        sidebar.style.transform = 'translateX(-250px)';
        overlay.style.display = 'none';
    } else {
        sidebar.style.transform = 'translateX(0px)';
        overlay.style.display = 'block';
    }
});

document.getElementById('overlay').addEventListener('click', function() {
    document.getElementById('sidebar').style.transform = 'translateX(-250px)';
    this.style.display = 'none';
});

document.getElementById('creditSidebar').addEventListener('click', function() {
    window.location.href = 'credits';
});