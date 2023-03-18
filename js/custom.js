
let carousel = document.querySelector(".carouse");
let back = document.querySelector(".back");
let next = document.querySelector(".next");
let current = 0;
let cellCount = 6;

const rotateCarousel = () => {
  const angle = current / cellCount * -360;
  carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)';
  carousel.style.transition = 'all 0.75s ease-in-out';
}

back.addEventListener("click", () => {
  current--;
  rotateCarousel();
})

next.addEventListener("click", () => {
  current++;
  rotateCarousel();
})
// $(document).ready(function() {


//     var $grid = $(".ad").isotope({
//         // options
//     });
//     // filter items on button click
//     $(".filter-button-group").on("click", "option", function() {
//         var filterValue = $(this).attr("data-filter");
//         $grid.isotope({ filter: filterValue });
//     });

// });
var $grid = $('.boxes').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter on select change
$('.filters-select').on( 'change', function() {
  // get filter value from option value
  var filterValue = this.value;
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// (function ($) {
//     $(document).ready( function()  {
//         var $grid = $('.grid').isotope({
//             itemSelector: '.grid-item',
//             layoutMode: 'cellsByRow',
//             cellsByRow: {
//                 columnWidth: 300,
//                 rowHeight: 375
//             },
//         });
//     }) 
// })( jQuery );





