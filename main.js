$(() => { 

    function Animal(species, lifespan, group, food, description, length, weight, found, summary) {
        this.species = species,
        this.lifespan = lifespan,
        this.group = group,
        this.food = food,
        this.description = description,
        this.length = length,
        this.weight = weight,
        this.found = found,
        this.summary = summary,
        this.createInfoElement = function () {
            $(".animal-info-container").append(`
                <div class="animal-info ${this.species}">
                <h3>${this.species}</h3>
                <div class="img-container"> <img class="short-sum-img" src="./img/${this.species}.jpg" heigth=100px width=100px alt="image of ${this.species}"></img></div>
                    <p>${this.summary}</p>
                    <p>The ${this.species} likes to eat: ${this.food}</p>
                    <p>See more: <a href="./${this.group}.html">${this.group} </a></p>
                </div>
            `)
        }
        
    };
    let echidna = new Animal("echidna", "50 years", "mammals", "Insects such as ants and termites, beetle larvae and worms", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", "76 cm", "10 kg", "Throughout Australia", "Hey, I'm the echidna – nature's quirky rebel from Down Under. As a monotreme, I'm the cool egg-laying mammal. Rocking stylish quills and a beaky snout, I feast on ants and termites. Cuddly yet spiky, I'm the Aussie VIP at the animal party. Catch me making waves in the wild!");
    let kangaroo = new Animal("kangaroo","6-8 years (in the wild)","mammals","Grasses, shrubs, leaves","Kangaroos are iconic marsupials known for their powerful hind legs, strong tails, and distinctive hopping movement. Found predominantly in Australia, they have adapted to various habitats, from forests to grasslands. Male kangaroos, or boomers, showcase remarkable boxing skills during mating competitions. Females, called flyers or does, carry and nurture tiny joeys in pouches. Kangaroos play a vital role in Australian culture and are symbols of resilience and adaptability.","1.2 - 1.8 meters (body), 2.5 - 3 meters (including tail)","20 - 90 kg (varies by species)","Australia","G'day! I'm the kangaroo – Australia's hopping wonder. With powerful legs and a built-in pouch, I'm a marsupial marvel. Munching on grasses and leaves, I've mastered the art of hopping through diverse landscapes. Check out my unique boxing moves during mating season. I'm not just an animal; I'm a symbol of Aussie resilience!");
    let koala = new Animal("koala","10-15 years (in the wild)","mammals","Eucalyptus leaves","Koalas are adorable marsupials native to Australia, known for their fluffy appearance and love for eucalyptus leaves. With a specialized digestive system, they can detoxify the leaves' toxins. Koalas spend most of their time in eucalyptus trees, dozing off after their leafy feast. These iconic creatures have a unique vocal communication, producing distinct bellows to establish territory. Despite their sleepy demeanor, koalas play a crucial role in Australian biodiversity.","60 - 85 cm", "4 - 15 kg (varies by region)","Eastern Australia","G'day! I'm the koala – Australia's tree-hugging marsupial. With my fluffy charm and love for eucalyptus leaves, I'm a symbol of Aussie biodiversity. Spot me snoozing in eucalyptus trees, where I establish territory with my unique bellows. I may look sleepy, but I'm a vital part of Down Under!");

    let cassowary = new Animal("cassowary", "20 years", "birds", "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.", "1,7 m", "44 kg","Queensland");
    let songbird = new Animal("songbird","Songbird-age aproximately","birds","Seeds, insects, fruits","Songbirds, known for their melodious tunes, belong to the order Passeriformes. Found worldwide, they exhibit diverse behaviors, vibrant plumage, and intricate songs. Some, like the nightingale, sing complex melodies, while others, like the mockingbird, mimic various sounds. Songbirds play a crucial role in ecosystems, contributing to pollination and insect control. Their enchanting melodies make them cherished companions in gardens and forests.","Not very long","Weighs like a bird","Global","Hey there! I'm the songbird – the avian virtuoso spreading melodies across the globe. With a diverse diet of seeds, insects, and fruits, I contribute to ecosystems worldwide. Whether it's complex tunes or mimicking sounds, my songs resonate in gardens and forests, making me a cherished companion!");
    let parrot = new Animal("parrot", "A whole lifespan", "birds", "Seeds, fruits, nuts", "Parrots, with their vibrant plumage and exceptional mimicry skills, are social birds found in tropical and subtropical regions. They have zygodactyl feet, allowing them to grasp objects with two toes in the front and two in the back. Parrots display remarkable intelligence, forming strong bonds with humans and other parrots. Some, like the African Grey, excel in language mimicry. Parrots contribute to seed dispersal in ecosystems and bring joy with their playful antics and colorful personalities.", "Parrot-length","About the weight of a parrot","Tropical and subtropical regions", "Hello! I'm the parrot – a tropical showstopper with colorful plumage and a knack for mimicry. Munching on seeds, fruits, and nuts, I contribute to ecosystems with my seed dispersal. Known for forming strong bonds and speaking a few words, I bring a splash of joy to tropical and subtropical regions!");

    let lizard = new Animal("frill-necked-lizard", "20 years", "reptiles", "Small insects and spiders", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.", "90 cm", "1 kg", "Northern Australia", "G'day, I'm the Frill-necked lizard, the flamboyant showstopper of the Aussie outback. With my iconic frill and vibrant scales, I'm a walking fashion statement. Quick on my feet, I dazzle audiences with my territorial dance. Catch me sunbathing and strutting in the wild – the frill life suits me!");
    let python = new Animal( "python", "Not as long as a turtle, that's for sure", "reptiles", "Mammals, birds", "Australian pythons, such as the Carpet Python and the Olive Python, are constrictor snakes found across the continent. Known for their sleek bodies and impressive camouflage, these pythons play a vital role in controlling rodent populations. With a diet consisting mainly of mammals and birds, Australian pythons are skilled hunters, blending seamlessly into diverse landscapes. While their appearance may be intimidating, these reptiles contribute to the delicate balance of Australia's ecosystems.", "Pretty damn long because it's a snek", "Who cares", "Australia", "G'day! I'm the Australian Python – a slithering Aussie predator with sleek camouflage and a taste for mammals and birds. From the Carpet Python's intricate patterns to the Olive Python's robust presence, I play a crucial role in maintaining balance Down Under. Watch me gracefully navigate Australia's diverse landscapes!");
    let iguana = new Animal("iguana", "Lizzard-age", "reptiles", "Vegetation, fruits, insects", "Iguanas, with their distinctive spines and vibrant scales, are herbivorous lizards found in tropical regions. Their impressive ability to change color aids in thermoregulation and communication. From the iconic Green Iguana to the Lesser Antillean Iguana, they display a spectrum of colors and patterns. Iguanas are essential for seed dispersal in ecosystems, contributing to the diversity of plant life. With a diet comprising vegetation, fruits, and insects, these reptiles are not only visually stunning but also ecologically significant.", "F-in huge for being a lizzard", "Problably a lot", "Tropical regions", "Hello! I'm the iguana – a tropical lizard adorned with vibrant scales and a flair for color-changing. From munching on vegetation and fruits to contributing to seed dispersal, I play a vital role in tropical ecosystems. Explore the spectrum of my colors and patterns in the lush landscapes!");


    let mammalArray = [echidna, kangaroo, koala];
    let reptileArray = [lizard, python, iguana];
    let birdArray = [cassowary, songbird, parrot];

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
        animals.forEach(animal => ul.append(`<li class=side-bar-animal>${animal.species}</li>`));
        $(".side-bar").append(ul);        
    };


    populateSidebar();

    const welcomeMessage = () => {
        $(".main-content").append(`
            <div class=welcome-message>
            <h3>Welcome to The Fantastic Zoo</h3> 
            <p>Our popular zoo has recently got some new residents! We are happy to welcome a range of Australian species such as the ${mammalArray[0].species}, the ${reptileArray[0].species} and the ${birdArray[0].species}.</p>
            <p>They will stay with us as long as they need some extra care before being released back into the nature that is their beloved home.</p>
            <p>Check out the brief summary of all of our new friends in the menu on the left. For the enthusiastic animal nerd there is even more to read if you go to the detalied animal pages found in the menu above. And of course we hope you visit us to say hi to our new friends.</p>
            <p>// The dedicated team @ The Fantastic Zoo</p>
            </div>
        `)
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