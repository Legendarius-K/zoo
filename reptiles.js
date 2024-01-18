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
                    <div class="img-container"> <img class="animal-img" src="./img/${this.species}.jpg" heigth=100px width=100px alt="image of ${this.species}"></img></div>
                    <p><span>Lifespan:</span> ${this.lifespan}</p>
                    <p><span>Animal group:</span> ${this.group}</p>
                    <p><span>Food:</span> ${this.food}</p>
                    <p>${this.description}</p>
                    <p><span>Length:</span> ${this.length}</p>
                    <p><span>Weight:</span> ${this.weight}</p>
                    <p><span>Habitat:</span> ${this.found}</p>
                </div>
            `)
        }
    };

    let lizard = new Animal("frill-necked-lizard", "20 years", "reptile", "Small insects and spiders", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.", "90 cm", "1 kg", "Northern Australia");
    let python = new Animal( "python", "Not as long as a turtle, that's for sure", "reptiles", "Mammals, birds", "Australian pythons, such as the Carpet Python and the Olive Python, are constrictor snakes found across the continent. Known for their sleek bodies and impressive camouflage, these pythons play a vital role in controlling rodent populations. With a diet consisting mainly of mammals and birds, Australian pythons are skilled hunters, blending seamlessly into diverse landscapes. While their appearance may be intimidating, these reptiles contribute to the delicate balance of Australia's ecosystems.", "Pretty damn long because it's a snek", "Who cares", "Australia", "G'day! I'm the Australian Python – a slithering Aussie predator with sleek camouflage and a taste for mammals and birds. From the Carpet Python's intricate patterns to the Olive Python's robust presence, I play a crucial role in maintaining balance Down Under. Watch me gracefully navigate Australia's diverse landscapes!");
    let iguana = new Animal("iguana", "Lizzard-age", "reptiles", "Vegetation, fruits, insects", "Iguanas, with their distinctive spines and vibrant scales, are herbivorous lizards found in tropical regions. Their impressive ability to change color aids in thermoregulation and communication. From the iconic Green Iguana to the Lesser Antillean Iguana, they display a spectrum of colors and patterns. Iguanas are essential for seed dispersal in ecosystems, contributing to the diversity of plant life. With a diet comprising vegetation, fruits, and insects, these reptiles are not only visually stunning but also ecologically significant.", "F-in huge for being a lizzard", "Problably a lot", "Tropical regions", "Hello! I'm the iguana – a tropical lizard adorned with vibrant scales and a flair for color-changing. From munching on vegetation and fruits to contributing to seed dispersal, I play a vital role in tropical ecosystems. Explore the spectrum of my colors and patterns in the lush landscapes!");

    let animalArray = [lizard, python, iguana]; 

    console.log(animalArray);
    $(animalArray).each((index, animal) => animal.createInfoElement());


    const populateSidebar = () => {
        $(animalArray).each((index, animal) => {
            $(".side-bar").append(`<h4 class="side-bar-animal">${animal.species}</h4>`)
        })
    };

    populateSidebar();

    const welcomeMessage = () => {
        $(".main-content").append (`
        <div class=welcome-message>
        <h1>Welcome to reptile page</h1>
        <p>Here you can learn more about our different reptiles that we have at the moment.</p>
        <p>Dig in deep and get to know the animals habitat, their differences and cool looking features! Just click on their name on sidebar to get to know them!</p>
        </div>
        `)
    }
    welcomeMessage();

    $(`.side-bar-animal`).on("click", e => {
        let clickedSpecies = $(e.target).text();
        $(".animal-info").fadeOut(1);
        
        if ($(`.animal-info.${clickedSpecies}`).is(":visible")) {
            $(".welcome-message").removeClass("hidden");
        }else {
            $(`.animal-info.${clickedSpecies}`).toggle();
            $(".welcome-message").addClass("hidden");
        }
    })

});