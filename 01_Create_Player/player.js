// Create your player object. It should have the following: 
// Name (string)
// Portrait (string, URL to an image)
    // If you don't have a URL, use this one: "https://cdn.builder.io/api/v1/image/assets%2Fe72778d8929447f0816e03adfc1ae859%2Ff2c757f19df94c818deb73a091febee6"
// Age (Number)
// Region (string)
// Money (Number, default to 0)
const player = {

}
// --------------------------------------------------------------------
// Add a Bag object to the player object. 
// The bag has different pockets, but they are all empty.
// Items (array, default to empty array)
// Medicine (array, default to empty array)
// Pokeballs (array, default to empty array)
// TMs (array, default to empty array)
// Pokémon (array, default to empty array)

player.bag = {

}

// --------------------------------------------------------------------
// ➤ Your task: Create TWO Pokémon as objects.
// The first pokemon will be your STARTER
// The second pokemon will be your RIVAL
// Each Pokémon should have the following properties:
//
//    🐾 name: The Pokémon's name (string)
//    🔢 level: Its current level (number)
//    ✨ moveset: An array of special abilities (array of strings)
//       Each ability should have the following:
//       - name: The name of the move (string)
//       - pp: Power Points, how many times it can be used (number)
//       - damage: How much damage the move deals (number)
//       - type: The elemental type of the move.
//    🧬 type: The Pokémon's elemental type (array of strings)
//    ❤️ hp: The Pokémon's current health points (number)
//    ⚔️ attack: A number representing base attack power (number)
//    🏃 speed: A number representing base speed (number)
//
// You can choose classic starters like Charmander, Bulbasaur, etc.
// https://pokemondb.net/
// Or create your own original Pokémon if you’re feeling spicy! 🌶️
//

let starter = {};
let rival = {};

// --------------------------------------------------------------------
// You choose a pokemon, but how does it get into your bag? 
// Write a function that can add **any** object to **any** pocket in your bag.
//
// ➤ Your task: Write a function called `addToBag` that takes two parameters:
//    1. `item`: The object you want to add to your bag (e.g., a Pokémon or an item).
//    2. `pocket`: The pocket in your bag where the item should go (e.g., `pokemon`, `potions`, etc.).
//
// The function should:
//    1. Add the item to the correct pocket in the `bag` object.
//    2. Log a message: "You've added [item.name] to your [pocket]!"
//    3. Log the whole bag to the console to ensure it worked! 
//    4. Return the updated bag object.
//
// Example usage:
//    player.addToBag(starter, 'pokemon');

// Note how we are adding a new function directly onto the player object 
// so calling the function would be written as player.addToBag(item, "pocket")

// Note that .push() is a method that adds an item to the end of an array.
// You can use it to add items to the pockets in your bag.
// For example:
// player.bag.pokeballs.push(item);

player.addToBag = function (item, pocket) {

};
  
// --------------------------------------------------------------------
// ➤ Your task:
//    1. Use the `addToBag` function to add the Pokémon to your bag.
//    2. Use the `addToBag` function to add the healing potion to your bag.

// ---------------------------------------------------------------

// Professor Oak gives us our Pokémon and an extra potion:

let potion = {
    name: "Super Potion",
    type: "potion",
    healing: 50
  };
  
// Add the starter Pokémon and potion to the bag:



//--------------------------------------------------
export default player;