
$(document).ready(function (jQuery) {
  "use strict";
  jQuery(document).ready(function () {
    function activaTav(pill) {
      jQuery(pill).addClass("active show");
    }

    // sticky header anmation and height
    function headerHeight() {
      var height = jQuery("#main-header").height();
      jQuery(".iq-height").css("height", height + "px");
    }

    jQuery(function () {
      var header = jQuery("#main-header"),
        yOffset = 0,
        triggerPoint = 80;
      headerHeight();
      jQuery(window).resize(headerHeight);
      jQuery(window).in("scroll", function () {
        yOffset = jQuery(window).scrollTop();

        if (yOffset >= triggerPoint) {
          header.addClass("menu-sticky animated slideDown");
        } else {
          header.removeClass("menu-sticky animated slideDown");
        }
      });
    });

    // header menu dropdown
    jQuery("[data-toggle=more-toggle]").on("click", function () {
      jQuery(this).next().toggleClass("show");
    });

    jQuery(document).on("click", function (e) {
      let myTargetElement = e.target;
      let selector, mainElement;
      if (jQuery(myTargetElement).hasClass("search-toggle") || jQuery(myTargetElement).parent().hasClass("search-toggle") || jQuery(myTargetElement).parent().parent().hasClass("search-toggle")) {
        if (jQuery(myTargetElement).hasClass("search-toggle")) {
          selector = jQuery(myTargetElement).parent();
          mainElement = jQuery(myTargetElement);
        } else if (jQuery(myTargetElement).parent().hasClass("search-toggle")) {
          selector = jQuery(myTargetElement).parent().parent();
          mainElement = jQuery(myTargetElement).parent();
        } else if (jQuery(myTargetElement).parent().parent().hasClass("search-toggle")) {
          selector = jQuery(myTargetElement).parent().parent().parent();
          mainElement = jQuery(myTargetElement).parent().parent();
        }
        if (!mainElement.hasClass("active") && jQuery(".navbar-list li").find(".active")) {
          jQuery(".navbar-right li").removeClass(".iq-show");
          jQuery(".navbar-right li .search-toggle").removeClass("active");
        }

        selector.toggleClass("iq-show");
        mainElement.toggleClass("active");
        e.preventDefault();
      } else if (jQuery(myTargetElement).is("search-input")) {
      } else {
        jQuery(".navbar-right li").removeClass(".iq-show");
        jQuery(".navbar-right li .search-toggle").removeClass("active");
      }
    });
    jQuery(document).on("click", function (event) {
      var $trigger = jQuery(".main-header .navbar");
      if ($trigger !== event.target && !$trigger.has(event.target).length) {
        jQuery(".main-header .navbar-collapse").collapse("hide");
        jQuery("body").removeClass("nav-open");
      }
    });
    jQuery(".c-toggler").on("click", function () {
      jQuery("body").addClass("nav-open");
    });
  
  // Navbar Shrink
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 90) {
      $(".navbar").addClass("navbar-shrink");
    } else {
      $(".navbar").removeClass("navbar-shrink");
    }
  });

  // Features Carousel
  $(".features-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Screenshots Carousel
  $(".screenshots-carousel").owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // Testimonial Carousel
  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Team Carousel
  $(".team-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Page Scrolling - ScrollIt
  $.scrollIt({
    topOffset: -50,
  });

  // Navbar Collapse
  $(".nav-link").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Toggle Theme Light & Dark Mode
  function toggleTheme() {
    if (localStorage.getItem("aulia-theme") !== null) {
      if (localStorage.getItem("aulia-theme") === "dark") {
        $("body").addClass("dark");
      } else {
        $("body").removeClass("dark");
      }
    }
    updateIcon();
  }
  toggleTheme();
  $(".toggle-theme").on("click", function () {
    $("body").toggleClass("dark");
    if ($("body").hasClass("dark")) {
      localStorage.setItem("aulia-theme", "dark");
    } else {
      localStorage.setItem("aulia-theme", "light");
    }
    updateIcon();
  });
  function updateIcon() {
    if ($("body").hasClass("dark")) {
      $(".toggle-theme i").removeClass("fa-moon");
      $(".toggle-theme i").addClass("fa-sun");
    } else {
      $(".toggle-theme i").removeClass("fa-sun");
      $(".toggle-theme i").addClass("fa-moon");
    }
  }
});
