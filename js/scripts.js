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
        "email": "nilabhagrawal4@gmail.com",
        "division": "Founder",
        "location": "Mumbai, India",
        "image": "assets/img/team/Nilabh Agrawal.png"
    },
    {
        "id": 2,
        "name": "Amy Park",
        "email": "amypark.huntsville@gmail.com",
        "division": "Head of Academics",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Amy Park.png"
    },
    {
        "id": 3,
        "name": "Haresh Wedanayake",
        "email": "hareshgw@gmail.com",
        "division": "Head of Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Haresh Wedanayake.png"
    },
    {
        "id": 4,
        "name": "Riya Garg",
        "email": "riyagige@gmail.com",
        "division": "Admin",
        "location": "Bangalore, India",
        "image": "assets/img/team/Riya Garg.png"
    },
    {
        "id": 5,
        "name": "Jeremy Wu",
        "email": "wujeremy999@gmail.com",
        "division": "Admin",
        "location": "San Jose, USA",
        "image": "assets/img/team/Jeremy Wu.png"
    },
    {
        "id": 6,
        "name": "Ayush Ravichandran",
        "email": "ayushravichandran@gmail.com",
        "division": "Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Ayush Ravichandran.png"
    },
    {
        "id": 7,
        "name": "Rachel Wu",
        "email": "rachel.wu.559@gmail.com",
        "division": "Admin",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Rachel Wu.png"
    },
    {
        "id": 8,
        "name": "Theaswanth Ganesh",
        "email": "theaswanthganesh@gmail.com",
        "division": "Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Theaswanth Ganesh.png"
    },
    {
        "id": 9,
        "name": "Harinee Balaji",
        "email": "harineebalaji28@gmail.com",
        "division": "Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Harinee Balaji.png"
    },
    {
        "id": 10,
        "name": "Tanush Das",
        "email": "tanushdas@hotmail.com",
        "division": "Admin",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Tanush Das.png"
    },
    {
        "id": 11,
        "name": "Ashaz Hussain",
        "email": "ashazhussain1609@gmail.com",
        "division": "Outreach",
        "location": "Vizag, India",
        "image": "assets/img/team/Ashaz Hussain.png"
    },
    {
        "id": 12,
        "name": "Paloosha Sheikh",
        "email": "sheikhpaloosha1@gmail.com",
        "division": "Outreach",
        "location": "Srinagar, India",
        "image": "assets/img/team/Paloosha Sheikh.png"
    },
    {
        "id": 13,
        "name": "Aarush Sachdeva",
        "email": "aarush433@gmail.com",
        "division": "Academics",
        "location": "Mumbai, India",
        "image": "assets/img/team/Aarush Sachdeva.png"
    },
    {
        "id": 14,
        "name": "Vidushi Anand",
        "email": "vidushianand09@gmail.com",
        "division": "Outreach",
        "location": "Gurugram, India",
        "image": "assets/img/team/Vidushi Anand.png"
    },
    {
        "id": 15,
        "name": "Roohee Urs",
        "email": "rohee.urs@gmail.com",
        "division": "Academics",
        "location": "Mysore, India",
        "image": "assets/img/team/Roohee Urs.png"
    },
    {
        "id": 16,
        "name": "Ben Turner",
        "email": "ben.turner0987@gmail.com",
        "division": "Academics",
        "location": "Oxford, UK",
        "image": "assets/img/team/Ben Turner.png"
    },
    {
        "id": 17,
        "name": "Nandini Joshi",
        "email": "nandini.joshi04@gmail.com",
        "division": "Academics",
        "location": "Muscat, Oman",
        "image": "assets/img/team/Nandini Joshi.png"
    },
    {
        "id": 18,
        "name": "Priyanka Karamchandani",
        "email": "khushikaramchandani@gmail.com",
        "division": "Outreach",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Priyanka Karamchandani.png"
    },
    {
        "id": 19,
        "name": "Mansi Agrawal",
        "email": "agrawamansi@gmail.com",
        "division": "Outreach",
        "location": "Mumbai, India",
        "image": "assets/img/team/Mansi Agrawal.png"
    },
    {
        "id": 20,
        "name": "Yan Xi",
        "email": "chenyx1308@gmail.com",
        "division": "Academics",
        "location": "Wirral, UK",
        "image": "assets/img/team/Yan Xi.png"
    },
    {
        "id": 21,
        "name": "Arshia Singha",
        "email": "sbgs.arshia.singha@gmail.com",
        "division": "Outreach",
        "location": "Kolkata, India",
        "image": "assets/img/team/Arshia Singha.png"
    },
    {
        "id": 22,
        "name": "Abeer Shaikh",
        "email": "shaikhabeer03@gmail.com",
        "division": "Academics",
        "location": "Mumbai, India",
        "image": "assets/img/team/Abeer Shaikh.png"
    },
    {
        "id": 23,
        "name": "Anirudh Agarwal",
        "email": "itsanirudh98@gmail.com",
        "division": "Outreach",
        "location": "Noida, India",
        "image": "assets/img/team/Anirudh Agarwal.png"
    },
    {
        "id": 24,
        "name": "Saanya Gupta",
        "email": "saanyagupta01@gmail.com",
        "division": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Saanya Gupta.png"
    },
    {
        "id": 25,
        "name": "Sanjana Mahesh",
        "email": "sanjumahesh2411@gmail.com",
        "division": "Academics",
        "location": "Singapore, Singapore",
        "image": "assets/img/team/Sanjana Mahesh.png"
    },
    {
        "id": 26,
        "name": "Kruthya Ratnayake",
        "email": "kruthya@outlook.com",
        "division": "Outreach",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Kruthya Ratnayake.png"
    },
    {
        "id": 27,
        "name": "Yashasvi Gupta",
        "email": "yashasvi.gupta@outlook.in",
        "division": "Outreach",
        "location": "Lucknow, India",
        "image": "assets/img/team/Yashasvi Gupta.png"
    },
    {
        "id": 28,
        "name": "Aditi Deleep",
        "email": "aditi.srivatsa10@gmail.com",
        "division": "Outreach",
        "location": "Bangalore, India",
        "image": "assets/img/team/Aditi Deleep.png"
    },
    {
        "id": 29,
        "name": "Manal Abdul Jaleel",
        "email": "manalabduljaleel2003@gmail.com",
        "division": "Academics",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Manal Abdul Jaleel.png"
    },
    {
        "id": 30,
        "name": "Renuk Basnayake",
        "email": "renukbas@gmail.com",
        "division": "Outreach",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Renuk Basnayake.png"
    },
    {
        "id": 31,
        "name": "Palakh Khanna",
        "email": "palakhkhanna20@gmail.com",
        "division": "Outreach",
        "location": "New Delhi, India",
        "image": "assets/img/team/Palakh Khanna.png"
    },
    {
        "id": 32,
        "name": "Pushpanjali Achuthan",
        "email": "pushpanjaliachuthan23@gmail.com",
        "division": "Tutor",
        "location": "Bangalore, India",
        "image": "assets/img/team/Pushpanjali Achuthan.png"
    },
    {
        "id": 33,
        "name": "Aarush Panda",
        "email": "aarushp@gmail.com",
        "division": "Outreach",
        "location": "Livemore, USA",
        "image": "assets/img/team/Aarush Panda.png"
    },
    {
        "id": 34,
        "name": "Reet Narula",
        "email": "reetnarula20@gmail.com",
        "division": "Outreach",
        "location": "Bangalore, India",
        "image": "assets/img/team/Reet Narula.png"
    },
    {
        "id": 35,
        "name": "Nikita Agrawal",
        "email": "nikitaagrawal62404@gmail.com",
        "division": "Outreach",
        "location": "Jaipur, India",
        "image": "assets/img/team/Nikita Agrawal.png"
    },
    {
        "id": 36,
        "name": "Anamitra Phukon",
        "email": "anamitra.p2@gmail.com",
        "division": "Outreach",
        "location": "Guwahati, India",
        "image": "assets/img/team/Anamitra Phukon.png"
    },
    {
        "id": 37,
        "name": "Ranald Lam",
        "email": "ranaldlam@gmail.com",
        "division": "Outreach",
        "location": "New York, United States",
        "image": "assets/img/team/Ranald Lam.png"
    },
    {
        "id": 38,
        "name": "Aarya Kumar",
        "email": "aaryakk1289@gmail.com",
        "division": "Outreach",
        "location": "Pune, India",
        "image": "assets/img/team/Aarya Kumar.png"
    },
    {
        "id": 39,
        "name": "Vishaka Subramaniam",
        "email": "wish032005@gmail.com",
        "division": "Outreach",
        "location": "Mumbai, India",
        "image": "assets/img/team/Vishaka Subramaniam.png"
    },
    {
        "id": 40,
        "name": "Gargi Arora",
        "email": "gargigargi1816@gmail.com",
        "division": "Outreach",
        "location": "Amritsar, India",
        "image": "assets/img/team/Gargi Arora.png"
    },
    {
        "id": 41,
        "name": "Satya Rai",
        "email": "satyarai.sac@gmail.com",
        "division": "Outreach",
        "location": "Prayagraj, India",
        "image": "assets/img/team/Satya Rai.png"
    },
    {
        "id": 42,
        "name": "Nitya Verma",
        "email": "nityaverma06@gmail.com",
        "division": "Outreach",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Nitya Verma.png"
    },
    {
        "id": 43,
        "name": "Kumudha Triveedhi",
        "email": "ktiriveedhi1@abaoman.org",
        "division": "Academics",
        "location": "Muscat, Oman",
        "image": "assets/img/team/Kumudha Triveedhi.png"
    },
    {
        "id": 44,
        "name": "Vamika Bindra",
        "email": "vamikabindra.13@gmail.com",
        "division": "Outreach",
        "location": "Lucknow, India",
        "image": "assets/img/team/Vamika Bindra.png"
    },
    {
        "id": 45,
        "name": "Manish Nadendia",
        "email": "manishnadendla@gmail.com",
        "division": "Academics",
        "location": "Washington, USA",
        "image": "assets/img/team/Manish Nadendia.png"
    },
    {
        "id": 46,
        "name": "Sanju Malika",
        "email": "sanjubeautyvlogs@gmail.com",
        "division": "Outreach",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Sanju Malika.png"
    },
    {
        "id": 47,
        "name": "Tvadhanya Badruka",
        "email": "tvadhanyabadruka@gmail.com",
        "division": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Tvadhanya Badruka.png"
    },
    {
        "id": 48,
        "name": "Reesha Mishra",
        "email": "reeshamishravis@gmail.com",
        "division": "Outreach",
        "location": "Kolkata, India",
        "image": "assets/img/team/Reesha Mishra.png"
    },
    {
        "id": 49,
        "name": "Yaashna Dhingraa",
        "email": "yaashnadhingraa@gmail.com",
        "division": "Outreach",
        "location": "Barcelona, Spain",
        "image": "assets/img/team/Yaashna Dhingraa.png"
    },
    {
        "id": 50,
        "name": "Sophia Bagnes",
        "email": "sbtfbagnes@gmail.com",
        "division": "Academics",
        "location": "Iriga, Philippines",
        "image": "assets/img/team/Sophia Bagnes.png"
    },
    {
        "id": 51,
        "name": "Rithvik Singh",
        "email": "singhrithvik2016@gmail.com",
        "division": "Tutor",
        "location": "Sharjah, UAE",
        "image": "assets/img/team/Rithvik Singh.png"
    },
    {
        "id": 52,
        "name": "Marwa Fathima",
        "email": "marwafathima2004@gmail.com",
        "division": "Outreach",
        "location": "Ras al Khaimah\r, UAE",
        "image": "assets/img/team/Marwa Fathima.png"
    },
    {
        "id": 53,
        "name": "Shaurya Sarma",
        "email": "shaurya.sarma@gmail.com",
        "division": "Webmaster",
        "location": "New Jersey, USA",
        "image": "assets/img/team/Shaurya Sarma.png"
    },
    {
        "id": 54,
        "name": "Vanya Agarwal",
        "email": "vanya@ajcast.com",
        "division": "Tutor",
        "location": "Kolkata, India",
        "image": "assets/img/team/Vanya Agarwal.png"
    },
    {
        "id": 55,
        "name": "Madhurima Nayak",
        "email": "connectwithmadhurima@gmail.com",
        "division": "Outreach",
        "location": "Navi Mumbai, India",
        "image": "assets/img/team/Madhurima Nayak.png"
    },
    {
        "id": 56,
        "name": "Tanvi Garg",
        "email": "gargselene@gmail.com",
        "division": "Academics",
        "location": "Agra, India",
        "image": "assets/img/team/Tanvi Garg.png"
    },
    {
        "id": 57,
        "name": "Simran Hakim",
        "email": "simran.hakim@gmail.com",
        "division": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Simran Hakim.png"
    },
    {
        "id": 58,
        "name": "Devika Jayaraj",
        "email": "jayarajdevika1@gmail.com",
        "division": "Outreach",
        "location": "Kottayam, India",
        "image": "assets/img/team/Devika Jayaraj.png"
    },
    {
        "id": 59,
        "name": "Rucha Shah",
        "email": "ruchas2005@gmail.com",
        "division": "Outreach",
        "location": "Bangalore, India",
        "image": "assets/img/team/Rucha Shah.png"
    },
    {
        "id": 60,
        "name": "Jahnvi Padhiar",
        "email": "padhiarjahnvi@gmail.com",
        "division": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Jahnvi Padhiar.png"
    },
    {
        "id": 61,
        "name": "Devmini Wimalasena",
        "email": "devminiqueend@gmail.com",
        "division": "Outreach",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Devmini Wimalasena.png"
    },
    {
        "id": 62,
        "name": "Diya Malhotra",
        "email": "diyamalhotra8059@gmail.com",
        "division": "Academics",
        "location": "Bath, UK",
        "image": "assets/img/team/Diya Malhotra.png"
    },
    {
        "id": 63,
        "name": "Aisha Zia Shameer",
        "email": "aishameer.me@gmail.com",
        "division": "Academics",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Aisha Zia Shameer.png"
    },
    {
        "id": 64,
        "name": "Pomeshwaree Devi Narain",
        "email": "jyotsur777@gmail.com",
        "division": "Tutor",
        "location": "Camp Diable, Mauritius",
        "image": "assets/img/team/Pomeshwaree Devi Narain.png"
    },
    {
        "id": 65,
        "name": "Iram Inamdar",
        "email": "iraminamdar943@gmail.com",
        "division": "Academics",
        "location": "Pune, India",
        "image": "assets/img/team/Iram Inamdar.png"
    },
    {
        "id": 66,
        "name": "Amrita Anbuchezhian",
        "email": "amritaanbu05@gmail.com",
        "division": "Academics",
        "location": "Singapore, Singapore",
        "image": "assets/img/team/Amrita Anbuchezhian.png"
    },
    {
        "id": 67,
        "name": "Areeba Nisar",
        "email": "areebanisar41@gmail.com",
        "division": "Outreach",
        "location": "Canada",
        "image": "assets/img/team/Areeba Nisar.png"
    },
    {
        "id": 68,
        "name": "Steven Kadavil",
        "email": "stevens20142021@yahoo.com",
        "division": "Academics",
        "location": "Philadelphia, USA",
        "image": "assets/img/team/Steven Kadavil.png"
    },
    {
        "id": 69,
        "name": "Agrim Gulaty",
        "email": "agrimgulaty@gmail.com",
        "division": "Outreach",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Agrim Gulaty.png"
    },
    {
        "id": 70,
        "name": "Ruth Sunil Thomas",
        "email": "ruthsunil9966@gmail.com",
        "division": "Tutor",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Ruth Sunil Thomas.png"
    },
    {
        "id": 71,
        "name": "Divyanshi Gupta",
        "email": "divyanshi2004@gmail.com",
        "division": "Outreach",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Divyanshi Gupta.png"
    },
    {
        "id": 72,
        "name": "Isra Sharnez",
        "email": "isharnez@gmail.com",
        "division": "Outreach",
        "location": "Mead, USA",
        "image": "assets/img/team/Isra Sharnez.png"
    },
    {
        "id": 73,
        "name": "Nubin Chung",
        "email": "nuboutnubin@gmail.com",
        "division": "Academics",
        "location": "Seoul, South Korea",
        "image": "assets/img/team/Nubin Chung.png"
    },
    {
        "id": 74,
        "name": "Hashim Ishfaq",
        "email": "hashimishfaq134@hotmail.com",
        "division": "Outreach",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Hashim Ishfaq.png"
    },
    {
        "id": 75,
        "name": "Marija Nikolić",
        "email": "marijamashanikolic@gmail.com",
        "division": "Tutor",
        "location": "Belgrade, Serbia",
        "image": "assets/img/team/Marija Nikolić.png"
    },
    {
        "id": 76,
        "name": "Shevani Ranawana",
        "email": "suhelaran86@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Shevani Ranawana.png"
    },
    {
        "id": 77,
        "name": "Coco Zhang",
        "email": "coco.401828@nv.ccsd.net",
        "division": "Outreach",
        "location": "USA",
        "image": "assets/img/team/Coco Zhang.png"
    },
    {
        "id": 78,
        "name": "Mahlet Atrsaw",
        "email": "mahletmayat@gmail.com",
        "division": "Academics",
        "location": "Ethiopia",
        "image": "assets/img/team/Mahlet Atrsaw.png"
    },
    {
        "id": 79,
        "name": "Sahana Ramachandran",
        "email": "sahanarama89@gmail.com",
        "division": "Outreach",
        "location": "Navi Mumbai, India",
        "image": "assets/img/team/Sahana Ramachandran.png"
    },
    {
        "id": 80,
        "name": "Kavini Ralapanawe",
        "email": "kavinitr17@gmail.com",
        "division": "Tutor",
        "location": "Colombo , Sri Lanka",
        "image": "assets/img/team/Kavini Ralapanawe.png"
    },
    {
        "id": 81,
        "name": "Ammad Hasan",
        "email": "ammadhasan1024@gmail.com",
        "division": "Outreach",
        "location": "Euless, USA",
        "image": "assets/img/team/Ammad Hasan.png"
    },
    {
        "id": 82,
        "name": "Insha Pervez",
        "email": "inshapervez07@gmail.com",
        "division": "Tutor",
        "location": "Ajmer, India",
        "image": "assets/img/team/Insha Pervez.png"
    },
    {
        "id": 83,
        "name": "Tunmise Adebowale",
        "email": "tunmiseadebowale@shcs.school.nz",
        "division": "Tutor",
        "location": "New Zealand",
        "image": "assets/img/team/Tunmise Adebowale.png"
    },
    {
        "id": 84,
        "name": "Rosemary Ibe",
        "email": "rosemaryibe18@gmail.com",
        "division": "Tutor",
        "location": "Nigeria",
        "image": "assets/img/team/Rosemary Ibe.png"
    },
    {
        "id": 85,
        "name": "Hashani Abeygunawardene",
        "email": "hashabey3@gmail.com",
        "division": "Outreach",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Hashani Abeygunawardene.png"
    },
    {
        "id": 86,
        "name": "Abhimanyu Singhal",
        "email": "abhimanyusinghal11@icloud.com",
        "division": "Outreach",
        "location": "Ghaziabad, India",
        "image": "assets/img/team/Abhimanyu Singhal.png"
    },
    {
        "id": 87,
        "name": "Dolores Manoa",
        "email": "doloresmanoa@gmail.com",
        "division": "Tutor",
        "location": "Fiji",
        "image": "assets/img/team/Dolores Manoa.png"
    },
    {
        "id": 88,
        "name": "Navraj Choudhary",
        "email": "sach8in@yahoo.com",
        "division": "Tutor",
        "location": "Sydney, Australia",
        "image": "assets/img/team/Navraj Choudhary.png"
    },
    {
        "id": 89,
        "name": "Ntombikhona Manyifolo",
        "email": "ntombikhona.manyifolo@gmail.com",
        "division": "Academics",
        "location": "South Africa",
        "image": "assets/img/team/Ntombikhona Manyifolo.png"
    },
    {
        "id": 90,
        "name": "Hanin Shamsheer",
        "email": "haninshamsheer@gmail.com",
        "division": "Outreach",
        "location": "Qatar",
        "image": "assets/img/team/Hanin Shamsheer.png"
    },
    {
        "id": 91,
        "name": "Ayuushi Gunetilleke",
        "email": "ayuushig@gmail.com",
        "division": "Academics",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Ayuushi Gunetilleke.png"
    },
    {
        "id": 92,
        "name": "Gia Mukherjee",
        "email": "gmukherjee624@yahoo.com",
        "division": "Tutor",
        "location": "USA",
        "image": "assets/img/team/Gia Mukherjee.png"
    },
    {
        "id": 93,
        "name": "Ayan Chavand",
        "email": "ayan.chavand15@gmail.com",
        "division": "Tutor",
        "location": "Gandhinagar, India",
        "image": "assets/img/team/Ayan Chavand.png"
    },
    {
        "id": 94,
        "name": "Mihika Das Gupta",
        "email": "mihikadasgupta@gmail.com",
        "division": "Outreach",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Mihika Das Gupta.png"
    },
    {
        "id": 95,
        "name": "Jacyln Sunardi",
        "email": "jaclyn.sunardi@gmail.com",
        "division": "Academics",
        "location": "Canada",
        "image": "assets/img/team/Jacyln Sunardi.png"
    },
    {
        "id": 96,
        "name": "Anna Lemos",
        "email": "a.lemos1012@gmail.com",
        "division": "Outreach",
        "location": "Mumbai, India",
        "image": "assets/img/team/Anna Lemos.png"
    },
    {
        "id": 97,
        "name": "Rojella Santos",
        "email": "santosrojella@gmail.com",
        "division": "Academics",
        "location": "Canada",
        "image": "assets/img/team/Rojella Santos.png"
    },
    {
        "id": 98,
        "name": "Siddharth Varman",
        "email": "Sid.Varman75@masonohioschools.com",
        "division": "Academics",
        "location": "USA",
        "image": "assets/img/team/Siddharth Varman.png"
    },
    {
        "id": 99,
        "name": "Fatemah Rajkotwala",
        "email": "farajkotwala@gmail.com",
        "division": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Fatemah Rajkotwala.png"
    },
    {
        "id": 100,
        "name": "Harishi Fernando",
        "email": "harshisudharafernando@gmail.com",
        "division": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Harishi Fernando.png"
    },
    {
        "id": 101,
        "name": "Shruti Singh",
        "email": "shrutisinghkg@gmail.com",
        "division": "Outreach",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Shruti Singh.png"
    },
    {
        "id": 102,
        "name": "Uday Kiran",
        "email": "udayjason@gmail.com",
        "division": "Tutor",
        "location": "Visakhapatnam, India",
        "image": "assets/img/team/Uday Kiran.png"
    },
    {
        "id": 103,
        "name": "Divyanshi Mohanty",
        "email": "divyanshimohanty4@gmail.com",
        "division": "Outreach",
        "location": "Bangalore, India",
        "image": "assets/img/team/Divyanshi Mohanty.png"
    },
    {
        "id": 104,
        "name": "Nirali S",
        "email": "nirali3037@gmail.com",
        "division": "Academics",
        "location": "Chennai, India",
        "image": "assets/img/team/Nirali S.png"
    },
    {
        "id": 105,
        "name": "Lavanya Pasi",
        "email": "lavanyapasi88@gmail.com",
        "division": "Outreach",
        "location": "New Delhi, India",
        "image": "assets/img/team/Lavanya Pasi.png"
    },
    {
        "id": 106,
        "name": "Tanmay Shintre",
        "email": "tanmayshintrewadhwani@gmail.com",
        "division": "Outreach",
        "location": "Pune, India",
        "image": "assets/img/team/Tanmay Shintre.png"
    },
    {
        "id": 107,
        "name": "Shravani Tushar Kulkarni",
        "email": "shravanitusharkulkarni@gmail.com",
        "division": "Outreach",
        "location": "Ahmedabad, India",
        "image": "assets/img/team/Shravani Tushar Kulkarni.png"
    },
    {
        "id": 108,
        "name": "Haripriya Saravanan",
        "email": "haripriyasaravanan012@gmail.com",
        "division": "Academics",
        "location": "Chennai, India",
        "image": "assets/img/team/Haripriya Saravanan.png"
    },
    {
        "id": 109,
        "name": "Priya Ramani",
        "email": "priya15.ramani@gmail.com",
        "division": "Outreach",
        "location": "Mumbai, India",
        "image": "assets/img/team/Priya Ramani.png"
    },
    {
        "id": 110,
        "name": "Svea Aariyeh Pasad",
        "email": "sveapasad03@gmail.com",
        "division": "Outreach",
        "location": "Mumbai, India",
        "image": "assets/img/team/Svea Aariyeh Pasad.png"
    },
    {
        "id": 111,
        "name": "Diya Singh Chauhan",
        "email": "diyasinghchauhan@gmail.com",
        "division": "Academics",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Diya Singh Chauhan.png"
    },
    {
        "id": 112,
        "name": "Saumika Pandey",
        "email": "pandeysaumika@gmail.com",
        "division": "Outreach",
        "location": "Thane, India",
        "image": "assets/img/team/Saumika Pandey.png"
    },
    {
        "id": 113,
        "name": "Sara Pashollari",
        "email": "sarapashollari@gmail.com",
        "division": "Academics",
        "location": "Albania",
        "image": "assets/img/team/Sara Pashollari.png"
    },
    {
        "id": 114,
        "name": "Sanjana Menon",
        "email": "future2402@gmail.com",
        "division": "Outreach",
        "location": "Mumbai, India",
        "image": "assets/img/team/Sanjana Menon.png"
    },
    {
        "id": 115,
        "name": "Manasvini Balaji",
        "email": "manasvinibalaji@gmail.com",
        "division": "Outreach",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Manasvini Balaji.png"
    },
    {
        "id": 116,
        "name": "Shresth Agarwal",
        "email": "shresth.agarwal@oberoi-is.net",
        "division": "Academics",
        "location": "Mumbai, India",
        "image": "assets/img/team/Shresth Agarwal.png"
    },
    {
        "id": 117,
        "name": "Souparnika Narayanan",
        "email": "souparnika.narayananr@gmail.com",
        "division": "Outreach",
        "location": "Bangalore, India",
        "image": "assets/img/team/Souparnika Narayanan.png"
    },
    {
        "id": 118,
        "name": "Ria Goel",
        "email": "riagoel2501@gmail.com",
        "division": "Outreach",
        "location": "Jaipur, India",
        "image": "assets/img/team/Ria Goel.png"
    },
    {
        "id": 119,
        "name": "Nisha Kumar",
        "email": "24nisha2004@gmail.com",
        "division": "Outreach",
        "location": "Indore, India",
        "image": "assets/img/team/Nisha Kumar.png"
    },
    {
        "id": 120,
        "name": "Dhriti Shah",
        "email": "dhriti.r2004@gmail.com",
        "division": "Tutor",
        "location": "Coimbatore, India",
        "image": "assets/img/team/Dhriti Shah.png"
    },
    {
        "id": 121,
        "name": "Anvi Shah",
        "email": "anvishah1704@gmail.com",
        "division": "Outreach",
        "location": "Chennai, India",
        "image": "assets/img/team/Anvi Shah.png"
    },
    {
        "id": 122,
        "name": "Neelima Sharma",
        "email": "editor.neelima@gmail.com",
        "division": "Tutor",
        "location": "New Delhi, India",
        "image": "assets/img/team/Neelima Sharma.png"
    },
    {
        "id": 123,
        "name": "Vann Louis Burias",
        "email": "vannlouis5@gmail.com",
        "division": "Tutor",
        "location": "Philippines",
        "image": "assets/img/team/Vann Louis Burias.png"
    },
    {
        "id": 124,
        "name": "Aaralynn Thomas",
        "email": "aaralynn89@gmail.com",
        "division": "Outreach",
        "location": "Canada",
        "image": "assets/img/team/Aaralynn Thomas.png"
    },
    {
        "id": 125,
        "name": "Ruhi P",
        "email": "ruhipednekarl@gmail.com",
        "division": "Outreach",
        "location": "Mumbai, India",
        "image": "assets/img/team/Ruhi P.png"
    },
    {
        "id": 126,
        "name": "Maithili Pungaliya",
        "email": "maithilipungaliya2605@gmail.com",
        "division": "Outreach",
        "location": "Pune, India",
        "image": "assets/img/team/Maithili Pungaliya.png"
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



