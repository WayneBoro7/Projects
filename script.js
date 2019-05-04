var slideIndex=0;

function showSlides() {
    var slides = document.getElementsByClassName("vegimages");
    for (var i = 0; i < slides.length; i++){
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex >=slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 4000);
}

showSlides();



let apiKey = "c029f6c66913247ae5c214d8090e237d";

let resSearch = function() {
    
    // gets city id
    let city = document.getElementById("city").value;
    
    let locUrl = ("https://developers.zomato.com/api/v2.1/locations?query=" + city)
    
    let locRequest = new XMLHttpRequest();
    
    
    locRequest.open("GET", locUrl, true);
    locRequest.setRequestHeader("content-type", "application/json");
    locRequest.setRequestHeader("user-key", apiKey);
    
    
    locRequest.onload = function (){
        let locData = JSON.parse(this.response);
        
        let cityId = (locData.location_suggestions[0].city_id);
        
        let searchRequest = new XMLHttpRequest();
        let searchUrl = "https://developers.zomato.com/api/v2.1/search?entity_id="+cityId+"&entity_type=city&count=20&cuisines=308";
         let placeCounter = 0;
        
        
        searchRequest.open("GET", searchUrl, true);
        searchRequest.setRequestHeader("content-type", "application/json");
        searchRequest.setRequestHeader("user-key", apiKey);
    
    
        searchRequest.onload = function() {
            let resData = JSON.parse(this.response);
        
            let restaurantList = document.getElementById('restaurantList');
    
            let row = null;
           
           
           console.log(resData)
           
            if (locRequest.status >= 200 && locRequest.status < 400){
                resData.restaurants.forEach(restaurant => {
                    
                    if (placeCounter % 2 == 0){
                        row = document.createElement('div');
                        row.className = "row"
                        restaurantList.appendChild(row);
                    }
                    
                    
                    let place = document.createElement('div');
                    place.className = "col-6";
                    
                    
                    let p = document.createElement('p');
                    p.textContent = restaurant.restaurant.name;
                    
                    place.appendChild(p);
                    row.appendChild(place);
                    
                    placeCounter++;
                })
            }
        };
    
        searchRequest.send();
    }
    
    locRequest.send();
    
}


