
$(document).ready(function() {
// 	$(‘body’).html();
// };

// console.log("Your code goes in this document.");
//
// _.times(100, function() {
//   console.log("hi");
// });

//Question 1:
  var avg = 0;
  var sum = 0;
  var allPrices = items.forEach(function(currVal, idx, arr) {
    sum += currVal.price;
  });
  avg = Math.round(sum/items.length);
  $('#answer1').replaceWith(avg);

  console.log(avg);

//Question 2:
var specificPrice = " ";
var allItems = items.forEach(function(currVal, idx, arr){
  if(currVal.price >= 14 && currVal.price <= 18){
    specificPrice += (currVal.title + "<br>");
  }else {
    return;
  }
});
$('#answer2').html(specificPrice);
// $('#answer2').replaceWith(specificPrice);

//Question 3:
// var namePrice = "";
// items.forEach(function(currVal, idx, arr){
//   if(currVal.currency_code === "GBP") {
//     namePrice += (currVal.title + ". " + "Price = " + currVal.price)
//   } else {
//     return;
//   }
// });

var allItem = items.filter(function(currVal, idx, arr){
return currVal.currency_code === "GBP";
});
var title = allItem[0].title;
var price = allItem[0].price;
var gbpItem = (title + " " + "Price = " + price);

$('#answer3').replaceWith(gbpItem);

//Question 4:
// function contains(item, "wood") {
//   return item.indexOf("wood") > -1;
// }

// var woodArray= _.filter(currItem, "materials")
//   return currItem;

var woodArray = items.filter(function(currItem){
  return _.contains(currItem.materials, "wood");
});
var withWood = "";
  woodArray.forEach(function(curVal, idx, arr){
    withWood += (curVal.listing_id + "<br>");
});
// var newArr = _.contians(currVal, "materials")
//   return curVal.


// var allWood = " ";
// var wItems = items.filter(function(currVal, idx, arr) {
//   if(currVal.materials == "wood"){
//     allWood += (currVal.listing_id + " ,");
//   }else {
//     return;
//   }
// });
$('#answer4').html(withWood);
// $('#answer4').replaceWith(withWood);

//Question 5:
var eightMaterials = "";
var woodArray = items.filter(function(currItem, idx, arr){
  if(currItem.materials.length >= 8){
    eightMaterials += (currItem.title + " / Quantity: " + currItem.materials.length + " / Materials: " + currItem.materials + "<br>");
  } else {
    return;
  };

});
$('#answer5').html(eightMaterials);

//Question 6:
var allItem = items.filter(function(currVal, idx, arr){
return currVal.who_made === "i_did";
});
var howManyMade = allItem.length;

$('#answer6').html(howManyMade);



});
