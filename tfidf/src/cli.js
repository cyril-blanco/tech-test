const path = require('path');
const fs = require('fs');
const tf = require('./termFrequency');
const idf = require('./inverseDocumentFrequency');

// Get cli params
// TODO: need validation!
const docsDir = process.argv[2];
const resultsLimit = process.argv[3];
const period = process.argv[4];
const terms = process.argv[5].split(' ');

const directoryPath = path.join(process.cwd(), docsDir);

/**
 * Given a file and a list of term, calculate the term frequency for each term
 *
 * @param file
 * @param terms
 * @returns {{}}
 */
const computeFileTf = (file, terms) => {
    // TODO: needs error handling!
    let data = fs.readFileSync(path.join(directoryPath, file), 'utf8');
    const termsFrequency = {};

    terms.forEach(term => {
        termsFrequency[term] = tf(term, data);
    });

    return termsFrequency;
};

/**
 * Given a file and a list of terms, update the term frequency and idf for each term in the file
 * If terms are found, also update the count
 *
 * @param file
 * @param terms
 * @param filesIndex
 * @param filesCount
 * @param tfidf
 */
const updateResults = (file, terms, filesIndex, filesCount, tfidf) => {
    Object.keys(filesIndex[file]).forEach(term => {
        if (filesIndex[file][term] > 0) {
            filesCount[term] += 1;
        }
    });

    const totalDocs = Object.keys(filesIndex).length;
    Object.keys(filesIndex).forEach(file => {
        Object.keys(filesIndex[file]).forEach(term => {
            tfidf[file] = filesIndex[file][term] * idf(totalDocs, filesCount[term]);
        });
    });
};

const filesTf = {};
const filesCountWithTerm = {};
const filesTfIdf = {};

terms.forEach(term => {
    filesCountWithTerm[term] = 0;
});

// Initial read
fs.readdirSync(directoryPath).forEach(file => {
    filesTf[file] = computeFileTf(file, terms);
    updateResults(file, terms, filesTf, filesCountWithTerm, filesTfIdf);
});

// Directory watcher
fs.watch(directoryPath, (eventType, filename) => {
    filesTf[filename] = computeFileTf(filename, terms);
    updateResults(filename, terms, filesTf, filesCountWithTerm, filesTfIdf);
});

// Report utility
const logReport = (tfidf, limit) => {
    const keysSorted = Object.keys(tfidf).sort(function(a, b) { return tfidf[b] - tfidf[a] });
    keysSorted.slice(0, limit).forEach(key => {
        console.log(key, tfidf[key]);
    });
};

// Start reporting
console.log('Initial report:');
logReport(filesTfIdf, resultsLimit);
setInterval(() => {
    console.log('New report:');
    logReport(filesTfIdf, resultsLimit);
}, period * 1000);
