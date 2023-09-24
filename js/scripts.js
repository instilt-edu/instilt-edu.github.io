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
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
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
window.addEventListener("load", onPageLoad);

// Team Member Data

var oldTeamData = [
  {
    id: 1,
    name: "Nilabh Agrawal",
    email: "nilabh@instilt.com",
    division: "Founder & CEO",
    team: "Admin",
    location: "Vancouver, Canada",
    image: "assets/img/team/Nilabh Agrawal.png",
  },
  {
    id: 2,
    name: "Haresh Wedanayake",
    email: "haresh@instilt.com",
    division: "Chief Operating Officer",
    team: "Admin",
    location: "Colombo, Sri Lanka",
    image: "assets/img/team/Haresh Wedanayake.png",
  },
  {
    id: 3,
    name: "Danisha Panigrahi",
    email: "danishap15@gmail.com",
    division: "Head of Human Resources",
    team: "Admin",
    location: "California, USA",
    image: "assets/img/team/Danisha Panigrahi.png",
  },
  {
    id: 4,
    name: "Ayush Ravichandran",
    email: "ayush@instilt.com",
    division: "Head of Technical Operations",
    team: "Admin",
    location: "Amherst, USA",
    image: "assets/img/team/Ayush Ravichandran.png",
  },
  {
    id: 5,
    name: "Shravani Tushar Kulkarni",
    email: "shravani@instilt.com",
    division: "Head of Communications",
    team: "Admin",
    location: "Ahmedabad, India",
    image: "assets/img/team/Shravani Tushar Kulkarni.png",
  },
  {
    id: 6,
    name: "Ann Mascarenhas",
    email: "annmasc3@gmail.com",
    division: "Admin",
    team: "Admin",
    location: "Troy, USA",
    image: "assets/img/team/Ann Mascarenhas.png",
  },
  {
    id: 7,
    name: "Eliza Mahon",
    email: "eliza.q.mahon@gmail.com",
    division: "Head of Academics",
    team: "Admin",
    location: "Vancouver, Canada",
    image: "assets/img/team/Eliza Mahon.png",
  },
  {
    id: 8,
    name: "Mansi Agrawal",
    email: "agrawamansi@gmail.com",
    division: "Strategy",
    team: "Tutor",
    location: "Mumbai, India",
    image: "assets/img/team/Mansi Agrawal.png",
  },
  {
    id: 9,
    name: "Yanxi Chen",
    email: "yan@instilt.com",
    division: "Human Resources",
    team: "Human Resources",
    location: "Wirral, UK",
    image: "assets/img/team/Yanxi Chen.png",
  },
  {
    id: 10,
    name: "Anirudh Agarwal",
    email: "itsanirudh98@gmail.com",
    division: "Strategy",
    team: "Tutor",
    location: "Noida, India",
    image: "assets/img/team/Anirudh Agarwal.png",
  },
  {
    id: 11,
    name: "Rosemary Ibe",
    email: "rosemaryibe18@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Lagos, Nigeria",
    image: "assets/img/team/Rosemary Ibe.png",
  },
  {
    id: 12,
    name: "Tanvi Garg (IN)",
    email: "gargselene@gmail.com",
    division: "Academics & Project Manager",
    team: "Academics",
    location: "Agra, India",
    image: "assets/img/team/Tanvi Garg (IN).png",
  },
  {
    id: 13,
    name: "Amrita Anbuchezhian",
    email: "amritaanbu05@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Singapore",
    image: "assets/img/team/Amrita Anbuchezhian.png",
  },
  {
    id: 14,
    name: "Coco Zhang",
    email: "cocowzhang@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Las Vegas, USA",
    image: "assets/img/team/Coco Zhang.png",
  },
  {
    id: 15,
    name: "Shruti Singh",
    email: "shrutisinghkg@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Colombo, Sri Lanka",
    image: "assets/img/team/Shruti Singh.png",
  },
  {
    id: 16,
    name: "Divyanshi Mohanty",
    email: "divyanshimohanty4@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Bangalore, India",
    image: "assets/img/team/Divyanshi Mohanty.png",
  },
  {
    id: 17,
    name: "Priya Ramani",
    email: "priya15.ramani@gmail.com",
    division: "Communications & Cohort Head",
    team: "Communications",
    location: "Mumbai, India",
    image: "assets/img/team/Priya Ramani.png",
  },
  {
    id: 18,
    name: "Diya Singh Chauhan",
    email: "diyasinghchauhan@gmail.com",
    division: "Human Resources & Content Lead",
    team: "Human Resources",
    location: "Melbourne, Australia",
    image: "assets/img/team/Diya Singh Chauhan.png",
  },
  {
    id: 19,
    name: "Sanjana Menon",
    email: "future2402@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Mumbai, India",
    image: "assets/img/team/Sanjana Menon.png",
  },
  {
    id: 20,
    name: "Maithili Pungaliya",
    email: "maithilipungaliya2605@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Pune, India",
    image: "assets/img/team/Maithili Pungaliya.png",
  },
  {
    id: 21,
    name: "Nitya Bomma",
    email: "nityabomma@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Hyderabad, India",
    image: "assets/img/team/Nitya Bomma.png",
  },
  {
    id: 22,
    name: "Marasel Perry",
    email: "p.marasel@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "New York, USA",
    image: "assets/img/team/Marasel Perry.png",
  },
  {
    id: 23,
    name: "Anwesha Maiti",
    email: "maitianwesha16@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Kolkata, India",
    image: "assets/img/team/Anwesha Maiti.png",
  },
  {
    id: 24,
    name: "Vinugi De Silva",
    email: "vinugidesilva@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Colombo, Sri Lanka",
    image: "assets/img/team/Vinugi De Silva.png",
  },
  {
    id: 25,
    name: "Sumaiya Sultana",
    email: "sumaiyasultanax@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Dhaka, Bangladesh",
    image: "assets/img/team/Sumaiya Sultana.png",
  },
  {
    id: 26,
    name: "Annie Elizabeth Binesh",
    email: "anniebinesh@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Chennai, India",
    image: "assets/img/team/Annie Elizabeth Binesh.png",
  },
  {
    id: 27,
    name: "Archit Sinha",
    email: "architsinha8@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Gautam Buddh Nagar, India",
    image: "assets/img/team/Archit Sinha.png",
  },
  {
    id: 28,
    name: "Nidhi Iyer",
    email: "nidhiyer0402@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Mumbai, India",
    image: "assets/img/team/Nidhi Iyer.png",
  },
  {
    id: 29,
    name: "Vatsala Singh",
    email: "singhvatsala123@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Lucknow, India",
    image: "assets/img/team/Vatsala Singh.png",
  },
  {
    id: 30,
    name: "Yuvika Sehgal",
    email: "yuvikachess@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "New Delhi, India",
    image: "assets/img/team/Yuvika Sehgal.png",
  },
  {
    id: 31,
    name: "Maithreyi Murali Manohar",
    email: "maithreyi.murali.manohar@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Lewis Center, USA",
    image: "assets/img/team/Maithreyi Murali Manohar.png",
  },
  {
    id: 32,
    name: "Ritesh Manjunathan",
    email: "ritesh.blore@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "London, UK",
    image: "assets/img/team/Ritesh Manjunathan.png",
  },
  {
    id: 33,
    name: "Iryna Iziumska",
    email: "iryna@instilt.com",
    division: "Human Resources",
    team: "Human Resources",
    location: "San Jose, United States",
    image: "assets/img/team/Iryna Iziumska.png",
  },
  {
    id: 34,
    name: "Vinayika Goel",
    email: "vinayikagoel@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Ghaziabad, India",
    image: "assets/img/team/Vinayika Goel.png",
  },
  {
    id: 35,
    name: "Kaavya Dasgupta",
    email: "dasgupta.kaavya@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Bangalore, India",
    image: "assets/img/team/Kaavya Dasgupta.png",
  },
  {
    id: 36,
    name: "Aarya Munot",
    email: "munotaarya@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Mumbai, India",
    image: "assets/img/team/Aarya Munot.png",
  },
  {
    id: 37,
    name: "Annie Jiang",
    email: "anniejiang9019@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Los Angeles, USA",
    image: "assets/img/team/Annie Jiang.png",
  },
  {
    id: 38,
    name: "Julia Stergiou",
    email: "juliastergiou1111@gmail.com",
    division: "Head of Partnerships",
    team: "Head of Partnerships",
    location: "Toronto, Canada",
    image: "assets/img/team/Julia Stergiou.png",
  },
  {
    id: 39,
    name: "Deeksha Bachu",
    email: "bachu.deeksha@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Delaware, USA",
    image: "assets/img/team/Deeksha Bachu.png",
  },
  {
    id: 40,
    name: "Mohamed Ibrahim Mashhour",
    email: "mohamedi.mashhour1@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Cairo, Egypt",
    image: "assets/img/team/Mohamed Ibrahim Mashhour.png",
  },
  {
    id: 41,
    name: "Suha",
    email: "reachstg007@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Coimbatore, India",
    image: "assets/img/team/Suha.png",
  },
  {
    id: 42,
    name: "Rayan Ghosh",
    email: "theglasstable2007@gmail.com",
    division: "Technical Operations",
    team: "Technical Operations",
    location: "California, USA",
    image: "assets/img/team/Rayan Ghosh.png",
  },
  {
    id: 43,
    name: "Tanvi Garg (US)",
    email: "garg.tanvi.st@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "California, USA",
    image: "assets/img/team/Tanvi Garg (US).png",
  },
  {
    id: 44,
    name: "Phillip Cao",
    email: "phillipcao1234@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "California, USA",
    image: "assets/img/team/Phillip Cao.png",
  },
  {
    id: 45,
    name: "Deepthy Ajith K",
    email: "deepthyajithk07@gmail.com",
    division: "Technical Operations",
    team: "Technical Operations",
    location: "Thrissur, India",
    image: "assets/img/team/Deepthy Ajith K.png",
  },
  {
    id: 46,
    name: "Arni Mahendra",
    email: "arnimahendra09@gmail.com",
    division: "Tutor & Cohort Head",
    team: "Tutor",
    location: "Delhi, India",
    image: "assets/img/team/Arni Mahendra.png",
  },
  {
    id: 47,
    name: "Dhiksha Rathis",
    email: "dhiksha.rathis@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Bangalore Urban, India",
    image: "assets/img/team/Dhiksha Rathis.png",
  },
  {
    id: 48,
    name: "Sachika Tomer",
    email: "sachikatomer2006@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Vadodara, India",
    image: "assets/img/team/Sachika Tomer.png",
  },
  {
    id: 49,
    name: "Adyaa Mishra",
    email: "mishraadyaa@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Bangalore Urban, India",
    image: "assets/img/team/Adyaa Mishra.png",
  },
  {
    id: 50,
    name: "Aarya Rajesh",
    email: "aaryarajesh@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Doja, Qatar",
    image: "assets/img/team/Aarya Rajesh.png",
  },
  {
    id: 51,
    name: "Pranjali Gupta",
    email: "pranjali.gupta16@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Ghaziabad, India",
    image: "assets/img/team/Pranjali Gupta.png",
  },
  {
    id: 52,
    name: "Charlotte Talaat",
    email: "charlottetalaatk@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Cairo, Egypt",
    image: "assets/img/team/Charlotte Talaat.png",
  },
  {
    id: 53,
    name: "Pranjal Sharma",
    email: "sharmapranjal1108@gmail.com",
    division: "Expansions Cohort Head",
    team: "Communications",
    location: "Thane, India",
    image: "assets/img/team/Pranjal Sharma.png",
  },
  {
    id: 54,
    name: "Bavly Romany Hosny",
    email: "romanybavly496@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Cairo, Egypt",
    image: "assets/img/team/Bavly Romany Hosny.png",
  },
  {
    id: 55,
    name: "Gamal Korany Ragab Mahmoud",
    email: "gamal.korany06@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Cairo, Egypt",
    image: "assets/img/team/Gamal Korany Ragab Mahmoud.png",
  },
  {
    id: 56,
    name: "Haneen Ayman Abdallah Abdallah Ali ",
    email: "ha245041@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Giza, Egypt",
    image: "assets/img/team/Haneen Ayman Abdallah Abdallah Ali .png",
  },
  {
    id: 57,
    name: "Mariam Salem",
    email: "mariqueen12a@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Damietta, Egypt",
    image: "assets/img/team/Mariam Salem.png",
  },
  {
    id: 58,
    name: "Naher Abdelnasser Ahmed",
    email: "naheristhebest2006@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Cairo, Egypt",
    image: "assets/img/team/Naher Abdelnasser Ahmed.png",
  },
  {
    id: 59,
    name: "Salma El-Sayed Ahmed El-Moshy",
    email: "salmaelsayed.2.8.56@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Cairo, Egypt",
    image: "assets/img/team/Salma El-Sayed Ahmed El-Moshy.png",
  },
  {
    id: 60,
    name: "Shahd Mohammad Abo-Ahmad",
    email: "shahdaboahmad596@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Menofia, Egypt",
    image: "assets/img/team/Shahd Mohammad Abo-Ahmad.png",
  },
  {
    id: 61,
    name: "Jiya Aswani",
    email: "tcis.jiya08@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Maharastra, India",
    image: "assets/img/team/Jiya Aswani.png",
  },
  {
    id: 62,
    name: "Christopher Espitia-Alvarez",
    email: "cespitiaalvarez@gmail.com",
    division: "Technical Operations",
    team: "Technical Operations",
    location: "Cupertino, USA",
    image: "assets/img/team/Christopher Espitia-Alvarez.png",
  },
  {
    id: 63,
    name: "Likhitha Thokala",
    email: "likhithathokala@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Bangalore, India",
    image: "assets/img/team/Likhitha Thokala.png",
  },
  {
    id: 64,
    name: "Liya Johnson",
    email: "liyajohnson082006@gmail.com",
    division: "Technical Operations",
    team: "Technical Operations",
    location: "Kerala, India",
    image: "assets/img/team/Liya Johnson.png",
  },
  {
    id: 65,
    name: "Sreya Komati",
    email: "komatisreya@gmail.com",
    division: "Human Resources",
    team: "Human Resources",
    location: "Sacramento, USA",
    image: "assets/img/team/Sreya Komati.png",
  },
  {
    id: 66,
    name: "Ishika Singh",
    email: "ishika.space@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Fremont, USA",
    image: "assets/img/team/Ishika Singh.png",
  },
  {
    id: 67,
    name: "Tushara Kumar",
    email: "tusharak12@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "California, USA",
    image: "assets/img/team/Tushara Kumar.png",
  },
  {
    id: 68,
    name: "Koushiki Das",
    email: "koushiki.das.is.here@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Kolkata, India",
    image: "assets/img/team/Koushiki Das.png",
  },
  {
    id: 69,
    name: "Dhikshitha Nandakumar",
    email: "ndhikshitha@gmail.com",
    division: "HR",
    team: "HR",
    location: "Coimbatore, India",
    image: "assets/img/team/Dhikshitha Nandakumar.png",
  },
  {
    id: 70,
    name: "Kenisha Jain",
    email: "kenishajain123@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Bangalore, India",
    image: "assets/img/team/Kenisha Jain.png",
  },
  {
    id: 71,
    name: "Sahiti Dasari",
    email: "sahitiaws@gmail.com",
    division: "Technical Operations",
    team: "Technical Operations",
    location: "Georgia, USA",
    image: "assets/img/team/Sahiti Dasari.png",
  },
  {
    id: 72,
    name: "Natalia Lopez",
    email: "natlopez63@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "California, USA",
    image: "assets/img/team/Natalia Lopez.png",
  },
  {
    id: 73,
    name: "Rachel Tong",
    email: "racheltong29@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Ohio, USA",
    image: "assets/img/team/Rachel Tong.png",
  },
  {
    id: 74,
    name: "Rimjhim Singh",
    email: "singhrimjhim2017@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Lucknow, UAE",
    image: "assets/img/team/Rimjhim Singh.png",
  },
  {
    id: 75,
    name: "Shenaly Raju",
    email: "shenalyraju@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Colombo, Sri Lanka",
    image: "assets/img/team/Shenaly Raju.png",
  },
  {
    id: 76,
    name: "Janya Edirisinghe",
    email: "janyaedirisinghe763@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Colombo, Sri Lanka",
    image: "assets/img/team/Janya Edirisinghe.png",
  },
  {
    id: 77,
    name: "Sammith Singamsetty",
    email: "sammith.official@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Bangalore, India",
    image: "assets/img/team/Sammith Singamsetty.png",
  },
  {
    id: 78,
    name: "Gwenie Marinas",
    email: "gweniekm0323@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "California, USA",
    image: "assets/img/team/Gwenie Marinas.png",
  },
  {
    id: 79,
    name: "Aryan Nayak ",
    email: "8660549803.nayak@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Mumbai, India",
    image: "assets/img/team/Aryan Nayak .png",
  },
  {
    id: 80,
    name: "Adetunji Dorcas",
    email: "adetunjidorcas7@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "South Nigeria, Nigeria",
    image: "assets/img/team/Adetunji Dorcas.png",
  },
  {
    id: 81,
    name: "Ranudi Pilapitiya",
    email: "rpilapitiya2004@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Colombo, Sri Lanka",
    image: "assets/img/team/Ranudi Pilapitiya.png",
  },
  {
    id: 82,
    name: "Sachi Aggarwal",
    email: "sachiaggarwal2006@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Haryana, India",
    image: "assets/img/team/Sachi Aggarwal.png",
  },
  {
    id: 83,
    name: "Leenah Wahab",
    email: "leenah.wahab@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Colombo, Sri Lanka",
    image: "assets/img/team/Leenah Wahab.png",
  },
  {
    id: 84,
    name: "Vedanth Adhia",
    email: "vedanthadhia2005@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Ahmedabad, India",
    image: "assets/img/team/Vedanth Adhia.png",
  },
  {
    id: 85,
    name: "Ben Doupe",
    email: "bjdoupe@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Vancouver, Canada",
    image: "assets/img/team/Ben Doupe.png",
  },
  {
    id: 86,
    name: "Ryan Joseph Orumpackal",
    email: "rjosepho@outlook.com",
    division: "Academics",
    team: "Academics",
    location: "Missouri City, USA",
    image: "assets/img/team/Ryan Joseph Orumpackal.png",
  },
  {
    id: 87,
    name: "Safiya Mymun",
    email: "safiyamymunsiddiq@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Riyadh, Saudi Arabia",
    image: "assets/img/team/Safiya Mymun.png",
  },
  {
    id: 88,
    name: "Roz Mirfendereski",
    email: "rozmir@icloud.com",
    division: "Academics",
    team: "Academics",
    location: "Las Vegas, USA",
    image: "assets/img/team/Roz Mirfendereski.png",
  },
  {
    id: 89,
    name: "Liam Hoffman",
    email: "lhoff2005@yahoo.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "Indiana, USA",
    image: "assets/img/team/Liam Hoffman.png",
  },
  {
    id: 90,
    name: "Shaivi Kumar",
    email: "shaivikumar2007@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Kolkata, India",
    image: "assets/img/team/Shaivi Kumar.png",
  },
  {
    id: 91,
    name: "Aiyappan Shivani",
    email: "aiyappanshivani06@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Singapore",
    image: "assets/img/team/Aiyappan Shivani.png",
  },
  {
    id: 92,
    name: "Keyura A Grandhi",
    email: "keyura.grandhi@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Fremont, USA",
    image: "assets/img/team/Keyura A Grandhi.png",
  },
  {
    id: 93,
    name: "Joshua Park",
    email: "joshua.1946577@nv.ccsd.net",
    division: "Human Resources",
    team: "Human Resources",
    location: "Las Vegas, USA",
    image: "assets/img/team/Joshua Park.png",
  },
  {
    id: 94,
    name: "Smahi Vijay",
    email: "smahiv@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Singapore",
    image: "assets/img/team/Smahi Vijay.png",
  },
  {
    id: 95,
    name: "Shukhashini Sivakumar",
    email: "shukhashinis@yahoo.com",
    division: "Tutor",
    team: "Tutor",
    location: "Coimbatore, India",
    image: "assets/img/team/Shukhashini Sivakumar.png",
  },
  {
    id: 96,
    name: "Christina Julien",
    email: "cejtlch@icloud.com",
    division: "Academics",
    team: "Academics",
    location: "Nashville, USA",
    image: "assets/img/team/Christina Julien.png",
  },
  {
    id: 97,
    name: "Kushi Khushi",
    email: "k.khushi0357@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Helifax, Canada",
    image: "assets/img/team/Kushi Khushi.png",
  },
  {
    id: 98,
    name: "Veer Raghav Jaiswal",
    email: "veer1838.jaiswal@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Kolkata, India",
    image: "assets/img/team/Veer Raghav Jaiswal.png",
  },
  {
    id: 99,
    name: "Abisatu Kabineh-Mansaray",
    email: "km.abisatu@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "London, UK",
    image: "assets/img/team/Abisatu Kabineh-Mansaray.png",
  },
  {
    id: 100,
    name: "Justin Tishbi",
    email: "justintishbi@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Los Angeles, USA",
    image: "assets/img/team/Justin Tishbi.png",
  },
  {
    id: 101,
    name: "Anvita Verabelli",
    email: "v.anvita26@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Hyderabad, India",
    image: "assets/img/team/Anvita Verabelli.png",
  },
  {
    id: 102,
    name: "Aalima Shabeeb",
    email: "Aalimashabeeb@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Lucknow, India",
    image: "assets/img/team/Aalima Shabeeb.png",
  },
  {
    id: 103,
    name: "Amalia Valea",
    email: "amaliavalea@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Valladoid, Spain",
    image: "assets/img/team/Amalia Valea.png",
  },
  {
    id: 104,
    name: "Maryam Rehmat Chaudhry",
    email: "25maryamchaudhry@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Raleigh, USA",
    image: "assets/img/team/Maryam Rehmat Chaudhry.png",
  },
  {
    id: 105,
    name: "Ayesha Haroon",
    email: "ayeshaharoon0507@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Dallas, USA",
    image: "assets/img/team/Ayesha Haroon.png",
  },
  {
    id: 106,
    name: "Teddy Cohen",
    email: "cohenth@thayer.org",
    division: "Tutor",
    team: "Tutor",
    location: "Boston, USA",
    image: "assets/img/team/Teddy Cohen.png",
  },
  {
    id: 107,
    name: "Nikita Anand",
    email: "officialnia.anand@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Patna, India",
    image: "assets/img/team/Nikita Anand.png",
  },
  {
    id: 108,
    name: "Adhvighaa BS",
    email: "adhvighaabharani@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Coimbatore, India",
    image: "assets/img/team/Adhvighaa BS.png",
  },
  {
    id: 109,
    name: "Olivia Xu",
    email: "olivia.hope.xu@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Princeton, USA",
    image: "assets/img/team/Olivia Xu.png",
  },
  {
    id: 110,
    name: "Urvish Lodha",
    email: "urvish.lodha@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Mumbai , India",
    image: "assets/img/team/Urvish Lodha.png",
  },
  {
    id: 111,
    name: "Hanna Karasinska",
    email: "haniiak@yahoo.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "Warsaw, Poland",
    image: "assets/img/team/Hanna Karasinska.png",
  },
  {
    id: 112,
    name: "Anissa Das",
    email: "das.anissa@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Kolkata, India",
    image: "assets/img/team/Anissa Das.png",
  },
  {
    id: 113,
    name: "Malia Nagel",
    email: "2024.m.nagel@shalhevet.org",
    division: "Tutor",
    team: "Tutor",
    location: "Los Angeles, USA",
    image: "assets/img/team/Malia Nagel.png",
  },
  {
    id: 114,
    name: "Alara Yilmaz",
    email: "alarayilmaz050@gmail.com",
    division: "Human Resources",
    team: "Human Resources",
    location: "Las Vegas, USA",
    image: "assets/img/team/Alara Yilmaz.png",
  },
  {
    id: 115,
    name: "Isabella Yang",
    email: "isabellayang381@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "California, USA",
    image: "assets/img/team/Isabella Yang.png",
  },
  {
    id: 116,
    name: "Riya Murthy",
    email: "riyamurthy7@gmail.com",
    division: "Human Resources",
    team: "Human Resources",
    location: "Cupertino, USA",
    image: "assets/img/team/Riya Murthy.png",
  },
  {
    id: 117,
    name: "Anika Mittal",
    email: "anika.mitt@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Kodaikanal, India",
    image: "assets/img/team/Anika Mittal.png",
  },
  {
    id: 118,
    name: "Jefferson Lin",
    email: "jefferson20071001@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Brooklyn, USA",
    image: "assets/img/team/Jefferson Lin.png",
  },
  {
    id: 119,
    name: "Fathima Israh Muhseen",
    email: "israh.m@icloud.com",
    division: "Social Media",
    team: "Social Media",
    location: "Colombo, Sri Lanka",
    image: "assets/img/team/Fathima Israh Muhseen.png",
  },
  {
    id: 120,
    name: "Shreya Aju",
    email: "shreyaaju254@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Doha, Qatar",
    image: "assets/img/team/Shreya Aju.png",
  },
  {
    id: 121,
    name: "Anusha Anchlia",
    email: "anusha.anchlia2009@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Hyderabad, India",
    image: "assets/img/team/Anusha Anchlia.png",
  },
  {
    id: 122,
    name: "Wickramasinghe Pathiranage Senugi Limanasa Jayawardana",
    email: "senugijayawardana@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Toronto, Canada",
    image:
      "assets/img/team/Wickramasinghe Pathiranage Senugi Limanasa Jayawardana.png",
  },
  {
    id: 123,
    name: "Atharva Dangre",
    email: "atharva.dangre1@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Mumbai, India",
    image: "assets/img/team/Atharva Dangre.png",
  },
  {
    id: 124,
    name: "Nusaiba Mehnaz",
    email: "nusaiba.mehnaz@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Dhaka, Bangladesh",
    image: "assets/img/team/Nusaiba Mehnaz.png",
  },
  {
    id: 125,
    name: "Wing Lam Charlene",
    email: "charlenelau0109@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "ShenZhen, China",
    image: "assets/img/team/Wing Lam Charlene.png",
  },
  {
    id: 126,
    name: "Tashvi Verma",
    email: "tashviverma1910@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Hyderabad, India",
    image: "assets/img/team/Tashvi Verma.png",
  },
  {
    id: 127,
    name: "Victor Njagi",
    email: "victormureithinjagi@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "Nairobi, Kenya",
    image: "assets/img/team/Victor Njagi.png",
  },
  {
    id: 128,
    name: "Riya Thakur",
    email: "riyathakur2105@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Mumbai, India",
    image: "assets/img/team/Riya Thakur.png",
  },
  {
    id: 129,
    name: "Ereni Sadek",
    email: "erenisadek30@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Texas, USA",
    image: "assets/img/team/Ereni Sadek.png",
  },
  {
    id: 130,
    name: "Emily Wang",
    email: "ewang3@branksome.on.ca",
    division: "Academics",
    team: "Academics",
    location: "Toronto, Canada",
    image: "assets/img/team/Emily Wang.png",
  },
  {
    id: 131,
    name: "Jessica Singh",
    email: "jessicasingh214@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Vancouver, Canada",
    image: "assets/img/team/Jessica Singh.png",
  },
  {
    id: 132,
    name: "An N. Bui",
    email: "anngbui17@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Texas, USA",
    image: "assets/img/team/An N. Bui.png",
  },
  {
    id: 133,
    name: "Eunji Lee",
    email: "edmswl05@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Castle Pines, USA",
    image: "assets/img/team/Eunji Lee.png",
  },
  {
    id: 134,
    name: "Abigail Shwartz",
    email: "abigails22@nycstudents.net",
    division: "Academics",
    team: "Academics",
    location: "USA",
    image: "assets/img/team/Abigail Shwartz.png",
  },
  {
    id: 135,
    name: "Nalini Gupta",
    email: "nalinigupta1098@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Goa, India",
    image: "assets/img/team/Nalini Gupta.png",
  },
  {
    id: 136,
    name: "Janya Srivastava",
    email: "janyasrivastava0@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "Ontario, Canada",
    image: "assets/img/team/Janya Srivastava.png",
  },
  {
    id: 137,
    name: "Snehal Abdol",
    email: "snehaladbol@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Maharashtra, India",
    image: "assets/img/team/Snehal Abdol.png",
  },
  {
    id: 138,
    name: "Beatriz Valadao Donnici De Azevedo",
    email: "biadonnici@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Rio De Janerio, Brazil",
    image: "assets/img/team/Beatriz Valadao Donnici De Azevedo.png",
  },
  {
    id: 139,
    name: "Matilde Silva",
    email: "matildeasilva2000@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Leiria, Portugal",
    image: "assets/img/team/Matilde Silva.png",
  },
  {
    id: 140,
    name: "Shivani Divakaruni",
    email: "divakaruni.saishivani@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "North Carolina, USA",
    image: "assets/img/team/Shivani Divakaruni.png",
  },
  {
    id: 141,
    name: "Alexa Leiva",
    email: "alecboomboom@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "New York, USA",
    image: "assets/img/team/Alexa Leiva.png",
  },
  {
    id: 142,
    name: "Haniya Mishal Mirza",
    email: "haniyam37@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Dubai, UAE",
    image: "assets/img/team/Haniya Mishal Mirza.png",
  },
  {
    id: 143,
    name: "Anandita Adhikary",
    email: "adhikary.anandita@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Pune, India",
    image: "assets/img/team/Anandita Adhikary.png",
  },
  {
    id: 144,
    name: "Caryl Trishia Yapac",
    email: "carylyapac@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Ozamiz City, Phillipines",
    image: "assets/img/team/Caryl Trishia Yapac.png",
  },
  {
    id: 145,
    name: "Luayyah Suleiman",
    email: "luayyah17@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Ohio, USA",
    image: "assets/img/team/Luayyah Suleiman.png",
  },
  {
    id: 146,
    name: "Lujain",
    email: "lujainbakir.ly@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "Tripoli, Libya",
    image: "assets/img/team/Lujain.png",
  },
  {
    id: 147,
    name: "Yesmine Miledi",
    email: "yesminemiledi77@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Sfax, Tunisia",
    image: "assets/img/team/Yesmine Miledi.png",
  },
  {
    id: 148,
    name: "Ethan Fregene",
    email: "ethanolawafregen@icloud.com",
    division: "Technical Operations",
    team: "Technical Operations",
    location: "USA",
    image: "assets/img/team/Ethan Fregene.png",
  },
  {
    id: 149,
    name: "Mengqi Chen",
    email: "mengqichen319@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Los Angeles, USA",
    image: "assets/img/team/Mengqi Chen.png",
  },
  {
    id: 150,
    name: "Evan Komitee",
    email: "evan.komitee@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "Brooklyn, USA",
    image: "assets/img/team/Evan Komitee.png",
  },
  {
    id: 151,
    name: "Connor Kerin",
    email: "connorkerin29@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "New York, USA",
    image: "assets/img/team/Connor Kerin.png",
  },
  {
    id: 152,
    name: "Aparna Praveen",
    email: "aparnapraveen1602@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Kerala, India",
    image: "assets/img/team/Aparna Praveen.png",
  },
  {
    id: 153,
    name: "William Hsieh",
    email: "williamhsieh@outlook.com",
    division: "Social Media",
    team: "Social Media",
    location: "Chino, USA",
    image: "assets/img/team/William Hsieh.png",
  },
  {
    id: 154,
    name: "Sanjana Jarugumilli",
    email: "sanjanajarugumilli@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Georgia, USA",
    image: "assets/img/team/Sanjana Jarugumilli.png",
  },
  {
    id: 155,
    name: "Sarah Tripp",
    email: "sarahtripp501@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "California, USA",
    image: "assets/img/team/Sarah Tripp.png",
  },
  {
    id: 156,
    name: "Tanjila",
    email: "tanjila47akther@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Chittagong, Bangladesh",
    image: "assets/img/team/Tanjila.png",
  },
  {
    id: 157,
    name: "Nejra Hojic",
    email: "hojicnejra@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Alameda, USA",
    image: "assets/img/team/Nejra Hojic.png",
  },
  {
    id: 158,
    name: "Nishtha Bhargava",
    email: "nishtha.bhargava10@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Mumbai, India",
    image: "assets/img/team/Nishtha Bhargava.png",
  },
  {
    id: 159,
    name: "Narayani Shankar",
    email: "narayani09.shankar@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Midvale, USA",
    image: "assets/img/team/Narayani Shankar.png",
  },
  {
    id: 160,
    name: "Carolyne Thomas",
    email: "carolynealphonsa@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Doha, Qatar",
    image: "assets/img/team/Carolyne Thomas.png",
  },
  {
    id: 161,
    name: "Emerald Lee",
    email: "emmu3750@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Las Vegas, USA",
    image: "assets/img/team/Emerald Lee.png",
  },
  {
    id: 162,
    name: "Aymen Jadda",
    email: "aymen.jadda@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Termara, Morocco",
    image: "assets/img/team/Aymen Jadda.png",
  },
  {
    id: 163,
    name: "Ahmed Khaled",
    email: "ahmedkhaled77311@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Elmahmoudya, Egypt",
    image: "assets/img/team/Ahmed Khaled.png",
  },
  {
    id: 164,
    name: "Risha Chaurasia",
    email: "rishachaurasia07@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Indore, India",
    image: "assets/img/team/Risha Chaurasia.png",
  },
  {
    id: 165,
    name: "Rani Patel",
    email: "rani125000@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "New Jersey, USA",
    image: "assets/img/team/Rani Patel.png",
  },
  {
    id: 166,
    name: "Victoria Gork",
    email: "victoriagork@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "New Jersey, USA",
    image: "assets/img/team/Victoria Gork.png",
  },
  {
    id: 167,
    name: "Bakhi Alfiya",
    email: "alfiyabakhi@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Pavlodar, Kazakhstan",
    image: "assets/img/team/Bakhi Alfiya.png",
  },
  {
    id: 168,
    name: "Charvi Gupta",
    email: "gcharvi.4v@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "Alberta, Canada",
    image: "assets/img/team/Charvi Gupta.png",
  },
  {
    id: 169,
    name: "Tanishtha Singh",
    email: "sachan.pragya@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Noida, India",
    image: "assets/img/team/Tanishtha Singh.png",
  },
  {
    id: 170,
    name: "Vishrutha Kunapareddi",
    email: "vishrutha.kunapareddi@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Hyderabad, India",
    image: "assets/img/team/Vishrutha Kunapareddi.png",
  },
  {
    id: 171,
    name: "Vanya Agarwal",
    email: "vanyaagarwal125@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Lucknow, India",
    image: "assets/img/team/Vanya Agarwal.png",
  },
  {
    id: 172,
    name: "Evah Shaji",
    email: "evahshaji@gmail.com",
    division: "Human Resources",
    team: "Human Resources",
    location: "Abu Dhabi, UAE",
    image: "assets/img/team/Evah Shaji.png",
  },
  {
    id: 173,
    name: "Gia An Quan-Pham (Frank) ",
    email: "giaan282006@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Milwaukee, USA",
    image: "assets/img/team/Gia An Quan-Pham (Frank) .png",
  },
  {
    id: 174,
    name: "Jaquelyn Alpizar",
    email: "jaki.alpizar9@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Wisconsin, USA",
    image: "assets/img/team/Jaquelyn Alpizar.png",
  },
  {
    id: 175,
    name: "Raphael Chakma",
    email: "raphaelchakma2021@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Dhaka, Bangladesh",
    image: "assets/img/team/Raphael Chakma.png",
  },
  {
    id: 176,
    name: "Swarnadeep Purkayastha",
    email: "purkayasthaswarnadeep2007@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Jaipur, India",
    image: "assets/img/team/Swarnadeep Purkayastha.png",
  },
  {
    id: 177,
    name: "Shohorat Mahapara Purnata",
    email: "shohoratmahapara@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Thaka, Bangladesh",
    image: "assets/img/team/Shohorat Mahapara Purnata.png",
  },
  {
    id: 178,
    name: "Ayushi Jha",
    email: "jhayushi@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "New Jersey, USA",
    image: "assets/img/team/Ayushi Jha.png",
  },
  {
    id: 179,
    name: "Riddhi Khokle",
    email: "riddhikhokle13@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Kodaikanal, India",
    image: "assets/img/team/Riddhi Khokle.png",
  },
  {
    id: 180,
    name: "Zharick Taliana Bustamante Pertuz",
    email: "zharickb620@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Barranquilla, Colombia",
    image: "assets/img/team/Zharick Taliana Bustamante Pertuz.png",
  },
  {
    id: 181,
    name: "Sharon Kodali",
    email: "sharonkodali1@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "California, USA",
    image: "assets/img/team/Sharon Kodali.png",
  },
  {
    id: 182,
    name: "Pratham Bhanushal",
    email: "bhanushali.pratham@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "West Virginia, USA",
    image: "assets/img/team/Pratham Bhanushal.png",
  },
  {
    id: 183,
    name: "Lina Zaki",
    email: "linazakielwakili1@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "Cassablanca, Morocco",
    image: "assets/img/team/Lina Zaki.png",
  },
  {
    id: 184,
    name: "Tashvi Aneja",
    email: "tashvianeja@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Bangalore, India",
    image: "assets/img/team/Tashvi Aneja.png",
  },
  {
    id: 185,
    name: "Douaa",
    email: "douaa.ze06@gmail.com",
    division: "Academics",
    team: "Academics",
    location: "Algiers, Alegeria",
    image: "assets/img/team/Douaa.png",
  },
  {
    id: 186,
    name: "Niti Sharma",
    email: "jayaasharma038@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Mumbai, India",
    image: "assets/img/team/Niti Sharma.png",
  },
  {
    id: 187,
    name: "Eileen Luo",
    email: "eluo.5230@gmail.com",
    division: "Technical Operations",
    team: "Technical Operations",
    location: "Maryland, USA",
    image: "assets/img/team/Eileen Luo.png",
  },
  {
    id: 188,
    name: "Meenakshi S",
    email: "gurukul.sis@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Tamil Nadu, India",
    image: "assets/img/team/Meenakshi S.png",
  },
  {
    id: 189,
    name: "Pratiti",
    email: "mehndirattapratiti1@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "New Delhi, India",
    image: "assets/img/team/Pratiti.png",
  },
  {
    id: 190,
    name: "Rashi Jakhotiya",
    email: "jakhotiya_rashi@students.sboe.org",
    division: "Human Resources",
    team: "Human Resources",
    location: "NJ , United States",
    image: "assets/img/team/Rashi Jakhotiya.png",
  },
  {
    id: 191,
    name: "Jayana Chowdhury",
    email: "jayanachowdhury@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Guwahati, India",
    image: "assets/img/team/Jayana Chowdhury.png",
  },
  {
    id: 192,
    name: "Noof",
    email: "noofalghafri365@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Muscat, Oman",
    image: "assets/img/team/Noof.png",
  },
  {
    id: 193,
    name: "Nishtha Lakhani",
    email: "thenishthalakhani@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Mumbai, India",
    image: "assets/img/team/Nishtha Lakhani.png",
  },
  {
    id: 194,
    name: "Samridhi Walia",
    email: "24swalia@cacegypt.org",
    division: "Social Media",
    team: "Social Media",
    location: "Cairo, Egypt",
    image: "assets/img/team/Samridhi Walia.png",
  },
  {
    id: 195,
    name: "Akshar Omkar",
    email: "aksharomkar1@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Sacramento, CA, United States",
    image: "assets/img/team/Akshar Omkar.png",
  },
  {
    id: 196,
    name: "Bani Gulati",
    email: "gulani1326@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Pune, India",
    image: "assets/img/team/Bani Gulati.png",
  },
  {
    id: 197,
    name: "Ishita Singh",
    email: "ishsingh.connect@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Maharashtra, India",
    image: "assets/img/team/Ishita Singh.png",
  },
  {
    id: 198,
    name: "Bhavna Ganesh",
    email: "bhavnagrao@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Trivandrum, India",
    image: "assets/img/team/Bhavna Ganesh.png",
  },
  {
    id: 199,
    name: "Salome Tsirekidze",
    email: "stsirekidze11@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "Georgia",
    image: "assets/img/team/Salome Tsirekidze.png",
  },
  {
    id: 200,
    name: "Krista Abigail Soldevilla",
    email: "kamsoldevilla@gmail.com",
    division: "Partnerships",
    team: "Partnerships",
    location: "New Jersey, United States",
    image: "assets/img/team/Krista Abigail Soldevilla.png",
  },
  {
    id: 201,
    name: "Navneet Kalatheeswaran",
    email: "327navneet@gmail.com",
    division: "Tutor",
    team: "Partnerships",
    location: "New Jersey, United States",
    image: "assets/img/team/Navneet Kalatheeswaran.png",
  },
  {
    id: 202,
    name: "iris",
    email: "irissim0730@gmail.com",
    division: "Academics",
    team: "Partnerships",
    location: "Las Vegas, United States",
    image: "assets/img/team/iris.png",
  },
  {
    id: 203,
    name: "Mira Singh",
    email: "mira.singh1625@gmail.com",
    division: "Tutor",
    team: "Tutor",
    location: "River Valley (Central Singapore), Singapore",
    image: "assets/img/team/Mira Singh.png",
  },
  {
    id: 204,
    name: "Vasileia Koulentaki",
    email: "vas.koulentaki@gmail.com",
    division: "Social Media",
    team: "Social Media",
    location: "Crete, Greece ",
    image: "assets/img/team/Vasileia Koulentaki.png",
  },
  {
    id: 205,
    name: "Chhavi Agarwal",
    email: "chhaviagarwal2021@gmail.com",
    division: "Communications",
    team: "Communications",
    location: "Noida, India",
    image: "assets/img/team/Chhavi Agarwal.png",
  },
  {
    id: 206,
    name: "Jerry Wang",
    email: "jerrywang16@gmail.com",
    division: "Technical Operations",
    team: "Technical Operations",
    location: "Cupertino, United States",
    image: "assets/img/team/Jerry Wang.png",
  },
];

