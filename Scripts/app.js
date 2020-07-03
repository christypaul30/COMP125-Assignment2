// IIFE - Immediately Invoked Function Expression = Anonymous self executing function - closure
(function(){


    //named function
    function Start()
        {
            console.log('%cApp started...', "color:blue; font-size: 24px");           
            
            

        }    
    

    window.addEventListener("load", Start);
    
})();