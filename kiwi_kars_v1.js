// JavaScript Document
alert("JS is attached")
var dailyPrice=0 , checkedExtras; //global variables
var totalCost=0;
var insuranceTotal=0;



function updateCar() {
    // function called when a vehicle card div is clicked on
	
    dailyPrice=this.dataset.price; //price per day
    var car = this.dataset.name; //selected car
    alert(car);
    alert(dailyPrice); //test alerts
    document.getElementById("carOutput").innerHTML=car; //ouput to the divs in your html
    document.getElementById("priceOutput").innerHTML= "$"+dailyPrice;

}

function updateBooking() {
	
	var pickUp = document.getElementById("pickUpDate").value;
	alert("Pick up date: " + pickUp);
	var days = document.getElementById("numberDays").value;
	alert("number days: " + days);
	var addItems = document.getElementsByClassName('addCheck');
    // this collects all my additional items checkboxes and stores them in an object array
    checkedExtras = [];  //empty list to add the selected additional items to
    var addCost = 0; //holds the cost of the checkboxes 
	for (var i = 0; i < addItems.length; i++) {
        if (addItems[i].checked) {
            checkedExtras.push(' ' + addItems[i].value);//finds the value of the checked box
            alert(checkedExtras); // test alert
            addCost += parseInt(addItems[i].dataset.price);
            alert(addCost); //test alert
        }
		var bookingCost = 50
		var insuranceCost = 20
		insuranceTotal = insuranceCost * days;
		}
	totalCost = addCost + insuranceTotal + dailyPrice * days + bookingCost;
	alert("Total Cost: " + totalCost);
}













// event listener for when a user selects nights/date/extras is clicked
var allInputs = document.getElementsByClassName('addCheck');
for (var i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('input', updateBooking);
}


//event listener that will call the update room function if a card is clicked
var carInputs = document.getElementsByClassName('carCard');
for (i = 0; i < carInputs.length; i++) {
    carInputs[i].addEventListener('click', updateCar);
}