/* =============================================================

    Tabby v2.1
    Simple, mobile-first toggle tabs by Chris Ferdinandi
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/
    
 * ============================================================= */

(function($) {
    $(function () {
        $('.tabs a, .tabs button').click(function(e) {
            e.preventDefault(); // Prevent default link behavior.
            var toggle = $(this);
            var tabID = toggle.attr('data-target'); // Get the ID of tab

            toggle.addClass('active').parent().addClass('active'); // Add the .active class to the link and it's parent li (if one exists).
            toggle.siblings().removeClass('active'); // Remove the .active class from sibling tab navigation elements.
            toggle.parent('li').siblings().removeClass('active').children().removeClass('active'); // Remove the .active class from sibling li elements and their links.
            $(tabID).addClass('active'); // Add the .active class to the div with the tab content.
            $(tabID).siblings().removeClass('active'); // Remove the .active class from other tab content divs.
        });
    });
})(jQuery);

/* =============================================================

    Progressively Enhanced JS v1.0
    Adds .js class to <body> for progressive enhancement.

    Script by Chris Ferdinandi.
    http://gomakethings.com

    Free to use under the MIT License.
    http://gomakethings.com/mit/
    
 * ============================================================= */

(function($) {
    $(function () {
        $('body').addClass('js'); // On page load, add the .js class to the <body> element.
    });
})(jQuery);
