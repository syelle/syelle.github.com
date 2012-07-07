$('[rel=popover]').popover({
    animation: false, 
    placement: get_popover_placement,
    trigger: 'manual', 
    delay: 0 
}).click(function(){
    $(this).popover('toggle')
});

function get_popover_placement(tip, element) {
    var windowWidth = window.innerWidth;
    var left_pos = $(element).offset().left;
    if (windowWidth > 900 ) return 'top';
    if (windowWidth - left_pos > 300) return 'right';
    if (left_pos > 300) return 'left';
    return 'top';
}    

/*
$(document).scroll(function(){
    // If has not activated (has no attribute "data-top"
    if (!$('.subnav').attr('data-top')) {
        // If already fixed, then do nothing
        if ($('.subnav').hasClass('subnav-fixed')) return;
        // Remember top position
        var offset = $('.subnav').offset()
        $('.subnav').attr('data-top', offset.top);
    }

    if ($('.subnav').attr('data-top') - $('.subnav').outerHeight() <= $(this).scrollTop())
        $('.subnav').addClass('subnav-fixed');
    else
        $('.subnav').removeClass('subnav-fixed');
});
*/