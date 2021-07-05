


// ===================================== Scrolling nav ==================================

const nav = document.querySelector("nav");
window.addEventListener("scroll",() => {
    const offset = window.pageYOffset;
    if(offset > 20) {
        nav.classList.add('nav-scroll');
    }
    else {
        nav.classList.remove('nav-scroll');
    }
})


// =========================================== To the top ===================================
const backToTop = document.querySelector('.footer__to-top');
window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    if(offset > 30) {
        backToTop.style.display = 'block';
    }
    else {
        backToTop.style.display = 'none';
    }
})



// ===================================== Circle Process Bar ===============================

$('.skill-item').circleProgress({fill: {gradient: ["red", "orange"]}})
.on('circle-animation-progress', function (event, progress) {
    var data_value = $(this).attr('data-value');
    $(this).find('strong').html(Math.round(data_value * 100 * progress) + '<span class="percent__skills">%</span>');
});

// =============================================  ====================================================