var source;

function getUsers(){
    console.log('hello');
    var userCall = $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/users/list'
    });
    userCall.done(function(res){
        console.log(res);
        displayUsers(res);
    });
    userCall.always(function() {
        console.log('AJAX call complete');
    });
    userCall.fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown);
    });
}

function displayUsers(users){
    var template = Handlebars.compile(source);
    console.log(users);
    $('#usersContainer').append(template(users,{"users":users}));
}

$(document).ready(function(){
    source = $('#userTemplate').html();
    getUsers();

    $('#logout').on('click',function(){
        window.location = '/users/logout';
    });

});