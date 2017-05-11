/**
 * Created by gurusrikar on 5/8/17.
 */
(function (){

    console.log("Welcome to CSE110!");

})();

// var testCasesList = ['', ''];
var testCaseObject = {
    "setup": "",
    "execute": "",
    "passed_feedback": "",
    "failed_feedback": ""
};

var totalTestCases = 1;

var ractive = new Ractive({

    el: '#form-container',

    template: '#template',
    modifyArrays: true,

    // Here, we're passing in some initial data
    data: {
        lang: 'Python',
        code: '',
        testCasesList: {
            case1: getNewTestCaseObj()
        },
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
    // testCasesList.push('');
    totalTestCases = totalTestCases + 1;
    var caseString = "case"+totalTestCases;
    ractive.set('testCasesList.'+caseString, getNewTestCaseObj());

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

function getNewTestCaseObj() {
    return {
        "setup": "",
        "execute": "",
        "passed_feedback": "",
        "failed_feedback": ""
    };
}

setInterval(function () {
    previousUpdate = ractive.get();
    updateJSON();
}, 1500);