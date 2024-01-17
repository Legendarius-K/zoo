$(() => { 
    let mammalArray = ["echidna", "darius", "ant"];
    let reptileArray = ["lizard", "python", "iguana"];
    let birdArray = ["cassowary", "songbird", "parrot"];

    const populateSidebar = () => {
        $(".side-bar").empty();
        appendAnimals("Mammals", mammalArray);
        appendAnimals("Reptiles", reptileArray);
        appendAnimals("Birds", birdArray);
    };

    const appendAnimals = (animalGroup, animals) => {   
        $(".side-bar").append(`<h4>${animalGroup}</h4>`);
        let ul = $("<ul></ul>");
        animals.forEach(animal => ul.append(`<li class=${animal}-summary>${animal}</li>`));
        $(".side-bar").append(ul);        
    };

    populateSidebar();

    const welcomeMessage = () => {
        $(".main-content").append(`
            <div class=welcome-message>
            <h3>Welcome to The Fantastic Zoo</h3> 
            <p>Our popular zoo has recently got some new residents! We are happy to welcome a range of Australian species such as the ${mammalArray[0]}, the ${reptileArray[0]} and the ${birdArray[0]}.</p>
            <p>They will stay with us as long as they need some extra care before being released back into the nature that is their beloved home.</p>
            <p>Check out the brief summary of all of our new friends in the menu on the left. For the enthusiastic animal nerd there is even more to read if you go to the detalied animal pages found in the menu above. And of course we hope you visit us to say hi to our new friends.</p>
            <p>// The dedicated team @ The Fantastic Zoo</p>
            </div>
        `)
    }

    welcomeMessage();

    const showSummary = () => {
        $(".animal-info").append("Here goes the short summary")
        console.log("list item clicked")
    };

    $(".navigation".li).on("click", showSummary);


}); 