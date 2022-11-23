const $line1 = document.querySelector("#haikuLine1");
const $line2 = document.querySelector("#haikuLine2");
const $line3 = document.querySelector("#haikuLine3");
const $button = document.querySelector("#generateButton");

const generateHaiku = async () => {
    const haikuLines = await fetchHaikuJson();
    
    let firstLine = haikuLines.first[setRandomNumber(11)];
    let secondLine = haikuLines.second[setRandomNumber(11)];
    let thirdLine = haikuLines.third[setRandomNumber(11)];

    while($line1.textContent == firstLine.text) {
        firstLine = haikuLines.first[setRandomNumber(11)];
    } $line1.textContent = firstLine.text;

    setTheme(firstLine.theme);

    while($line2.textContent == secondLine.text) {
        secondLine = haikuLines.second[setRandomNumber(11)];
    } $line2.textContent = secondLine.text;
    
    while($line3.textContent == thirdLine.text) {
        thirdLine = haikuLines.third[setRandomNumber(10)];
    } $line3.textContent = thirdLine.text;   
    
}

const setRandomNumber = (maxNb) => {
    return Math.floor(Math.random() * maxNb);
}

const fetchHaikuJson = async () => {
    const rsp = await fetch("haikus.json");
    return rsp.json()
};

const setTheme = (theme) => {
    switch(theme) {
        case "beach":
            changeCSS("beach", "#FFFFD4", "#BCBC51")
            break;

        case "rain":
            changeCSS("rain", "#ECF9FE", "#64ADC9")
            break;

        case "evening":
            changeCSS("evening", "#F6E3B9", "#AE7C3A")
            break;

        case "night":
            changeCSS("night", "#F2F2F2", "#747474")
            break;

        case "fall":
            changeCSS("fall", "#F6E3B9", "#AE7C3A")
            break;

        case "forest":
            changeCSS("forest", "#DFFFE5", "#30823F")
            break;
        
        case "sun":
            changeCSS("sun", "#ECF9FE", "#64ADC9")
            break;
            
        default:
            changeCSS("default", "#F2F2F2", "#747474")
            break;
    }
}

  const changeCSS = (theme, lightcolor, darkcolor) => {
    const $divHaiku = document.querySelector("#divHaiku");
    const $generateButton = document.querySelector("#generateButton");
    const $body = document.querySelector("body");
    const $h1 = document.querySelector("h1");
    const $licence = document.querySelector("#licence");
    const $signature = document.querySelector("#signature");
    const $svg = document.querySelector("svg");

    $body.style.backgroundImage = "url('background-images/" + theme + ".jpg')";
    $h1.style.color = lightcolor;
    $divHaiku.style.backgroundColor = lightcolor;
    $divHaiku.style.border = "2px solid " + darkcolor;
    $generateButton.style.backgroundColor = darkcolor;
    $generateButton.style.border = "2px solid " + lightcolor;
    $svg.style.fill = lightcolor
    $signature.style.color = lightcolor;
    $licence.style.color = lightcolor;
  }

  $button.addEventListener("click", function() {
    generateHaiku();
})

  setTheme("default")
