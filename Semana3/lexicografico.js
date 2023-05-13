// Ordenar las palabras lexicográficamente
let word = [hackerOne , hackerTwo]
for (let i = 0; i < word.length; i++) {
  for (let j = i + 1; j < word.length; j++) {
    if (word[i] > word[j]) {
      let temp = word[i];
      word[i] = word[j];
      word[j] = temp;
    }
  }
}

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}