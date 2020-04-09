// function checkForName(inputText) {
//     console.log("::: Running checkForName :::", inputText);
//     let names = [
//         "Picard",
//         "Janeway",
//         "Kirk",
//         "Archer",
//         "Georgiou"
//     ]

//     if(names.includes(inputText)) {
//         alert("Welcome, Captain!")
//     }
// }


// Attempt 1
function checkForContent(e) {
    const generateText = document.getElementById('content').value;
    getData(textapi)
    .then(
        function(aylien) {
            return postData('/addContent', {polarity: aylien.main.polarity, subjectivity: aylien.subjectivity, generateText: aylien.content, polarityConfidence: aylien.polarity_confidence, subjectivityConfidence: aylien.subjectivity_confidence})
        }
    )
    .then(
        function(postData) {
            return getData('/all')
        }
    )
    .then(
        function(getRData) {
            document.getElementById('polarity').innerHTML = `Polarity: ${getRData.polarity}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${getRData.subjectivity}`;
            document.getElementById('content').innerHTML = `Content: ${getRData.generateText}`;
            document.getElementById('polarity_confidence').innerHTML = `Content: ${getRData.polarityConfidence}`;
            document.getElementById('subjectivity_confidence').innerHTML = `Content: ${getRData.subjectivityConfidence}`;
        }
    )
}


const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }
};

// GET Route
const getData = async (url = '') => {
    const response = await fetch(url);
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log("error", error);
    }
};




export { checkForContent }
