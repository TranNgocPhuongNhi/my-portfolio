


// ===================================== Scrolling nav ==================================

const nav = document.querySelector("nav");
window.addEventListener("scroll",() => {
    const offset = window.pageYOffset;
    if(offset > 20) {
        nav.classList.add('scroll-nav');
    }
    else {
        nav.classList.remove('scroll-nav');
    }
})


// ===================================== Circle Process Bar ===============================

$('.skill-item').circleProgress({fill: {gradient: ["red", "orange"]}})
.on('circle-animation-progress', function (event, progress) {
    var data_value = $(this).attr('data-value');
    $(this).find('strong').html(Math.round(data_value * 100 * progress) + '<span class="percent__skills">%</span>');
});
