$(document).ready(function() {

  $(".recipe-container").hide();

  function appendDrinkName(obj){
    for (var i=0; i < obj.drinks.length; i++){

      var drink = obj.drinks[i];


       if (drink != ("#searchBar").val) {
            //dont do the stuff below/return error msg
            console.log("fuck")
        }

      $("#recipe-info").append("<h2>" + drink.strDrink + "</h2>")
      console.log(drink)
      $("#recipe-info").append("<h3>" + "type: " + drink.strAlcoholic + "</h3>")
      $("#recipe-info").append("<h3>" + "category: " + drink.strCategory + "</h3>")
      $("#recipe-info").append("<h3>" + "IBA class: " + drink.strIBA + "</h3>")
      $("#recipe-content").append("<li class>" + drink.strMeasure1 + " " + drink.strIngredient1 + "</li>")
      $("#recipe-content").append("<li>" + drink.strMeasure2  + " " + drink.strIngredient2 + "</li>")
      $("#recipe-content").append("<li>" + drink.strMeasure3  + " " + drink.strIngredient3 + "</li>")
      $("#recipe-content").append("<li>" + drink.strIngredient3  + "</li>")
      $("#recipe-content").append("<li>" + drink.strIngredient4  + "</li>")
      $("#recipe-content").append("<li>" + drink.strIngredient5  + "</li>")
      $("#recipe-content").append("<li>" + drink.strInstructions  + "</li>")
    }
  }

  $('form').submit(function(event) {
    $("#recipe-info").children().remove()
    $("#recipe-content").children().remove()
    $(".recipe-container").hide(100);
    $(".recipe-container").slideDown("slow");
    event.preventDefault()

    var drinkSearch = $("#searchBar").val()
    $.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkSearch, function(drinks){

      appendDrinkName(drinks)
    })

  })



});
