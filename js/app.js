jQuery( init );

// same as jQuery(document).ready( init );

//Alternative no global vars at all
//jQuery(function init()(...));

// Our apliication logic goes here

function init( $ ){
    let options = {
        url:"../data.json",
        success: jasonHandler
    }
    function jasonHandler( data ){
        console.log( data );

    }
    $.ajax( options );

}