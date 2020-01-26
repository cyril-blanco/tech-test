# tfidf

A service that computes the tf-idf values for a list of terms against a set of txt files. 

### Prerequisites

- Linux system with a working nodejs installation (including npm)
- Chrome browser for testing 

### Installing

Install the needed node modules by running
```
npm install
```

## Running the tests

```
npm test
```

## Running the service

node src/cli.js <directory> <results count> <report frequency in seconds> <terms>

Example:
```
node src/cli.js docs 3 10 "tf idf"
```

## Authors

* **Cyril Blanco**
