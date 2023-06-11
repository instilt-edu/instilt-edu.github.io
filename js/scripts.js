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
        "location": "Vancouver, Canada",
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
        "name": "Danisha Panigrahi",
        "email": "danishap15@gmail.com",
        "division": "Head of Human Resources",
        "team": "Admin",
        "location": "California, USA",
        "image": "assets/img/team/Danisha Panigrahi.png"
    },
    {
        "id": 5,
        "name": "Ayush Ravichandran",
        "email": "ayush@instilt.com",
        "division": "Head of Technical Operations",
        "team": "Admin",
        "location": "Amherst, USA",
        "image": "assets/img/team/Ayush Ravichandran.png"
    },
    {
        "id": 6,
        "name": "Shravani Tushar Kulkarni",
        "email": "shravani@instilt.com",
        "division": "Head of Communications",
        "team": "Admin",
        "location": "Ahmedabad, India",
        "image": "assets/img/team/Shravani Tushar Kulkarni.png"
    },
    {
        "id": 7,
        "name": "Archie McNeill",
        "email": "ar.mcneill@outlook.com",
        "division": "Head of Partnerships",
        "team": "Admin",
        "location": "Oxford, UK",
        "image": "assets/img/team/Archie McNeill.png"
    },
    {
        "id": 8,
        "name": "Eliza Mahon",
        "email": "eliza.q.mahon@gmail.com",
        "division": "Head of Academics",
        "team": "Admin",
        "location": "Vancouver, Canada",
        "image": "assets/img/team/Eliza Mahon.png"
    },
    {
        "id": 9,
        "name": "Theaswanth Ganesh",
        "email": "theaswanth@instilt.com",
        "division": "Head of Project Development",
        "team": "Admin",
        "location": "Toronto, Canada",
        "image": "assets/img/team/Theaswanth Ganesh.png"
    },
    {
        "id": 10,
        "name": "Paloosha Sheikh",
        "email": "sheikhpaloosha1@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Srinagar, India",
        "image": "assets/img/team/Paloosha Sheikh.png"
    },
    {
        "id": 11,
        "name": "Mansi Agrawal",
        "email": "agrawamansi@gmail.com",
        "division": "Strategy",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Mansi Agrawal.png"
    },
    {
        "id": 12,
        "name": "Yanxi Chen",
        "email": "yan@instilt.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Wirral, UK",
        "image": "assets/img/team/Yanxi Chen.png"
    },
    {
        "id": 13,
        "name": "Abeer Shaikh",
        "email": "shaikhabeer03@gmail.com",
        "division": "Strategy",
        "team": "Academics",
        "location": "Mumbai, India",
        "image": "assets/img/team/Abeer Shaikh.png"
    },
    {
        "id": 14,
        "name": "Anirudh Agarwal",
        "email": "itsanirudh98@gmail.com",
        "division": "Strategy",
        "team": "Tutor",
        "location": "Noida, India",
        "image": "assets/img/team/Anirudh Agarwal.png"
    },
    {
        "id": 15,
        "name": "Kruthya Ratnayake",
        "email": "kruthya@outlook.com",
        "division": "Tutor & Project Manager",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Kruthya Ratnayake.png"
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
        "name": "Kumudha Tiriveedhi",
        "email": "ktiriveedhi@abaoman.org",
        "division": "Academics",
        "team": "Academics",
        "location": "Muscat, Oman",
        "image": "assets/img/team/Kumudha Tiriveedhi.png"
    },
    {
        "id": 18,
        "name": "Rithvik Singh",
        "email": "singhrithvik2016@gmail.com",
        "division": "Tutor & Content Lead",
        "team": "Tutor",
        "location": "Sharjah, UAE",
        "image": "assets/img/team/Rithvik Singh.png"
    },
    {
        "id": 19,
        "name": "Tanvi Garg",
        "email": "gargselene@gmail.com",
        "division": "Academics & Project Manager",
        "team": "Academics",
        "location": "Agra, India",
        "image": "assets/img/team/Tanvi Garg 1.png"
    },
    {
        "id": 20,
        "name": "Devmini Wimalasena",
        "email": "devminiqueend@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Devmini Wimalasena.png"
    },
    {
        "id": 21,
        "name": "Amrita Anbuchezhian",
        "email": "amritaanbu05@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Singapore",
        "image": "assets/img/team/Amrita Anbuchezhian.png"
    },
    {
        "id": 22,
        "name": "Coco Zhang",
        "email": "cocowzhang@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Coco Zhang.png"
    },
    {
        "id": 23,
        "name": "Kavini Ralapanawe",
        "email": "kavinitr17@gmail.com",
        "division": "Finance",
        "team": "Finance",
        "location": "Yerevan, Armenia",
        "image": "assets/img/team/Kavini Ralapanawe.png"
    },
    {
        "id": 24,
        "name": "Ayuushi Gunetilleke",
        "email": "ayuushig@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Ayuushi Gunetilleke.png"
    },
    {
        "id": 25,
        "name": "Shruti Singh",
        "email": "shrutisinghkg@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Shruti Singh.png"
    },
    {
        "id": 26,
        "name": "Divyanshi Mohanty",
        "email": "divyanshimohanty4@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangalore, India",
        "image": "assets/img/team/Divyanshi Mohanty.png"
    },
    {
        "id": 27,
        "name": "Priya Ramani",
        "email": "priya15.ramani@gmail.com",
        "division": "Communications & Cohort Head",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Priya Ramani.png"
    },
    {
        "id": 28,
        "name": "Diya Singh Chauhan",
        "email": "diyasinghchauhan@gmail.com",
        "division": "Human Resources & Content Lead",
        "team": "Human Resources",
        "location": "Melbourne, Australia",
        "image": "assets/img/team/Diya Singh Chauhan.png"
    },
    {
        "id": 29,
        "name": "Saumika Pandey",
        "email": "pandeysaumika@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Thane, India",
        "image": "assets/img/team/Saumika Pandey.png"
    },
    {
        "id": 30,
        "name": "Sanjana Menon",
        "email": "future2402@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Sanjana Menon.png"
    },
    {
        "id": 31,
        "name": "Veenaaz Vaid",
        "email": "veenaazv@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Veenaaz Vaid.png"
    },
    {
        "id": 32,
        "name": "Nisha Kumar",
        "email": "24nisha2004@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Indore, India",
        "image": "assets/img/team/Nisha Kumar.png"
    },
    {
        "id": 33,
        "name": "Dhriti Shah",
        "email": "dhriti.r2004@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Dhriti Shah.png"
    },
    {
        "id": 34,
        "name": "Maithili Pungaliya",
        "email": "maithilipungaliya2605@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Pune, India",
        "image": "assets/img/team/Maithili Pungaliya.png"
    },
    {
        "id": 35,
        "name": "Aseel Osman",
        "email": "aseelosman22@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Aseel Osman.png"
    },
    {
        "id": 36,
        "name": "Nitya Bomma",
        "email": "nityabomma@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Nitya Bomma.png"
    },
    {
        "id": 37,
        "name": "Samaarah Wijewardene",
        "email": "samaarahwijewardene@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Samaarah Wijewardene.png"
    },
    {
        "id": 38,
        "name": "Mason Hartlage",
        "email": "masonhartlage23@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Louisville, USA",
        "image": "assets/img/team/Mason Hartlage.png"
    },
    {
        "id": 39,
        "name": "Marasel Perry",
        "email": "p.marasel@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "New York, USA",
        "image": "assets/img/team/Marasel Perry.png"
    },
    {
        "id": 40,
        "name": "Anwesha Maiti",
        "email": "maitianwesha16@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Kolkata, India",
        "image": "assets/img/team/Anwesha Maiti.png"
    },
    {
        "id": 41,
        "name": "Vinugi De Silva",
        "email": "vinugidesilva@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Vinugi De Silva.png"
    },
    {
        "id": 42,
        "name": "Sumaiya Sultana",
        "email": "sumaiyasultanax@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Dhaka, Bangladesh",
        "image": "assets/img/team/Sumaiya Sultana.png"
    },
    {
        "id": 43,
        "name": "Kujana Hewagama",
        "email": "kujana2004@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Kujana Hewagama.png"
    },
    {
        "id": 44,
        "name": "Amaani Miskin",
        "email": "amani.miskin@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Amaani Miskin.png"
    },
    {
        "id": 45,
        "name": "Buvaneshka Chandrasekera",
        "email": "buvaneshka376@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Buvaneshka Chandrasekera.png"
    },
    {
        "id": 46,
        "name": "Annie Elizabeth Binesh",
        "email": "anniebinesh@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Chennai, India",
        "image": "assets/img/team/Annie Elizabeth Binesh.png"
    },
    {
        "id": 47,
        "name": "Archit Sinha",
        "email": "architsinha8@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Gautam Buddh Nagar, India",
        "image": "assets/img/team/Archit Sinha.png"
    },
    {
        "id": 48,
        "name": "Nidhi Iyer",
        "email": "nidhiyer0402@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Nidhi Iyer.png"
    },
    {
        "id": 49,
        "name": "Vatsala Singh",
        "email": "singhvatsala123@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Lucknow, India",
        "image": "assets/img/team/Vatsala Singh.png"
    },
    {
        "id": 50,
        "name": "Syed Ehab Haider",
        "email": "ehabhaider18@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Wah Cantonment, Pakistan",
        "image": "assets/img/team/Syed Ehab Haider.png"
    },
    {
        "id": 51,
        "name": "Yuvika Sehgal",
        "email": "yuvikachess@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "New Delhi, India",
        "image": "assets/img/team/Yuvika Sehgal.png"
    },
    {
        "id": 52,
        "name": "Ann Mascarenhas",
        "email": "annmasc3@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Troy, USA",
        "image": "assets/img/team/Ann Mascarenhas.png"
    },
    {
        "id": 53,
        "name": "Saloni Dwivedi",
        "email": "salonid.s1508@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Indore, India",
        "image": "assets/img/team/Saloni Dwivedi.png"
    },
    {
        "id": 54,
        "name": "Maithreyi Murali Manohar",
        "email": "maithreyi.murali.manohar@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Lewis Center, USA",
        "image": "assets/img/team/Maithreyi Murali Manohar.png"
    },
    {
        "id": 55,
        "name": "Ritesh Manjunathan",
        "email": "ritesh.blore@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "London, UK",
        "image": "assets/img/team/Ritesh Manjunathan.png"
    },
    {
        "id": 56,
        "name": "Iryna Iziumska",
        "email": "iryna@instilt.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "San Jose, United States",
        "image": "assets/img/team/Iryna Iziumska.png"
    },
    {
        "id": 57,
        "name": "Kieran Clare",
        "email": "kieraneamesroberts@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Manchester, UK",
        "image": "assets/img/team/Kieran Clare.png"
    },
    {
        "id": 58,
        "name": "Vinayika Goel",
        "email": "vinayikagoel@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Ghaziabad, India",
        "image": "assets/img/team/Vinayika Goel.png"
    },
    {
        "id": 59,
        "name": "Kaavya Dasgupta",
        "email": "dasgupta.kaavya@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Bangalore, India",
        "image": "assets/img/team/Kaavya Dasgupta.png"
    },
    {
        "id": 60,
        "name": "Yelizaveta Halauniova",
        "email": "golovnevaliza123@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Gomel, Belarus",
        "image": "assets/img/team/Yelizaveta Halauniova.png"
    },
    {
        "id": 61,
        "name": "Aarya Munot",
        "email": "munotaarya@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Aarya Munot.png"
    },
    {
        "id": 62,
        "name": "Radha K",
        "email": "worldofalexisxoxo@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Radha K.png"
    },
    {
        "id": 63,
        "name": "Annie Jiang",
        "email": "anniejiang9019@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Los Angeles, USA",
        "image": "assets/img/team/Annie Jiang.png"
    },
    {
        "id": 64,
        "name": "Julia Stergiou",
        "email": "juliastergiou1111@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Toronto, Canada",
        "image": "assets/img/team/Julia Stergiou.png"
    },
    {
        "id": 65,
        "name": "Deeksha Bachu",
        "email": "bachu.deeksha@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Delaware, USA",
        "image": "assets/img/team/Deeksha Bachu.png"
    },
    {
        "id": 66,
        "name": "Mohamed Ibrahim Mashhour",
        "email": "mohamedi.mashhour1@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Mohamed Ibrahim Mashhour.png"
    },
    {
        "id": 67,
        "name": "Varun Viswapriyan",
        "email": "manjula.viswapriyan@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Louisiana, USA",
        "image": "assets/img/team/Varun Viswapriyan.png"
    },
    {
        "id": 68,
        "name": "Dishita Swaika",
        "email": "dishitas@outlook.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Dishita Swaika.png"
    },
    {
        "id": 69,
        "name": "Suha",
        "email": "reachstg007@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Suha.png"
    },
    {
        "id": 70,
        "name": "Shaurya Mahajan",
        "email": "shauryam182@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Chandigarh, India",
        "image": "assets/img/team/Shaurya Mahajan.png"
    },
    {
        "id": 71,
        "name": "Rayan Ghosh",
        "email": "theglasstable2007@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "California, USA",
        "image": "assets/img/team/Rayan Ghosh.png"
    },
    {
        "id": 72,
        "name": "Jyoti Saini",
        "email": "jyotssaini777@gmail.com",
        "division": "Tutor",
        "team": "Finance",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Jyoti Saini.png"
    },
    {
        "id": 73,
        "name": "Tanvi Garg",
        "email": "garg.tanvi.st@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "California, USA",
        "image": "assets/img/team/Tanvi Garg 2.png"
    },
    {
        "id": 74,
        "name": "Phillip Cao",
        "email": "phillipcao1234@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "California, USA",
        "image": "assets/img/team/Phillip Cao.png"
    },
    {
        "id": 75,
        "name": "Deepthy Ajith K",
        "email": "deepthyajithk07@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Thrissur, India",
        "image": "assets/img/team/Deepthy Ajith K.png"
    },
    {
        "id": 76,
        "name": "Aryan Kumar",
        "email": "aryank1401@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Aryan Kumar.png"
    },
    {
        "id": 77,
        "name": "Arni Mahendra",
        "email": "arnimahendra09@gmail.com",
        "division": "Tutor & Cohort Head",
        "team": "Tutor",
        "location": "Delhi, India",
        "image": "assets/img/team/Arni Mahendra.png"
    },
    {
        "id": 78,
        "name": "Suha Farook",
        "email": "suha_farook@outlook.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Columbo, Sri Lanka",
        "image": "assets/img/team/Suha Farook.png"
    },
    {
        "id": 79,
        "name": "Eva Rose Chethalan",
        "email": "eva.vakku@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Eva Rose Chethalan.png"
    },
    {
        "id": 80,
        "name": "Dhiksha Rathis",
        "email": "dhiksha.rathis@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Dhiksha Rathis.png"
    },
    {
        "id": 81,
        "name": "Sachika Tomer",
        "email": "sachikatomer2006@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Vadodara, India",
        "image": "assets/img/team/Sachika Tomer.png"
    },
    {
        "id": 82,
        "name": "Adyaa Mishra",
        "email": "mishraadyaa@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangalore Urban, India",
        "image": "assets/img/team/Adyaa Mishra.png"
    },
    {
        "id": 83,
        "name": "Pushpanjali Achuthan",
        "email": "pushpanjaliachuthan@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Bangalore, India",
        "image": "assets/img/team/Pushpanjali Achuthan.png"
    },
    {
        "id": 84,
        "name": "Aarya Rajesh",
        "email": "aaryarajesh@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Doja, Qatar",
        "image": "assets/img/team/Aarya Rajesh.png"
    },
    {
        "id": 85,
        "name": "Pranjali Gupta",
        "email": "pranjali.gupta16@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Ghaziabad, India",
        "image": "assets/img/team/Pranjali Gupta.png"
    },
    {
        "id": 86,
        "name": "Kartik Gulati",
        "email": "kartikgulati1509@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Ambala, India",
        "image": "assets/img/team/Kartik Gulati.png"
    },
    {
        "id": 87,
        "name": "Charlotte Talaat",
        "email": "charlottetalaatk@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Charlotte Talaat.png"
    },
    {
        "id": 88,
        "name": "Swathi Ravi Shankar",
        "email": "swathiravishankar06@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Toronto, Canada",
        "image": "assets/img/team/Swathi Ravi Shankar.png"
    },
    {
        "id": 89,
        "name": "Jyothsna Sriya Ayyagari",
        "email": "jyothsna_sriya@outlook.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Jyothsna Sriya Ayyagari.png"
    },
    {
        "id": 90,
        "name": "Pranjal Sharma",
        "email": "sharmapranjal1108@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Thane, India",
        "image": "assets/img/team/Pranjal Sharma.png"
    },
    {
        "id": 91,
        "name": "Adham Emam Ali",
        "email": "adhamemam09@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Minya, Egypt",
        "image": "assets/img/team/Adham Emam Ali.png"
    },
    {
        "id": 92,
        "name": "Ahmed Hassan Ali",
        "email": "ah9382454@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Alexandria, Egypt",
        "image": "assets/img/team/Ahmed Hassan Ali.png"
    },
    {
        "id": 93,
        "name": "Ahmed Khaled",
        "email": "ahmedkhaled77311@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Elmahmoudya, Egypt",
        "image": "assets/img/team/Ahmed Khaled.png"
    },
    {
        "id": 94,
        "name": "Ahmed Mohsen Abdelsattar",
        "email": "ahmed.2220007@stemsharkya.moe.edu.eg",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Ahmed Mohsen Abdelsattar.png"
    },
    {
        "id": 95,
        "name": "Ameer Ashraf Azer",
        "email": "ameer.1421010@stemassiut.moe.edu.eg",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Assiut, Egypt",
        "image": "assets/img/team/Ameer Ashraf Azer.png"
    },
    {
        "id": 96,
        "name": "Basel Islam Ezz El-Arab",
        "email": "baselezz7@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Egypt",
        "image": "assets/img/team/Basel Islam Ezz El-Arab.png"
    },
    {
        "id": 97,
        "name": "Bavly Romany Hosny",
        "email": "romanybavly496@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Bavly Romany Hosny.png"
    },
    {
        "id": 98,
        "name": "Gamal Korany Ragab Mahmoud",
        "email": "gamal.korany06@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Gamal Korany Ragab Mahmoud.png"
    },
    {
        "id": 99,
        "name": "Haneen Ayman Abdallah Abdallah Ali ",
        "email": "ha245041@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Giza, Egypt",
        "image": "assets/img/team/Haneen Ayman Abdallah Abdallah Ali .png"
    },
    {
        "id": 100,
        "name": "Joly Osama Ghandour",
        "email": "joly62005@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Egypt",
        "image": "assets/img/team/Joly Osama Ghandour.png"
    },
    {
        "id": 101,
        "name": "Mariam Salem",
        "email": "mariqueen12a@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Damietta, Egypt",
        "image": "assets/img/team/Mariam Salem.png"
    },
    {
        "id": 102,
        "name": "Mohamed Ahmed Bakry",
        "email": "moheromo@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Buni Suef, Egypt",
        "image": "assets/img/team/Mohamed Ahmed Bakry.png"
    },
    {
        "id": 103,
        "name": "Naher Abdelnasser Ahmed",
        "email": "naheristhebest2006@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Naher Abdelnasser Ahmed.png"
    },
    {
        "id": 104,
        "name": "Romaisaa Rabea",
        "email": "romaisaarabea44@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Menoufia, Egypt",
        "image": "assets/img/team/Romaisaa Rabea.png"
    },
    {
        "id": 105,
        "name": "Salma El-Sayed Ahmed El-Moshy",
        "email": "salmaelsayed.2.8.56@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "assets/img/team/Salma El-Sayed Ahmed El-Moshy.png"
    },
    {
        "id": 106,
        "name": "Samir Wael Samir",
        "email": "sasasasawael1025@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Egypt",
        "image": "assets/img/team/Samir Wael Samir.png"
    },
    {
        "id": 107,
        "name": "Shahd Mohammad Abo-Ahmad",
        "email": "shahdaboahmad596@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Menofia, Egypt",
        "image": "assets/img/team/Shahd Mohammad Abo-Ahmad.png"
    },
    {
        "id": 108,
        "name": "Yasmin Gamal Abdallah",
        "email": "ysmn.g.a.gbr@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Giza, Egypt",
        "image": "assets/img/team/Yasmin Gamal Abdallah.png"
    },
    {
        "id": 109,
        "name": "Jiya Aswani",
        "email": "tcis.jiya08@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Maharastra, India",
        "image": "assets/img/team/Jiya Aswani.png"
    },
    {
        "id": 110,
        "name": "Christopher Espitia-Alvarez",
        "email": "cespitiaalvarez@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Cupertino, USA",
        "image": "assets/img/team/Christopher Espitia-Alvarez.png"
    },
    {
        "id": 111,
        "name": "Likhitha Thokala",
        "email": "likhithathokala@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Bangalore, India",
        "image": "assets/img/team/Likhitha Thokala.png"
    },
    {
        "id": 112,
        "name": "Ambika Prakash Khachi",
        "email": "ambikalikes@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Panchukula, India",
        "image": "assets/img/team/Ambika Prakash Khachi.png"
    },
    {
        "id": 113,
        "name": "Anvika Shukla",
        "email": "anvikashukla00@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Rewa, India",
        "image": "assets/img/team/Anvika Shukla.png"
    },
    {
        "id": 114,
        "name": "Liya Johnson",
        "email": "liyajohnson082006@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Kerala, India",
        "image": "assets/img/team/Liya Johnson.png"
    },
    {
        "id": 115,
        "name": "Sreya Komati",
        "email": "komatisreya@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Sacramento, USA",
        "image": "assets/img/team/Sreya Komati.png"
    },
    {
        "id": 116,
        "name": "Ishika Singh",
        "email": "ishika.space@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Fremont, USA",
        "image": "assets/img/team/Ishika Singh.png"
    },
    {
        "id": 117,
        "name": "Blaze Blackburn",
        "email": "blazeblackburn@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "USA",
        "image": "assets/img/team/Blaze Blackburn.png"
    },
    {
        "id": 118,
        "name": "Amrithaa Ketheeswaran",
        "email": "amri.k2703@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Amrithaa Ketheeswaran.png"
    },
    {
        "id": 119,
        "name": "Sara Schwartz",
        "email": "schwarsara@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Wisconsin, USA",
        "image": "assets/img/team/Sara Schwartz.png"
    },
    {
        "id": 120,
        "name": "Madison Messner",
        "email": "madison.368512@nv.ccsd.net",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Madison Messner.png"
    },
    {
        "id": 121,
        "name": "Tushara Kumar",
        "email": "tusharak12@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "California, USA",
        "image": "assets/img/team/Tushara Kumar.png"
    },
    {
        "id": 122,
        "name": "Koushiki Das",
        "email": "koushiki.das.is.here@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Kolkata, India",
        "image": "assets/img/team/Koushiki Das.png"
    },
    {
        "id": 123,
        "name": "Dhikshitha Nandakumar",
        "email": "ndhikshitha@gmail.com",
        "division": "HR",
        "team": "HR",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Dhikshitha Nandakumar.png"
    },
    {
        "id": 124,
        "name": "Kenisha Jain",
        "email": "kenishajain123@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Bangalore, India",
        "image": "assets/img/team/Kenisha Jain.png"
    },
    {
        "id": 125,
        "name": "Sahiti Dasari",
        "email": "sahitiaws@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Georgia, USA",
        "image": "assets/img/team/Sahiti Dasari.png"
    },
    {
        "id": 126,
        "name": "Fathima Imra",
        "email": "irishprincess.tpwk@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Kerala, India",
        "image": "assets/img/team/Fathima Imra.png"
    },
    {
        "id": 127,
        "name": "Aymen Jadda",
        "email": "aymen.jadda@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Termara, Morocco",
        "image": "assets/img/team/Aymen Jadda.png"
    },
    {
        "id": 128,
        "name": "Siyona Mishra",
        "email": "siyona.mishra@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "USA",
        "image": "assets/img/team/Siyona Mishra.png"
    },
    {
        "id": 129,
        "name": "Esha Malhotra",
        "email": "eshamalhotra09@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Srinagar, India",
        "image": "assets/img/team/Esha Malhotra.png"
    },
    {
        "id": 130,
        "name": "Fatema Idris",
        "email": "fatemaidris628@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Fatema Idris.png"
    },
    {
        "id": 131,
        "name": "Antriksh",
        "email": "anshpawankumar786@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Punjab, India",
        "image": "assets/img/team/Antriksh.png"
    },
    {
        "id": 132,
        "name": "Natalia Lopez",
        "email": "natlopez63@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "California, USA",
        "image": "assets/img/team/Natalia Lopez.png"
    },
    {
        "id": 133,
        "name": "Rachel Tong",
        "email": "racheltong29@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Ohio, USA",
        "image": "assets/img/team/Rachel Tong.png"
    },
    {
        "id": 134,
        "name": "Aniela De Zoysa",
        "email": "aniela.a.dezoysa@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Aniela De Zoysa.png"
    },
    {
        "id": 135,
        "name": "Rimjhim Singh",
        "email": "singhrimjhim2017@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Lucknow, UAE",
        "image": "assets/img/team/Rimjhim Singh.png"
    },
    {
        "id": 136,
        "name": "Shenaly Raju",
        "email": "shenalyraju@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Shenaly Raju.png"
    },
    {
        "id": 137,
        "name": "Tiara Hewagama",
        "email": "tiarahewagama2005@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Tiara Hewagama.png"
    },
    {
        "id": 138,
        "name": "Janya Edirisinghe",
        "email": "janyaedirisinghe763@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Janya Edirisinghe.png"
    },
    {
        "id": 139,
        "name": "Sammith Singamsetty",
        "email": "sammith.official@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Bangalore, India",
        "image": "assets/img/team/Sammith Singamsetty.png"
    },
    {
        "id": 140,
        "name": "Gwenie Marinas",
        "email": "gweniekm0323@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "California, USA",
        "image": "assets/img/team/Gwenie Marinas.png"
    },
    {
        "id": 141,
        "name": "Aryan Nayak ",
        "email": "8660549803.nayak@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Aryan Nayak .png"
    },
    {
        "id": 142,
        "name": "Adetunji Dorcas",
        "email": "adetunjidorcas7@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "South Nigeria, Nigeria",
        "image": "assets/img/team/Adetunji Dorcas.png"
    },
    {
        "id": 143,
        "name": "Ranudi Pilapitiya",
        "email": "rpilapitiya2004@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Ranudi Pilapitiya.png"
    },
    {
        "id": 144,
        "name": "Sachi Aggarwal",
        "email": "sachiaggarwal2006@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Haryana, India",
        "image": "assets/img/team/Sachi Aggarwal.png"
    },
    {
        "id": 145,
        "name": "Leenah Wahab",
        "email": "leenah.wahab@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Leenah Wahab.png"
    },
    {
        "id": 146,
        "name": "Vedanth Adhia",
        "email": "vedanthadhia2005@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Ahmedabad, India",
        "image": "assets/img/team/Vedanth Adhia.png"
    },
    {
        "id": 147,
        "name": "Ben Doupe",
        "email": "bjdoupe@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Vancouver, Canada",
        "image": "assets/img/team/Ben Doupe.png"
    },
    {
        "id": 148,
        "name": "Ryan Joseph Orumpackal",
        "email": "rjosepho@outlook.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Missouri City, USA",
        "image": "assets/img/team/Ryan Joseph Orumpackal.png"
    },
    {
        "id": 149,
        "name": "Sehara Jayasuriya",
        "email": "seharajayasuriya@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Sehara Jayasuriya.png"
    },
    {
        "id": 150,
        "name": "Anant Vikram Agarwal",
        "email": "agarwala25@gsiscommunity.kr",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Seoul, Korea",
        "image": "assets/img/team/Anant Vikram Agarwal.png"
    },
    {
        "id": 151,
        "name": "Safiya Mymun",
        "email": "safiyamymunsiddiq@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Riyadh, Saudi Arabia",
        "image": "assets/img/team/Safiya Mymun.png"
    },
    {
        "id": 152,
        "name": "Roz Mirfendereski",
        "email": "rozmir@icloud.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Roz Mirfendereski.png"
    },
    {
        "id": 153,
        "name": "Arnav Chitnis",
        "email": "sameerchitnis2001@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Pune, India",
        "image": "assets/img/team/Arnav Chitnis.png"
    },
    {
        "id": 154,
        "name": "Sandeep",
        "email": "sandeepsulegai@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Bangalore, India",
        "image": "assets/img/team/Sandeep.png"
    },
    {
        "id": 155,
        "name": "Liam Hoffman",
        "email": "lhoff2005@yahoo.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Indiana, USA",
        "image": "assets/img/team/Liam Hoffman.png"
    },
    {
        "id": 156,
        "name": "Shaivi Kumar",
        "email": "shaivikumar2007@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Kolkata, India",
        "image": "assets/img/team/Shaivi Kumar.png"
    },
    {
        "id": 157,
        "name": "Aiyappan Shivani",
        "email": "aiyappanshivani06@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Singapore",
        "image": "assets/img/team/Aiyappan Shivani.png"
    },
    {
        "id": 158,
        "name": "Keyura A Grandhi",
        "email": "keyura.grandhi@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Fremont, USA",
        "image": "assets/img/team/Keyura A Grandhi.png"
    },
    {
        "id": 159,
        "name": "Joshua Park",
        "email": "joshua.1946577@nv.ccsd.net",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Joshua Park.png"
    },
    {
        "id": 160,
        "name": "Smahi Vijay",
        "email": "smahiv@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Singapore",
        "image": "assets/img/team/Smahi Vijay.png"
    },
    {
        "id": 161,
        "name": "Shukhashini Sivakumar",
        "email": "shukhashinis@yahoo.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Shukhashini Sivakumar.png"
    },
    {
        "id": 162,
        "name": "Christina Julien",
        "email": "cejtlch@icloud.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Nashville, USA",
        "image": "assets/img/team/Christina Julien.png"
    },
    {
        "id": 163,
        "name": "Anusha Kamtikar",
        "email": "anushakamtikar@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Pune, India",
        "image": "assets/img/team/Anusha Kamtikar.png"
    },
    {
        "id": 164,
        "name": "Kushi Khushi",
        "email": "k.khushi0357@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Helifax, Canada",
        "image": "assets/img/team/Kushi Khushi.png"
    },
    {
        "id": 165,
        "name": "Veer Raghav Jaiswal",
        "email": "veer1838.jaiswal@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Kolkata, India",
        "image": "assets/img/team/Veer Raghav Jaiswal.png"
    },
    {
        "id": 166,
        "name": "Abisatu Kabineh-Mansaray",
        "email": "km.abisatu@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "London, UK",
        "image": "assets/img/team/Abisatu Kabineh-Mansaray.png"
    },
    {
        "id": 167,
        "name": "Justin Tishbi",
        "email": "justintishbi@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Los Angeles, USA",
        "image": "assets/img/team/Justin Tishbi.png"
    },
    {
        "id": 168,
        "name": "Anvita Verabelli",
        "email": "v.anvita26@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Anvita Verabelli.png"
    },
    {
        "id": 169,
        "name": "Aalima Shabeeb",
        "email": "Aalimashabeeb@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Lucknow, India",
        "image": "assets/img/team/Aalima Shabeeb.png"
    },
    {
        "id": 170,
        "name": "Amalia Valea",
        "email": "amaliavalea@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Valladoid, Spain",
        "image": "assets/img/team/Amalia Valea.png"
    },
    {
        "id": 171,
        "name": "Maryam Rehmat Chaudhry",
        "email": "25maryamchaudhry@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Raleigh, USA",
        "image": "assets/img/team/Maryam Rehmat Chaudhry.png"
    },
    {
        "id": 172,
        "name": "Ayesha Haroon",
        "email": "ayeshaharoon0507@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Dallas, USA",
        "image": "assets/img/team/Ayesha Haroon.png"
    },
    {
        "id": 173,
        "name": "Teddy Cohen",
        "email": "cohenth@thayer.org",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Boston, USA",
        "image": "assets/img/team/Teddy Cohen.png"
    },
    {
        "id": 174,
        "name": "Husam Ramadan",
        "email": "husamramadanofficial@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "California, USA",
        "image": "assets/img/team/Husam Ramadan.png"
    },
    {
        "id": 175,
        "name": "Nikita Anand",
        "email": "officialnia.anand@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Patna, India",
        "image": "assets/img/team/Nikita Anand.png"
    },
    {
        "id": 176,
        "name": "Adhvighaa BS",
        "email": "adhvighaabharani@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Adhvighaa BS.png"
    },
    {
        "id": 177,
        "name": "Olivia Xu",
        "email": "olivia.hope.xu@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Princeton, USA",
        "image": "assets/img/team/Olivia Xu.png"
    },
    {
        "id": 178,
        "name": "Urvish Lodha",
        "email": "urvish.lodha@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai , India",
        "image": "assets/img/team/Urvish Lodha.png"
    },
    {
        "id": 179,
        "name": "Hanna Karasinska",
        "email": "haniiak@yahoo.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Warsaw, Poland",
        "image": "assets/img/team/Hanna Karasinska.png"
    },
    {
        "id": 180,
        "name": "Anissa Das",
        "email": "das.anissa@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Kolkata, India",
        "image": "assets/img/team/Anissa Das.png"
    },
    {
        "id": 181,
        "name": "Malia Nagel",
        "email": "2024.m.nagel@shalhevet.org",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Los Angeles, USA",
        "image": "assets/img/team/Malia Nagel.png"
    },
    {
        "id": 182,
        "name": "Alara Yilmaz",
        "email": "alarayilmaz050@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Alara Yilmaz.png"
    },
    {
        "id": 183,
        "name": "Isabella Yang",
        "email": "isabellayang381@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "California, USA",
        "image": "assets/img/team/Isabella Yang.png"
    },
    {
        "id": 184,
        "name": "Riya Murthy",
        "email": "riyamurthy7@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Cupertino, USA",
        "image": "assets/img/team/Riya Murthy.png"
    },
    {
        "id": 185,
        "name": "Anika Mittal",
        "email": "anika.mitt@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Kodaikanal, India",
        "image": "assets/img/team/Anika Mittal.png"
    },
    {
        "id": 186,
        "name": "Lailla Burka",
        "email": "lailla.burka@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Arizona, USA",
        "image": "assets/img/team/Lailla Burka.png"
    },
    {
        "id": 187,
        "name": "Jefferson Lin",
        "email": "jefferson20071001@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Brooklyn, USA",
        "image": "assets/img/team/Jefferson Lin.png"
    },
    {
        "id": 188,
        "name": "Fathima Israh Muhseen",
        "email": "israh.m@icloud.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Fathima Israh Muhseen.png"
    },
    {
        "id": 189,
        "name": "Shreya Aju",
        "email": "shreyaaju254@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Shreya Aju.png"
    },
    {
        "id": 190,
        "name": "Anusha Anchlia",
        "email": "anusha.anchlia2009@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Anusha Anchlia.png"
    },
    {
        "id": 191,
        "name": "Wickramasinghe Pathiranage Senugi Limanasa Jayawardana",
        "email": "senugijayawardana@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Toronto, Canada",
        "image": "assets/img/team/Wickramasinghe Pathiranage Senugi Limanasa Jayawardana.png"
    },
    {
        "id": 192,
        "name": "Atharva Dangre",
        "email": "atharva.dangre1@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Atharva Dangre.png"
    },
    {
        "id": 193,
        "name": "Nusaiba Mehnaz",
        "email": "nusaiba.mehnaz@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Dhaka, Bangladesh",
        "image": "assets/img/team/Nusaiba Mehnaz.png"
    },
    {
        "id": 194,
        "name": "Wing Lam Charlene",
        "email": "charlenelau0109@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "ShenZhen, China",
        "image": "assets/img/team/Wing Lam Charlene.png"
    },
    {
        "id": 195,
        "name": "Tashvi Verma",
        "email": "tashviverma1910@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Tashvi Verma.png"
    },
    {
        "id": 196,
        "name": "Victor Njagi",
        "email": "victormureithinjagi@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Nairobi, Kenya",
        "image": "assets/img/team/Victor Njagi.png"
    },
    {
        "id": 197,
        "name": "Riya Thakur",
        "email": "riyathakur2105@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Riya Thakur.png"
    },
    {
        "id": 198,
        "name": "Ereni Sadek",
        "email": "erenisadek30@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Texas, USA",
        "image": "assets/img/team/Ereni Sadek.png"
    },
    {
        "id": 199,
        "name": "Emily Wang",
        "email": "ewang3@branksome.on.ca",
        "division": "Academics",
        "team": "Academics",
        "location": "Toronto, Canada",
        "image": "assets/img/team/Emily Wang.png"
    },
    {
        "id": 200,
        "name": "Jessica Singh",
        "email": "jessicasingh214@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Vancouver, Canada",
        "image": "assets/img/team/Jessica Singh.png"
    },
    {
        "id": 201,
        "name": "An N. Bui",
        "email": "anngbui17@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Texas, USA",
        "image": "assets/img/team/An N. Bui.png"
    },
    {
        "id": 202,
        "name": "Eunji Lee",
        "email": "edmswl05@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "USA",
        "image": "assets/img/team/Eunji Lee.png"
    },
    {
        "id": 203,
        "name": "Abigail Shwartz",
        "email": "abigails22@nycstudents.net",
        "division": "Academics",
        "team": "Academics",
        "location": "USA",
        "image": "assets/img/team/Abigail Shwartz.png"
    },
    {
        "id": 204,
        "name": "Shamayem Batool",
        "email": "shamayem.batool@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Lahore, Pakistan ",
        "image": "assets/img/team/Shamayem Batool.png"
    },
    {
        "id": 205,
        "name": "Nalini Gupta",
        "email": "nalinigupta1098@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Goa, India",
        "image": "assets/img/team/Nalini Gupta.png"
    },
    {
        "id": 206,
        "name": "Janya Srivastava",
        "email": "janyasrivastava0@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Ontario, Canada",
        "image": "assets/img/team/Janya Srivastava.png"
    },
    {
        "id": 207,
        "name": "Laquana",
        "email": "laquanacampbell17@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Ajax, Canada",
        "image": "assets/img/team/Laquana.png"
    },
    {
        "id": 208,
        "name": "Mfadel Ouannass",
        "email": "mfadel06@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Chicago, USA",
        "image": "assets/img/team/Mfadel Ouannass.png"
    },
    {
        "id": 209,
        "name": "Snehal Abdol",
        "email": "snehaladbol@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Maharashtra, India",
        "image": "assets/img/team/Snehal Abdol.png"
    },
    {
        "id": 210,
        "name": "Beatriz Valadão Donnici De Azevedo",
        "email": "biadonnici@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Rio De Janerio, Brazil",
        "image": "assets/img/team/Beatriz Valadao Donnici De Azevedo.png"
    },
    {
        "id": 211,
        "name": "Matilde Silva",
        "email": "matildeasilva2000@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Leiria, Portugal",
        "image": "assets/img/team/Matilde Silva.png"
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

    var techOps = data.filter(m => m.team === "Technical Operations")
    addCards(techOps)
    
    var managers = [
        "Arni Mahendra",
        "Julia Stergiou",
        "Kaavya Dasgupta",
        "Priya Ramani",
        "Priyanka Karamchandani",
        "Aanya Mishra",
        "Kumudha Triveedhi",
        "Shravani Tushar Kulkarni"
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
            "name": "National Cybersecurity Alliance",
            "link": "https://staysafeonline.org/",
            "image": "assets/img/partners/NCA.png"
        },
        {
            "id": 2,
            "name": "Asha For Education",
            "link": "https://ashanet.org/",
            "image": "assets/img/partners/AFE.png"
        },
        {
            "id": 3,
            "name": "SOS Children's Villages",
            "link": "https://www.sos-childrensvillages.org/",
            "image": "assets/img/partners/SOS.png"
        },  
        {
            "id": 4,
            "name": "Ministry of Education, Ampara",
            "link": "https://moe.gov.lk/",
            "image": "assets/img/partners/SL_MOE.png"
        },
        {
            "id": 5,
            "name": "United Under Arts",
            "link": "https://www.unitedunderarts.org/",
            "image": "assets/img/partners/UUALogo.png"
        },
        {
            "id": 6,
            "name": "Mind Stance",
            "link": "https://www.instagram.com/_mind.stance_/?hl=en",
            "image": "assets/img/partners/mindstance.png"
        },
        {
            "id": 7,
            "name": "The Online Foundation",
            "link": "https://www.instagram.com/theonlinefoundation/?hl=en",
            "image": "assets/img/partners/TOF.png"
        },
        {
            "id": 8,
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
                        duration: 3000,
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
