// IIFE - Immediately Invoked Function Expression = Anonymous self executing function - closure
(function(){


    //named function
    function Start()
        {
            console.log('%cApp started...', "color:blue; font-size: 24px");
            
            //Nav Link Highlighting
            let title = document.title;

            title = title.toLowerCase();

            console.log(`The title of the page is ${title}`);

            let navAnchors = document.querySelectorAll("li a");

        for (const anchor of navAnchors) 
        {

            let anchorString = anchor.getAttribute("href");
            anchorString = anchorString.substr(0,anchorString.length-5);

            if((title === "home") && (anchorString === "index") || (title === anchorString))
                {
                    anchor.className = "nav-link active";
                }

        }

           
            /* // Question One: String Variables

            let miniPortfolio = document.getElementsByTagName("h1")[0].textContent;

            console.log(miniPortfolio);

            let aboutMe = document.getElementsByTagName("h1")[1].textContent;

            console.log(aboutMe);

            let paragraph = document.getElementsByClassName("paragraph")[0].textContent;

            console.log(paragraph);

            let mobApp = document.getElementsByName("container3")[0].textContent;

            console.log(mobApp); */
            

            //Question Three: String Variables

            /* let cardText = document.getElementById("p")[0];
            console.log (cardText);

            let cardtext2 = document.getElementById("p")[1];
            console.log(cardtext2);

            let cardtext3 = document.getElementById("p")[2];
            console.log(cardtext3); */

            
        }
        
        function addParagraphsToJumbotron() 
    {
        // step 1 hook into the spot (element) on the page
        let paragraph = document.getElementsByClassName("paragraph")[0];

        if (paragraph) 
        {
            // step 2 create a new element
            let newParagraph = document.createElement("p");

            // step 3 configure the new element
            newParagraph.textContent =
                `
                This is an example paragraph.
                Here is the next line.
                
                `;

            // step 4 attach the new element
            paragraph.appendChild(newParagraph);

            return true;

        }

        return false;
    }


    

    window.addEventListener("load", Start);
    
})();