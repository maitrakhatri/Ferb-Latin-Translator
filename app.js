const button = document.querySelector("#btn");
const input = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#txt-output");

let serverUrl= "https://api.funtranslations.com/translate/ferb-latin.json"

const getTranslationUrl = input => `${serverUrl}?text=${input}`

const errorHandler = error => {
    console.log(`error occured: ${error}`);
    alert("Something is wrong with the Server !! Please try after sometime")
}

const clickHandler = () => {
    let inputText = input.value;

    fetch(getTranslationUrl(inputText))
        .then(respose => respose.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; 
        })
        .catch(errorHandler)
};

button.addEventListener("click", clickHandler)