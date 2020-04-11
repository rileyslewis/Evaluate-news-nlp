# Evaluate News with Natural Language Processing - NLP - FEND
## Motivation
The project's focus is to interpret and analytize text by entering a URL input. The result returns polarity, subjectivity and confidence of polarity and subjectivity of the analyzed text.

## API
The API which has been used for the project is the Aylien API:

https://docs.aylien.com/newsapi/#getting-started

The api is a text analysis api for NLP (natural language processing). Which provides the analysis for the project.

## Installation

Please download the files / clone repository.

Install dependencies by typing:

```
npm install
```

to add dist folder, run 
```
npm run build-prod
```

to use the Aylien API an API credential key is required, to receive this registeration on the Aylien API website is required, it is free.
Refer to link:
https://newsapi.aylien.com/signup

To start the server write the command:
```
npm start
```

The server will available on:
```
http://localhost:8081/
```

## Test

Run:
```
npm test
```