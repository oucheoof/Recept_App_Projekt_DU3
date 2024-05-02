function renderFooter(){
    //parents
    aboutUsDiv = document.querySelector("#aboutUs");
    infoDiv = document.querySelector("#info");

    
    
    aboutUsH2 = document.createElement("h2");
    aboutUsH2.id = "aboutUsH2";
    aboutUsH2.textContent = "Om oss";
    aboutUsDiv.appendChild(aboutUsH2);

    aboutUsImage = document.createElement("img")
    aboutUsImage.src = "../../media/img/omslag1.png"
    aboutUsImage.textContent = "aboutUsImage";
    aboutUsDiv.appendChild(aboutUsImage);
    
    contactUsH3 = document.createElement("h3")
    contactUsH3.id = "contactUsH3.id"
    contactUsH3.textContent = "KONTAKTA OSS"
    aboutUsDiv.appendChild(contactUsH3);

    contactUsP = document.createElement("p");
    contactUsP.textContent = "Mon - Fri - 10 AM to 8 PM \r\nMon - Fri - 10 AM to 8 PM";
    contactUsP.id = "contactUsP";
    aboutUsDiv.appendChild(contactUsP);

    contactUsP2 = document.createElement("p");
    contactUsP2.textContent = "123-456-7890 \r\nemail@.se";
    contactUsP2.id = "contactUsP2";
    aboutUsDiv.appendChild(contactUsP2);

    followUsH2 = document.createElement("h2");
    followUsH2.id = "followUsH2";
    followUsH2.textContent = "Följ oss";
    aboutUsDiv.appendChild(followUsH2);

    infoDiv = document.querySelector("#info")
    infoDivImg = document.createElement("img");
    infoDivImg.src = "../../media/img/omslag1.png"
    aboutUsDiv.appendChild(infoDivImg);
}   