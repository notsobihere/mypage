const subtabLinks = document.querySelectorAll('.subtab-link');
const subtabContents = document.querySelectorAll('.subtab-content');

subtabLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('data-target');

        subtabLinks.forEach(tabLink => {
            tabLink.classList.remove('active');
        });
        subtabContents.forEach(content => {
            content.classList.remove('active');
        });

        this.classList.add('active');
        document.getElementById(targetId).classList.add('active');
    });
});