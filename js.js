document.querySelectorAll("#element1, #element2, #element3, #element4, #element5, #element6, #element7, #element8, #element9, #element10, #element11, #patroon, #rits, #rits2").forEach(function (element) {
    element.addEventListener("click", function () {
        element.classList.toggle("is-active");
    });
});

document.querySelectorAll(".ball, .ball2, .ball3").forEach(function (element) {
    element.addEventListener('click', function () {
        console.log(element);
        element.classList.toggle('is-active');
    })
})


document.onkeyup = function (e) {
    if (e.keyCode === 65) {
        document.getElementById("element1").classList.toggle("is-active");
    }
    if (e.keyCode === 66) {
        document.getElementById("element2").classList.toggle("is-active");
    }
    if (e.keyCode === 67) {
        document.getElementById("element3").classList.toggle("is-active");
    }
    if (e.keyCode === 68) {
        document.getElementById("rits").classList.toggle("is-active");
    }
    if (e.keyCode === 69) {
        document.querySelector(".ball").classList.toggle("is-active");
    }
    if (e.keyCode === 69) {
        document.querySelector(".ball2").classList.toggle("is-active");
    }
    if (e.keyCode === 69) {
        document.querySelector(".ball3").classList.toggle("is-active");
    }
    if (e.keyCode === 70) {
        document.getElementById("element6").classList.toggle("is-active");
    }
    if (e.keyCode === 71) {
        document.getElementById("element7").classList.toggle("is-active");
    }
    if (e.keyCode === 72) {
        document.getElementById("patroon").classList.toggle("is-active");
    }
    if (e.keyCode === 73) {
        document.getElementById("element9").classList.toggle("is-active");
    }
    if (e.keyCode === 74) {
        document.getElementById("element10").classList.toggle("is-active");
    }
    if (e.keyCode === 75) {
        document.getElementById("element11").classList.toggle("is-active");
    }
};

//document.onkeyup = function (e) {
//    if (e.keyCode === 68) {
//        document.querySelectorAll("#rits2, #rits1").classList.toggle("is-active");
//    }
//};
//
//var animate = document.getElementById("rits2");
//document.addEventListener('keypress', function (e) {
//    if (e.keyCode === 68) {
//        animate.classList.toggle("is-active");
//    }
//})