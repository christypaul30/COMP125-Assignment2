// IIFE - Immediately Invoked Function Expression = Anonymous self executing function - closure
(function(){

    function Start ()
    {
        console.log("App Started...");
    }



    window.addEventListener("load", Start);
    
})();