// ======================== mobile navigation ========================================

var hamburgerIcon = document.querySelector(".hamburger-icon");
var sidebar = document.getElementsByClassName("sidebar")[0];

hamburgerIcon.addEventListener("click", function() {
  sidebar.classList.toggle("sidebar-mobile");
});

// ======================== navigation toggle class active =============================

// sections items
var sectionItems = document.getElementsByClassName("section-item");

var generlSection = document.querySelector(".section--general");
var detailsSection = document.querySelector(".section--details");
var linksSection = document.querySelector(".section--links");
var bannersSection = document.querySelector(".section--banners");
var personalDataSection = document.querySelector(".section--personal-data");
var payoutSection = document.querySelector(".section--payout");
var postbackSection = document.querySelector(".section--postback");
var addBannersSection = document.querySelector(".section--add-banners");
var addUrlSection = document.querySelector(".section--add-url");
var bannerAddUrl = document.querySelector(".section--add-url");

// navigation items
var navItems = document.getElementsByClassName("menu-item");

var navGeneral = document.querySelector(".nav-general");
var navDetails = document.querySelector(".nav-details");
var navLinks = document.querySelector(".nav-links");
var navBanners = document.querySelector(".nav-banners");
var navPersonalData = document.querySelector(".nav-personal-data");
var navPayout = document.querySelector(".nav-payout");
var navPostback = document.querySelector(".nav-postback");

// banners
var btnsAddBanners = document.querySelectorAll(".btn-add-banners");
var btnAddBannersClose = document.querySelector(".add-banners-close");

// url
var btnsAddUrl = document.querySelectorAll(".add-url");
var btnAddUrlClose = document.querySelector(".close-add-url");

// range
var range = document.getElementById("range");
var output = document.querySelector(".hours-range");

//login
var loginSection = document.querySelector(".section--login-modal");
var navLogin = document.querySelector(".login");
var btnLoginEnter = document.querySelector(".btn-login-enter");

//chat
var btnChatClose = document.querySelector(".icon-chat-close");
var chatSection = document.querySelector(".section--chat-modal");
var managerOpenChat = document.querySelector(".manager-chat");
var btnCloseChat = document.querySelector(".icon-chat-close");

// modals
var modals = document.querySelectorAll(".modal");
var modal = document.querySelectorAll(".modal");

//modal quit
var navQuite = document.querySelector(".quite");
var quiteSection = document.querySelector(".section--quit-modal");
var btnQuit = document.querySelector(".btn-quit");
var btnCancel = document.querySelector(".btn-cancel");
var quitOverlay = document.querySelector("#quit-modal-overlay");

var btnSave = document.querySelector(".btn-save");
// ======================== range =====================================================

output.innerHTML = range.value;

range.oninput = function() {
  output.innerHTML = this.value;
};

var removeDisplayClass = function() {
  for (var i = 0; i < sectionItems.length; i++) {
    sectionItems[i].classList.add("hide");
  }
};

navGeneral.addEventListener("click", function() {
  removeDisplayClass();
  generlSection.classList.toggle("hide");
});

navDetails.addEventListener("click", function() {
  removeDisplayClass();
  detailsSection.classList.toggle("hide");
});

navLinks.addEventListener("click", function() {
  removeDisplayClass();
  linksSection.classList.toggle("hide");
});

navBanners.addEventListener("click", function() {
  removeDisplayClass();
  bannersSection.classList.toggle("hide");
});

navPersonalData.addEventListener("click", function() {
  removeDisplayClass();
  personalDataSection.classList.toggle("hide");
});

navPayout.addEventListener("click", function() {
  removeDisplayClass();
  payoutSection.classList.toggle("hide");
});

navPostback.addEventListener("click", function() {
  removeDisplayClass();
  postbackSection.classList.toggle("hide");
});

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// ======================== modal add banners =============================

var showAddBanners = function(e) {
  e.preventDefault();
  document.querySelector(".section--add-banners").classList.toggle("hide");
};

for (var i = 0; i < btnsAddBanners.length; i++) {
  btnsAddBanners[i].addEventListener("click", showAddBanners);
}

var hideModalAddBanner = function(e) {
  e.preventDefault();
  document.querySelector(".section--add-banners").classList.add("hide");
};

