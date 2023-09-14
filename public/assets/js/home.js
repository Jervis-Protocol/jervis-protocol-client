var swiper = new Swiper(".swiper-popular", {
    slidesPerView: 1,
    spaceBetween: 12,
    keyboard: {
        enabled: true,
    },
    loop : false,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 16,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
});

var cSelect = document.querySelectorAll("[data-choices]");
cSelect.forEach(el => {
    const t = {
        ...el.dataset.choices ? JSON.parse(el.dataset.choices) : {},
        ...{
            classNames: {
                containerInner: el.className,
                input: "form-control",
                inputCloned: "form-control-sm",
                listDropdown: "dropdown-menu",
                itemChoice: "dropdown-item",
                activeState: "show",
                selectedState: "active"
            }
        }
    }
    new Choices(el, t)
});

$('[data-countdown]').each(function () {
    var $this = $(this),
        finalDate = $(this).data('countdown');

    $this.countdown(finalDate, function (event) {
        var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        var $this = $(this).html(event.strftime(
            '<div class="me-4"><h2 class="mb-0">%D</h2><p class="fw-bold mb-0 opacity-50">Days</p></div>' +
            '<div class="me-4"><h2 class="mb-0">%H</h2><p class="fw-bold mb-0 opacity-50">Hr</p></div>' +
            '<div class="me-4"><h2 class="mb-0">%M</h2> <p class="fw-bold mb-0 opacity-50">Min</p></div>' +
            '<div><h2 class="mb-0">%S</h2> <small class="fw-bold mb-0 opacity-50">Sec</small></div>'
        ));
    });
});
