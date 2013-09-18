var MINI = require('minified'); 
var $ = MINI.$, $$ = MINI.$$, EE = MINI.EE;


$(function() {
    $('#moveButton').on('click', function() {
        $('#text_preview').animate({$$fade: 0}, 500); // fade out
        $('#col_left').set('$', '+singlecol -col');
    });

    $('#resetButton').on('click', function() {
        $('#text_preview').animate({$$fade: 1}, 500); // fade in 
        $('#col_left').set('$', '+col -singlecol');
    });

    $('#previewButton').on('click', function() {
        $('#text_preview').animate({$$fade: 1}, 500); // fade in 
        $('#col_left').set('$', '+col -singlecol');

        var markup = $$('#tx_input').value;
        markup=escape(markup);
        $.request('post', 'http://jothut.com/cgi-bin/animate-blocks-ajax.pl', {article: markup, sb: 'Preview', formtype: 'ajax'})
            .then(function(response) {
                 $('#text_preview').set('innerHTML', response);
             })
            .error(function(status, statusText, responseText) {
                $('#text_preview').fill('response could not be completed.');
            });
    });

    $('#saveButton').on('click', function() {
        $('#text_preview').animate({$$fade: 1}, 500); // fade in 
        $('#col_left').set('$', '+col -singlecol');

        var markup = $$('#tx_input').value;
        markup=escape(markup);
        $.request('post', 'http://jothut.com/cgi-bin/animate-blocks-ajax.pl', {article: markup, sb: 'Save', formtype: 'ajax'})
            .then(function(response) {
                 $('#text_preview').set('innerHTML', response);
                 var regex = /^Error: /;
                 if ( regex.test(response) ) {
                 } else {
                     $('#saveposttext').set({$color: '#fff'});
                     setTimeout(function() {$('#saveposttext').set({$color: '#120a8f'})}, 2000);
                 }
             })
            .error(function(status, statusText, responseText) {
                $('#text_preview').fill('response could not be completed.');
            });
    });
});