async function getTeamData() {
  try {
    const URL = "https://tutor-timings.vercel.app/getRecords";
    // const TEST_URL = 'http://localhost:3000/getRecords'

    const res = await fetch(URL, { method: "GET" });
    if (res.status != 200) {
      return null;
    }
    const data = await res.json(); // Wait for the JSON parsing
    return data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function onPageLoad() {
  const dataContainer = document.getElementById("loading_text");
  dataContainer.textContent = "Loading...";
  document.getElementById("loading_text").hidden = false;
  const data = await getTeamData();
  if (data != null) {
    document.getElementById("loading_text").hidden = true;
    // Display the fetched data
    loadImages(data);
  } else {
    document.getElementById("loading_text").hidden = true;
    loadImages(oldTeamData);
  }
}

function loadImages(data) {
  // Display team members by generating html
  function addCards(team) {
    team.forEach((member) => {
      var div = document.createElement("div");
      div.setAttribute("class", `team-card`);
      div.setAttribute("id", `${member.id}`);
      div.innerHTML = document.getElementById("teams-page-content").innerHTML;
      div.innerHTML = div.innerHTML
        .replace(/{NAME}/g, member.name)
        .replace(
          /{DIVISION}/g,
          member.position || member.division || member.team
        )
        .replace(/{LOCATION}/g, member.location);

      document.getElementById("main-card").appendChild(div);
    });
  }
  // replace HR with Human Resources
  data = data.map((m) => {
    if (m.team === "HR") {
      m.team = "Human Resources";
    }
    return m;
  });
  // display admins
  var CEO = data.filter(
    (m) =>
      m.position?.includes("CEO") ||
      m.team?.includes("CEO") ||
      m.division?.includes("CEO")
  );
  addCards(CEO);

  var CFO = data.filter(
    (m) =>
      m.position?.includes("Chief Operating Officer") ||
      m.team?.includes("Chief Operating Officer") ||
      m.division?.includes("Chief Operating Officer")
  );
  addCards(CFO);

  var admins = data.filter((m) => m.team === "Admin");
  addCards(admins);

  var HR = data.filter((m) => m.team === "Human Resources");
  addCards(HR);

  var strat = data.filter((m) => m.team === "Strategy");
  addCards(strat);

  var techOps = data.filter((m) => m.team === "Technical Operations");
  addCards(techOps);

  // other members
  addCards(data);

  for (var i = 0; i < data.length; i++) {
    document
      .getElementById(`${data[i].id}`)
      .querySelector(".team-email").href = `mailto:${data[i].email}`;
    // checkImage(data[i]);
    document
      .getElementById(`${data[i].id}`)
      .querySelector(".team-image").src = `${data[i].image}`;
  }
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
    } catch (e) {}
  }
}

