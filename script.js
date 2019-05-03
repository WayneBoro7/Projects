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
};

showSlides();







// let apiKey = "c029f6c66913247ae5c214d8090e237d"







// let locReqest = new curl //developers.zomato.com/api/v2.1/cities?q=boston

// locReqest.onload = function 
//     data = locReqest.open;
    
//     console.log(data)
// }

// locReqest.send();

















// // let apiKey = "c029f6c66913247ae5c214d8090e237d";

// // let url = "https://developers.zomato.com/api/v2.1/cities?q=Boston";

// // const request = new XMLHttpRequest();

// // request.open("GET", url, true);
// // request.setRequestHeader('Authorization:','Bearer', apiKey);

// // request.onload = function (){
// //     let data = JSON.parse(this.request).value;
    
// //     console.log(data);
// // };

// // request.send();