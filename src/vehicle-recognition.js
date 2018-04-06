//let image = {image: "https://www.example.com/path/to/image.jpg"};
let image = {image: "./pacifica.jpg"};

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//var xhr = new XMLHttpRequest();
let xmlhttp = new XMLHttpRequest();
let result;

xmlhttp.onreadystatechange = function () {
    console.log(xmlhttp.responseText);
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        result = xmlhttp.responseText;
        console.log(result);
    }
}

xmlhttp.open("POST", "https://dev.sighthoundapi.com/v1/recognition?objectType=vehicle,licenseplate");
xmlhttp.setRequestHeader("Content-type", "application/json");
xmlhttp.setRequestHeader("X-Access-Token", "u8zgzmQYsCviN28MRH8n6VMcKmWzCje1xLCa");
console.log(JSON.stringify(image));
xmlhttp.send(JSON.stringify(image));