var partnerData = [
  {
    id: 9000,
    name: "National Cybersecurity Alliance",
    link: "https://staysafeonline.org/",
    image: "assets/img/partners/NCA.png",
  },
  {
    id: 9001,
    name: "Asha For Education",
    link: "https://ashanet.org/",
    image: "assets/img/partners/AFE.png",
  },
  {
    id: 9002,
    name: "SOS Children's Villages",
    link: "https://www.sos-childrensvillages.org/",
    image: "assets/img/partners/SOS.png",
  },
  {
    id: 9003,
    name: "Ministry of Education, Ampara",
    link: "https://moe.gov.lk/",
    image: "assets/img/partners/SL_MOE.png",
  },
  {
    id: 9004,
    name: "United Under Arts",
    link: "https://www.unitedunderarts.org/",
    image: "assets/img/partners/UUALogo.png",
  },
  {
    id: 9005,
    name: "Mind Stance",
    link: "https://www.instagram.com/_mind.stance_/?hl=en",
    image: "assets/img/partners/mindstance.png",
  },
  {
    id: 9006,
    name: "The Online Foundation",
    link: "https://www.instagram.com/theonlinefoundation/?hl=en",
    image: "assets/img/partners/TOF.png",
  },
  {
    id: 9007,
    name: "Vajira Sri Children’s Development Center",
    link: "http://vajirasri.com/",
    image: "assets/img/partners/Vajira_Sri.png",
  },
];

