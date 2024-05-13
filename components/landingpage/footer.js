function renderFooter(){
    //parents
    aboutUsDiv = document.querySelector("#aboutUs");
    infoDiv = document.querySelector("#info");
    
    aboutUsH2 = document.createElement("h2");
    aboutUsH2.id = "aboutUsH2";
    aboutUsH2.textContent = "Om oss";
    aboutUsDiv.appendChild(aboutUsH2);

    aboutUsImage = document.createElement("img")
    aboutUsImage.textContent = "aboutUsImage";
    aboutUsImage.id = "aboutUsImage";
    aboutUsDiv.appendChild(aboutUsImage);

    big3Div = document.createElement("div")
    big3Div.id = "big3Div";
    aboutUsDiv.appendChild(big3Div)


    contactHeadersDiv = document.createElement("div")
    contactHeadersDiv.id = "contactHeadersDiv";
    big3Div.appendChild(contactHeadersDiv);

    contactUsHeader = document.createElement("p")
    contactUsHeader.id = "contactUsP"
    contactUsHeader.textContent = "KONTAKTA OSS"
    contactHeadersDiv.appendChild(contactUsHeader);

    contactUsDiv = document.createElement("div");
    contactUsDiv.id = "contactUsDiv";
    big3Div.appendChild(contactUsDiv);


    contactUsP = document.createElement("p");
    contactUsP.textContent = "Mon - Fri - 10 AM to 8 PM \r\nMon - Fri - 10 AM to 8 PM";
    contactUsDiv.id = "contactUsDiv";
    contactHeadersDiv.appendChild(contactUsP);

    contactUsP2 = document.createElement("p");
    contactUsP2.textContent = "123-456-7890 \r\nemail@.se";
    contactUsP2.id = "contactUsP2";
    contactUsDiv.appendChild(contactUsP2);

    followUsDiv = document.createElement("div");
    followUsDiv.id = "followUsDiv";
    big3Div.appendChild(followUsDiv);

    followUsP = document.createElement("p");
    followUsP.id = "followUsP";
    followUsP.textContent = "Följ oss";
    followUsDiv.appendChild(followUsP);



    infoDiv = document.querySelector("#info")
    infoDivImg = document.createElement("img");
    infoDivImg.id = "infoDivImg"
    aboutUsDiv.appendChild(infoDivImg);


}   