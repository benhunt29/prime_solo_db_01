var source;

function getBooks(){
    console.log('hello');
    var bookCall = $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/books/list'
    });
    bookCall.done(function(res){
        console.log(res);
        displayBooks(res);
    });
    bookCall.always(function() {
        console.log('AJAX call complete');
    });
    bookCall.fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown);
    });
}

function displayBooks(books){
    var template = Handlebars.compile(source);
    console.log(books);
    $('#booksContainer').append(template(books,{"books":books}));
}

$(document).ready(function(){
    source = $('#bookTemplate').html();
    getBooks();

    $('#logout').on('click',function(){
        window.location = '/books/logout';
    });

});