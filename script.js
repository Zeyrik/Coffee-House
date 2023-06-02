window.addEventListener('click', function (event) { 
    const nav = document.querySelector('ul'),
    navLinks = document.querySelectorAll('.link'),
    btn = document.querySelector('.button-switch'),
    scrollHidden = document.querySelector('body');
    let itemBlock;
    if (event.target.dataset.btn === 'close') {
        btn.setAttribute('name', 'close');
        nav.classList.toggle('translate-x-full');
        scrollHidden.classList.toggle('overflow-hidden');
    }

    for (let link of navLinks) {
        if (event.target === link) {
            btn.setAttribute('name', 'menu');
            nav.classList.remove('translate-x-full');
            scrollHidden.classList.remove('overflow-hidden');
        }
    }

    if (nav.classList.contains("translate-x-full") === false) {
        btn.setAttribute('name', 'menu');
    }
    
    if(event.target.dataset.btn === 'block' || event.target.dataset.div === 'modal'|| event.target.dataset.btn === 'closeCard'){
        const itemCard = event.target.closest('.card');
        itemBlock = itemCard.querySelector('[data-div]');
        itemBlock.classList.toggle("opacity-100");
        itemBlock.classList.toggle("left-0");
        scrollHidden.classList.toggle('overflow-hidden');
        }

})
