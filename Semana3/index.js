console.log('Estoy listo!')

// Iteration 1: Names and Input

const hackerOne = "Armando";
console.log("El nombre del conductor es " + hackerOne)

const hackerTwo = "Jesus"
console.log("El nombre del navegante es " + hackerTwo)

// Iteration 2: Conditionals

if (hackerOne.length > hackerTwo.length) {
    console.log(`El conductor tiene el nombre más largo, tiene ${hackerOne.length} caracteres. o`);
} 

else if (hackerOne.length < hackerTwo.length) {
    console.log(`Parece que el navegante tiene el nombre más largo, tiene ${hackerTwo.length} caracteres. o`);
}

else {
    console.log(`¡Vaya, ambos tienen nombres igual de largos, ${hackerTwo.length} caracteres!.`)
}

// Iteration 3: Loops

let wordSpace = "";
for (let i = 0; i < hackerOne.length; i++) {
    wordSpace += hackerOne[i].toUpperCase () + " ";    
}
console.log(wordSpace);

//3.2 navegador, en orden inverso.es decir, " nhoJ" 

let navigator = hackerTwo.split("");
let navigatorReverse = navigator.reverse();
let navigatorJoin = navigatorReverse.join("");
console.log(navigatorJoin);

//3.3 Según el orden lexicográfico de las cadenas, imprime:

if (hackerOne.localeCompare(hackerTwo) === -1) {
    console.log(`El nombre del conductor va primero en orden lexicográfico.`);
  } else if (hackerOne.localeCompare(hackerTwo) === 1) {
    console.log(`El nombre del navegante va primero en orden lexicográfico.`);
  } else {
    console.log(`Ambos nombres están en el mismo lugar en el orden lexicográfico.`);
  }

//BONO 1

//Generar 3 párrafos. Guarda el texto en una variable de tipo cadena.

let loremOne = (`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris tellus, egestas ut ultrices in, dictum quis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet justo sit amet leo tincidunt sodales. Sed ultricies, mauris nec sagittis faucibus, lacus tellus condimentum nulla, at efficitur ante tortor a turpis. Morbi aliquam sapien et posuere dictum. Vivamus et urna eget libero laoreet aliquam pulvinar at magna. Donec scelerisque arcu diam, non suscipit metus mattis ut. Proin quis rutrum diam, tincidunt fringilla sapien. Nunc pharetra, mauris laoreet ornare pharetra, metus diam maximus magna, eget ornare enim mi et felis. Curabitur ullamcorper massa in orci lobortis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris quis urna purus. Praesent eget nulla bibendum, rhoncus tortor rhoncus, gravida odio. Praesent sodales eu tellus a ornare. Suspendisse quis tellus sed ligula tristique pharetra at vel turpis. Nulla facilisi.

Maecenas vel imperdiet tellus. Nunc auctor a erat a fermentum. Phasellus efficitur tincidunt egestas. Aenean efficitur eu urna non vestibulum. Suspendisse dignissim fermentum nisi eu interdum. Morbi maximus sem massa, ut dictum leo venenatis vel. Cras efficitur, dui in dignissim rutrum, lectus diam pulvinar leo, sed laoreet ipsum lorem eget ipsum. Sed sem lacus, pretium ut justo sit amet, eleifend porta est. In hac habitasse platea dictumst. Vivamus sed mauris id justo posuere hendrerit in eget tellus. Nam pretium ex feugiat, mollis nulla in, lacinia ipsum. Nunc tincidunt magna et facilisis ornare.

Sed eu laoreet lectus, ac viverra ex. Aenean pharetra scelerisque elementum. Morbi vel ornare diam. Vestibulum ut mauris eu justo convallis vulputate. Maecenas lacinia sem imperdiet, molestie libero id, sodales purus. Duis ultricies sem non orci gravida euismod. Donec cursus leo sit amet interdum convallis. Pellentesque pulvinar molestie eleifend. Cras tempus nibh id pharetra sodales. Ut sollicitudin pharetra congue. Proin in nisi sem.`);

//Haz que tu programa cuente el número de palabras de la cadena.

let wordAccount = loremOne.split(``);
let numberWord = wordAccount.length;
console.log(numberWord);

//Haz que tu programa cuente el número de veces que aparece la palabra latina et.

//let latina = (`et`)
function account() { 
    let loremOne = (`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mauris tellus, egestas ut ultrices in, dictum quis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sit amet justo sit amet leo tincidunt sodales. Sed ultricies, mauris nec sagittis faucibus, lacus tellus condimentum nulla, at efficitur ante tortor a turpis. Morbi aliquam sapien et posuere dictum. Vivamus et urna eget libero laoreet aliquam pulvinar at magna. Donec scelerisque arcu diam, non suscipit metus mattis ut. Proin quis rutrum diam, tincidunt fringilla sapien. Nunc pharetra, mauris laoreet ornare pharetra, metus diam maximus magna, eget ornare enim mi et felis. Curabitur ullamcorper massa in orci lobortis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris quis urna purus. Praesent eget nulla bibendum, rhoncus tortor rhoncus, gravida odio. Praesent sodales eu tellus a ornare. Suspendisse quis tellus sed ligula tristique pharetra at vel turpis. Nulla facilisi.

    Maecenas vel imperdiet tellus. Nunc auctor a erat a fermentum. Phasellus efficitur tincidunt egestas. Aenean efficitur eu urna non vestibulum. Suspendisse dignissim fermentum nisi eu interdum. Morbi maximus sem massa, ut dictum leo venenatis vel. Cras efficitur, dui in dignissim rutrum, lectus diam pulvinar leo, sed laoreet ipsum lorem eget ipsum. Sed sem lacus, pretium ut justo sit amet, eleifend porta est. In hac habitasse platea dictumst. Vivamus sed mauris id justo posuere hendrerit in eget tellus. Nam pretium ex feugiat, mollis nulla in, lacinia ipsum. Nunc tincidunt magna et facilisis ornare.
    
    Sed eu laoreet lectus, ac viverra ex. Aenean pharetra scelerisque elementum. Morbi vel ornare diam. Vestibulum ut mauris eu justo convallis vulputate. Maecenas lacinia sem imperdiet, molestie libero id, sodales purus. Duis ultricies sem non orci gravida euismod. Donec cursus leo sit amet interdum convallis. Pellentesque pulvinar molestie eleifend. Cras tempus nibh id pharetra sodales. Ut sollicitudin pharetra congue. Proin in nisi sem.`);
    let wordAccount = loremOne.split(``);
    let wordBreak = array.from(wordAccount);
let contador = 0;
console.log(wordBreak);
 for (let i = 0; i < wordBreak.length; i++) {
    if(wordBreak[i] === `et`) {
        contador++
    }else{ 
    }
 }
 return contador
}

console.log(account());
//BONO 2

