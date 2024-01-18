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
                    <div class="info-flexbox">
                        <div class="img-container"> <img class="animal-img" src="./img/${this.species}.jpg" heigth=100px width=100px alt="image of ${this.species}"></img></div>
                        <div class="short-info">
                            <p><span>Lifespan:</span> ${this.lifespan}</p>
                            <p><span>Animal group:</span> ${this.group}</p>
                            <p><span>Food:</span> ${this.food}</p>
                            <p><span>Length:</span> ${this.length}</p>
                            <p><span>Weight:</span> ${this.weight}</p>
                            <p><span>Habitat:</span> ${this.found}</p>
                        </div>
                    </div>
                    <p>${this.description}</p>
                    
                </div>
            `)
        }
    };

    
    let cassowary = new Animal("cassowary", "20 years", "bird", "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.", "1,7 m", "44 kg","Queensland");
    let songbird = new Animal("songbird","Songbird-age aproximately","birds","Seeds, insects, fruits","Songbirds, known for their melodious tunes, belong to the order Passeriformes. Found worldwide, they exhibit diverse behaviors, vibrant plumage, and intricate songs. Some, like the nightingale, sing complex melodies, while others, like the mockingbird, mimic various sounds. Songbirds play a crucial role in ecosystems, contributing to pollination and insect control. Their enchanting melodies make them cherished companions in gardens and forests.","Not very long","Weighs like a bird","Global","Hey there! I'm the songbird – the avian virtuoso spreading melodies across the globe. With a diverse diet of seeds, insects, and fruits, I contribute to ecosystems worldwide. Whether it's complex tunes or mimicking sounds, my songs resonate in gardens and forests, making me a cherished companion!");
    let parrot = new Animal("parrot", "A whole lifespan", "birds", "Seeds, fruits, nuts", "Parrots, with their vibrant plumage and exceptional mimicry skills, are social birds found in tropical and subtropical regions. They have zygodactyl feet, allowing them to grasp objects with two toes in the front and two in the back. Parrots display remarkable intelligence, forming strong bonds with humans and other parrots. Some, like the African Grey, excel in language mimicry. Parrots contribute to seed dispersal in ecosystems and bring joy with their playful antics and colorful personalities.", "Parrot-length","About the weight of a parrot","Tropical and subtropical regions", "Hello! I'm the parrot – a tropical showstopper with colorful plumage and a knack for mimicry. Munching on seeds, fruits, and nuts, I contribute to ecosystems with my seed dispersal. Known for forming strong bonds and speaking a few words, I bring a splash of joy to tropical and subtropical regions!");

    let animalArray = [cassowary, songbird, parrot];

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
        <h1>Welcome to the birds page</h1>
        <p>Here you can explore and learn more about our different, beautiful and extraordinary birds.</p>
        <p>What do the birds eat and how many species do we have. Some are very graceful, some looks like they are from another planet. Explore more and find interesting things about them by clicking on the sidebar!
        </div>`)
    }

    welcomeMessage();

    $(`.side-bar-animal`).on("click", e => {
        let clickedSpecies = $(e.target).text();
        $(".animal-info").fadeOut(1);

        if ($(`.animal-info.${clickedSpecies}`).is(":visible")) {
            $(".welcome-message").removeClass("hidden");
        } else {
            $(`.animal-info.${clickedSpecies}`).toggle();
            $(".welcome-message").addClass("hidden");
        }
    });

});
