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
        "id": 1,
        "name": "Nilabh Agrawal",
        "email": "nilabh@instilt.com",
        "division": "Founder & CEO",
        "team": "Admin",
        "location": "Vancouver, Canada",
        "image": "https://drive.google.com/uc?export=view&id=1hvyHzBPVJosTKkOwY5PwF2DtllRuOapB"
    },
    {
        "id": 2,
        "name": "Haresh Wedanayake",
        "email": "haresh@instilt.com",
        "division": "Chief Operating Officer",
        "team": "Admin",
        "location": "Evanston, USA",
        "image": "https://drive.google.com/uc?export=view&id=1ux4YW_N1dJ7TMumOCqLlgaqg34bIeOLO"
    },
    {
        "id": 3,
        "name": "Danisha Panigrahi",
        "email": "danishap15@gmail.com",
        "division": "Head of Human Resources",
        "team": "Admin",
        "location": "California, USA",
        "image": "https://drive.google.com/uc?export=view&id=1l0F598YgXzGmMCdBDupyvbkM38r4LLJx"
    },
    {
        "id": 4,
        "name": "Ayush Ravichandran",
        "email": "ayush@instilt.com",
        "division": "Head of Technical Operations",
        "team": "Admin",
        "location": "Amherst, USA",
        "image": "https://drive.google.com/uc?export=view&id=1UYH43Y7A_b8gaNpR23f9xNHF8MWCOZAg"
    },
    {
        "id": 5,
        "name": "Shravani Tushar Kulkarni",
        "email": "shravani@instilt.com",
        "division": "Head of Communications",
        "team": "Admin",
        "location": "Ahmedabad, India",
        "image": "https://drive.google.com/uc?export=view&id=1iwGX-UfO_KwSXPv9uTwSsZqswBaxixY_"
    },
    {
        "id": 6,
        "name": "Ann Mascarenhas",
        "email": "annmasc3@gmail.com",
        "division": "Head of Social Media",
        "team": "Admin",
        "location": "Troy, USA",
        "image": ""
    },
    {
        "id": 7,
        "name": "Julia Stergiou",
        "email": "juliastergiou1111@gmail.com",
        "division": "Head of Partnerships",
        "team": "Admin",
        "location": "Toronto, Canada",
        "image": "https://drive.google.com/uc?export=view&id=1MKJPyt8tBnLzoo-hyW8U6mg2ZXfhdmtS"
    },
    {
        "id": 8,
        "name": "Eliza Mahon",
        "email": "eliza.q.mahon@gmail.com",
        "division": "Head of Academics",
        "team": "Admin",
        "location": "Vancouver, Canada",
        "image": "https://drive.google.com/uc?export=view&id=13DjzMPE1CLD7yWpcvfSo56pzaLZUHNHi"
    },
    {
        "id": 9,
        "name": "Agrim Gulaty",
        "email": "agrimgulaty@gmail.com",
        "division": "Project Manager",
        "team": "Admin",
        "location": "Dubai, UAE",
        "image": ""
    },
    {
        "id": 10,
        "name": "Mansi Agrawal",
        "email": "agrawamansi@gmail.com",
        "division": "Strategy",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "https://drive.google.com/uc?export=view&id=1_S1oDSu7gqKm57vIYyA6Wc24nYcXDCzN"
    },
    {
        "id": 11,
        "name": "Yanxi Chen",
        "email": "yan@instilt.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Wirral, UK",
        "image": "https://drive.google.com/uc?export=view&id=1EpOU0lBqICShA9JklYrKxagdVTZMRdhd"
    },
    {
        "id": 12,
        "name": "Anirudh Agarwal",
        "email": "itsanirudh98@gmail.com",
        "division": "Strategy",
        "team": "Tutor",
        "location": "Noida, India",
        "image": "https://drive.google.com/uc?export=view&id=1uea3J2HC2N2ORJ10xwwSvLmGqTWjp_G_"
    },
    {
        "id": 13,
        "name": "Rosemary Ibe",
        "email": "rosemaryibe18@gmail.com",
        "division": "Strategy",
        "team": "Tutor",
        "location": "Lagos, Nigeria",
        "image": "https://drive.google.com/uc?export=view&id=1tDGraBMBA_QSSn-kuxd8FURu4KwdwyxX"
    },
    {
        "id": 14,
        "name": "Tanvi Garg",
        "email": "gargselene@gmail.com",
        "division": "Project Manager",
        "team": "Academics",
        "location": "Agra, India",
        "image": "https://drive.google.com/uc?export=view&id=1NkiZ_manfycxLEBGs0m0KaBujNZrJVPo"
    },
    {
        "id": 15,
        "name": "Amrita Anbuchezhian",
        "email": "amritaanbu05@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Singapore",
        "image": "https://drive.google.com/uc?export=view&id=1tnkSfqT8nI-hgZg294v3bvq4cadouro3"
    },
    {
        "id": 16,
        "name": "Divyanshi Mohanty",
        "email": "divyanshimohanty4@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangalore, India",
        "image": "https://drive.google.com/uc?export=view&id=1lM1x3c3udSfcAXZ8MYgujFJRXi-0V3x8"
    },
    {
        "id": 17,
        "name": "Priya Ramani",
        "email": "priya@instilt.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "https://drive.google.com/uc?export=view&id=1AJ5Sv4BnAFxWq80IOqN5y8j2SPmr4lso"
    },
    {
        "id": 18,
        "name": "Diya Singh Chauhan",
        "email": "diyasinghchauhan@gmail.com",
        "division": "Content Lead",
        "team": "Human Resources",
        "location": "Melbourne, Australia",
        "image": "https://drive.google.com/uc?export=view&id=1ZFWPu0F8ZXQ12KqWOTuim7l0mULLT1ZX"
    },
    {
        "id": 19,
        "name": "Sanjana Menon",
        "email": "future2402@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "https://drive.google.com/uc?export=view&id=1Ji8UWGYd6z3V8Bm3HdpEo7ULwsdWGBDm"
    },
    {
        "id": 20,
        "name": "Nitya Bomma",
        "email": "nityabomma@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Hyderabad, India",
        "image": "https://drive.google.com/uc?export=view&id=1FkY1AnApq3gOT_7tmGC9uoTvBwTSgEEQ"
    },
    {
        "id": 21,
        "name": "Marasel Perry",
        "email": "p.marasel@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "New York, USA",
        "image": "https://drive.google.com/uc?export=view&id=12V8RQPf4_0yRV-DviIPX62_iSwOa3PJM"
    },
    {
        "id": 22,
        "name": "Anwesha Maiti",
        "email": "maitianwesha16@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Kolkata, India",
        "image": "https://drive.google.com/uc?export=view&id=15gs2o9B8X_1Zh1j_VbOFy-gqt-LK-3yu"
    },
    {
        "id": 23,
        "name": "Vinugi De Silva",
        "email": "vinugidesilva@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "https://drive.google.com/uc?export=view&id=1emclDppp_WGei_eWq0XIMIlUtLRFYvFE"
    },
    {
        "id": 24,
        "name": "Sumaiya Sultana",
        "email": "sumaiyasultanax@gmail.com",
        "division": "Cohort Head",
        "team": "Social Media",
        "location": "Dhaka, Bangladesh",
        "image": ""
    },
    {
        "id": 25,
        "name": "Annie Elizabeth Binesh",
        "email": "anniebinesh@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Chennai, India",
        "image": "https://drive.google.com/uc?export=view&id=1kdSlic27cnw0lPNenSawik_BmUNp0_Jy"
    },
    {
        "id": 26,
        "name": "Archit Sinha",
        "email": "architsinha8@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Gautam Buddh Nagar, India",
        "image": "https://drive.google.com/uc?export=view&id=1KfGUaDpj4j3LdD4TnIqjEWhIcVjyfT9E"
    },
    {
        "id": 27,
        "name": "Nidhi Iyer",
        "email": "nidhiyer0402@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "https://drive.google.com/uc?export=view&id=1nhqvQLoCNxOk8t0NMvyakRT4-lX10P2E"
    },
    {
        "id": 28,
        "name": "Maithreyi Murali Manohar",
        "email": "maithreyi.murali.manohar@gmail.com",
        "division": "Cohort Head",
        "team": "Academics",
        "location": "Lewis Center, USA",
        "image": "https://drive.google.com/uc?export=view&id=1yPcb3ac5htEI7-9NvsKu4wynPDAHTZSL"
    },
    {
        "id": 29,
        "name": "Kaavya Dasgupta",
        "email": "dasgupta.kaavya@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Bangalore, India",
        "image": "https://drive.google.com/uc?export=view&id=1NRGnmpoqah78Hw-Sng8I00pSsgpSJ1Jm"
    },
    {
        "id": 30,
        "name": "Aarya Munot",
        "email": "munotaarya@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "https://drive.google.com/uc?export=view&id=1BLFSxSLX31nKbcZshNalKqMn_NPy2BO3"
    },
    {
        "id": 31,
        "name": "Annie Jiang",
        "email": "anniejiang9019@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Los Angeles, USA",
        "image": ""
    },
    {
        "id": 32,
        "name": "Mohamed Ibrahim Mashhour",
        "email": "mohamedi.mashhour1@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "https://drive.google.com/uc?export=view&id=1hr4OCxmTtyInui3Stq5OiETs7OveiuSb"
    },
    {
        "id": 33,
        "name": "Suha",
        "email": "reachstg007@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Coimbatore, India",
        "image": "https://drive.google.com/uc?export=view&id=1d3nKCztIrDpcFXt_ExjrKQEweB5OZ9bN"
    },
    {
        "id": 34,
        "name": "Rayan Ghosh",
        "email": "theglasstable2007@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "California, USA",
        "image": "https://drive.google.com/uc?export=view&id=12T5j1b12xa762K09A8ok4JT_J3kw_IcE"
    },
    {
        "id": 35,
        "name": "Tanvi Garg",
        "email": "garg.tanvi.st@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "California, USA",
        "image": "https://drive.google.com/uc?export=view&id=1VNPrFiYlu9sM_qnHf-Vm2raAvcMdw3zS"
    },
    {
        "id": 36,
        "name": "Phillip Cao",
        "email": "phillipcao1234@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "California, USA",
        "image": "https://drive.google.com/uc?export=view&id=1gLYznZH4Y29UE2X_vIKLDWCQnJGFpS7C"
    },
    {
        "id": 37,
        "name": "Arni Mahendra",
        "email": "arnimahendra09@gmail.com",
        "division": "Cohort Head",
        "team": "Tutor",
        "location": "Delhi, India",
        "image": "https://drive.google.com/uc?export=view&id=1ZpfM2hLpOO6xPCYICFnqi1tSg2hKR5vb"
    },
    {
        "id": 38,
        "name": "Sachika Tomer",
        "email": "sachikatomer2006@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Vadodara, India",
        "image": "https://drive.google.com/uc?export=view&id=1qffcGUMgW9_1cNTYhCWwyYu1dn0iCKNl"
    },
    {
        "id": 39,
        "name": "Adyaa Mishra",
        "email": "mishraadyaa@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangalore Urban, India",
        "image": ""
    },
    {
        "id": 40,
        "name": "Aarya Rajesh",
        "email": "aaryarajesh@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Doha, Qatar",
        "image": ""
    },
    {
        "id": 41,
        "name": "Pranjali Gupta",
        "email": "pranjali.gupta16@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Ghaziabad, India",
        "image": "https://drive.google.com/uc?export=view&id=1r1EEQrXwaRSrm7nXOqerlqriUEhPCKAa"
    },
    {
        "id": 42,
        "name": "Charlotte Talaat",
        "email": "charlottetalaatk@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Cairo, Egypt",
        "image": "https://drive.google.com/uc?export=view&id=1FfngsFgkXLFZs3S9MdnwgAaoZOgZ_0tC"
    },
    {
        "id": 43,
        "name": "Pranjal Sharma",
        "email": "sharmapranjal1108@gmail.com",
        "division": "Cohort Head",
        "team": "Communications",
        "location": "Thane, India",
        "image": "https://drive.google.com/uc?export=view&id=1Y2V-5z2-mMg2aWavytaS_O_2EVCvbjtZ"
    },
    {
        "id": 44,
        "name": "Bavly Romany Hosny",
        "email": "romanybavly496@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "https://drive.google.com/uc?export=view&id=1PBZ2iwR0Gy8aSVk98Pb7qO3FR8r0U4Yh"
    },
    {
        "id": 45,
        "name": "Haneen Ayman Abdallah Abdallah Ali",
        "email": "ha245041@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Giza, Egypt",
        "image": ""
    },
    {
        "id": 46,
        "name": "Mariam Salem",
        "email": "mariqueen12a@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Damietta, Egypt",
        "image": "https://drive.google.com/uc?export=view&id=1RUcdbzA86eM_PTtABHxLQVV0EoDR71TH"
    },
    {
        "id": 47,
        "name": "Naher Abdelnasser Ahmed",
        "email": "naheristhebest2006@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": ""
    },
    {
        "id": 48,
        "name": "Salma El-Sayed Ahmed El-Moshy",
        "email": "salmaelsayed.2.8.56@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Cairo, Egypt",
        "image": "https://drive.google.com/uc?export=view&id=1M1I1MYkhXJagCd403jzip0Ru_R3nMioy"
    },
    {
        "id": 49,
        "name": "Shahd Mohammad Abo-Ahmad",
        "email": "shahdaboahmad596@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Menofia, Egypt",
        "image": "https://drive.google.com/uc?export=view&id=1OKWVF4RorVZKjhys_3eXldI4VxKirMaD"
    },
    {
        "id": 50,
        "name": "Christopher Espitia-Alvarez",
        "email": "cespitiaalvarez@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Cupertino, USA",
        "image": "https://drive.google.com/uc?export=view&id=12_w7mUPXUmghSzge6OaLC-X9fD1kQj8N"
    },
    {
        "id": 51,
        "name": "Likhitha Thokala",
        "email": "likhithathokala@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Bangalore, India",
        "image": "https://drive.google.com/uc?export=view&id=1JmyL4UZT3Hf-c3y5ahZ-YrRKYqt82mtK"
    },
    {
        "id": 52,
        "name": "Sreya Komati",
        "email": "komatisreya@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Sacramento, USA",
        "image": "https://drive.google.com/uc?export=view&id=1F-SOpuKktFaZEhJsFwFPSIdI4QU3o7-E"
    },
    {
        "id": 53,
        "name": "Ishika Singh",
        "email": "ishika.space@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Fremont, USA",
        "image": "https://drive.google.com/uc?export=view&id=1NiEzduzCr6xLUejlM7xjWG3Y9N9r11-W"
    },
    {
        "id": 54,
        "name": "Tushara Kumar",
        "email": "tusharak12@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "California, USA",
        "image": "https://drive.google.com/uc?export=view&id=1dsh07Brhx7nzLAPGB7g1FZ0g8oLd7ckm"
    },
    {
        "id": 55,
        "name": "Koushiki Das",
        "email": "koushiki.das.is.here@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Kolkata, India",
        "image": ""
    },
    {
        "id": 56,
        "name": "Dhikshitha Nandakumar",
        "email": "ndhikshitha@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Coimbatore, India",
        "image": "https://drive.google.com/uc?export=view&id=1W1B9ORoxpK-m0mq-plSrTlDCkbpko7DL"
    },
    {
        "id": 57,
        "name": "Kenisha Jain",
        "email": "kenishajain123@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Bangalore, India",
        "image": "https://drive.google.com/uc?export=view&id=1WG6y9MAEoGat6BkUB05JPjigSBvUnKjJ"
    },
    {
        "id": 58,
        "name": "Natalia Lopez",
        "email": "natlopez63@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "California, USA",
        "image": ""
    },
    {
        "id": 59,
        "name": "Rachel Tong",
        "email": "racheltong29@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Ohio, USA",
        "image": "https://drive.google.com/uc?export=view&id=1W74C1uDfhcLxlD7Kdz9Lz2_JmGhsPH6C"
    },
    {
        "id": 60,
        "name": "Rimjhim Singh",
        "email": "singhrimjhim2017@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "UAE",
        "image": ""
    },
    {
        "id": 61,
        "name": "Shenaly Raju",
        "email": "shenalyraju@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Colombo, Sri Lanka",
        "image": ""
    },
    {
        "id": 62,
        "name": "Janya Edirisinghe",
        "email": "janyaedirisinghe763@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": "https://drive.google.com/uc?export=view&id=1N9P2dylzt0r9Tie0NeY_KLCm9REHEkkS"
    },
    {
        "id": 63,
        "name": "Sammith Singamsetty",
        "email": "sammith.official@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Bangalore, India",
        "image": ""
    },
    {
        "id": 64,
        "name": "Gwenie Marinas",
        "email": "gweniekm0323@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "California, USA",
        "image": ""
    },
    {
        "id": 65,
        "name": "Aryan Nayak",
        "email": "8660549803.nayak@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "https://drive.google.com/uc?export=view&id=1Mc-_cogHogXSgFVYFHhFU8Pkqgr8ViQV"
    },
    {
        "id": 66,
        "name": "Ranudi Pilapitiya",
        "email": "rpilapitiya2004@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Colombo, Sri Lanka",
        "image": "https://drive.google.com/uc?export=view&id=1NamnrtI1oSoU1-gj5Gx-3qPLDiDk2GxV"
    },
    {
        "id": 67,
        "name": "Sachi Aggarwal",
        "email": "sachiaggarwal2006@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Haryana, India",
        "image": ""
    },
    {
        "id": 68,
        "name": "Leenah Wahab",
        "email": "leenah.wahab@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Colombo, Sri Lanka",
        "image": ""
    },
    {
        "id": 69,
        "name": "Ryan Joseph Orumpackal",
        "email": "rjosepho@outlook.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Missouri City, USA",
        "image": ""
    },
    {
        "id": 70,
        "name": "Safiya Mymun",
        "email": "safiyamymunsiddiq@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Riyadh, Saudi Arabia",
        "image": "https://drive.google.com/uc?export=view&id=1MSN93uebelQvUTaOrw0qSCc9UqKRC1i8"
    },
    {
        "id": 71,
        "name": "Roz Mirfendereski",
        "email": "rozmir@icloud.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Las Vegas, USA",
        "image": ""
    },
    {
        "id": 72,
        "name": "Liam Hoffman",
        "email": "lhoff2005@yahoo.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Indiana, USA",
        "image": "https://drive.google.com/uc?export=view&id=1M5mhYgCejU9XuB5LjGzlxHUkxC6Tmz5l"
    },
    {
        "id": 73,
        "name": "Shaivi Kumar",
        "email": "shaivikumar2007@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Kolkata, India",
        "image": ""
    },
    {
        "id": 74,
        "name": "Aiyappan Shivani",
        "email": "aiyappanshivani06@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Singapore",
        "image": ""
    },
    {
        "id": 75,
        "name": "Keyura A Grandhi",
        "email": "keyura.grandhi@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Fremont, USA",
        "image": ""
    },
    {
        "id": 76,
        "name": "Joshua Park",
        "email": "joshua.1946577@nv.ccsd.net",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Las Vegas, USA",
        "image": "https://drive.google.com/uc?export=view&id=1s_X6Y3HuPr-_F5BME0cZPHbX1pDjVljp"
    },
    {
        "id": 77,
        "name": "Smahi Vijay",
        "email": "smahiv@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Singapore",
        "image": "https://drive.google.com/uc?export=view&id=1MdSMX3YDEcdfutVz3bLiaT1ql121OVg6"
    },
    {
        "id": 78,
        "name": "Shukhashini Sivakumar",
        "email": "shukhashinis@yahoo.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Coimbatore, India",
        "image": "https://drive.google.com/uc?export=view&id=1GdIjGhE_AcRWjyXVkgDAhupci_iXrwUZ"
    },
    {
        "id": 79,
        "name": "Christina Julien",
        "email": "cejtlch@icloud.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Nashville, USA",
        "image": "https://drive.google.com/uc?export=view&id=1OEMrpsogHxUC2C5WIiUu_ZBVeKEPL4Pb"
    },
    {
        "id": 80,
        "name": "Kushi Khushi",
        "email": "k.khushi0357@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Helifax, Canada",
        "image": "https://drive.google.com/uc?export=view&id=1VGnzmANHou39w3vownk0aHKTpdPsX79p"
    },
    {
        "id": 81,
        "name": "Veer Raghav Jaiswal",
        "email": "veer1838.jaiswal@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Kolkata, India",
        "image": "https://drive.google.com/uc?export=view&id=1QHvQqDejp3D8SacZI0LyCYTCWXavbd4h"
    },
    {
        "id": 82,
        "name": "Abisatu Kabineh-Mansaray",
        "email": "km.abisatu@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "London, UK",
        "image": ""
    },
    {
        "id": 83,
        "name": "Justin Tishbi",
        "email": "justintishbi@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Los Angeles, USA",
        "image": ""
    },
    {
        "id": 84,
        "name": "Anvita Verabelli",
        "email": "v.anvita26@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Hyderabad, India",
        "image": "https://drive.google.com/uc?export=view&id=1_SKXAXzqsn24b_OOt_arRmFvcGq6r9ZJ"
    },
    {
        "id": 85,
        "name": "Aalima Shabeeb",
        "email": "Aalimashabeeb@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Lucknow, India",
        "image": "https://drive.google.com/uc?export=view&id=1aUzxS098aMFxfmDph6BujHnSF7wE1i9W"
    },
    {
        "id": 86,
        "name": "Amalia Valea",
        "email": "amaliavalea@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Valladoid, Spain",
        "image": ""
    },
    {
        "id": 87,
        "name": "Maryam Rehmat Chaudhry",
        "email": "25maryamchaudhry@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Raleigh, USA",
        "image": "https://drive.google.com/uc?export=view&id=1OKHNnd-4qlChBfGiBBqvQcvqAI8qpSmv"
    },
    {
        "id": 88,
        "name": "Ayesha Haroon",
        "email": "ayeshaharoon0507@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Dallas, USA",
        "image": "https://drive.google.com/uc?export=view&id=1dzFtGKiHAjVo792jQeqiDrYhffF3nY0n"
    },
    {
        "id": 89,
        "name": "Teddy Cohen",
        "email": "cohenth@thayer.org",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Boston, USA",
        "image": ""
    },
    {
        "id": 90,
        "name": "Nikita Anand",
        "email": "officialnia.anand@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Patna, India",
        "image": "https://drive.google.com/uc?export=view&id=1iAUWJqacg0_qcetCVmJqvzWg19-UF8fH"
    },
    {
        "id": 91,
        "name": "Adhvighaa Bs",
        "email": "adhvighaabharani@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Coimbatore, India",
        "image": "https://drive.google.com/uc?export=view&id=1OXAjfOA8ozMM_xb0BYbkHY-vfPEYa47C"
    },
    {
        "id": 92,
        "name": "Olivia Xu",
        "email": "olivia.hope.xu@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Princeton, USA",
        "image": ""
    },
    {
        "id": 93,
        "name": "Urvish Lodha",
        "email": "urvish.lodha@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": "https://drive.google.com/uc?export=view&id=1ikyJ_cZt8Ap2V21fDKLFHFQ-29BrJEkd"
    },
    {
        "id": 94,
        "name": "Anissa Das",
        "email": "das.anissa@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Kolkata, India",
        "image": "https://drive.google.com/uc?export=view&id=1lvziPOiSOloR7PLrOs7gCu3W6-2htEVn"
    },
    {
        "id": 95,
        "name": "Malia Nagel",
        "email": "2024.m.nagel@shalhevet.org",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Los Angeles, USA",
        "image": "https://drive.google.com/uc?export=view&id=1gDxK3lrOlOMej_50fgj-grPO09nu198b"
    },
    {
        "id": 96,
        "name": "Alara Yilmaz",
        "email": "alarayilmaz050@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Las Vegas, USA",
        "image": "https://drive.google.com/uc?export=view&id=1RsSMDplPdHoh7p95UcLLf1elCmpt-WYD"
    },
    {
        "id": 97,
        "name": "Isabella Yang",
        "email": "isabellayang381@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "California, USA",
        "image": "https://drive.google.com/uc?export=view&id=1ip4QYhbu6AcPwj1GZkOYpxj6z80NIMFi"
    },
    {
        "id": 98,
        "name": "Riya Murthy",
        "email": "riyamurthy7@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Cupertino, USA",
        "image": "https://drive.google.com/uc?export=view&id=1pccmfNzG5OuhH9FPvp_b_ZDzSTVn1HBr"
    },
    {
        "id": 99,
        "name": "Fathima Israh Muhseen",
        "email": "israh.m@icloud.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Colombo, Sri Lanka",
        "image": ""
    },
    {
        "id": 100,
        "name": "Shreya Aju",
        "email": "shreyaaju254@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Doha, Qatar",
        "image": "https://drive.google.com/uc?export=view&id=1ODD8AWWLOw7HgNsiSmHs-5XTHNT-GeTc"
    },
    {
        "id": 101,
        "name": "Anusha Anchlia",
        "email": "anusha.anchlia2009@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Hyderabad, India",
        "image": "https://drive.google.com/uc?export=view&id=1oEPhBc5treYMYygcgEZ67Us8usp1db-z"
    },
    {
        "id": 102,
        "name": "Wickramasinghe Pathiranage Senugi Limanasa Jayawardana",
        "email": "senugijayawardana@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Toronto, Canada",
        "image": "https://drive.google.com/uc?export=view&id=1MEYAmNP_fwFbYqcQVM4JVBZ_qhPd8s-X"
    },
    {
        "id": 103,
        "name": "Atharva Dangre",
        "email": "atharva.dangre1@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Mumbai, India",
        "image": ""
    },
    {
        "id": 104,
        "name": "Nusaiba Mehnaz",
        "email": "nusaiba.mehnaz@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Dhaka, Bangladesh",
        "image": "https://drive.google.com/uc?export=view&id=1ojaHv0bLKKTCRk1Hkg488fFY095Ed9mK"
    },
    {
        "id": 105,
        "name": "Wing Lam Charlene",
        "email": "charlenelau0109@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "ShenZhen, China",
        "image": "https://drive.google.com/uc?export=view&id=1MldGeozVsr1cF6fQ2pB2Q8cLCEr4lBGn"
    },
    {
        "id": 106,
        "name": "Tashvi Verma",
        "email": "tashviverma1910@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Hyderabad, India",
        "image": "https://drive.google.com/uc?export=view&id=13_ybbRN30mDkbTwhs6pNetqV7EWtT4_c"
    },
    {
        "id": 107,
        "name": "Victor Njagi",
        "email": "victormureithinjagi@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Nairobi, Kenya",
        "image": ""
    },
    {
        "id": 108,
        "name": "Riya Thakur",
        "email": "riyathakur2105@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "https://drive.google.com/uc?export=view&id=1DXCCID_AMOfJ4_2XDZnh0-PA3ELHhKGC"
    },
    {
        "id": 109,
        "name": "Ereni Sadek",
        "email": "erenisadek30@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Texas, USA",
        "image": "https://drive.google.com/uc?export=view&id=1QNIN_8KcTdF_bXuxj3nsIFENQYkSaesT"
    },
    {
        "id": 110,
        "name": "Emily Wang",
        "email": "ewang3@branksome.on.ca",
        "division": "Academics",
        "team": "Academics",
        "location": "Toronto, Canada",
        "image": "https://drive.google.com/uc?export=view&id=1M8xB_dDJ2Qu5mRLfDdf0Z0uopdgCfE0w"
    },
    {
        "id": 111,
        "name": "Jessica Singh",
        "email": "jessicasingh214@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Vancouver, Canada",
        "image": "https://drive.google.com/uc?export=view&id=1MGd15aQ-DQr_9QY-7KRVW8iV3lydxI6D"
    },
    {
        "id": 112,
        "name": "An N. Bui",
        "email": "anngbui17@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Texas, USA",
        "image": "https://drive.google.com/uc?export=view&id=1tgPXReT1w8s88QvdgI0MvwWQakuOdGB8"
    },
    {
        "id": 113,
        "name": "Eunji Lee",
        "email": "edmswl05@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Castle Pines, USA",
        "image": "https://drive.google.com/uc?export=view&id=1N0vwpoNg9hLRy7rIOt3ZwJzsXVNVOkZt"
    },
    {
        "id": 114,
        "name": "Abigail Shwartz",
        "email": "abigails22@nycstudents.net",
        "division": "Academics",
        "team": "Academics",
        "location": "USA",
        "image": ""
    },
    {
        "id": 115,
        "name": "Nalini Gupta",
        "email": "nalinigupta1098@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Goa, India",
        "image": "https://drive.google.com/uc?export=view&id=1MS2DftasIeuk05pQbsWXyMkGXguepLoj"
    },
    {
        "id": 116,
        "name": "Janya Srivastava",
        "email": "janyasrivastava0@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Ontario, Canada",
        "image": ""
    },
    {
        "id": 117,
        "name": "Snehal Abdol",
        "email": "snehaladbol@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Maharashtra, India",
        "image": "https://drive.google.com/uc?export=view&id=1wAkZ4OB07au5FTeEXRP24Fd9AvKclo_q"
    },
    {
        "id": 118,
        "name": "Beatriz Valad\u00e3o Donnici De Azevedo",
        "email": "biadonnici@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Rio De Janerio, Brazil",
        "image": "https://drive.google.com/uc?export=view&id=1tzjey3D1jusf_LcOGyRBb-wa9kiv7Pnl"
    },
    {
        "id": 119,
        "name": "Matilde Silva",
        "email": "matildeasilva2000@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Leiria, Portugal",
        "image": ""
    },
    {
        "id": 120,
        "name": "Shivani Divakaruni",
        "email": "divakaruni.saishivani@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "North Carolina, USA",
        "image": "https://drive.google.com/uc?export=view&id=1VHC7TSnPhGc_MBdJresAc5r537YM2MHT"
    },
    {
        "id": 121,
        "name": "Alexa Leiva",
        "email": "alecboomboom@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "New York, USA",
        "image": "https://drive.google.com/uc?export=view&id=1vJ5WwDaxsE4pemgHVaamJmcAE7DOm33P"
    },
    {
        "id": 122,
        "name": "Haniya Mishal Mirza",
        "email": "haniyam37@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Dubai, UAE",
        "image": "https://drive.google.com/uc?export=view&id=1MQ-TNwYmNSYuwSRVYlBe4MPOxjfu7UXh"
    },
    {
        "id": 123,
        "name": "Anandita Adhikary",
        "email": "adhikary.anandita@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Pune, India",
        "image": "https://drive.google.com/uc?export=view&id=1wjHY0_8Pam29Vg4orR3Y3IIIrfrojfVS"
    },
    {
        "id": 124,
        "name": "Caryl Trishia Yapac",
        "email": "carylyapac@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Ozamiz City, Phillipines",
        "image": "https://drive.google.com/uc?export=view&id=1zoX563M2VThwq8NNgcPKwNAr9k8ifr6f"
    },
    {
        "id": 125,
        "name": "Lujain",
        "email": "lujainbakir.ly@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Tripoli, Libya",
        "image": "https://drive.google.com/uc?export=view&id=1wy6j9a2XfVR1o1nCZZ6LZWbTVCZzn6tF"
    },
    {
        "id": 126,
        "name": "Yesmine Miledi",
        "email": "yesminemiledi77@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Sfax, Tunisia",
        "image": "https://drive.google.com/uc?export=view&id=1zkJjf4CO1hi08C9JMC-yn9vbbDKC59t6"
    },
    {
        "id": 127,
        "name": "Ethan Fregene",
        "email": "ethanolawafregene@icloud.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "USA",
        "image": "https://drive.google.com/uc?export=view&id=1y4QWALMXPSHAvVomxc4dWAsgKo1GDz5q"
    },
    {
        "id": 128,
        "name": "Mengqi Chen",
        "email": "mengqichen319@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Los Angeles, USA",
        "image": "https://drive.google.com/uc?export=view&id=1peDDG_TDDk1a5LGy_952lYA0fspgo7CM"
    },
    {
        "id": 129,
        "name": "Connor Kerin",
        "email": "connorkerin29@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "New York, USA",
        "image": ""
    },
    {
        "id": 130,
        "name": "Aparna Praveen",
        "email": "aparnapraveen1602@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Kerala, India",
        "image": ""
    },
    {
        "id": 131,
        "name": "William Hsieh",
        "email": "williamhsieh@outlook.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Chino, USA",
        "image": ""
    },
    {
        "id": 132,
        "name": "Sanjana Jarugumilli",
        "email": "sanjanajarugumilli@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Georgia, USA",
        "image": "https://drive.google.com/uc?export=view&id=1MbiKPUxWjcKbFVW5SqTfdfI899ttF8a4"
    },
    {
        "id": 133,
        "name": "Sarah Tripp",
        "email": "sarahtripp501@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "California, USA",
        "image": ""
    },
    {
        "id": 134,
        "name": "Nejra Hojic",
        "email": "hojicnejra@gmail.com",
        "division": "Cohort Head",
        "team": "Social Media",
        "location": "Alameda, USA",
        "image": "https://drive.google.com/uc?export=view&id=10vglhw7AZKFCEOSEvoiYrG5266Id2mC8"
    },
    {
        "id": 135,
        "name": "Nishtha Bhargava",
        "email": "nishtha.bhargava10@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": ""
    },
    {
        "id": 136,
        "name": "Narayani Shankar",
        "email": "narayani09.shankar@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Midvale, USA",
        "image": "https://drive.google.com/uc?export=view&id=1MmweNf_eNtWrZzw036OwR-NAF8XNNh5n"
    },
    {
        "id": 137,
        "name": "Carolyne Thomas",
        "email": "carolynealphonsa@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Doha, Qatar",
        "image": ""
    },
    {
        "id": 138,
        "name": "Emerald Lee",
        "email": "emmu3750@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Las Vegas, USA",
        "image": ""
    },
    {
        "id": 139,
        "name": "Aymen Jadda",
        "email": "aymen.jadda@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Termara, Morocco",
        "image": "https://drive.google.com/uc?export=view&id=1rNMr6WyHYcf8Plin1ZqJryqP7gBKtTX9"
    },
    {
        "id": 140,
        "name": "Ahmed Khaled",
        "email": "ahmedkhaled77311@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Elmahmoudya, Egypt",
        "image": ""
    },
    {
        "id": 141,
        "name": "Risha Chaurasi",
        "email": "rishachaurasia07@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Indore, India",
        "image": "https://drive.google.com/uc?export=view&id=1RKlFgNwS3AnP1c7w2brn3Rmnae_DaKcj"
    },
    {
        "id": 142,
        "name": "Bakhi Alfiya",
        "email": "alfiyabakhi@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Pavlodar, Kazakhstan",
        "image": "https://drive.google.com/uc?export=view&id=1C3js6A73X9u8lcu79h1roXsXAE7IFOYY"
    },
    {
        "id": 143,
        "name": "Charvi Gupta",
        "email": "gcharvi.4v@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Alberta, Canada",
        "image": "https://drive.google.com/uc?export=view&id=13PexbC9PGfJU3LhxiduEEltFUC6zXpI0"
    },
    {
        "id": 144,
        "name": "Tanishtha Singh",
        "email": "sachan.pragya@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Noida, India",
        "image": "https://drive.google.com/uc?export=view&id=13hFbEnXW61azXVEGBQBIog1I24CAVA-x"
    },
    {
        "id": 145,
        "name": "Vishrutha Kunapareddi",
        "email": "vishrutha.kunapareddi@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Hyderabad, India",
        "image": "https://drive.google.com/uc?export=view&id=1Mbve_1E8aGt1IoWMNRI5_pbN9LjafftZ"
    },
    {
        "id": 146,
        "name": "Vanya Agarwal",
        "email": "vanyaagarwal125@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Lucknow, India",
        "image": "https://drive.google.com/uc?export=view&id=1BrEw4dcIvRaVcjiKzLFJWvwwWmZqAjvl"
    },
    {
        "id": 147,
        "name": "Evah Shaji",
        "email": "evahshaji@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Abu Dhabi, UAE",
        "image": "https://drive.google.com/uc?export=view&id=14cu6uTMgbPDm5N_lDC35L0K7rhaEfU3B"
    },
    {
        "id": 148,
        "name": "Gia An Quan-Pham",
        "email": "giaan282006@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Milwaukee, USA",
        "image": ""
    },
    {
        "id": 149,
        "name": "Jaquelyn Alpiza",
        "email": "jaki.alpizar9@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Wisconsin, USA",
        "image": "https://drive.google.com/uc?export=view&id=1OZFqsJiFV-o66VCP6JR3pbON8nQc5A26"
    },
    {
        "id": 150,
        "name": "Raphael Chakma",
        "email": "raphaelchakma2021@gmail.com",
        "division": "YouTube",
        "team": "YouTube",
        "location": "Dhaka, Bangladesh",
        "image": "https://drive.google.com/uc?export=view&id=1MHpdE9a1LRNT_ne2x5osmHb7flRI8WlV"
    },
    {
        "id": 151,
        "name": "Shohorat Mahapara Purnata",
        "email": "shohoratmahapara@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Dhaka, Bangladesh",
        "image": "https://drive.google.com/uc?export=view&id=18C-nSN9WuwrRXP60OpBquWo9crpMv8xq"
    },
    {
        "id": 152,
        "name": "Ayushi Jha",
        "email": "jhayushi@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "New Jersey, USA",
        "image": "https://drive.google.com/uc?export=view&id=15rU6GiCt5rdzcJF7U6FZNH1idFNvygGV"
    },
    {
        "id": 153,
        "name": "Riddhi Khokle",
        "email": "riddhikhokle13@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Kodaikanal, India",
        "image": "https://drive.google.com/uc?export=view&id=18BloxuiXNKwxxAlolK9G4UKECmoCj6or"
    },
    {
        "id": 154,
        "name": "Zharick Taliana Bustamante Pertuz",
        "email": "zharickb620@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Barranquilla, Colombia",
        "image": "https://drive.google.com/uc?export=view&id=17Dao2ATxwrxI919xMz3Ql5EyKUPrIZog"
    },
    {
        "id": 155,
        "name": "Sharon Kodali",
        "email": "sharonkodali1@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "California, USA",
        "image": "https://drive.google.com/uc?export=view&id=17-m-3NDFyt2am4_pocQ3MxcYtVHmbMiB"
    },
    {
        "id": 156,
        "name": "Pratham Bhanushal",
        "email": "bhanushali.pratham@gmail.com",
        "division": "YouTube",
        "team": "YouTube",
        "location": "West Virginia, USA",
        "image": "https://drive.google.com/uc?export=view&id=1M4p1_SkD75mrC2oVjdUNcIXY_y4E7a1n"
    },
    {
        "id": 157,
        "name": "Lina Zaki",
        "email": "linazakielwakili1@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Cassablanca, Morocco",
        "image": ""
    },
    {
        "id": 158,
        "name": "Tashvi Aneja",
        "email": "tashvianeja@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Bangalore, India",
        "image": ""
    },
    {
        "id": 159,
        "name": "Douaa",
        "email": "douaa.ze06@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Algiers, Alegeria",
        "image": "https://drive.google.com/uc?export=view&id=1OClM0wLSqnH2ycEFiiAmI87CAe-TwOWP"
    },
    {
        "id": 160,
        "name": "Niti Sharma",
        "email": "sharmaniti0111@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": "https://drive.google.com/uc?export=view&id=1AwdvLr6APHVhvogw6eaw5j-JjhSrvhl1"
    },
    {
        "id": 161,
        "name": "Eileen Luo",
        "email": "eluo.5230@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Maryland, USA",
        "image": "https://drive.google.com/uc?export=view&id=1AxwcPYG-nZZRwLuXLvCtJRK7Xd3RdXAI"
    },
    {
        "id": 162,
        "name": "Meenakshi S",
        "email": "gurukul.sis@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Tamil Nadu, India",
        "image": "https://drive.google.com/uc?export=view&id=1OWTyjqvu_Uw7viFc5KfRhSKbHt1fsvpq"
    },
    {
        "id": 163,
        "name": "Pratiti",
        "email": "mehndirattapratiti1@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "New Delhi, India",
        "image": ""
    },
    {
        "id": 164,
        "name": "Rashi Jakhotiya",
        "email": "jakhotiya_rashi@students.sboe.org",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "New Jersey, United States",
        "image": "https://drive.google.com/uc?export=view&id=1CYy43O-YCxZo9t1Y4QYXMCCz-NCKK4q1"
    },
    {
        "id": 165,
        "name": "Nishtha Lakhani",
        "email": "thenishthalakhani@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": ""
    },
    {
        "id": 166,
        "name": "Samridhi Walia",
        "email": "24swalia@cacegypt.org",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Cairo, Egypt",
        "image": "https://drive.google.com/uc?export=view&id=1Me39LysWHWBe-bmC97fm2QVj1AJN7Pn9"
    },
    {
        "id": 167,
        "name": "Akshar Omkar",
        "email": "aksharomkar1@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Sacramento, United States",
        "image": "https://drive.google.com/uc?export=view&id=1MlJ3hMz1WvrYCsrPhqLpvJ5POgOZGdoR"
    },
    {
        "id": 168,
        "name": "Bani Gulati",
        "email": "gulani1326@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Pune, India",
        "image": "https://drive.google.com/uc?export=view&id=1Dto4UkYcIDUFJAiWcK9WmN5MzMvcLPDJ"
    },
    {
        "id": 169,
        "name": "Ishita Singh",
        "email": "ishsingh.connect@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Maharashtra, India",
        "image": "https://drive.google.com/uc?export=view&id=1EO22JyvT6vQNQggbFJvVqw5tftUGhjry"
    },
    {
        "id": 170,
        "name": "Bhavna Ganesh",
        "email": "bhavnagrao@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Trivandrum, India",
        "image": ""
    },
    {
        "id": 171,
        "name": "Salome Tsirekidze",
        "email": "stsirekidze11@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Georgia",
        "image": ""
    },
    {
        "id": 172,
        "name": "Navneet Kalatheeswaran",
        "email": "327navneet@gmail.com",
        "division": "",
        "team": "",
        "location": "New Jersey, United States",
        "image": "https://drive.google.com/uc?export=view&id=1O_sMuSwtRXuWrmvng9fZgokWMY_Dv5Iz"
    },
    {
        "id": 173,
        "name": "Iris",
        "email": "irissim0730@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Las Vegas, United States",
        "image": "https://drive.google.com/uc?export=view&id=1PCjz7wxOeEMIchHgkvvWiE8XtshCz2pB"
    },
    {
        "id": 174,
        "name": "Mira Singh",
        "email": "mira.singh1625@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "River Valley, Singapore",
        "image": ""
    },
    {
        "id": 175,
        "name": "Vasileia Koulentaki",
        "email": "vas.koulentaki@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Greece",
        "image": ""
    },
    {
        "id": 176,
        "name": "Chhavi Agarwal",
        "email": "chhaviagarwal2021@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Noida, India",
        "image": "https://drive.google.com/uc?export=view&id=1M_AMsohCK9tJk4pf-Spfbtf1p9Bi-3QN"
    },
    {
        "id": 177,
        "name": "Jerry Wang",
        "email": "jerrywang16@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "USA",
        "image": ""
    },
    {
        "id": 178,
        "name": "Twisha Sharma",
        "email": "twisharma26@outlook.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Georgia, United States",
        "image": "https://drive.google.com/uc?export=view&id=1QYvCiK1pwUZmC62qL-iKYp3q8cxYiUkk"
    },
    {
        "id": 179,
        "name": "Aarushi Chottani",
        "email": "aarushichottani04@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "India",
        "image": ""
    },
    {
        "id": 180,
        "name": "Samarth Jhunjhunwala",
        "email": "jsamarth501@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangalore, India",
        "image": "https://drive.google.com/uc?export=view&id=1MmB7wL0WwUZqz5iLmI5Zfw02v5EzV4_m"
    },
    {
        "id": 181,
        "name": "Brittany Jin",
        "email": "jinb6838@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Delta- British Columbia, Canada",
        "image": ""
    },
    {
        "id": 182,
        "name": "Vibodh Nanda",
        "email": "vibodhnanda02@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Dubai, United Arab Emirates",
        "image": ""
    },
    {
        "id": 183,
        "name": "Vanshika Gupta",
        "email": "vanshikagupta339@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Lucknow, India",
        "image": ""
    },
    {
        "id": 184,
        "name": "Kashish Kakran",
        "email": "kashishkakran07@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Dubai, United Arab Emirates",
        "image": "https://drive.google.com/uc?export=view&id=1S5Zu7f88T8simNpGz7HGWIFN8-KgmOKU"
    },
    {
        "id": 185,
        "name": "Aadya Adiga",
        "email": "aadya.adiga@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Cary, United States",
        "image": ""
    },
    {
        "id": 186,
        "name": "Anshi Mehra",
        "email": "Anshimehra@gmail.com",
        "division": "YouTube",
        "team": "YouTube",
        "location": "New Hampshire, United States",
        "image": ""
    },
    {
        "id": 187,
        "name": "Jia Mahesh",
        "email": "jia.mahesh1@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Las Vegas, United States",
        "image": ""
    },
    {
        "id": 188,
        "name": "Jessica Zhou",
        "email": "jessicazhou814@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "United States",
        "image": ""
    },
    {
        "id": 189,
        "name": "Ria Vakharia",
        "email": "ria.vakharia@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "San Ramon, United States",
        "image": ""
    },
    {
        "id": 190,
        "name": "Harleen Kaur Brar",
        "email": "kkaramjeet071@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "New Delhi, India",
        "image": ""
    },
    {
        "id": 191,
        "name": "Luiza Camargo De Brito Borges",
        "email": "luiluirock14@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Brazil",
        "image": ""
    },
    {
        "id": 192,
        "name": "Tanvee Kishnani",
        "email": "kishnanitanvee@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Ahmedabad, India",
        "image": ""
    },
    {
        "id": 193,
        "name": "Edha Sharma",
        "email": "edha8975@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "United Arab Emirates",
        "image": ""
    },
    {
        "id": 194,
        "name": "Harshini Manikandan",
        "email": "harshini.manikandan@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "California, United States",
        "image": ""
    },
    {
        "id": 195,
        "name": "Shesha Silva",
        "email": "sheshasilva2006@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Sri Lanka",
        "image": ""
    },
    {
        "id": 196,
        "name": "Zainab Nizar",
        "email": "nizzain06@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Sharjah, United Arab Emirates",
        "image": ""
    },
    {
        "id": 197,
        "name": "Khushi Thakkar",
        "email": "khushit1018@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Qatar",
        "image": ""
    },
    {
        "id": 198,
        "name": "Girinaath Aravind",
        "email": "girinaath07@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Colombo, Sri Lanka",
        "image": ""
    },
    {
        "id": 199,
        "name": "Trisha Banerjee",
        "email": "trishabanerjee819@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Dubai, United Arab Emirates",
        "image": "https://drive.google.com/uc?export=view&id=1VQ3sCSX1dfdtt3R70gqPH6DhNRiv00zw"
    },
    {
        "id": 200,
        "name": "Chelsea Ibekaku",
        "email": "chelseaibekaku@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Netherlands",
        "image": ""
    },
    {
        "id": 201,
        "name": "Jana Ahmed Samier Ali Younes",
        "email": "jana.2221508@stemsharkya.moe.edu.eg",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Zagazig, Egypt",
        "image": ""
    },
    {
        "id": 202,
        "name": "Lassana De Fonseka",
        "email": "lassanadefonseka74@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Sri Lanka",
        "image": ""
    },
    {
        "id": 203,
        "name": "Zachary Chang",
        "email": "zacharychang67@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "United States",
        "image": ""
    },
    {
        "id": 204,
        "name": "Mariana Leon",
        "email": "mariannaleon28@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Guatemala",
        "image": ""
    },
    {
        "id": 205,
        "name": "Sai Sarvasiddi",
        "email": "saisarvasiddi146@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "United States",
        "image": ""
    },
    {
        "id": 206,
        "name": "Urvi Akhouri",
        "email": "urvi.akhouri@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "South Brunswick, United States",
        "image": ""
    },
    {
        "id": 207,
        "name": "Daniela Mcelfresh",
        "email": "danielamcelfresh@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Chula Vista, United States",
        "image": ""
    },
    {
        "id": 208,
        "name": "Kissian Griffin",
        "email": "griffink9451@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Missouri City, United States",
        "image": ""
    },
    {
        "id": 209,
        "name": "Shriya",
        "email": "shriyachicku27@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Hyderabad, India",
        "image": ""
    },
    {
        "id": 210,
        "name": "Maroua Badreddine",
        "email": "badromusta2007@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Algeria",
        "image": ""
    },
    {
        "id": 211,
        "name": "Sophia Kiyomi Amojado Tada",
        "email": "sophiaoikiyomi@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "San Diego, United States",
        "image": ""
    },
    {
        "id": 212,
        "name": "Andrea Mejia",
        "email": "anmejiaraquel@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Honduras",
        "image": ""
    },
    {
        "id": 213,
        "name": "Avantika Jadhav",
        "email": "avantikajadhav748@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Delhi, India",
        "image": ""
    },
    {
        "id": 214,
        "name": "Tiffany Rakotonirina",
        "email": "tiffanyr24@asamadagascar.org",
        "division": "YouTube",
        "team": "YouTube",
        "location": "Antananarivo, Madagascar",
        "image": ""
    },
    {
        "id": 215,
        "name": "Rubah Zaidi",
        "email": "zaidrubah@gmail.com",
        "division": "Social Media, YouTube",
        "team": "Social Media, YouTube",
        "location": "Dallas, United States",
        "image": ""
    },
    {
        "id": 216,
        "name": "Christopher Wiesler",
        "email": "Christopher.wiesler@gmail.com",
        "division": "Partnerships, Social Media",
        "team": "Partnerships, Social Media",
        "location": "Singapore",
        "image": ""
    },
    {
        "id": 217,
        "name": "Aiden Joanne De Lange",
        "email": "delangeaiden9@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "California, United States",
        "image": "https://drive.google.com/uc?export=view&id=1VEpRaeWfO0xW2lwkJdrKbEw2hSTnaEA8"
    },
    {
        "id": 218,
        "name": "Ahmad Ghosheh",
        "email": "ahmadhghosheh@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "Jordan",
        "image": ""
    },
    {
        "id": 219,
        "name": "Architha Rao",
        "email": "raoarchitha@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "United Arab Emirates",
        "image": "https://drive.google.com/uc?export=view&id=13JP_w2x34wO8lS5iQzSA0rxNG9P_OreR"
    },
    {
        "id": 220,
        "name": "Risha Bhardwaj",
        "email": "rishabhardwaj666@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "New Jersey, United States",
        "image": ""
    },
    {
        "id": 221,
        "name": "Kyla Manansala",
        "email": "kylaa.mq@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "California, United States",
        "image": ""
    },
    {
        "id": 222,
        "name": "Mahir Hasin Abdullah",
        "email": "mahir2nd2004@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Bangladesh",
        "image": ""
    },
    {
        "id": 223,
        "name": "Menna Hamed Elsayed Eltrabilly",
        "email": "mh8961288@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Egypt",
        "image": ""
    },
    {
        "id": 224,
        "name": "Nikita Noreen Egbert",
        "email": "nikitanegbert@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "United Arab Emirates",
        "image": ""
    },
    {
        "id": 225,
        "name": "Shayaan Yar Khan",
        "email": "subhanyar@yahoo.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Singapore",
        "image": ""
    },
    {
        "id": 226,
        "name": "Jana Elganainy",
        "email": "janaelganainyy@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Alexandria, Egypt",
        "image": ""
    },
    {
        "id": 227,
        "name": "Amanda Ma",
        "email": "amandama2222@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "California, United States",
        "image": ""
    },
    {
        "id": 228,
        "name": "Tanatswa",
        "email": "mangavatanatswa@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Cairo, Egypt",
        "image": ""
    },
    {
        "id": 229,
        "name": "Coral Carlsson",
        "email": "coralcarlsson@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "United Arab Emirates",
        "image": ""
    },
    {
        "id": 230,
        "name": "Taneesha Patel",
        "email": "taneeshapatel19@gmail.com",
        "division": "Communications",
        "team": "Communications",
        "location": "Mumbai, India",
        "image": ""
    },
    {
        "id": 231,
        "name": "Caitlyn Ng",
        "email": "caitng08@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "England, United Kingdom",
        "image": ""
    },
    {
        "id": 232,
        "name": "Pallavi Biswas",
        "email": "pallavibiswas05@gmail.com",
        "division": "Technical Operations",
        "team": "Technical Operations",
        "location": "New Jersey, United States",
        "image": ""
    },
    {
        "id": 233,
        "name": "Smaran Kudapa",
        "email": "smarankudapa@gmail.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Virginia, United States",
        "image": ""
    },
    {
        "id": 234,
        "name": "Mimi Rosado",
        "email": "mimiverlee@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Kansas, United States",
        "image": ""
    },
    {
        "id": 235,
        "name": "Mia Nishiguchi",
        "email": "nishiguchimia@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Hawaii, United States",
        "image": ""
    },
    {
        "id": 236,
        "name": "Janhavi Yadav",
        "email": "janhavi1503@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "Singapore",
        "image": ""
    },
    {
        "id": 237,
        "name": "Amy Akpala",
        "email": "akpalaamy@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Maryland, United States",
        "image": ""
    },
    {
        "id": 238,
        "name": "Julia Vianna Siste",
        "email": "julia.siste@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Curitiba, Brazil",
        "image": ""
    },
    {
        "id": 239,
        "name": "Jasmine Kaur",
        "email": "jasjhand065@gmail.com",
        "division": "Social Media",
        "team": "Social Media",
        "location": "Belmont, United States",
        "image": ""
    },
    {
        "id": 240,
        "name": "Tanmay Shukla",
        "email": "tanmay4706@gmail.com",
        "division": "Tutor",
        "team": "Tutor",
        "location": "Muscat, Oman",
        "image": ""
    },
    {
        "id": 241,
        "name": "Beatrice Krieger",
        "email": "beatricekrieger1@icloud.com",
        "division": "Human Resources",
        "team": "Human Resources",
        "location": "Michigan, United States",
        "image": ""
    },
    {
        "id": 242,
        "name": "Sunny Yang",
        "email": "sunnyyenrich@gmail.com",
        "division": "Academics",
        "team": "Academics",
        "location": "New York, United States",
        "image": ""
    },
    {
        "id": 245,
        "name": "Lenin Prakash",
        "email": "lennvfx@gmail.com",
        "division": "Partnerships",
        "team": "Partnerships",
        "location": "Singapore",
        "image": ""
    }
  ]
  
  async function getTeamData() {
    try {
      const URL = "https://tutor-timings.vercel.app/getRecords";
  
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
    // const dataContainer = document.getElementById("loading_text");
    // dataContainer.textContent = "Loading...";
    // document.getElementById("loading_text").hidden = false;
    // const data = await getTeamData();
    // if (data != null) {
    //   document.getElementById("loading_text").hidden = true;
    //   // Display the fetched data
    //   loadImages(data);
    // } else {
    //   document.getElementById("loading_text").hidden = true;
    loadImages(oldTeamData);
    // }
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
  