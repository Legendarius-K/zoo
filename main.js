$(() => { 
let mammalArray = ['echidna', 'darius', 'ant'];
let reptileArray = ['lizard', 'python', 'iguana'];
let birdArray = ['cassowary', 'songbird', 'parrot'];

const populateSidebar = () => {
    $('.side-bar').empty();
    appendAnimals('Mammals', mammalArray);
    appendAnimals('Reptiles', reptileArray);
    appendAnimals('Birds', birdArray);
};

const appendAnimals = (animalGroup, animals) => {   
    $('.side-bar').append(`<h4>${animalGroup}</h4>`);
    let ul = $('<ul></ul>');
    animals.forEach(animal => ul.append(`<li>${animal}</li>`));
    $('.side-bar').append(ul);
};

populateSidebar();

});