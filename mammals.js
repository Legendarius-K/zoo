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

    let echidna = new Animal("echidna", "50 years", "mammals", "Insects such as ants and termites, beetle larvae and worms", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", "76 cm", "10 kg", "Throughout Australia");
    let kangaroo = new Animal("kangaroo","6-8 years (in the wild)","marsupials","Grasses, shrubs, leaves","Kangaroos are iconic marsupials known for their powerful hind legs, strong tails, and distinctive hopping movement. Found predominantly in Australia, they have adapted to various habitats, from forests to grasslands. Male kangaroos, or boomers, showcase remarkable boxing skills during mating competitions. Females, called flyers or does, carry and nurture tiny joeys in pouches. Kangaroos play a vital role in Australian culture and are symbols of resilience and adaptability.","1.2 - 1.8 meters (body), 2.5 - 3 meters (including tail)","20 - 90 kg (varies by species)","Australia","G'day! I'm the kangaroo – Australia's hopping wonder. With powerful legs and a built-in pouch, I'm a marsupial marvel. Munching on grasses and leaves, I've mastered the art of hopping through diverse landscapes. Check out my unique boxing moves during mating season. I'm not just an animal; I'm a symbol of Aussie resilience!");
    let koala = new Animal("koala","10-15 years (in the wild)","marsupials","Eucalyptus leaves","Koalas are adorable marsupials native to Australia, known for their fluffy appearance and love for eucalyptus leaves. With a specialized digestive system, they can detoxify the leaves' toxins. Koalas spend most of their time in eucalyptus trees, dozing off after their leafy feast. These iconic creatures have a unique vocal communication, producing distinct bellows to establish territory. Despite their sleepy demeanor, koalas play a crucial role in Australian biodiversity.","60 - 85 cm", "4 - 15 kg (varies by region)","Eastern Australia","G'day! I'm the koala – Australia's tree-hugging marsupial. With my fluffy charm and love for eucalyptus leaves, I'm a symbol of Aussie biodiversity. Spot me snoozing in eucalyptus trees, where I establish territory with my unique bellows. I may look sleepy, but I'm a vital part of Down Under!");
   
    let animalArray = [echidna, kangaroo, koala];

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
        <h1>Welcome to mammals page</h1>
        <p>Here you can learn more about our different mammals we have at the moment.</p>
        <p>Dig in deep and get to know the animals habitat, what they eat and other fun information about them!</p>
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
   

           

