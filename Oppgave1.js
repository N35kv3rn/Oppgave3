// Statisk tekst som brukes til å søke i
const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord = () => {

  const fullstring = document.getElementById("fullstring").innerHTML = text;

  const arr = text.split(' '); // deler opp textstringen til en array av ord splittet på mellomrom

  let peak = 0; // int for å holde styr på antall bokstaver i nåværende lengste ord
  let word; // blir oppdatert for å holde styr på hvilket ord som er lengst (hører med peak)

  for (const currentWord of arr) { // for hvert ord i arrayen
    if (currentWord.length > peak) { // hvis antall bokstaver i ord er høyere enn tidligere høyeste
      peak = currentWord.length; // Oppdater flest antall bokstaver variabelen
      word = currentWord; // oppdater lengste ord hittil
    }
  }
  const ptag = document.getElementById("ptag");
  ptag.innerHTML = word + " with " + peak + " characters.";

  return word; // når loopen er ferdig, er alle ordene målt, og lengste ord blir sendt med videre.

};

console.log(longestWord()); // Skriver ut lengste ord i console
