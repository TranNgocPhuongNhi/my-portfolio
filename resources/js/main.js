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


// ===================================== Products Pagination ==================================
const products_content = document.querySelector('.products__content');
const numberPage = document.querySelector('.number-page');
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')

const products = [
  {
    id: 1,
    link: 'https://tranngocphuongnhi.github.io/helium/',
    image: 'resources/img/bg-1.png',
    title: 'Helium',
  },
  {
    id: 2,
    link: 'https://tranngocphuongnhi.github.io/find-house/',
    image: 'resources/img/bg-2.png',
    title: 'Find House',
  },

]

const itemPerPage = 6
let currentPage = 1
let start = 0
let end = itemPerPage

let totalPages = Math.ceil(products.length / itemPerPage)

function getCurrentPage(currentPage) {
  start = (currentPage - 1) * itemPerPage
  end = currentPage * itemPerPage;
}

function renderProducts() {
  html = ''
  const content = products.map((item, index) => {
      if(index >= start && index < end) {
        html += '<a href="'+ item.link +'" class="product-item">'
        html += '<div class="product-img">'
        html += '<img src="'+ item.image +'" alt="img">'
        html += '<h3>'+ item.title +'</h3>'
        html += '</div>'
        html += '<p class="product-name">'+ item.title +'</p>'
        html += '</a>'
          return html;
      }
  })
  products_content.innerHTML = html;
}
renderProducts()
renderListPage()

function renderListPage() {
  let html = '';
  html += `<li class="pagination-item pagination-item--active">${1}</li>`
  for(let i=2; i <= totalPages; i++) {
    html += `<li class="pagination-item">${i}</li>`
  }
  numberPage.innerHTML = html;
}

function changePage() {
  const currentPages = document.querySelectorAll('.number-page li')
  for(let i = 0; i < currentPages.length; i++) {
    currentPages[i].addEventListener('click', () => {
      let value = i + 1
      currentPage = value
      $('.number-page li').removeClass('pagination-item--active')
      currentPages[i].classList.add('pagination-item--active')
      if(currentPage > 1 && currentPage < totalPages) {
        btnPrev.classList.remove('btn-inactive')
        btnNext.classList.remove('btn-inactive')
      }
      if(currentPage === 1) {
        btnPrev.classList.add('btn-inactive')
      }
      if(currentPage === totalPages) {
        btnNext.classList.add('btn-inactive')
      }
      if(currentPage === totalPages && btnPrev.classList.contains('btn-inactive')) {
        btnPrev.classList.remove('btn-inactive')
      }
      if(currentPage === 1 && btnNext.classList.contains('btn-inactive')) {
        btnNext.classList.remove('btn-inactive')
      }
      getCurrentPage(currentPage)
      renderProducts()
    })
  }
}
changePage()

btnNext.addEventListener('click', () => {
  currentPage++
  if(currentPage > totalPages) {
      currentPage = totalPages;
  }
  if(currentPage === totalPages) {
    btnNext.classList.add('btn-inactive')
  }
  btnPrev.classList.remove('btn-inactive')
  $('.number-page li').removeClass('pagination-item--active')
  $(`.number-page li:eq(${currentPage-1})`).addClass('pagination-item--active')
  getCurrentPage(currentPage)
  renderProducts()
})

btnPrev.addEventListener('click', () => {
  currentPage--
  if(currentPage <= 1) {
      currentPage = 1;
  }
  if(currentPage === 1) {
    btnPrev.classList.add('btn-inactive')
  }
  btnNext.classList.remove('btn-inactive')
  $('.number-page li').removeClass('pagination-item--active')
  $(`.number-page li:eq(${currentPage-1})`).addClass('pagination-item--active')
  getCurrentPage(currentPage)
  renderProducts()
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
  
