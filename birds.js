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

    
    let cassowary = new Animal("cassowary", "20 years", "bird", "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.", "1,7 m", "44 kg","Queensland");
    let songbird = new Animal("Songbird","Songbird-age aproximately","birds","Seeds, insects, fruits","Songbirds, known for their melodious tunes, belong to the order Passeriformes. Found worldwide, they exhibit diverse behaviors, vibrant plumage, and intricate songs. Some, like the nightingale, sing complex melodies, while others, like the mockingbird, mimic various sounds. Songbirds play a crucial role in ecosystems, contributing to pollination and insect control. Their enchanting melodies make them cherished companions in gardens and forests.","Not very long","Weighs like a bird","Global","Hey there! I'm the songbird – the avian virtuoso spreading melodies across the globe. With a diverse diet of seeds, insects, and fruits, I contribute to ecosystems worldwide. Whether it's complex tunes or mimicking sounds, my songs resonate in gardens and forests, making me a cherished companion!");
    let parrot = new Animal("Parrot", "A whole lifespan", "birds", "Seeds, fruits, nuts", "Parrots, with their vibrant plumage and exceptional mimicry skills, are social birds found in tropical and subtropical regions. They have zygodactyl feet, allowing them to grasp objects with two toes in the front and two in the back. Parrots display remarkable intelligence, forming strong bonds with humans and other parrots. Some, like the African Grey, excel in language mimicry. Parrots contribute to seed dispersal in ecosystems and bring joy with their playful antics and colorful personalities.", "Parrot-length","About the weight of a parrot","Tropical and subtropical regions", "Hello! I'm the parrot – a tropical showstopper with colorful plumage and a knack for mimicry. Munching on seeds, fruits, and nuts, I contribute to ecosystems with my seed dispersal. Known for forming strong bonds and speaking a few words, I bring a splash of joy to tropical and subtropical regions!");
    let kookaburra = new Animal("kookaburra","20 years","bird","Insects and smalll animals including snakes, frogs and lizards","Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.", "43 cm", "300 g", "Australia wide");
    let cockatoo = new Animal("yellow tailed black cockatoo", "41 years","bird","Fruit, seeds and other plant material", "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.", "65 cm", "900 grams", "SE Australia")

    let animalArray = [cassowary, songbird, parrot, kookaburra, cockatoo];

    console.log(animalArray);
    $(animalArray).each((index, animal) => animal.createInfoElement());
    
    const populateSidebar = () => {
        $(animalArray).each((index, animal) => {
            $(".side-bar").append(`<h4 class="side-bar-animal">${animal.species}</h4>`)
       })
    };

    populateSidebar();

    $(`.side-bar-animal`).on("click", e => {
        let clickedSpecies = $(e.target).text();
        $(`.animal-info.${clickedSpecies}`).toggle();
        $(`.animal-info.${clickedSpecies}`).siblings().fadeOut(1);
    })
    
    
   
});