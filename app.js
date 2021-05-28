var spellsArray = [
  " – Aberto: unlocks a door; first seen in Fantastic Beasts ",

  "– Accio: Summoning Charm; used to summon objects toward the caster (usually from a long distance)",

  "– Aguamenti: produces a jet of water from the caster’s wand",

  "– Alohomora: used to unlock and open doors",

  "– Avada Kedavra: The Killing Curse; causes a green flash of light; Harry Potter is the only known survivor of this curse; one of three Unforgivable Curses banned by the Ministry of Magic",

  "– Bat-Bogey Hex: causes the victim’s bogies to enlarge, grow wings, and attack the victim",

  "– Bubble-Head Charm: creates a bubble of air around the caster’s head and mouth, acting as a breathing apparatus",

  "– Caterwauling Charm: causes a loud, high-pitched shrieking noise when encountered",

  "– Cheering Charm: Causes the person upon whom the spell has been cast to become happy and content",

  "– Colloportus: Used to magically lock a door and prevent it from being opened by non-magical means",

  "– Confringo: Blasting Charm; causes items the charm comes in contact with to burst into flames",

  "– Confundo: Confundus Charm; causes the victim to become confused and disoriented",

  "– Crucio: Causes the victim extreme pain; one of three Unforgivable Curses banned by the Ministry of Magic",

  "– Descendo: Causes the target object to move downward",

  "– Diffindo: Severing Charm; causes the targeted object to rip or tear",

  "– Disillusionment Charm: hides objects and humans",

  "– Engorgio: Engorgement Charm; causes objects to increase in size",

  "– Episkey: Used to heal minor injuries",

  "– Evanesco: Used to vanish objects",

  "– Expelliarmus: Used to disarm another wizard",

  "– Finestra: Shatters glass; first appears in Fantastic Beasts",

  "– Homenum Revelio: allows the caster to detect human presence",

  "– Impedimenta: Impediment Jinx; prevents the victim from approaching the caster (by knocking back, tripping, etc.)",

  "– Imperio: Removes the victim’s free will and ability to make decisions for him- or herself; one of three Unforgivable Curses banned by the Ministry of Magic",

  "– Impervius: Causes objects to repel outside forces, such as water",

  "– Incendio: Creates fire",

  "– Levicorpus: A nonverbal spell that causes the victim to be dangled upside down by his or her ankles",

  "– Liberacorpus: The nonverbal countercurse to Levicorpus",

  "– Locomotor: Causes an object to rise and move at the command of the caster",

  "– Lumos: Projects a beam of light from the user’s wand",

  "– Morsmordre: Conjures the Dark Mark",

  "– Muffliato: Used to prevent conversations from being overheard by filling the ears of those nearby with an unidentifiable buzzing noise",

  "– Nox: Puts out wand light",

  "– Obliviate: Used to hide memories",

  "– Petrificus Totalus: Full Body-Bind Curse; temporarily binds the victim’s entire body, thus immobilizing him or her",

  "– Portus: Turns objects into Portkeys",

  "– Priori Incantato: creates an “echo” of previously performed spells",

  "– Protego: Shield Charm; rebounds minor to moderate hexes, jinxes, and spells upon their caster",

  "– Reducto: Reductor Curse; breaks objects and in its strongest form has the ability to disintegrate them",

  "– Rennervate: Revives the victim of a Stunning Spell",

  "– Relashio: Causes the victim to release whatever they are holding",

  "– Rennervate: Revives someone who has been Stunned",

  "– Reparo: Used to repair broken objects",

  "– Revelio: A revealing spell; first used in the Fantastic Beasts film to reveal Graves is Grindelwald",

  "– Rictusempra: Tickling Charm; causes an extreme tickling sensation that disables the victim",

  "– Riddikulus: Spell used when fighting a Boggart; causes the Boggart to transform into something the caster finds humorous",

  "– Scourgify: Used to clean objects",

  "– Sectumsempra: Spell that causes deep gashes on the victim’s body",

  "– Silencio: Used to make something silent",

  "– Sonorus: Magically magnifies one’s voice",

  "– Stupefy: Used to stun a victim",

  "– Taboo: A jinx that can be placed upon a word so that when the word is spoken, a magical disturbance is created which alerts the caster of the Taboo",

  "– Tergeo: Used to remove matter (blood, dirt, etc.) from an object",

  "– Unbreakable Vow: Causes the vow being taken by the witch or wizard to be inviolable with the consequence of death if it is breeched",

  "– Wingardium Leviosa: Hover Charm; causes an object to levitates ",

  "– Appare Vestigium: Tracking spell that “materializes as a swirl of gold” and shows “traces of recent magical activity.” Used by Newt to track beasts and Tina.",

  "– Avenseguim: Takes an object owned by someone and turns it into a way to track that person down. Newt used the spell on the feather from Kama’s cap to find him.",

  "– Finite: A spell to counter Protego Diabolica. Used by Flamel and friends. We’ve seen this one before, but not in this way.",

  "– Nebulus: Creates a swirling fog. Used by Dumbledore to stay under cover, descends over London.",

  "– Protego Diabolica: Creates a protective circle — those who are truly on Grindelwald’s side can walk through the flame. Notably, Rowling describes the flame twice as a “black fire,” but in the movie it’s blue.",

  "– Surgito: Removes a love enchantment spell. Used by Newt on Jacob to remove Queenie’s enchantment.",

  "– Papyrus Reparo: Repairs a torn up postcard.",

  "– Ventus: A spell to create a hurricane-force wind, used by Newt to repel the Auror Stebbins.",
];

var generateButton = document.querySelector("button");
var content = document.querySelector(".changeSpell");

generateButton.addEventListener("click", function castSpell() {
  var arrayIndex = arrayElement();
  content.textContent = spellsArray[arrayIndex];
});

function arrayElement() {
  return Math.floor(Math.random() * spellsArray.length);
}
