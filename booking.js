document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        document.body.style.backgroundImage = `url(${this.getAttribute('data-bg')})`;
        document.getElementById('title').innerText = this.getAttribute('data-title');

        let detailsList = this.getAttribute('data-details').split('\n');
        let detailsHTML = detailsList.map(detail => `<li>${detail}</li>`).join('');
        document.getElementById('details').innerHTML = detailsHTML;

        let logoSrc = this.getAttribute('data-logo');
        if (logoSrc) {
            document.getElementById('logo').src = logoSrc;
            document.getElementById('logo').style.display = "block";
        } else {
            document.getElementById('logo').style.display = "none";
        }
    });
});