// Display partners by generating html

partnerData.forEach((partner) => {
  var div = document.createElement("div");
  div.setAttribute("class", `partner-column`);
  div.setAttribute("id", `${partner.id}`);
  div.innerHTML = document.getElementById("partner-content").innerHTML;

  div.innerHTML = div.innerHTML.replace(/{NAME}/g, partner.name);

  document.getElementById("partner-card").appendChild(div);
});

for (var i = 0; i < partnerData.length; i++) {
  document
    .getElementById(`${partnerData[i].id}`)
    .querySelector("#partner-link").href = `${partnerData[i].link}`;
  document
    .getElementById(`${partnerData[i].id}`)
    .querySelector("#partner-img").src = `${partnerData[i].image}`;
}

// counter animation

isInViewport = (elem) => {
  let bounding = elem.getBoundingClientRect();
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= height &&
    bounding.right <= width
  );
};

$(window).scroll(startCounter);

function startCounter() {
  document.querySelectorAll(".milestone-list").forEach(function (element) {
    if (isInViewport(element)) {
      $(window).off("scroll", startCounter);
      $(".count").each(function () {
        let $this = $(this);
        let max = $this.text();
        if (max == 0) {
          return;
        }
        if ($this.text() == "") {
          $this.text(Math.round(data.length / 10) * 10);
        }
        $this
          .prop("Counter", 0)
          .animate(
            {
              Counter: $this.text(),
            },
            {
              duration: 3000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.Counter));
              },
            }
          )
          .promise()
          .then(function () {
            $this.text(max);
          });
      });
    }
  });
}
