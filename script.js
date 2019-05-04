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
    
    let city = document.getElementById('city')
    
    let locUrl = ("https://developers.zomato.com/api/v2.1/locations?query=" + city)
    
    let locRequest = new XMLHttpRequest();
    
    
    locRequest.open("GET", locUrl, true);
    locRequest.setRequestHeader("content-type", "application/json");
    locRequest.setRequestHeader("user-key", apiKey);
    
    
    locRequest.onload = function (){
        let locData = JSON.parse(this.response)
        
        console.log(locData)
    }
    
    
    
    
    
    
    
    
    
    locRequest.send();
    
    
    
    
    
    
    
    
    
    
    
    
    
    // let searchUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&cuisines=308";

    // let searchRequest = new XMLHttpRequest();
    
    // searchRequest.open("GET", searchUrl, true);
    // searchRequest.setRequestHeader("content-type", "application/json");
    // searchRequest.setRequestHeader("user-key", apiKey);


    // searchRequest.onload = function() {
    //     let data = JSON.parse(this.response);
    
    //     console.log(data);
    // };
    
    // searchRequest.send();
    
    
    
}


