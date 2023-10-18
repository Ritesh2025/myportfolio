var tablinks = document.getElementsByClassName("tab-links");
var tablinks = document.getElementsByClassName("tab-contents");

function opentab(_tabname) {
    for (tablinks of tablinks) {
        tablinks.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

}