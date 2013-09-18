var MINI = require('minified'); 
var $ = MINI.$, $$ = MINI.$$, EE = MINI.EE;

$(function() {
    var slideToggle = $('#container').toggle({$$slide: 0}, {$$slide: 1}, 300);
    $('#menuButton').on('click', slideToggle);
});

$(function() {
    var slideToggle = $('#navmenu2').toggle({$$slide: 1}, {$$slide: 0}, 800);
    $('#navmenuButton').on('click', slideToggle);
});

