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

// Team Member Data 

var data = [
    {
        "id": 1,
        "name": "Nilabh Agrawal",
        "email": "nilabh@instilt.com",
        "division": "Founder & CEO",
        "team": "Admin",
        "location": "Mumbai, India",
        "image": "assets/img/team/Nilabh Agrawal.png"
    },
    {
        "id": 2,
        "name": "Amy Park",
        "email": "amy@instilt.com",
        "division": "Chief Program Officer",
        "team": "Admin",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Amy Park.png"
    },
    {
        "id": 3,
        "name": "Haresh Wedanayake",
        "email": "haresh@instilt.com",
        "division": "Chief Operating Officer",
        "team": "Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Haresh Wedanayake.png"
    },
    {
        "id": 4,
        "name": "Riya Garg",
        "email": "riya@instilt.com",
        "division": "Chief Marketing Officer",
        "team": "Admin",
        "location": "Singapore",
        "image": "assets/img/team/Riya Garg.png"
    },
    {
        "id": 5,
        "name": "Ayush Ravichandran",
        "email": "ayush@instilt.com",
        "division": "Head of Technical Operations",
        "team": "Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Ayush Ravichandran.png"
    },
    {
        "id": 6,
        "name": "Theaswanth Ganesh",
        "email": "theaswanth@instilt.com",
        "division": "Head of Project Development",
        "team": "Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Theaswanth Ganesh.png"
    },
    {
        "id": 7,
        "name": "Tanush Das",
        "email": "tanush@instilt.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Tanush Das.png"
    },
    {
        "id": 8,
        "name": "Paloosha Sheikh",
        "email": "sheikhpaloosha1@gmail.com",
        "division": "Social Media & Cohort Head",
        "team": "Social Media",
        "location": "Srinagar, India",
        "image": "assets/img/team/Paloosha Sheikh.png"
    },
    {
        "id": 9,
        "name": "Roohee Urs",
        "email": "rohee.urs@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "West Lafayette, USA",
        "image": "assets/img/team/Roohee Urs.png"
    },
    {
        "id": 10,
        "name": "Priyanka Karamchandani",
        "email": "khushikaramchandani@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Priyanka Karamchandani.png"
    },
    {
        "id": 11,
        "name": "Yanxi Chen",
        "email": "yan@instilt.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Wirral, UK",
        "image": "assets/img/team/Yanxi Chen.png"
    },
    {
        "id": 12,
        "name": "Abeer Shaikh",
        "email": "shaikhabeer03@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Abeer Shaikh.png"
    },
    {
        "id": 13,
        "name": "Sanjana Mahesh",
        "email": "sanjumahesh2411@gmail.com",
        "division": "Partnerships & Project Manager",
        "team": "Partnerships",
        "location": "Singapore",
        "image": "assets/img/team/Sanjana Mahesh.png"
    },
    {
        "id": 14,
        "name": "Kruthya Ratnayake",
        "email": "kruthyar04@gmail.com",
        "division": "Tutor & Project Manager",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Kruthya Ratnayake.png"
    },
    {
        "id": 15,
        "name": "Renuk Basnayake",
        "email": "renukbas@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Renuk Basnayake.png"
    },
    {
        "id": 16,
        "name": "Rosemary Ibe",
        "email": "rosemaryibe18@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Lagos, Nigeria",
        "image": "assets/img/team/Rosemary Ibe.png"
    },
    {
        "id": 17,
        "name": "Aarush Panda",
        "email": "aarushp@gmail.com",
        "division": "Social Media & Cohort Head",
        "team": "Social Media",
        "location": "Livemore, USA",
        "image": "assets/img/team/Aarush Panda.png"
    },
    {
        "id": 18,
        "name": "Aarya Kumar",
        "email": "aaryakk1289@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Pune, India",
        "image": "assets/img/team/Aarya Kumar.png"
    },
    {
        "id": 19,
        "name": "Kumudha Triveedhi",
        "email": "kumudhat126@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Muscat, Oman",
        "image": "assets/img/team/Kumudha Triveedhi.png"
    },
    {
        "id": 20,
        "name": "Tvadhanya Badruka",
        "email": "tvadhanyabadruka@gmail.com",
        "division": "Academics & Content Lead",
        "team": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Tvadhanya Badruka.png"
    },
    {
        "id": 21,
        "name": "Sophia Bagnes",
        "email": "sbtfbagnes@gmail.com",
        "division": "Academics & Content Lead",
        "team": "Academics",
        "location": "Iriga, Philippines",
        "image": "assets/img/team/Sophia Bagnes.png"
    },
    {
        "id": 22,
        "name": "Madhurima Nayak",
        "email": "connectwithmadhurima@gmail.com",
        "division": "Admin",
        "team": "Admin",
        "location": "Navi Mumbai, India",
        "image": "assets/img/team/Madhurima Nayak.png"
    },
    {
        "id": 23,
        "name": "Tanvi Garg 1",
        "email": "gargselene@gmail.com",
        "division": "Academics & Project Manager",
        "team": "Academics",
        "location": "Agra, India",
        "image": "assets/img/team/Tanvi Garg 1.png"
    },
    {
        "id": 24,
        "name": "Devmini Wimalasena",
        "email": "devminiqueend@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Devmini Wimalasena.png"
    },
    {
        "id": 25,
        "name": "Vanya Agarwal",
        "email": "vanyaagarwal125@gmail.com",
        "division": "Digital Marketing",
        "team": "Digital Marketing",
        "location": "Lucknow, India",
        "image": "assets/img/team/Vanya Agarwal.png"
    },
    {
        "id": 26,
        "name": "Amrita Anbuchezhian",
        "email": "amritaanbu05@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Singapore",
        "image": "assets/img/team/Amrita Anbuchezhian.png"
    },
    {
        "id": 27,
        "name": "Steven Kadavil",
        "email": "stevens20142021@yahoo.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Philadelphia, USA",
        "image": "assets/img/team/Steven Kadavil.png"
    },
    {
        "id": 28,
        "name": "Ruth Sunil Thomas",
        "email": "ruthsunil9966@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Ruth Sunil Thomas.png"
    },
    {
        "id": 29,
        "name": "Divyanshi Gupta",
        "email": "divyanshi2004@gmail.com",
        "division": "Communications & Cohort Head",
        "team": "Communications",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Divyanshi Gupta.png"
    },
    {
        "id": 30,
        "name": "Coco Zhang",
        "email": "coco.401828@nv.ccsd.net",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Coco Zhang.png"
    },
    {
        "id": 31,
        "name": "Insha Pervez",
        "email": "inshapervez07@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Ajmer, India",
        "image": "assets/img/team/Insha Pervez.png"
    },
    {
        "id": 32,
        "name": "Hanin Shamsheer",
        "email": "haninshamsheer@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Hanin Shamsheer.png"
    },
    {
        "id": 33,
        "name": "Ayuushi Gunetilleke",
        "email": "ayuushig@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Ayuushi Gunetilleke.png"
    },
    {
        "id": 34,
        "name": "Harishi Fernando",
        "email": "harshisudharafernando@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Harishi Fernando.png"
    },
    {
        "id": 35,
        "name": "Shruti Singh",
        "email": "shrutisinghkg@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Shruti Singh.png"
    },
    {
        "id": 36,
        "name": "Divyanshi Mohanty",
        "email": "divyanshimohanty4@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangalore, India",
        "image": "assets/img/team/Divyanshi Mohanty.png"
    },
    {
        "id": 37,
        "name": "Tanmay Shintre",
        "email": "tanmayshintrewadhwani@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Pune, India",
        "image": "assets/img/team/Tanmay Shintre.png"
    },
    {
        "id": 38,
        "name": "Shravani Tushar Kulkarni",
        "email": "shravani@instilt.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Ahmedabad, India",
        "image": "assets/img/team/Shravani Tushar Kulkarni.png"
    },
    {
        "id": 39,
        "name": "Priya Ramani",
        "email": "priya15.ramani@gmail.com",
        "division": "Communications & Cohort Head",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Priya Ramani.png"
    },
    {
        "id": 40,
        "name": "Diya Singh Chauhan",
        "email": "diyasinghchauhan@gmail.com",
        "division": "Human Resources & Content Lead",
        "team": "Human Resources",
        "location": "Melbourne, Australia",
        "image": "assets/img/team/Diya Singh Chauhan.png"
    },
    {
        "id": 41,
        "name": "Saumika Pandey",
        "email": "pandeysaumika@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Thane, India",
        "image": "assets/img/team/Saumika Pandey.png"
    },
    {
        "id": 42,
        "name": "Sanjana Menon",
        "email": "future2402@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Sanjana Menon.png"
    },
    {
        "id": 43,
        "name": "Shresth Agarwal",
        "email": "shresth.agarwal@oberoi-is.net",
        "division": "Academics & Content Lead",
        "team": "Academics",
        "location": "Mumbai, India",
        "image": "assets/img/team/Shresth Agarwal.png"
    },
    {
        "id": 44,
        "name": "Nisha Kumar",
        "email": "24nisha2004@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Indore, India",
        "image": "assets/img/team/Nisha Kumar.png"
    },
    {
        "id": 45,
        "name": "Dhriti Shah",
        "email": "dhriti.r2004@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Dhriti Shah.png"
    },
    {
        "id": 46,
        "name": "Anvi Shah",
        "email": "anvishah1704@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Chennai, India",
        "image": "assets/img/team/Anvi Shah.png"
    },
    {
        "id": 47,
        "name": "Maithili Pungaliya",
        "email": "maithilipungaliya2605@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Pune, India",
        "image": "assets/img/team/Maithili Pungaliya.png"
    },
    {
        "id": 48,
        "name": "Anouk Leshan Gunaratne",
        "email": "anoukguna@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Anouk Leshan Gunaratne.png"
    },
    {
        "id": 49,
        "name": "Aseel Osman",
        "email": "aseelosman22@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Aseel Osman.png"
    },
    {
        "id": 50,
        "name": "Nitya Bomma",
        "email": "nityabomma@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Nitya Bomma.png"
    },
    {
        "id": 51,
        "name": "Samaarah Wijewardene",
        "email": "samaarahwijewardene@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Samaarah Wijewardene.png"
    },
    {
        "id": 52,
        "name": "Andrew Spearing",
        "email": "andrew.spearing@uconn.edu",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Boston, USA",
        "image": "assets/img/team/Andrew Spearing.png"
    },
    {
        "id": 53,
        "name": "Mason Hartlage",
        "email": "mason.ipad3@icloud.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Louisville, USA",
        "image": "assets/img/team/Mason Hartlage.png"
    },
    {
        "id": 54,
        "name": "Srinithi Mohan",
        "email": "mohannith95@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Hradec Kralove, Czech Republic",
        "image": "assets/img/team/Srinithi Mohan.png"
    },
    {
        "id": 55,
        "name": "Mahek Srivastava",
        "email": "mahek4@icloud.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Hradec Kralove, Czech Republic",
        "image": "assets/img/team/Mahek Srivastava.png"
    },
    {
        "id": 56,
        "name": "Marasel Perry",
        "email": "p.marasel@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "New York, USA",
        "image": "assets/img/team/Marasel Perry.png"
    },
    {
        "id": 57,
        "name": "Anwesha Maiti",
        "email": "maitianwesha16@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Kolkata, India",
        "image": "assets/img/team/Anwesha Maiti.png"
    },
    {
        "id": 58,
        "name": "Vinugi De Silva",
        "email": "vinugidesilva@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Vinugi De Silva.png"
    },
    {
        "id": 59,
        "name": "Kehara Edirisinghe",
        "email": "kehara.edirisinghe@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Kehara Edirisinghe.png"
    },
    {
        "id": 60,
        "name": "Sumaiya Sultana",
        "email": "sumaiyasultanax@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Dhaka, Bangladesh",
        "image": "assets/img/team/Sumaiya Sultana.png"
    },
    {
        "id": 61,
        "name": "Kujana Hewagama",
        "email": "kujana2004@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Kujana Hewagama.png"
    },
    {
        "id": 62,
        "name": "Thimasha Perera",
        "email": "thimashasenaliperera@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Thimasha Perera.png"
    },
    {
        "id": 63,
        "name": "Amaani Miskin",
        "email": "amani.miskin@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Amaani Miskin.png"
    },
    {
        "id": 64,
        "name": "Buvaneshka Chandrasekera",
        "email": "buvaneshka376@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Buvaneshka Chandrasekera.png"
    },
    {
        "id": 65,
        "name": "Annie Elizabeth Binesh",
        "email": "anniebinesh@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Chennai, India",
        "image": "assets/img/team/Annie Elizabeth Binesh.png"
    },
    {
        "id": 66,
        "name": "Neha Menon",
        "email": "neha.menon.2005@gmail.com",
        "division": "Social Media & Cohort Head",
        "team": "Social Media",
        "location": "Bangalore, India",
        "image": "assets/img/team/Neha Menon.png"
    },
    {
        "id": 67,
        "name": "Archit Sinha",
        "email": "architsinha8@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Gautam Buddh Nagar, India",
        "image": "assets/img/team/Archit Sinha.png"
    },
    {
        "id": 68,
        "name": "Nidhi Iyer",
        "email": "nidhiyer0402@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Nidhi Iyer.png"
    },
    {
        "id": 69,
        "name": "Gayatri Ashutosh Konjalwar",
        "email": "gakonjalwar198@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Gayatri Ashutosh Konjalwar.png"
    },
    {
        "id": 70,
        "name": "Atheena Anil",
        "email": "atheenaanil2005@gmail.com",
        "division": "Communications & Cohort Head",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Atheena Anil.png"
    },
    {
        "id": 71,
        "name": "Ramayana Jaiswal",
        "email": "ramayanajaiswal@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Kolkata, India",
        "image": "assets/img/team/Ramayana Jaiswal.png"
    },
    {
        "id": 72,
        "name": "Vatsala Singh",
        "email": "singhvatsala123@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Lucknow, India",
        "image": "assets/img/team/Vatsala Singh.png"
    },
    {
        "id": 73,
        "name": "Adrija Jana",
        "email": "adrijajana.live@gmail.com",
        "division": "Communications & Cohort Head",
        "team": "Communications",
        "location": "Kolkata, India",
        "image": "assets/img/team/Adrija Jana.png"
    },
    {
        "id": 74,
        "name": "Syed Ehab Haider",
        "email": "ehabhaider18@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Wah Cantonment, Pakistan",
        "image": "assets/img/team/Syed Ehab Haider.png"
    },
    {
        "id": 75,
        "name": "Aanya Mishra",
        "email": "aanyamishra0306@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Kolkata, India",
        "image": "assets/img/team/Aanya Mishra.png"
    },
    {
        "id": 76,
        "name": "Prerna Tandon",
        "email": "prernatandon18@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Lucknow, India",
        "image": "assets/img/team/Prerna Tandon.png"
    },
    {
        "id": 77,
        "name": "Yuvika Sehgal",
        "email": "yuvikachess@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "New Delhi, India",
        "image": "assets/img/team/Yuvika Sehgal.png"
    },
    {
        "id": 78,
        "name": "Rhea Joseph",
        "email": "rheajoe33@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Bangalore, India",
        "image": "assets/img/team/Rhea Joseph.png"
    },
    {
        "id": 79,
        "name": "Ann Mascarenhas",
        "email": "annmasc3@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Troy, USA",
        "image": "assets/img/team/Ann Mascarenhas.png"
    },
    {
        "id": 80,
        "name": "Archie McNeill",
        "email": "archie.mcnll@gmail.com",
        "division": "Admin",
        "team": "Admin",
        "location": "Oxford, UK",
        "image": "assets/img/team/Archie McNeill.png"
    },
    {
        "id": 81,
        "name": "Maithreyi Murali Manohar",
        "email": "maithreyi.murali.manohar@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Lewis Center, USA",
        "image": "assets/img/team/Maithreyi Murali Manohar.png"
    },
    {
        "id": 82,
        "name": "Hongqing Feng",
        "email": "hxngfeng@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Hongqing Feng.png"
    },
    {
        "id": 83,
        "name": "Ritesh Manjunathan",
        "email": "ritesh.blore@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "London, UK",
        "image": "assets/img/team/Ritesh Manjunathan.png"
    },
    {
        "id": 84,
        "name": "Iryna Iziumska",
        "email": "iryna@instilt.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "San Jose, United States",
        "image": "assets/img/team/Iryna Iziumska.png"
    },
    {
        "id": 85,
        "name": "Jai Ansh Singh Bindra",
        "email": "jaianshofficial26@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "New Delhi, India",
        "image": "assets/img/team/Jai Ansh Singh Bindra.png"
    },
    {
        "id": 86,
        "name": "Vinayika Goel",
        "email": "vinayikagoel@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Ghaziabad, India",
        "image": "assets/img/team/Vinayika Goel.png"
    },
    {
        "id": 87,
        "name": "Tanav Dhawan",
        "email": "tanavdhawan1@gmail.com",
        "division": "Admin",
        "team": "Admin",
        "location": "New Delhi, India",
        "image": "assets/img/team/Tanav Dhawan.png"
    },
    {
        "id": 88,
        "name": "Kaavya Dasgupta",
        "email": "dasgupta.kaavya@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Bangalore, India",
        "image": "assets/img/team/Kaavya Dasgupta.png"
    },
    {
        "id": 89,
        "name": "Yelizaveta Halauniova",
        "email": "wldchlx@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Gomel, Belarus",
        "image": "assets/img/team/Yelizaveta Halauniova.png"
    },
    {
        "id": 90,
        "name": "Aarya Munot",
        "email": "munotaarya@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Aarya Munot.png"
    },
    {
        "id": 91,
        "name": "Radha K",
        "email": "worldofalexisxoxo@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Radha K.png"
    },
    {
        "id": 92,
        "name": "Gia Chandni",
        "email": "giachandni@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Mumbai, India",
        "image": "assets/img/team/Gia Chandni.png"
    },
    {
        "id": 93,
        "name": "Raqeeba Makhdoomi",
        "email": "raqeebamakhdoomib@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Srinagar, India",
        "image": "assets/img/team/Raqeeba Makhdoomi.png"
    },
    {
        "id": 94,
        "name": "Annie Jiang",
        "email": "anniejiang9019@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Los Angeles, USA",
        "image": "assets/img/team/Annie Jiang.png"
    },
    {
        "id": 95,
        "name": "Julia Stergiou",
        "email": "juliastergiou1111@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Toronto, Canada",
        "image": "assets/img/team/Julia Stergiou.png"
    },
    {
        "id": 96,
        "name": "Deeksha Bachu",
        "email": "bachu.deeksha@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Deeksha Bachu.png"
    },
    {
        "id": 97,
        "name": "Damia Arya",
        "email": "damiaarya@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "East Delhi, India",
        "image": "assets/img/team/Damia Arya.png"
    },
    {
        "id": 98,
        "name": "Nihira Joshi",
        "email": "nihirajoshi08@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Nashik, India",
        "image": "assets/img/team/Nihira Joshi.png"
    },
    {
        "id": 99,
        "name": "Mohamed Ibrahim Mashhour",
        "email": "mohamedi.mashhour1@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Mohamed Ibrahim Mashhour.png"
    },
    {
        "id": 100,
        "name": "Varsha Viswapriyan",
        "email": "varsha.viswapriyan@outlook.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Louisiana, USA",
        "image": "assets/img/team/Varsha Viswapriyan.png"
    },
    {
        "id": 101,
        "name": "Bhavika Shekar",
        "email": "bhavikashekar@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Frisco, USA",
        "image": "assets/img/team/Bhavika Shekar.png"
    },
    {
        "id": 102,
        "name": "Varun Viswapriyan",
        "email": "manjula.viswapriyan@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Louisiana, USA",
        "image": "assets/img/team/Varun Viswapriyan.png"
    },
    {
        "id": 103,
        "name": "Dishita Swaika",
        "email": "dishita.swaika@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Dishita Swaika.png"
    },
    {
        "id": 104,
        "name": "Suha",
        "email": "reachstg007@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Suha.png"
    },
    {
        "id": 105,
        "name": "Rama Ismael",
        "email": "lialiisa4@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Sidon, Lebanon",
        "image": "assets/img/team/Rama Ismael.png"
    },
    {
        "id": 106,
        "name": "Sreejit Dey",
        "email": "dey.sreejit19@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Hooghly, India",
        "image": "assets/img/team/Sreejit Dey.png"
    },
    {
        "id": 107,
        "name": "Vaibhavi Bhat",
        "email": "vaibhavibhat2808@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Vaibhavi Bhat.png"
    },
    {
        "id": 108,
        "name": "Keya Mehta",
        "email": "mehtakeya22@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Muscat, Oman",
        "image": "assets/img/team/Keya Mehta.png"
    },
    {
        "id": 109,
        "name": "Shaurya Mahajan",
        "email": "shauryam182@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Chandigarh, India",
        "image": "assets/img/team/Shaurya Mahajan.png"
    },
    {
        "id": 110,
        "name": "Rayan Ghosh",
        "email": "theglasstable2007@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "California, USA",
        "image": "assets/img/team/Rayan Ghosh.png"
    },
    {
        "id": 111,
        "name": "Jyoti Saini",
        "email": "jyotssaini777@gmail.com",
        "division": "Finance",
        "team": "Finance",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Jyoti Saini.png"
    },
    {
        "id": 112,
        "name": "Tanvi Garg 2",
        "email": "garg.tanvi.st@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "California, USA",
        "image": "assets/img/team/Tanvi Garg 2.png"
    },
    {
        "id": 113,
        "name": "Phillip Cao",
        "email": "phillipcao1234@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "California, USA",
        "image": "assets/img/team/Phillip Cao.png"
    },
    {
        "id": 114,
        "name": "Nistha G",
        "email": "lilac13lavender@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Goalpara, India",
        "image": "assets/img/team/Nistha G.png"
    },
    {
        "id": 115,
        "name": "Deepthy Ajith K",
        "email": "deepthyajithk07@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Thrissur, India",
        "image": "assets/img/team/Deepthy Ajith K.png"
    },
    {
        "id": 116,
        "name": "Aryan Kumar",
        "email": "aryank1401@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Aryan Kumar.png"
    },
    {
        "id": 117,
        "name": "Vaishnavi Muchukota",
        "email": "vaishnavvvii@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "California, USA",
        "image": "assets/img/team/Vaishnavi Muchukota.png"
    },
    {
        "id": 118,
        "name": "Danisha Panigrahi",
        "email": "danishap15@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "California, USA",
        "image": "assets/img/team/Danisha Panigrahi.png"
    },
    {
        "id": 119,
        "name": "Arni Mahendra",
        "email": "arnimahendra09@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Delhi, India",
        "image": "assets/img/team/Arni Mahendra.png"
    },
    {
        "id": 120,
        "name": "Suha Farook",
        "email": "suha_farook@outlook.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Columbo, Sri Lanka",
        "image": "assets/img/team/Suha Farook.png"
    },
    {
        "id": 121,
        "name": "Eva Rose Chethalan",
        "email": "eva.vakku@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Eva Rose Chethalan.png"
    },
    {
        "id": 122,
        "name": "Dhiksha Rathis",
        "email": "dhiksha.rathis@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Dhiksha Rathis.png"
    },
    {
        "id": 123,
        "name": "Sachika Tomer",
        "email": "sachikatomer2006@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Vadodara, India",
        "image": "assets/img/team/Sachika Tomer.png"
    },
    {
        "id": 124,
        "name": "Adyaa Mishra",
        "email": "mishraadyaa@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Adyaa Mishra.png"
    },
    {
        "id": 125,
        "name": "Pushpanjali Achuthan",
        "email": "pushpanjaliachuthan@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Bangalore, India",
        "image": "assets/img/team/Pushpanjali Achuthan.png"
    },
    {
        "id": 126,
        "name": "Rameesha Imran",
        "email": "rameesha.imranz@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Muscat, Oman",
        "image": "assets/img/team/Rameesha Imran.png"
    },
    {
        "id": 127,
        "name": "Aarya Rajesh",
        "email": "aaryarajesh@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Doja, Qatar",
        "image": "assets/img/team/Aarya Rajesh.png"
    },
    {
        "id": 128,
        "name": "Venisha Arrabolu",
        "email": "arrabolu.venisha2007@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Venisha Arrabolu.png"
    },
    {
        "id": 129,
        "name": "Rahul Binu Jose",
        "email": "rahuljose544@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Ernakulam, India",
        "image": "assets/img/team/Rahul Binu Jose.png"
    },
    {
        "id": 130,
        "name": "Pranjali Gupta",
        "email": "pranjali.gupta16@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Ghaziabad, India",
        "image": "assets/img/team/Pranjali Gupta.png"
    },
    {
        "id": 131,
        "name": "Kartik Gulati",
        "email": "kartikgulati1509@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Ambala, India",
        "image": "assets/img/team/Kartik Gulati.png"
    },
    {
        "id": 132,
        "name": "Charlotte Talaat",
        "email": "charlottetalaatk@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Charlotte Talaat.png"
    },
    {
        "id": 133,
        "name": "Swathi Ravi Shankar",
        "email": "swathiravishankar06@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Toronto, Canada",
        "image": "assets/img/team/Swathi Ravi Shankar.png"
    },
    {
        "id": 134,
        "name": "Prisha Agrawal",
        "email": "prishaagr16@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai City, India",
        "image": "assets/img/team/Prisha Agrawal.png"
    },
    {
        "id": 135,
        "name": "Jyothsna Sriya Ayyagari",
        "email": "sriya13579@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Jyothsna Sriya Ayyagari.png"
    },
    {
        "id": 136,
        "name": "Pranav Dodda",
        "email": "pranav.dodda@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Texas, USA",
        "image": "assets/img/team/Pranav Dodda.png"
    },
    {
        "id": 137,
        "name": "Pranjal Sharma",
        "email": "pranjalsharma1108@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Thane, India",
        "image": "assets/img/team/Pranjal Sharma.png"
    },
    {
        "id": 138,
        "name": "Adham Emam Ali",
        "email": "adhamemam09@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Minya, Egypt",
        "image": "assets/img/team/Adham Emam Ali.png"
    },
    {
        "id": 139,
        "name": "Ahmed Hassan Ali",
        "email": "ah9382454@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Alexandria, Egypt",
        "image": "assets/img/team/Ahmed Hassan Ali.png"
    },
    {
        "id": 140,
        "name": "Ahmed Khaled",
        "email": "ahmedkhaled77311@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Elmahmoudya, Egypt",
        "image": "assets/img/team/Ahmed Khaled.png"
    },
    {
        "id": 141,
        "name": "Ahmed Mohsen Abdelsattar",
        "email": "ahmed.2220007@stemsharkya.moe.edu.eg",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Ahmed Mohsen Abdelsattar.png"
    },
    {
        "id": 142,
        "name": "Ameer Ashraf Azer",
        "email": "ameer.1421010@stemassiut.moe.edu.eg",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Assiut, Egypt",
        "image": "assets/img/team/Ameer Ashraf Azer.png"
    },
    {
        "id": 143,
        "name": "Basel Islam Ezz El-Arab",
        "email": "baselezz7@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Egypt",
        "image": "assets/img/team/Basel Islam Ezz El-Arab.png"
    },
    {
        "id": 144,
        "name": "Bavly Romany Hosny",
        "email": "romanybavly496@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Bavly Romany Hosny.png"
    },
    {
        "id": 145,
        "name": "Gamal Korany Ragab Mahmoud",
        "email": "gamal.korany06@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Gamal Korany Ragab Mahmoud.png"
    },
    {
        "id": 146,
        "name": "Haneen Ayman Abdallah Abdallah Ali ",
        "email": "ha245041@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Giza, Egypt",
        "image": "assets/img/team/Haneen Ayman Abdallah Abdallah Ali .png"
    },
    {
        "id": 147,
        "name": "Joly Osama Ghandour",
        "email": "joly62005@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Egypt",
        "image": "assets/img/team/Joly Osama Ghandour.png"
    },
    {
        "id": 148,
        "name": "Mariam Salem",
        "email": "mariqueen12a@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Damietta, Egypt",
        "image": "assets/img/team/Mariam Salem.png"
    },
    {
        "id": 149,
        "name": "Mohamed Ahmed Bakry",
        "email": "moheromo@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Buni Suef, Egypt",
        "image": "assets/img/team/Mohamed Ahmed Bakry.png"
    },
    {
        "id": 150,
        "name": "Naher Abdelnasser Ahmed",
        "email": "naheristhebest2006@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Naher Abdelnasser Ahmed.png"
    },
    {
        "id": 151,
        "name": "Romaisaa Rabea",
        "email": "romaisaarabea44@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Menoufia, Egypt",
        "image": "assets/img/team/Romaisaa Rabea.png"
    },
    {
        "id": 152,
        "name": "Salma El-Sayed Ahmed El-Moshy",
        "email": "salmaelsayed.2.8.56@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Salma El-Sayed Ahmed El-Moshy.png"
    },
    {
        "id": 153,
        "name": "Samir Wael Samir",
        "email": "sasasasawael1025@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Egypt",
        "image": "assets/img/team/Samir Wael Samir.png"
    },
    {
        "id": 154,
        "name": "Shahd Mohammad Abo-Ahmad",
        "email": "shahdaboahmad596@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Menofia, Egypt",
        "image": "assets/img/team/Shahd Mohammad Abo-Ahmad.png"
    },
    {
        "id": 155,
        "name": "Yasmin Gamal Abdallah",
        "email": "ysmn.g.a.gbr@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Giza, Egypt",
        "image": "assets/img/team/Yasmin Gamal Abdallah.png"
    },
    {
        "id": 156,
        "name": "Jiya Aswani",
        "email": "tcis.jiya08@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Maharastra, India",
        "image": "assets/img/team/Jiya Aswani.png"
    },
    {
        "id": 157,
        "name": "Christopher Espitia-Alvarez",
        "email": "cespitiaalvarez@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Cupertino, USA",
        "image": "assets/img/team/Christopher Espitia-Alvarez.png"
    },
    {
        "id": 158,
        "name": "Likhitha Thokala",
        "email": "likhithathokala@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Bangalore, India",
        "image": "assets/img/team/Likhitha Thokala.png"
    },
    {
        "id": 159,
        "name": "Ambika Prakash Khachi",
        "email": "ambikalikes@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Panchukula, India",
        "image": "assets/img/team/Ambika Prakash Khachi.png"
    },
    {
        "id": 160,
        "name": "Anvika Shukla",
        "email": "anvikashukla00@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Rewa, India",
        "image": "assets/img/team/Anvika Shukla.png"
    },
    {
        "id": 161,
        "name": "Liya Johnson",
        "email": "liyajohnson082006@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Kerala, India",
        "image": "assets/img/team/Liya Johnson.png"
    },
    {
        "id": 162,
        "name": "Sreya Komati",
        "email": "komatisreya@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Sacramento, USA",
        "image": "assets/img/team/Sreya Komati.png"
    },
    {
        "id": 163,
        "name": "Ishika Singh",
        "email": "ishika.space@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "USA",
        "image": "assets/img/team/Ishika Singh.png"
    },
    {
        "id": 164,
        "name": "Snigdha",
        "email": "snighda.rai@tts.edu.sg",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Singapore",
        "image": "assets/img/team/Snigdha.png"
    },
    {
        "id": 165,
        "name": "Connor Davis",
        "email": "davisconnor0527@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "USA",
        "image": "assets/img/team/Connor Davis.png"
    },
    {
        "id": 166,
        "name": "Blaze Blackburn",
        "email": "blazeblackburn@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "USA",
        "image": "assets/img/team/Blaze Blackburn.png"
    },
    {
        "id": 167,
        "name": "Adam Nafie",
        "email": "adamnafie@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Germany",
        "image": "assets/img/team/Adam Nafie.png"
    }
]
// Display team members by generating html
function addCards(team){
    team.forEach((member) => {
        var div = document.createElement("div");
        div.setAttribute('class', `team-card`);
        div.setAttribute('id', `${member.id}`);
        div.innerHTML = document.getElementById("teams-page-content").innerHTML;

        div.innerHTML = div.innerHTML
            .replace(/{NAME}/g, member.name)
            .replace(/{DIVISION}/g,  member.division)
            .replace(/{LOCATION}/g,  member.location)

        document.getElementById("main-card").appendChild(div);
    });
}

