var piemenu = new wheelnav('piemenu');
piemenu.spreaderInTitle = icon.power;
piemenu.spreaderOutTitle = icon.cross;
piemenu.spreaderRadius = piemenu.wheelRadius * 0.05;
piemenu.clockwise = false;
piemenu.wheelRadius = piemenu.wheelRadius * 0.83;
piemenu.createWheel();


var weatherText = "";
var foodText = "";
var helpText = "";
var toiletText = "";
var shoppingText = "";

weatherText += "<div class='weather'>";
weatherText += "<h3>Weather</h3>";
weatherText += "<p>Current place:</p>";
weatherText += "<div><i class='fa fa-tint' style='color:cornflowerblue;'></i> It's 12*c here in Auckland </div>";
weatherText += "<p>Destination:</p>";
weatherText += "<div><i class='fa fa-cloud' style='color:blue'></i> It's 15*c in Brisbane</div>";
weatherText += "</div>";

toiletText += "<div class='toilet'>";
toiletText += "<h3>Toilets</h3>";
toiletText += "<p>Toilets are located within 500m of this screen to your left. Here is a map to help you out.</p>";
toiletText += "<div><img src='images/Arrive-AirportMap.jpg' height='200' width='250' /></div>";
toiletText += "</div>";

helpText += "<div class='assistance'>";
helpText += "<h3>Help</h3>";
helpText += "<p>We are here to help you</p>";
helpText += "<div><i class='fa fa-wheelchair'></i> I need assistance</div>";
helpText += "</div>";

foodText += "<div class='food'>";
foodText += "<h3>Food</h3>";
foodText += "<p>Find your favorite outlet here</p>";
foodText += "<div><img src='images/mcdonalds-128.png' height='50' width='50' /><span style='position:relative;top:-15px;'> McDonalds</span></div>";
foodText += "<div><img src='images/Starbucks_Coffee_Logo.svg.png' height='50' width='50' /><span style='position:relative;top:-15px;'> Starbucks Coffee</span></div>";
foodText += "</div>";

shoppingText += "<div class='shopping'>";
shoppingText += "<h3>Shopping</h3>";
shoppingText += "<p><i class='fa fa-shopping-bag'></i> Find your favorite outlet here</p>";
shoppingText += "<div><img src='images/kathmandu.png' height='35' width='35' /><span style='position:relative;top:-15px;'> Kathmandu</span></div>";
shoppingText += "<div><img src='images/tissot.jpg' height='35' width='35' /><span style='position:relative;top:-15px;'> Tissot</span></div>";
shoppingText += "<div><img src='images/dutyfree.png' height='35' width='35' /><span style='position:relative;top:-15px;'> Duty Free Shop</span></div>";
shoppingText += "</div>";

// Init
displaySecondaryBlock('weather');

function displaySecondaryBlock(source) {
    console.log(source);
    document.getElementById("secondaryMenu").innerHTML = "";
    document.getElementById("secondaryMenu").style.display = "inline";
    if (source == "food") {
        document.getElementById("secondaryMenu").innerHTML = foodText;
    }
    else if (source == "toilet") {
        document.getElementById("secondaryMenu").innerHTML = toiletText;
    }
    else if (source == "help") {
        document.getElementById("secondaryMenu").innerHTML = helpText;
    }
    else if (source == "weather") {
        document.getElementById("secondaryMenu").innerHTML = weatherText;
    }
    else if (source == "shopping") {
        document.getElementById("secondaryMenu").innerHTML = shoppingText;
    }
    else {
        document.getElementById("secondaryMenu").innerHTML = "";
        document.getElementById("secondaryMenu").style.display = "none";
    }
}
