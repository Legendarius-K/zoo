$(() => { 

    function Animal(species, lifespan, group, food, description, length, weight, found) {
        this.species = species,
        this.lifespan = lifespan,
        this.group = group,
        this.food = food,
        this.description = description,
        this.length = length,
        this.weight = weight,
        this.found = found,
        this.createInfoElement = function () {
            $(".animal-info-container").append(`
                <div class="animal-info ${this.species}">
                    <h3>${this.species}</h3>
                    <p>${this.lifespan}</p>
                    <p>${this.group}</p>
                    <p>${this.food}</p>
                    <p>${this.description}</p>
                    <p>${this.length}</p>
                    <p>${this.weight}</p>
                    <p>${this.found}</p>
                </div>
            `)
        }
    };

    let echidna = new Animal("Echidna", "50 years", "mammals", "Insects such as ants and termites, beetle larvae and worms", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", "76 cm", "10 kg", "Throughout Australia");
    let lizard = new Animal("Frill-necked-lizard", "20 years", "reptile", "Small insects and spiders", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.", "90 cm", "1 kg", "Northern Australia");
    let cassowary = new Animal("Cassowary", "20 years", "bird", "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.", "1,7 m", "44 kg","Queensland");

    let mammalArray = [echidna];
    let reptileArray = [lizard];
    let birdArray = [cassowary];

    console.log("hello");

    const addAnimalInfo = (animalGroup) => {
        $(animalGroup).each((index, animal) => animal.createInfoElement());
    }

    addAnimalInfo(mammalArray);
    addAnimalInfo(reptileArray);
    addAnimalInfo(birdArray);

    const populateSidebar = () => {
        $(".side-bar").empty();
        appendAnimals("Mammals", mammalArray);
        appendAnimals("Reptiles", reptileArray);
        appendAnimals("Birds", birdArray);
    };

    const appendAnimals = (animalGroup, animals) => {   
        $(".side-bar").append(`<h4>${animalGroup}</h4>`);
        let ul = $("<ul></ul>");
        animals.forEach(animal => ul.append(`<li class="side-bar-animal">${animal.species}</li>`));
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

    $(`.side-bar-animal`).on("click", e => {
        let clickedSpecies = $(e.target).text();
        $(`.animal-info.${clickedSpecies}`).toggle();
        $(`.animal-info.${clickedSpecies}`).siblings().fadeOut(1);
    })

}); 