btnAddBannersClose.addEventListener("click", hideModalAddBanner);

document
  .querySelector("#add-banners-overlay")
  .addEventListener("click", hideModalAddBanner);

// ======================== modal add url =============================

var showAddUrl = function(e) {
  e.preventDefault();
  bannerAddUrl.classList.toggle("hide");
};

for (var i = 0; i < btnsAddUrl.length; i++) {
  btnsAddUrl[i].addEventListener("click", showAddUrl);
}

var hideModalAddUrl = function(e) {
  e.preventDefault();
  bannerAddUrl.classList.add("hide");
};

btnAddUrlClose.addEventListener("click", hideModalAddUrl);

document
  .querySelector("#add-url-overlay")
  .addEventListener("click", hideModalAddUrl);

// ======================== modal login =============================

var showLogin = function(e) {
  loginSection.classList.remove("hide");
};

navLogin.addEventListener("click", showLogin);

var hideModalLogin = function(e) {
  loginSection.classList.add("hide");
};

btnLoginEnter.addEventListener("click", hideModalLogin);

document
  .querySelector("#login-modal-overlay")
  .addEventListener("click", hideModalLogin);

// ======================== modal chat =============================

var showChatModal = function(e) {
  e.preventDefault();
  chatSection.classList.remove("hide");
};

managerOpenChat.addEventListener("click", showChatModal);

var hideChatModal = function(e) {
  e.preventDefault();
  chatSection.classList.add("hide");
};

btnCloseChat.addEventListener("click", hideChatModal);

document
  .querySelector("#chat-modal-overlay")
  .addEventListener("click", hideChatModal);

// ======================== modal quit =============================

navQuite.addEventListener("click", function() {
  quiteSection.classList.remove("hide");
});

var hideQuitModal = function(e) {
  e.preventDefault();
  quiteSection.classList.add("hide");
};

btnQuit.addEventListener("click", hideQuitModal);
btnCancel.addEventListener("click", hideQuitModal);
quitOverlay.addEventListener("click", hideQuitModal);

// ======================== modals - stop propagation  =============================

for (var i = 0; i < modals.length; i++) {
  modals[i].addEventListener("click", function(event) {
    event.stopPropagation();
  });
}

if (screen.width <= 600) {
  var addMinSidebar = function(e) {
    e.preventDefault();
    document.querySelector(".sidebar").classList.remove("sidebar-mobile");
  };

  navDetails.addEventListener("click", addMinSidebar);
}

for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", addMinSidebar);
}

// ======================== interactive chart  =============================

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // 1
  type: "bar",
  data: {
    // 2
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
    // 3
    datasets: [
      {
        // 4
        label: "Signups",
        // 5
        backgroundColor: "#8DBEC8",
        borderColor: "#8DBEC8",
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88]
      },
      {
        label: "FTD",
        backgroundColor: "#F29E4E",
        borderColor: "#F29E4E",
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76]
      },
      {
        label: "Earned",
        backgroundColor: "#71B374",
        borderColor: "#71B374",
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true
      }
    ]
  }
});

//  ================ range ===============================

$(window).on("load resize", function() {
  // Get the current width of the slider
  var sliderWidth = $("[type=range]").width();

  // Remove previously created style elements
  $(".custom-style-element-related-to-range").remove();

  // Add our updated styling
  $(
    '<style class="custom-style-element-related-to-range">input[type="range"]::-webkit-slider-thumb { box-shadow: -' +
      1000 +
      "px 0 0 " +
      1000 +
      "px;}<style/>"
  ).appendTo("head");
});

//  ================ range ===============================

var selectFlag = document.querySelector(".select-flag");
var flagSelected = document.querySelector(".flag-selected");
var flagList = document.querySelector(".select-flag ul");
var flagInput = document.querySelector(".input-flag");

selectFlag.addEventListener("click", function() {
  if (flagList.style.display === "block") flagList.style.display = "none";
  else flagList.style.display = "block";
});

flagList.addEventListener("click", function(event) {
  if (event.target.tagName === "LI") {
    chooseOption(event.target);
  }
});

function chooseOption(elem) {
  flagSelected.innerHTML = elem.innerHTML;
  flagInput.value = elem.dataset.index;
}

chooseOption(flagList.querySelector("li"));
