// Code to handle taking the snapshot and displaying it locally
function take_snapshot() {
    // take snapshot and get image data
    Webcam.snap(function (data_uri) {
        // display results in page
        document.getElementById('results').innerHTML =
            '<h2>Here is your large image:</h2>' +
            '<img src="' + data_uri + '"/>';
    });
}