function headingChange() {
    //Capture main title element by ID for js reference
    heading = document.getElementById("main-heading");
    //Set text of main title element 
    heading.innerHTML = "This sentence was rendered from Javascript" ;  
};

async function fetchText() {
    //Capture main title element by ID for js reference
    heading = document.getElementById("main-heading");

    //await a response from the server at the address /server-text
    let response = await fetch('/server-text');
    
    //capture response as "text", then set main title to captured text
    await response.json()
        .then(text => {
            heading.innerHTML = text;
        });
};

function refresh() {
    //Refresh page to reset html title w/o button toggle
    location.reload();
};




