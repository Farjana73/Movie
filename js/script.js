$(function(){

// animation click button start

let animation_cls_btn = document.querySelector(".animation_cls_btn");
let line_one = document.querySelector(".line_one");
let line_two = document.querySelector(".line_two");
let line_three = document.querySelector(".line_three");

animation_cls_btn.addEventListener("click", function (){
    line_one.classList.toggle("rotate_1");
    line_two.classList.toggle("hide");
    line_three.classList.toggle("rotate_2");
})
// animation click button  end

//slick slider start
    $(".movie_slider").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows:false,
        centerMode:true,
        centerPadding:"45px",
        focusOnSelect:true,

        responsive: [
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                centerPadding:"0px",
                focusOnSelect:false,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                centerPadding:"0px",
                focusOnSelect:false,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                centerPadding:"0px",
                focusOnSelect:false,
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false,
                centerPadding:"0px",
                focusOnSelect:false,
              }
            },
          ]
    })
//slick slider end

// animation click button start
// animation click button  end

})