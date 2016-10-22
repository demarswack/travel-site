import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor(){
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSection = $(".page-section");
        this.headerLinks = $(".primary-nav a");
        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
    }

    addSmoothScrolling(){
        this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint(){
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function (direction) {
                if (direction == "down"){
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }

    createPageSectionWaypoints(){
        var that =this;
        this.pageSection.each(function () {
            var currentpageSection =this;
           new Waypoint({
               element: currentpageSection,
               handler: function (direction) {
                   if (direction == "down"){
                       var matchingHeaderLink = currentpageSection.getAttribute("data-matching-link");
                       that.headerLinks.removeClass("is-current-link");
                       $(matchingHeaderLink).addClass("is-current-link");
                   }
               },
               offset: "18%"
           });

            new Waypoint({
                element: currentpageSection,
                handler: function (direction) {
                    if (direction == "up"){
                        var matchingHeaderLink = currentpageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                    }
                },
                offset: "-40%"
            });

        });
    }
}

export default StickyHeader;