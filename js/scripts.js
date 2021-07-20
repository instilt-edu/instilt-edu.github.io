/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// Team Member Object

var data = [
    {
        "id": "1",
        "name" : "Nilabh Agrawal",
        "position" : "Founder",
        "location" : "Mumbai, India",
        "image" : "assets/img/team/Nilabh.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "2",
        "name" : "Amy Park",
        "position" : "Director of Academics",
        "location" : "Las Vegas, USA",
        "image" : "assets/img/team/Amy.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "3",
        "name" : "Jeremy Wu",
        "position" : "Admin",
        "location" : "San Jose, USA",
        "image" : "assets/img/team/Jeremy.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "4",
        "name" : "Palak Bahrdwaj",
        "position" : "Outreach",
        "location" : "Bulandshehar, India",
        "image" : "assets/img/team/Palak.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "5",
        "name" : "Paloosha Sheikh",
        "position" : "Outreach",
        "location" : "Srinagar, India",
        "image" : "assets/img/team/Paloosha.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "6",
        "name" : "Theaswanth Ganesh",
        "position" : "Academics",
        "location" : "Colombo, Sri Lanka",
        "image" : "assets/img/team/Theaswanth.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "7",
        "name" : "Haresh Wedanayke",
        "position" : "Admin",
        "location" : "Colombo, Sri Lanka",
        "image" : "assets/img/team/Haresh.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "8",
        "name" : "Christabel Osei",
        "position" : "Academics",
        "location" : "New York City, USA",
        "image" : "assets/img/team/Christabel.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "9",
        "name" : "Ashaz Hussein",
        "position" : "Outreach",
        "location" : "Vizag, India",
        "image" : "assets/img/team/Ashaz.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "10",
        "name" : "Ayush Ravichandran",
        "position" : "Academics",
        "location" : "Colombo, Sri Lanka",
        "image" : "assets/img/team/Ayush.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "11",
        "name" : "Nabil Sidker",
        "position" : "Outreach",
        "location" : "New York City, USA",
        "image" : "assets/img/team/Nabil.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "12",
        "name" : "Ashaz Hussein",
        "position" : "Outreach",
        "location" : "Vizag, India",
        "image" : "assets/img/team/Ashaz.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "13",
        "name" : "Ayush Ravichandran",
        "position" : "Academics",
        "location" : "Colombo, Sri Lanka",
        "image" : "assets/img/team/Ayush.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "14",
        "name" : "Nabil Sidker",
        "position" : "Outreach",
        "location" : "New York City, USA",
        "image" : "assets/img/team/Nabil.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "15",
        "name" : "Ashaz Hussein",
        "position" : "Outreach",
        "location" : "Vizag, India",
        "image" : "assets/img/team/Ashaz.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "16",
        "name" : "Ayush Ravichandran",
        "position" : "Academics",
        "location" : "Colombo, Sri Lanka",
        "image" : "assets/img/team/Ayush.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "17",
        "name" : "Haresh Wedanayke",
        "position" : "Admin",
        "location" : "Colombo, Sri Lanka",
        "image" : "assets/img/team/Haresh.png",
        "email" : "edu@instilt.com"
    },
    {
        "id": "18",
        "name" : "Christabel Osei",
        "position" : "Academics",
        "location" : "New York City, USA",
        "image" : "assets/img/team/Christabel.png",
        "email" : "edu@instilt.com"
    },
]

// Display team members by generating html

data.forEach((member) => {
    var div = document.createElement("div");
    div.setAttribute('class', `team-card`);
    div.setAttribute('id', `${member.id}`);
    div.innerHTML = document.getElementById("teams-page-content").innerHTML;

    div.innerHTML = div.innerHTML
        .replace(/{NAME}/g, member.name)
        .replace(/{POSITION}/g,  member.position)
        .replace(/{LOCATION}/g,  member.location);

    
    document.getElementById("main-card").appendChild(div);
});

for(var i = 0; i < data.length; i++) {
    document.getElementById(`${data[i].id}`).querySelector("#team-email").href =  `mailto:${data[i].email}`;
    document.getElementById(`${data[i].id}`).querySelector("#team-image").src = `${data[i].image}`;
}

