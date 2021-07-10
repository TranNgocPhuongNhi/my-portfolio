// ======================================= Mobile Navbar ==================================
const mobile_nav = document.querySelector('.header__nav-mobile');
const nav_list = document.querySelector('.header__nav-list');

mobile_nav.addEventListener('click', () => {
    nav_list.classList.toggle('mobile-nav');
})


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

// ============================================= Animation for fullname ==================================================
const fullname = document.querySelector('.header__info-fullname');
// console.log(fullname)
// fullname.forEach(fn => {
//   console.log(fn)
// })


// =========================================== To the top ===================================
const backToTop = document.querySelector('.footer__to-top');
window.addEventListener("scroll", () => {
    const offset = window.pageYOffset;
    if(offset > 80) {
        backToTop.style.display = 'block';
    }
    else {
        backToTop.style.display = 'none';
    }
})



// ===================================== Circle Process Bar ===============================

$('.skill-item').circleProgress({fill: {gradient: ["#D17CF3", "#46C7FD"]}})
.on('circle-animation-progress', function (event, progress) {
    var data_value = $(this).attr('data-value');
    $(this).find('strong').html(Math.round(data_value * 100 * progress) + '<span class="percent__skills">%</span>');
});


// ===================================== Feature slide ==================================
const prev = document.querySelector('.feature__button-prev');
const next = document.querySelector('.feature__button-next');
const featureItems = document.querySelectorAll('.feature__item');
var itemPage = Math.ceil(featureItems.length / 3);
var i=0;
var movePerItem = 104.7;
var m_320 = window.matchMedia("(min-width:320px) and (max-width:374px)");
var m_375 = window.matchMedia("(min-width:375px) and (max-width: 419px)");
var m_420 = window.matchMedia("(min-width:420px) and (max-width:520px)");
var m_521 = window.matchMedia("(min-width:521px) and (max-width:575px)");
var m_576 = window.matchMedia("(min-width:576px) and (max-width:767px)");
var m_768 = window.matchMedia("(min-width:767px) and (max-width:991px)");
var m_992 = window.matchMedia("(min-width:992px) and (max-width:1199px)");
if(m_320.matches){
    movePerItem = 105.305;
} else if(m_375.matches){
    movePerItem = 104.515;
}else if(m_420.matches){
    movePerItem = 103.8;
}else if(m_521.matches){
    movePerItem = 103.25;
}else if(m_576.matches){
    movePerItem = 103.05;
} else if(m_768.matches){
    movePerItem = 104.08;
} else if(m_992.matches){
    movePerItem = 105;
}

next.addEventListener("click",() => {
    i = i + movePerItem;
    for(var item of featureItems){
        if((i > 525) && (movePerItem == 104.08)){ i = 0}
        if((i > 420) && (movePerItem == 105 || movePerItem == 104.7)){ i = 0}
        var moveLength = "-" + i + "%";
        item.style.transform = `translateX(${moveLength})`;
    }
})

prev.addEventListener("click",() => {
    i = i - movePerItem;
    if(i < 0){ i = 0}
    for(var item of featureItems) {
        if(itemPage > 1){
            var moveLength = "-" + i + "%";
            item.style.transform = `translateX(${moveLength})`;
        }
    }
})


// ============================================= Particles.js ==================================================
particlesJS("header", {
    "particles": {
      "number": {
        "value": 180,
        "density": {
          "enable": true,
          "value_area": 777
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#D17CF3",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
