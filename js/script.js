var tabLinks = document.getElementsByClassName("tab-links")
var tabContents = document.getElementsByClassName("tab-content")

var sideMenu = document.getElementById("sidemenu")

const opentab = (tabname) => {

    for (let tabLink of tabLinks) {
        tabLink.classList.remove("active-link")
    }

    for (let tabContent of tabContents) {
        tabContent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

const openmenu = () => {
    sidemenu.style.right = "0";
};

const closemenu = () => {
    sidemenu.style.right = "-250px";
}