// display admins
var admins = data.filter(m => m.team === "Admin")
addCards(admins)

var HR = data.filter(m => m.team === "Human Resources")
addCards(HR)

var strat = data.filter(m => m.team === "Strategy")
addCards(strat)


var managers = [
    "Sanjana Mahesh",
    "Priyanka Karamchandani",
    "Priya Ramani",
    "Kumudha Triveedhi",
    "Insha Pervez",
    "Kruthya Ratnayake",
    "Aanya Mishra",
    "Tvadhanya Badruka",
    "Kaavya Dasgupta"
]
var batch_managers = data.filter(m => managers.includes(m.name))
addCards(batch_managers)

// other members
addCards(data)

var strategy_member_count = strat.length;

function checkImage(member){
    const img = new Image();
    img.src = member.image;

    if (!img.complete) {
        if (member.team === "Strategy"){
            strategy_member_count -= 1;

        }
    }
}


for(var i = 0; i < data.length; i++) {
    document.getElementById(`${data[i].id}`).querySelector(".team-email").href =  `mailto:${data[i].email}`;
    // checkImage(data[i]);
    document.getElementById(`${data[i].id}`).querySelector(".team-image").src = `${data[i].image}`;
}
//
// document.addEventListener("DOMContentLoaded", (event) => {
//     if (strategy_member_count === 0) {
//         document.getElementById("strategy-text").remove()
//     }
// })


