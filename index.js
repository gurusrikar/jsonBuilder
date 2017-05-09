/**
 * Created by gurusrikar on 5/8/17.
 */
(function (){

    console.log("Welcome to CSE110!");

})();

var testCasesList = ['', ''];

var ractive = new Ractive({
    // The `el` option can be a node, an ID, or a CSS selector.
    el: '#form-container',

    // We could pass in a string, but for the sake of convenience
    // we're passing the ID of the <script> tag above.
    template: '#template',
    modifyArrays: true,

    // Here, we're passing in some initial data
    data: {
        lang: 'Python',
        code: '',
        testCasesList: testCasesList,
        hiddenCode: '',
        score: '0'
    }
});
var previousUpdate = undefined;

updateJSON();

function saveJson() {
    console.log(ractive.get());
    updateJSON();
    return false;
}

function addTestCase() {
    console.log("adding new test case");
    testCasesList.push('');
    // ractive.set('testCasesList', ractive.get('testCasesList').push(''));
    return false;
}

function updateJSON() {
    var outputElement = document.getElementById("output-json");
    outputElement.innerHTML = JSON.stringify(ractive.get(), undefined, 4);
}

function downloadJson() {
    var fileName = (document.getElementById("inputFileName").value || "sample") + ".json";
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ractive.get(), undefined, 4));
    var downloadSimulateElem = document.getElementById("hiddenDownloadElem");
    downloadSimulateElem.setAttribute("href", dataStr);
    downloadSimulateElem.setAttribute("download", fileName);
    downloadSimulateElem.click();
}

setInterval(function () {
    previousUpdate = ractive.get();
    updateJSON();
}, 1500);