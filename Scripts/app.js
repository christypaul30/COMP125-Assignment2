// IIFE - Immediately Invoked Function Expression = Anonymous self executing function - closure
(function(){


    //named function
    function Start()
        {
            console.log('%cApp started...', "color:blue; font-size: 24px");           
           
            let miniPortfolio = document.getElementsByTagName("h1")[0].innerHTML;

            console.log(miniPortfolio);

            let aboutMe = document.getElementsByTagName("h1")[1].innerHTML;

            console.log(aboutMe);

            let paragraph = document.getElementsByClassName("paragraph")[0].textContent;

            console.log(paragraph);

            let mobApp = document.getElementsByName("container3")[0].textContent;

            console.log(mobApp);

            
        }    
    

    window.addEventListener("load", Start);
    
})();