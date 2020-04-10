function handleSubmit(event) {
    event.preventDefault()

    const baseUrl = 'http://localhost:8081/sentiment'
    const url = document.getElementById('content').value
    if (Client.validUrl(url)) {
        fetch(baseUrl, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url: url })
        })
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('polarity').innerHTML = res.polarity
            document.getElementById('subjectivity').innerHTML = res.subjectivity
            document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence
            document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence
            document.getElementById('content').innerHTML = res.content
        })
    } else {
        return 'URL is not valid, please try again.'
    }
}

export { handleSubmit }
