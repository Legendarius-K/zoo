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
            $(".reptiles-info").append(`
                <h3>${this.species}</h3>
                <p>${this.lifespan}</p>
                <p>${this.group}</p>
                <p>${this.food}</p>
                <p>${this.description}</p>
                <p>${this.length}</p>
                <p>${this.weight}</p>
                <p>${this.found}</p>
            `)
        }
    };

    let lizard = new Animal("Frill-necked-lizard", "20 years", "reptile", "Small insects and spiders", "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.", "90 cm", "1 kg", "Northern Australia");

    let animalArray = [lizard];

console.log(animalArray);
    $(animalArray).each((index, animal) => animal.createInfoElement());
    
})