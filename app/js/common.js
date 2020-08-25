$(document).ready(function(){

    var element = document.querySelector( '.main-mnu' );

    var droppy = new Droppy( element, {
        parentSelector: 'li',
        dropdownSelector: 'li > ul',
        triggerSelector: 'a'
    } );

    $('.droppy__parent').on("mouseenter", function(){
        console.log("s")
        $(this).children('.droppy__drop ').addClass('droppy__drop--active')
    });

    $('.droppy__parent').on("mouseleave", function(){
        console.log("s")
        $(this).children('.droppy__drop ').removeClass('droppy__drop--active')
    });



    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);

        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {

        });
        return false;
    });
});