function removeElement(element) {
    if (element != null) {
        try {
            element.parentNode.parentNode.parentNode.parentNode.remove();
        }
        catch (e){

        }
    }
}

var partnerData = [
    {
        "id": 1,
        "name": "Asha For Education",
        "link": "https://ashanet.org/",
        "image": "assets/img/partners/AFE.png"
    },
    {
        "id": 2,
        "name": "SOS Children's Villages",
        "link": "https://www.sos-childrensvillages.org/",
        "image": "assets/img/partners/SOS.png"
    },  
    {
        "id": 3,
        "name": "Ministry of Education, Ampara",
        "link": "https://moe.gov.lk/",
        "image": "assets/img/partners/SL_MOE.png"
    },
    {
        "id": 4,
        "name": "United Under Arts",
        "link": "https://www.unitedunderarts.org/",
        "image": "assets/img/partners/UUALogo.png"
    },
    {
        "id": 5,
        "name": "Mind Stance",
        "link": "https://www.instagram.com/_mind.stance_/?hl=en",
        "image": "assets/img/partners/mindstance.png"
    },
    {
        "id": 6,
        "name": "The Online Foundation",
        "link": "https://www.instagram.com/theonlinefoundation/?hl=en",
        "image": "assets/img/partners/TOF.png"
    },
    {
        "id": 7,
        "name": "Vajira Sri Children’s Development Center",
        "link": "http://vajirasri.com/",
        "image": "assets/img/partners/Vajira_Sri.png"
    }

]


