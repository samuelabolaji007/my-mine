    
let toggleNavStatus = false;

let toggleNav = ()=> {
        let getSideBar = document.querySelector(".side-bar");
        let getPhoto = document.querySelector("#profile-photo");
        let getH2Tag = document.querySelector(".side-bar h2");
        let getH4Tag = document.querySelector(".side-bar h4");
        let getCopyright = document.querySelector("#caption");
        let getIntroduction = document.querySelector(".introduction");

        let getIntro = document.querySelector(".intro-message p");
        let getIntrop = document.querySelector(".intro-message h1");
        let getIntroh6 = document.querySelector(".intro-message h6");
        let getCloserButton = document.querySelector(".closer-button");
    
    
        if (toggleNavStatus == false) {
            getIntroduction.style.visibility = "hidden";
            getSideBar.style.width = "100%";
            getSideBar.style.visibility = "visible";
            getPhoto.style.opacity = "1";
            getH2Tag.style.opacity = "1";
            getH4Tag.style.opacity = "1";
            getCopyright.style.opacity = "1";
            getCloserButton.style.opacity = "1";
            getIntro.style.opacity = "0";
            getIntrop.style.opacity = "0";
            getIntroh6.style.opacity = "0";

            toggleNavStatus = true;
    
        }else if (toggleNavStatus == true) {
            getIntroduction.style.visibility = "visible";
            getSideBar.style.width = "0%";
            getSideBar.style.visibility = "hidden";
            getPhoto.style.opacity = "0";
            getH2Tag.style.opacity = "0";
            getH4Tag.style.opacity = "0";
            getCopyright.style.opacity = "0";
            getCloserButton.style.opacity = "0";
            getIntroh6.style.opacity = "1";
            getIntro.style.opacity = "1";
            getIntrop.style.opacity = "1";
            toggleNavStatus = false;
        }
    } 


    let toggleParagraph = ()=> {
        let getParagraphs = document.querySelectorAll(".edu-paragraphs");

        if (toggleNavStatus == false) {
            getParagraphs.style.display = "none";

            toggleNavStatus = true;
    
        }

    }

