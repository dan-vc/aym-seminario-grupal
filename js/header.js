document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#toggle-header').addEventListener('click', () => {
        document.querySelector('.header-mobile').classList.add('open');

        const backdrop = document.createElement('div');
        backdrop.id = "backdrop";
        document.body.appendChild(backdrop);


        backdrop.addEventListener('click', () => {
            document.querySelector('.header-mobile').classList.remove('open');
            backdrop.remove();
        })
    })
})