// Display partners by generating html

partnerData.forEach((partner) => {
    var div = document.createElement("div");
    div.setAttribute('class', `partner-column`);
    div.setAttribute('id', `${partner.id}`);
    div.innerHTML = document.getElementById("partner-content").innerHTML;
    
    div.innerHTML = div.innerHTML
        .replace(/{NAME}/g, partner.name)

    document.getElementById("partner-card").appendChild(div);
});


for(var i = 0; i < partnerData.length; i++) {
    document.getElementById(`${partnerData[i].id}`).querySelector("#partner-link").href =  `${partnerData[i].link}`;
    document.getElementById(`${partnerData[i].id}`).querySelector("#partner-img").src = `${partnerData[i].image}`;
}

// counter animation

isInViewport = (elem) => {
    let bounding = elem.getBoundingClientRect();
    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (height) &&
        bounding.right <= (width)
    );
};

$(window).scroll(startCounter);

function startCounter() {

    document.querySelectorAll(".milestone-list").forEach(function(element){
        if (isInViewport(element)) {
            $(window).off("scroll", startCounter);
            $('.count').each(function () {
                let $this = $(this);
                let max = $this.text();
                if (max == 0){
                    return;
                }
                if ($this.text() == "") {
                    $this.text(Math.round(data.length / 10) * 10)
                }
                $this.prop('Counter',0).animate({
                    Counter: $this.text()
                }, {
                    duration: 6500,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.Counter));
                    },
                })
                .promise().then(function () {
                    $this.text(max);
                });
            });
        }
    })

}
