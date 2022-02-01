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
        "location": "Mumbai, India",
        "image": "assets/img/team/Nilabh Agrawal.png"
    },
    {
        "id": 2,
        "name": "Amy Park",
        "email": "amy@instilt.com",
        "division": "Chief Program Officer",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Amy Park.png"
    },
    {
        "id": 3,
        "name": "Haresh Wedanayake",
        "email": "haresh@instilt.com",
        "division": "Chief Operating Officer",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Haresh Wedanayake.png"
    },
    {
        "id": 4,
        "name": "Riya Garg",
        "email": "riya@instilt.com",
        "division": "Chief Marketing Officer",
        "location": "Bangalore, India",
        "image": "assets/img/team/Riya Garg.png"
    },
    {
        "id": 5,
        "name": "Ayush Ravichandran",
        "email": "ayush@instilt.com",
        "division": "Head of Technical Operations",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Ayush Ravichandran.png"
    },
    {
        "id": 6,
        "name": "Theaswanth Ganesh",
        "email": "theaswanth@instilt.com",
        "division": "Head of Project Development",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Theaswanth Ganesh.png"
    },
    {
        "id": 7,
        "name": "Rachel Wu",
        "email": "rachel.wu.559@gmail.com",
        "division": "Head of Partnerships",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Rachel Wu.png"
    },
    {
        "id": 8,
        "name": "Tanush Das",
        "email": "tanush@instilt.com",
        "division": "Head of Scouting",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Tanush Das.png"
    },
    {
        "id": 9,
        "name": "Paloosha Sheikh",
        "email": "sheikhpaloosha1@gmail.com",
        "division": "Scouting & Cohort Head",
        "location": "Srinagar, India",
        "image": "assets/img/team/Paloosha Sheikh.png"
    },
    {
        "id": 10,
        "name": "Aarush Sachdeva",
        "email": "aarush433@gmail.com",
        "division": "Academics",
        "location": "Mumbai, India",
        "image": "assets/img/team/Aarush Sachdeva.png"
    },
    {
        "id": 11,
        "name": "Vidushi Anand",
        "email": "vidushianand09@gmail.com",
        "division": "Communications",
        "location": "Gurugram, India",
        "image": "assets/img/team/Vidushi Anand.png"
    },
    {
        "id": 12,
        "name": "Roohee Urs",
        "email": "rohee.urs@gmail.com",
        "division": "Academics",
        "location": "Mysore, India",
        "image": "assets/img/team/Roohee Urs.png"
    },
    {
        "id": 13,
        "name": "Ben Turner",
        "email": "ben.turner0987@gmail.com",
        "division": "Academics",
        "location": "Oxford, UK",
        "image": "assets/img/team/Ben Turner.png"
    },
    {
        "id": 14,
        "name": "Nandini Joshi",
        "email": "nandini.joshi04@gmail.com",
        "division": "Academics",
        "location": "Muscat, Oman",
        "image": "assets/img/team/Nandini Joshi.png"
    },
    {
        "id": 15,
        "name": "Priyanka Karamchandani",
        "email": "khushikaramchandani@gmail.com",
        "division": "Social Media",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Priyanka Karamchandani.png"
    },
    {
        "id": 16,
        "name": "Mansi Agrawal",
        "email": "agrawamansi@gmail.com",
        "division": "Social Media",
        "location": "Mumbai, India",
        "image": "assets/img/team/Mansi Agrawal.png"
    },
    {
        "id": 17,
        "name": "Yan Xi",
        "email": "chenyx1308@gmail.com",
        "division": "Academics & Cohort Head",
        "location": "Wirral, UK",
        "image": "assets/img/team/Yan Xi.png"
    },
    {
        "id": 18,
        "name": "Arshia Singha",
        "email": "sbgs.arshia.singha@gmail.com",
        "division": "Communications",
        "location": "Kolkata, India",
        "image": "assets/img/team/Arshia Singha.png"
    },
    {
        "id": 19,
        "name": "Abeer Shaikh",
        "email": "shaikhabeer03@gmail.com",
        "division": "Academics & Cohort Head",
        "location": "Mumbai, India",
        "image": "assets/img/team/Abeer Shaikh.png"
    },
    {
        "id": 20,
        "name": "Anirudh Agarwal",
        "email": "itsanirudh98@gmail.com",
        "division": "Communications",
        "location": "Noida, India",
        "image": "assets/img/team/Anirudh Agarwal.png"
    },
    {
        "id": 21,
        "name": "Saanya Gupta",
        "email": "saanyagupta01@gmail.com",
        "division": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Saanya Gupta.png"
    },
    {
        "id": 22,
        "name": "Sanjana Mahesh",
        "email": "sanjumahesh2411@gmail.com",
        "division": "Academics & Project Manager",
        "location": "Singapore",
        "image": "assets/img/team/Sanjana Mahesh.png"
    },
    {
        "id": 23,
        "name": "Kruthya Ratnayake",
        "email": "kruthya@outlook.com",
        "division": "Tutor & Project Manager",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Kruthya Ratnayake.png"
    },
    {
        "id": 24,
        "name": "Yashasvi Gupta",
        "email": "yashasvi.gupta@outlook.in",
        "division": "Communications & Cohort Head",
        "location": "Lucknow, India",
        "image": "assets/img/team/Yashasvi Gupta.png"
    },
    {
        "id": 25,
        "name": "Manal Abdul Jaleel",
        "email": "manalabduljaleel2003@gmail.com",
        "division": "Tutor",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Manal Abdul Jaleel.png"
    },
    {
        "id": 26,
        "name": "Renuk Basnayake",
        "email": "renukbas@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Renuk Basnayake.png"
    },
    {
        "id": 27,
        "name": "Palakh Khanna",
        "email": "palakhkhanna20@gmail.com",
        "division": "Communications",
        "location": "New Delhi, India",
        "image": "assets/img/team/Palakh Khanna.png"
    },
    {
        "id": 28,
        "name": "Aarush Panda",
        "email": "aarushp@gmail.com",
        "division": "Scouting & Cohort Head",
        "location": "Livemore, USA",
        "image": "assets/img/team/Aarush Panda.png"
    },
    {
        "id": 29,
        "name": "Reet Narula",
        "email": "reetnarula20@gmail.com",
        "division": "Communications",
        "location": "Bangalore, India",
        "image": "assets/img/team/Reet Narula.png"
    },
    {
        "id": 30,
        "name": "Nikita Agrawal",
        "email": "nikitaagrawal62404@gmail.com",
        "division": "Communications",
        "location": "Jaipur, India",
        "image": "assets/img/team/Nikita Agrawal.png"
    },
    {
        "id": 31,
        "name": "Anamitra Phukon",
        "email": "anamitra.p2@gmail.com",
        "division": "Communications",
        "location": "Guwahati, India",
        "image": "assets/img/team/Anamitra Phukon.png"
    },
    {
        "id": 32,
        "name": "Ranald Lam",
        "email": "ranaldlam@gmail.com",
        "division": "Scouting",
        "location": "New York, USA",
        "image": "assets/img/team/Ranald Lam.png"
    },
    {
        "id": 33,
        "name": "Aarya Kumar",
        "email": "aaryakk1289@gmail.com",
        "division": "Tutor",
        "location": "Pune, India",
        "image": "assets/img/team/Aarya Kumar.png"
    },
    {
        "id": 34,
        "name": "Vishaka Subramaniam",
        "email": "wish032005@gmail.com",
        "division": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Vishaka Subramaniam.png"
    },
    {
        "id": 35,
        "name": "Gargi Arora",
        "email": "gargigargi1816@gmail.com",
        "division": "Communications",
        "location": "Amritsar, India",
        "image": "assets/img/team/Gargi Arora.png"
    },
    {
        "id": 36,
        "name": "Satya Rai",
        "email": "satyarai.sac@gmail.com",
        "division": "Communications",
        "location": "Prayagraj, India",
        "image": "assets/img/team/Satya Rai.png"
    },
    {
        "id": 37,
        "name": "Nitya Verma",
        "email": "nityaverma06@gmail.com",
        "division": "Communications & Cohort Head",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Nitya Verma.png"
    },
    {
        "id": 38,
        "name": "Kumudha Triveedhi",
        "email": "ktiriveedhi1@abaoman.org",
        "division": "Academics",
        "location": "Muscat, Oman",
        "image": "assets/img/team/Kumudha Triveedhi.png"
    },
    {
        "id": 39,
        "name": "Sanju Malika",
        "email": "sanjubeautyvlogs@gmail.com",
        "division": "Communications & Cohort Head",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Sanju Malika.png"
    },
    {
        "id": 40,
        "name": "Tvadhanya Badruka",
        "email": "tvadhanyabadruka@gmail.com",
        "division": "Academics & Content Lead",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Tvadhanya Badruka.png"
    },
    {
        "id": 41,
        "name": "Sophia Bagnes",
        "email": "sbtfbagnes@gmail.com",
        "division": "Academics & Content Lead",
        "location": "Iriga, Philippines",
        "image": "assets/img/team/Sophia Bagnes.png"
    },
    {
        "id": 42,
        "name": "Rithvik Singh",
        "email": "singhrithvik2016@gmail.com",
        "division": "Tutor & Content Lead",
        "location": "Sharjah, UAE",
        "image": "assets/img/team/Rithvik Singh.png"
    },
    {
        "id": 43,
        "name": "Marwa Fathima",
        "email": "marwafathima2004@gmail.com",
        "division": "Scouting & Content Lead",
        "location": "Ras al Khaimah, UAE",
        "image": "assets/img/team/Marwa Fathima.png"
    },
    {
        "id": 44,
        "name": "Shaurya Sarma",
        "email": "shaurya.sarma@gmail.com",
        "division": "Technical Operations",
        "location": "New Jersey, USA",
        "image": "assets/img/team/Shaurya Sarma.png"
    },
    {
        "id": 45,
        "name": "Vanya Agarwal",
        "email": "vanya@ajcast.com",
        "division": "Tutor",
        "location": "Kolkata, India",
        "image": "assets/img/team/Vanya Agarwal.png"
    },
    {
        "id": 46,
        "name": "Madhurima Nayak",
        "email": "connectwithmadhurima@gmail.com",
        "division": "Communications",
        "location": "Navi Mumbai, India",
        "image": "assets/img/team/Madhurima Nayak.png"
    },
    {
        "id": 47,
        "name": "Tanvi Garg",
        "email": "gargselene@gmail.com",
        "division": "Academics & Project Manager",
        "location": "Agra, India",
        "image": "assets/img/team/Tanvi Garg.png"
    },
    {
        "id": 48,
        "name": "Simran Hakim",
        "email": "simran.hakim@gmail.com",
        "division": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Simran Hakim.png"
    },
    {
        "id": 49,
        "name": "Rucha Shah",
        "email": "ruchas2005@gmail.com",
        "division": "Communications",
        "location": "Bangalore, India",
        "image": "assets/img/team/Rucha Shah.png"
    },
    {
        "id": 50,
        "name": "Jahnvi Padhiar",
        "email": "padhiarjahnvi@gmail.com",
        "division": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Jahnvi Padhiar.png"
    },
    {
        "id": 51,
        "name": "Devmini Wimalasena",
        "email": "devminiqueend@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Devmini Wimalasena.png"
    },
    {
        "id": 52,
        "name": "Aisha Zia Shameer",
        "email": "aishameer.me@gmail.com",
        "division": "Academics & Content Lead",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Aisha Zia Shameer.png"
    },
    {
        "id": 53,
        "name": "Iram Inamdar",
        "email": "iraminamdar943@gmail.com",
        "division": "Academics",
        "location": "Pune, India",
        "image": "assets/img/team/Iram Inamdar.png"
    },
    {
        "id": 54,
        "name": "Amrita Anbuchezhian",
        "email": "amritaanbu05@gmail.com",
        "division": "Academics",
        "location": "Singapore",
        "image": "assets/img/team/Amrita Anbuchezhian.png"
    },
    {
        "id": 55,
        "name": "Steven Kadavil",
        "email": "stevens20142021@yahoo.com",
        "division": "Scouting",
        "location": "Philadelphia, USA",
        "image": "assets/img/team/Steven Kadavil.png"
    },
    {
        "id": 56,
        "name": "Agrim Gulaty",
        "email": "agrimgulaty@gmail.com",
        "division": "Communications & Project Manager",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Agrim Gulaty.png"
    },
    {
        "id": 57,
        "name": "Ruth Sunil Thomas",
        "email": "ruthsunil9966@gmail.com",
        "division": "Tutor",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Ruth Sunil Thomas.png"
    },
    {
        "id": 58,
        "name": "Divyanshi Gupta",
        "email": "divyanshi2004@gmail.com",
        "division": "Communications & Cohort Head",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Divyanshi Gupta.png"
    },
    {
        "id": 59,
        "name": "Isra Sharnez",
        "email": "isharnez@gmail.com",
        "division": "Tutor",
        "location": "Mead, USA",
        "image": "assets/img/team/Isra Sharnez.png"
    },
    {
        "id": 60,
        "name": "Nubin Chung",
        "email": "nuboutnubin@gmail.com",
        "division": "Academics",
        "location": "Seoul, South Korea",
        "image": "assets/img/team/Nubin Chung.png"
    },
    {
        "id": 61,
        "name": "Hashim Ishfaq",
        "email": "hashimishfaq134@hotmail.com",
        "division": "Social Media",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Hashim Ishfaq.png"
    },
    {
        "id": 62,
        "name": "Marija Nikolic",
        "email": "marijamashanikolic@gmail.com",
        "division": "Tutor",
        "location": "Belgrade, Serbia",
        "image": "assets/img/team/Marija Nikoli\u00c4\u2021.png"
    },
    {
        "id": 63,
        "name": "Andri Pashollari",
        "email": "andripashollari1234@gmail.com",
        "division": "Tutor",
        "location": "Sarand\u00c3\u00ab, Albania",
        "image": "assets/img/team/Andri Pashollari.png"
    },
    {
        "id": 64,
        "name": "Shevani Ranawana",
        "email": "suhelaran86@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Shevani Ranawana.png"
    },
    {
        "id": 65,
        "name": "Coco Zhang",
        "email": "coco.401828@nv.ccsd.net",
        "division": "Social Media",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Coco Zhang.png"
    },
    {
        "id": 66,
        "name": "Sahana Ramachandran",
        "email": "sahanarama89@gmail.com",
        "division": "Communications & Project Manager",
        "location": "Navi Mumbai, India",
        "image": "assets/img/team/Sahana Ramachandran.png"
    },
    {
        "id": 67,
        "name": "Kavini Ralapanawe",
        "email": "kavinitr17@gmail.com",
        "division": "Tutor",
        "location": "Yerevan, Armenia",
        "image": "assets/img/team/Kavini Ralapanawe.png"
    },
    {
        "id": 68,
        "name": "Insha Pervez",
        "email": "inshapervez07@gmail.com",
        "division": "Tutor",
        "location": "Ajmer, India",
        "image": "assets/img/team/Insha Pervez.png"
    },
    {
        "id": 69,
        "name": "Tunmise Adebowale",
        "email": "tunmiseadebowale@shcs.school.nz",
        "division": "Technical Operations",
        "location": "Dunedin, New Zealand",
        "image": "assets/img/team/Tunmise Adebowale.png"
    },
    {
        "id": 70,
        "name": "Rosemary Ibe",
        "email": "rosemaryibe18@gmail.com",
        "division": "Tutor",
        "location": "Lagos, Nigeria",
        "image": "assets/img/team/Rosemary Ibe.png"
    },
    {
        "id": 71,
        "name": "Hashani Abeygunawardene",
        "email": "hashabey3@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Hashani Abeygunawardene.png"
    },
    {
        "id": 72,
        "name": "Abhimanyu Singhal",
        "email": "abhimanyusinghal11@icloud.com",
        "division": "Scouting",
        "location": "Ghaziabad, India",
        "image": "assets/img/team/Abhimanyu Singhal.png"
    },
    {
        "id": 73,
        "name": "Navraj Choudhary",
        "email": "sach8in@yahoo.com",
        "division": "Tutor",
        "location": "Sydney, Australia",
        "image": "assets/img/team/Navraj Choudhary.png"
    },
    {
        "id": 74,
        "name": "Ntombikhona Manyifolo",
        "email": "ntombikhona.manyifolo@gmail.com",
        "division": "Tutor",
        "location": "Cape Town, South Africa",
        "image": "assets/img/team/Ntombikhona Manyifolo.png"
    },
    {
        "id": 75,
        "name": "Hanin Shamsheer",
        "email": "haninshamsheer@gmail.com",
        "division": "Scouting",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Hanin Shamsheer.png"
    },
    {
        "id": 76,
        "name": "Ayuushi Gunetilleke",
        "email": "ayuushig@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Ayuushi Gunetilleke.png"
    },
    {
        "id": 77,
        "name": "Ayan Chavand",
        "email": "ayan.chavand15@gmail.com",
        "division": "Tutor",
        "location": "Gandhinagar, India",
        "image": "assets/img/team/Ayan Chavand.png"
    },
    {
        "id": 78,
        "name": "Mihika Das Gupta",
        "email": "mihikadasgupta@gmail.com",
        "division": "Tutor",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Mihika Das Gupta.png"
    },
    {
        "id": 79,
        "name": "Anna Lemos",
        "email": "a.lemos1012@gmail.com",
        "division": "Communications",
        "location": "Thane, India",
        "image": "assets/img/team/Anna Lemos.png"
    },
    {
        "id": 80,
        "name": "Harishi Fernando",
        "email": "harshisudharafernando@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Harishi Fernando.png"
    },
    {
        "id": 81,
        "name": "Shruti Singh",
        "email": "shrutisinghkg@gmail.com",
        "division": "Scouting",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Shruti Singh.png"
    },
    {
        "id": 82,
        "name": "Divyanshi Mohanty",
        "email": "divyanshimohanty4@gmail.com",
        "division": "Scouting & Cohort Head",
        "location": "Bangalore, India",
        "image": "assets/img/team/Divyanshi Mohanty.png"
    },
    {
        "id": 83,
        "name": "Lavanya Pasi",
        "email": "lavanyapasi88@gmail.com",
        "division": "Communications",
        "location": "New Delhi, India",
        "image": "assets/img/team/Lavanya Pasi.png"
    },
    {
        "id": 84,
        "name": "Tanmay Shintre",
        "email": "tanmayshintrewadhwani@gmail.com",
        "division": "Scouting",
        "location": "Pune, India",
        "image": "assets/img/team/Tanmay Shintre.png"
    },
    {
        "id": 85,
        "name": "Shravani Tushar Kulkarni",
        "email": "shravanitusharkulkarni@gmail.com",
        "division": "Communications",
        "location": "Ahmedabad, India",
        "image": "assets/img/team/Shravani Tushar Kulkarni.png"
    },
    {
        "id": 86,
        "name": "Haripriya Saravanan",
        "email": "haripriyasaravanan012@gmail.com",
        "division": "Academics",
        "location": "Chennai, India",
        "image": "assets/img/team/Haripriya Saravanan.png"
    },
    {
        "id": 87,
        "name": "Priya Ramani",
        "email": "priya15.ramani@gmail.com",
        "division": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Priya Ramani.png"
    },
    {
        "id": 88,
        "name": "Svea Aariyeh Pasad",
        "email": "sveapasad03@gmail.com",
        "division": "Scouting",
        "location": "Mumbai, India",
        "image": "assets/img/team/Svea Aariyeh Pasad.png"
    },
    {
        "id": 89,
        "name": "Diya Singh Chauhan",
        "email": "diya@instilt.com",
        "division": "Human Resources & Content Lead",
        "location": "Melbourne, Australia",
        "image": "assets/img/team/Diya Singh Chauhan.png"
    },
    {
        "id": 90,
        "name": "Saumika Pandey",
        "email": "pandeysaumika@gmail.com",
        "division": "Communications",
        "location": "Thane, India",
        "image": "assets/img/team/Saumika Pandey.png"
    },
    {
        "id": 91,
        "name": "Sara Pashollari",
        "email": "sarapashollari@gmail.com",
        "division": "Academics",
        "location": "Albania",
        "image": "assets/img/team/Sara Pashollari.png"
    },
    {
        "id": 92,
        "name": "Sanjana Menon",
        "email": "future2402@gmail.com",
        "division": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Sanjana Menon.png"
    },
    {
        "id": 93,
        "name": "Manasvini Balaji",
        "email": "manasvinibalaji@gmail.com",
        "division": "Scouting",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Manasvini Balaji.png"
    },
    {
        "id": 94,
        "name": "Shresth Agarwal",
        "email": "shresth.agarwal@oberoi-is.net",
        "division": "Academics & Content Lead",
        "location": "Mumbai, India",
        "image": "assets/img/team/Shresth Agarwal.png"
    },
    {
        "id": 95,
        "name": "Ria Goel",
        "email": "riagoel2501@gmail.com",
        "division": "Scouting",
        "location": "Jaipur, India",
        "image": "assets/img/team/Ria Goel.png"
    },
    {
        "id": 96,
        "name": "Nisha Kumar",
        "email": "24nisha2004@gmail.com",
        "division": "Communications",
        "location": "Indore, India",
        "image": "assets/img/team/Nisha Kumar.png"
    },
    {
        "id": 97,
        "name": "Dhriti Shah",
        "email": "dhriti.r2004@gmail.com",
        "division": "Tutor",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Dhriti Shah.png"
    },
    {
        "id": 98,
        "name": "Anvi Shah",
        "email": "anvishah1704@gmail.com",
        "division": "Social Media",
        "location": "Chennai, India",
        "image": "assets/img/team/Anvi Shah.png"
    },
    {
        "id": 99,
        "name": "Neelima Sharma",
        "email": "editor.neelima@gmail.com",
        "division": "Tutor",
        "location": "New Delhi, India",
        "image": "assets/img/team/Neelima Sharma.png"
    },
    {
        "id": 100,
        "name": "Vann Louis Burias",
        "email": "vannlouis5@gmail.com",
        "division": "Tutor",
        "location": "Philippines",
        "image": "assets/img/team/Vann Louis Burias.png"
    },
    {
        "id": 101,
        "name": "Aaralynn Thomas",
        "email": "aaralynn89@gmail.com",
        "division": "Social Media",
        "location": "Canada",
        "image": "assets/img/team/Aaralynn Thomas.png"
    },
    {
        "id": 102,
        "name": "Ruhi Pednekar",
        "email": "ruhipednekarl@gmail.com",
        "division": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Ruhi Pednekar.png"
    },
    {
        "id": 103,
        "name": "Maithili Pungaliya",
        "email": "maithilipungaliya2605@gmail.com",
        "division": "Communications",
        "location": "Pune, India",
        "image": "assets/img/team/Maithili Pungaliya.png"
    },
    {
        "id": 104,
        "name": "Vinicius Penido Coutinho",
        "email": "viniciuspenidocoutinho@gmail.com",
        "division": "Scouting",
        "location": "Brazil",
        "image": "assets/img/team/Vinicius Penido Coutinho.png"
    },
    {
        "id": 105,
        "name": "Anouk Leshan Gunaratne",
        "email": "anoukguna@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Anouk Leshan Gunaratne.png"
    },
    {
        "id": 106,
        "name": "Aseel Mohamedosman",
        "email": "aseelosman22@gmail.com",
        "division": "Scouting",
        "location": "Qatar",
        "image": "assets/img/team/Aseel Mohamedosman.png"
    },
    {
        "id": 107,
        "name": "Akhila Herath",
        "email": "akhilahasit@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Akhila Herath.png"
    },
    {
        "id": 108,
        "name": "Leo Barrientos Gutierrez",
        "email": "leobar22@bergen.org",
        "division": "Social Media",
        "location": "Fort Lee, USA",
        "image": "assets/img/team/Leo Barrientos Gutierrez.png"
    },
    {
        "id": 109,
        "name": "Nitya Bomma",
        "email": "nityabomma@gmail.com",
        "division": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Nitya Bomma.png"
    },
    {
        "id": 110,
        "name": "Samaarah Wijewardene",
        "email": "samaarahwijewardene@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Samaarah Wijewardene.png"
    },
    {
        "id": 111,
        "name": "Andrew Spearing",
        "email": "andrew.spearing@uconn.edu",
        "division": "Academics",
        "location": "Boston, USA",
        "image": "assets/img/team/Andrew Spearing.png"
    },
    {
        "id": 112,
        "name": "Janet Federici",
        "email": "janetfederici8@gmail.com",
        "division": "Tutor",
        "location": "Wilkes-Barre, USA",
        "image": "assets/img/team/Janet Federici.png"
    },
    {
        "id": 113,
        "name": "Umika Kuricheti",
        "email": "umikakv2013@gmail.com",
        "division": "Technical Operations",
        "location": "USA",
        "image": "assets/img/team/Umika Kuricheti.png"
    },
    {
        "id": 114,
        "name": "Mason Hartlage",
        "email": "mason.ipad3@icloud.com",
        "division": "Tutor",
        "location": "Louisville, USA",
        "image": "assets/img/team/Mason Hartlage.png"
    },
    {
        "id": 115,
        "name": "Srinithi Mohan",
        "email": "mohannith95@gmail.com",
        "division": "Academics",
        "location": "Czech Republic",
        "image": "assets/img/team/Srinithi Mohan.png"
    },
    {
        "id": 116,
        "name": "Tanisha Banerjee",
        "email": "banerjeetb3@gmail.com",
        "division": "Human Resources",
        "location": "Kolkata, India",
        "image": "assets/img/team/Tanisha Banerjee.png"
    },
    {
        "id": 117,
        "name": "Mahek Srivastava",
        "email": "mahek4@icloud.com",
        "division": "Tutor",
        "location": "Hradec Kralove, Czech Republic",
        "image": "assets/img/team/Mahek Srivastava.png"
    },
    {
        "id": 118,
        "name": "Claire Nguyen",
        "email": "clairenuen@gmail.com",
        "division": "Social Media",
        "location": "Garden Grove, USA",
        "image": "assets/img/team/Claire Nguyen.png"
    },
    {
        "id": 119,
        "name": "Sanket Sharma",
        "email": "sharmasanketa899@gmail.com",
        "division": "Technical Operations",
        "location": "Nepal",
        "image": "assets/img/team/Sanket Sharma.png"
    },
    {
        "id": 120,
        "name": "Marasel Perry",
        "email": "p.marasel@gmail.com",
        "division": "Academics",
        "location": "New York, USA",
        "image": "assets/img/team/Marasel Perry.png"
    },
    {
        "id": 121,
        "name": "Anwesha Maiti",
        "email": "maitianwesha16@gmail.com",
        "division": "Communications",
        "location": "Kolkata, India",
        "image": "assets/img/team/Anwesha Maiti.png"
    },
    {
        "id": 122,
        "name": "Vinugi De Silva",
        "email": "vinugidesilva@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Vinugi De Silva.png"
    },
    {
        "id": 123,
        "name": "Namratha J",
        "email": "namrathaj2001@gmail.com",
        "division": "Technical Operations",
        "location": "Bangalore, India",
        "image": "assets/img/team/Namratha J.png"
    },
    {
        "id": 124,
        "name": "Soraya Kumara",
        "email": "sorayakumara@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Soraya Kumara.png"
    },
    {
        "id": 125,
        "name": "Kehara Edirisinghe",
        "email": "kehara.edirisinghe@gmail.com",
        "division": "Scouting",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Kehara Edirisinghe.png"
    },
    {
        "id": 126,
        "name": "Devishka Chandrasekera",
        "email": "devishka2003@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Devishka Chandrasekera.png"
    },
    {
        "id": 127,
        "name": "Sumaiya Sultana",
        "email": "sumaiyasultanax@gmail.com",
        "division": "Scouting",
        "location": "Dhaka, Bangladesh",
        "image": "assets/img/team/Sumaiya Sultana.png"
    },
    {
        "id": 128,
        "name": "Pooja Goel",
        "email": "hawy397@gmail.com",
        "division": "Communications",
        "location": "Gurgaon, India",
        "image": "assets/img/team/Pooja Goel.png"
    },
    {
        "id": 129,
        "name": "Binudi Benjamin",
        "email": "binudibenjamin8@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Binudi Benjamin.png"
    },
    {
        "id": 130,
        "name": "Payel Bora",
        "email": "hawy397@gmail.com",
        "division": "Tutor",
        "location": "Kamrup Metropolitan, India",
        "image": "assets/img/team/Payel Bora.png"
    },
    {
        "id": 131,
        "name": "Kujana Hewagama",
        "email": "kujana2004@gmail.com",
        "division": "Scouting",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Kujana Hewagama.png"
    },
    {
        "id": 132,
        "name": "Thimasha Perera",
        "email": "thimashasenaliperera@gmail.com",
        "division": "Academics",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Thimasha Perera.png"
    },
    {
        "id": 133,
        "name": "Ishita Walia",
        "email": "ishita.walia2005@gmail.com",
        "division": "Scouting",
        "location": "Ghaziabad, India",
        "image": "assets/img/team/Ishita Walia.png"
    },
    {
        "id": 134,
        "name": "Ruelle Sittampalam",
        "email": "ruellesittampalam@gmail.com",
        "division": "Scouting",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Ruelle Sittampalam.png"
    },
    {
        "id": 135,
        "name": "Amaani Miskin",
        "email": "amani.miskin@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Amaani Miskin.png"
    },
    {
        "id": 136,
        "name": "Masa Dutta",
        "email": "ranoniitb@gmail.com",
        "division": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Masa Dutta.png"
    },
    {
        "id": 137,
        "name": "Buvaneshka Chandrasekera",
        "email": "buvaneshka376@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Buvaneshka Chandrasekera.png"
    },
    {
        "id": 138,
        "name": "Veenaaz Vaid",
        "email": "veenaazv@gmail.com",
        "division": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Veenaaz Vaid.png"
    },
    {
        "id": 139,
        "name": "Annie Elizabeth Binesh",
        "email": "anniebinesh@gmail.com",
        "division": "Tutor",
        "location": "Chennai, India",
        "image": "assets/img/team/Annie Elizabeth Binesh.png"
    },
    {
        "id": 140,
        "name": "Archit Sinha",
        "email": "architsinha8@gmail.com",
        "division": "Academics",
        "location": "Gautam Buddh Nagar, India",
        "image": "assets/img/team/Archit Sinha.png"
    },
    {
        "id": 141,
        "name": "Neha Menon",
        "email": "neha.menon.2005@gmail.com",
        "division": "Tutor",
        "location": "Bangalore, India",
        "image": "assets/img/team/Neha Menon.png"
    },
    {
        "id": 142,
        "name": "Maia Ruth Eugenio",
        "email": "maiaeug@gmail.com",
        "division": "Tutor",
        "location": "Marikina, Philippines",
        "image": "assets/img/team/Maia Ruth Eugenio.png"
    },
    {
        "id": 143,
        "name": "Muaadh Shihabdeen",
        "email": "muaadh9@gmail.com",
        "division": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Muaadh Shihabdeen.png"
    },
    {
        "id": 144,
        "name": "Nidhi Iyer",
        "email": "nidhiyer0402@gmail.com",
        "division": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Nidhi Iyer.png"
    },
    {
        "id": 145,
        "name": "Aarthi Aryasinha",
        "email": "aarthi.aryasinha@gmail.com",
        "division": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Aarthi Aryasinha.png"
    },
    {
        "id": 146,
        "name": "Michelle Yi",
        "email": "michelley.0311@gmail.com",
        "division": "Academics",
        "location": "Seoul, South Korea",
        "image": "assets/img/team/Michelle Yi.png"
    },
    {
        "id": 147,
        "name": "Gayatri Ashutosh Konjalwar",
        "email": "gakonjalwar198@gmail.com",
        "division": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Gayatri Ashutosh Konjalwar.png"
    },
    {
        "id": 148,
        "name": "Atheena Anil",
        "email": "atheenaanil2005@gmail.com",
        "division": "Communications",
        "location": "Mumbai, India",
        "image": "assets/img/team/Atheena Anil.png"
    },
    {
        "id": 149,
        "name": "Frank Liu",
        "email": "frankl0217@icloud.com",
        "division": "Human Resources",
        "location": "USA",
        "image": "assets/img/team/Frank Liu.png"
    },
    {
        "id": 150,
        "name": "Gabriel Sianipar",
        "email": "gabrielbarita@gmail.com",
        "division": "Technical Operations",
        "location": "Indonesia",
        "image": "assets/img/team/Gabriel Sianipar.png"
    },
    {
        "id": 152,
        "name": "Yadavi Bhatia",
        "email": "paribhatia2006@gmail.com",
        "division": "Human Resources",
        "location": "Bangalore, India",
        "image": "assets/img/team/Yadavi Bhatia.png"
    },
    {
        "id": 153,
        "name": "Israh Muhseen",
        "email": "israh.m@icloud.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Israh Muhseen.png"
    },
    {
        "id": 154,
        "name": "Ramayana Jaiswal",
        "email": "ramayanajaiswal@gmail.com",
        "division": "Tutor",
        "location": "Kolkata, India",
        "image": "assets/img/team/Ramayana Jaiswal.png"
    },
    {
        "id": 155,
        "name": "Rustam Singh Tomer",
        "email": "rustamstomer@gmail.com",
        "division": "Technical Operations",
        "location": "Meerut, India",
        "image": "assets/img/team/Rustam Singh Tomer.png"
    },
    {
        "id": 156,
        "name": "Vatsala Singh",
        "email": "singhvatsala123@gmail.com",
        "division": "Communications",
        "location": "Lucknow, India",
        "image": "assets/img/team/Vatsala Singh.png"
    },
    {
        "id": 157,
        "name": "Adrija Jana",
        "email": "adrijajana.live@gmail.com",
        "division": "Communications",
        "location": "Kolkata, India",
        "image": "assets/img/team/Adrija Jana.png"
    },
    {
        "id": 158,
        "name": "Syed Ehab Haider",
        "email": "ehabhaider18@gmail.com",
        "division": "Scouting",
        "location": "Wah Cantonment, Pakistan",
        "image": "assets/img/team/Syed Ehab Haider.png"
    },
    {
        "id": 159,
        "name": "Aanya Mishra",
        "email": "aanyamishra0306@gmail.com",
        "division": "Social Media",
        "location": "Kolkata, India",
        "image": "assets/img/team/Aanya Mishra.png"
    },
    {
        "id": 160,
        "name": "Shivani Raj Urs",
        "email": "shivani.raj.urs1105@gmail.com",
        "division": "Tutor",
        "location": "Bangalore, India",
        "image": "assets/img/team/Shivani Raj Urs.png"
    },
    {
        "id": 161,
        "name": "Prerna Tandon",
        "email": "prernatandon18@gmail.com",
        "division": "Scouting",
        "location": "Lucknow, India",
        "image": "assets/img/team/Prerna Tandon.png"
    },
    {
        "id": 162,
        "name": "Yuvika Sehgal",
        "email": "yuvikachess@gmail.com",
        "division": "Communications",
        "location": "New Delhi, India",
        "image": "assets/img/team/Yuvika Sehgal.png"
    },
    {
        "id": 163,
        "name": "Rhea Joseph",
        "email": "rheajoe33@gmail.com",
        "division": "Communications",
        "location": "Bangalore, India",
        "image": "assets/img/team/Rhea Joseph.png"
    },
    {
        "id": 164,
        "name": "Nicole Sy",
        "email": "nicsy102@gmail.com",
        "division": "Scouting",
        "location": "Manilla, Philippines",
        "image": "assets/img/team/Nicole Sy.png"
    },
    {
        "id": 165,
        "name": "Ann Mascarenhas",
        "email": "annmasc3@gmail.com",
        "division": "Tutor",
        "location": "USA",
        "image": "assets/img/team/Ann Mascarenhas.png"
    },
    {
        "id": 166,
        "name": "Valoumi Sedani",
        "email": "sedanivaloumi@gmail.com",
        "division": "Partnerships",
        "location": "Mumbai, India",
        "image": "assets/img/team/Valoumi Sedani.png"
    },
    {
        "id": 167,
        "name": "Saloni Dwivedi",
        "email": "salonid.s1508@gmail.com",
        "division": "Scouting",
        "location": "Indore, India",
        "image": "assets/img/team/Saloni Dwivedi.png"
    },
    {
        "id": 168,
        "name": "Archie McNeill",
        "email": "archie.mcnll@gmail.com",
        "division": "Partnerships",
        "location": "UK",
        "image": "assets/img/team/Archie McNeill.png"
    },
    {
        "id": 169,
        "name": "Jia Dodeja",
        "email": "jiadodeja@gmail.com",
        "division": "Technical Operations",
        "location": "USA",
        "image": "assets/img/team/Jia Dodeja.png"
    },
    {
        "id": 170,
        "name": "Maithreyi Murali Manohar",
        "email": "maithreyi.murali.manohar@gmail.com",
        "division": "Academics",
        "location": "USA",
        "image": "assets/img/team/Maithreyi Murali Manohar.png"
    }
]


// Display team members by generating html

data.forEach((member) => {
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


for(var i = 0; i < data.length; i++) {
    document.getElementById(`${data[i].id}`).querySelector("#team-email").href =  `mailto:${data[i].email}`;
    document.getElementById(`${data[i].id}`).querySelector("#team-image").src = `${data[i].image}`;
}

function removeElement(element) {
    if (element != null) {
        element.parentNode.parentNode.parentNode.parentNode.remove();
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
