/**
 * Created by gurusrikar on 5/8/17.
 */
(function (){

    console.log("Welcome to CSE110!");

})();

var ractive = new Ractive({
    // The `el` option can be a node, an ID, or a CSS selector.
    el: '#form-container',

    // We could pass in a string, but for the sake of convenience
    // we're passing the ID of the <script> tag above.
    template: '#template',

    // Here, we're passing in some initial data
    data: {
        lang: 'Python',
        code: '',
        testCases: '',
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

function updateJSON() {
    var outputElement = document.getElementById("output-json");
    outputElement.innerHTML = JSON.stringify(ractive.get(), undefined, 4);
}

function downloadJson() {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(ractive.get(), undefined, 4));
    var downloadSimulateElem = document.getElementById("hiddenDownloadElem");
    downloadSimulateElem.setAttribute("href", dataStr);
    downloadSimulateElem.setAttribute("download", "sample.json");
    downloadSimulateElem.click();
}

setInterval(function () {
    console.log("outside");
    if (JSON.stringify(previousUpdate) != JSON.stringify(ractive.get())) {
        console.log("inside");
        previousUpdate = ractive.get();
        updateJSON();
    }
}, 1500);