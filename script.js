console.log("script loaded");

/* Get references to the card and button elements

.getElementById() is used to get the card element by its ID specifically,
and querySelector() is used to get the button and close elements by their class and ID, respectively.

querySelector() is more flexible and can select elements using any CSS selector (e.g., class, ID, tag name, attribute)
while getElementById() is faster for selecting elements by ID (but only faster by a negligible amount).
*/

/* To make these multi-line comments type: Shift + Alt + A for Windows, Shift + Opt + A for Mac.*/

// For consistency's sake I will use querySelector moving on but I'm keeping the first one for the explanation above.

// VARIABLES PARKING LOT ---------------------------------------------------------------
const card = document.getElementById("card");
const cardTitle = document.querySelector('#card-title');
const cardNote = document.querySelector('#card-note');

// const button = document.querySelector('.object');
const buttons = document.querySelectorAll('.object');
const close = document.querySelector('#card-close');

// Array of Objects, they start at 0 and will have naming convention items[].name
const items = [
    {
        name: "Phoenix Feather",
        note: "Don't you ever get tired of the rainbow and silver feather that Lugia and Ho-oh keep dropping in Pokopia? Like dude, I'm BUSY RN. >:("
    },
    {
        name: "Leppa Berry",
        note: "Remember how the OG Pokemon Pearl game had Poffins? A Leppa Berry Poffin would've been so yummy. And it would've raised the cute stat too."
    },
    {
        name: "Quick Claw",
        note: "Why the hell do they give me this to just put in a frame?"
    }
];

// FUNCTIONS ---------------------------------------------------------------------------
function makeVisible(index) {
    card.hidden = false;
    cardTitle.textContent = items[index].name;
    cardNote.textContent = items[index].note;
    console.log("opened!");
}

function makeInvisible() {
    card.hidden = true;
    console.log("closed!");
}

// Adding 'DOMContentLoaded' to the listener ensures that the event listeners are added only after the entire 
// HTML document has been fully loaded and parsed. This prevents any potential issues with trying to access 
// elements that may not yet exist in the DOM when the script runs.

// document.addEventListener('DOMContentLoaded', () => {
//     button.addEventListener('click', makeVisible);
//     close.addEventListener('click', makeInvisible);
// });

// HOWEVER, since the script is loaded with the 'defer' attribute in the HTML, it will already execute after the HTML is parsed.
// Error: so adding the 'DOMContentLoaded' event listener is redundant in this case.
// If we were to use a script without the 'defer' attribute, we would have to use the DOMContentLoaded event listener and place the
// const reference variables inside the event listener to ensure they are defined after the DOM is fully loaded.


// Revised event listener setup without 'DOMContentLoaded' wrapper since the script is deferred:
buttons.forEach((button) => {
    // to avoid makeVisible running NOW, make it an arrow function
    button.addEventListener('click', () => {
        makeVisible(button.dataset.index); //button.dataset.index is a String type. If I ever need to do math with it, I need to wrap it in Number().
    });
});

close.addEventListener('click', makeInvisible);

// the function we give to the listener should NOT have the () e.g. makeVisible() attached. because that is
// defined as running the function RIGHT NOW instead of running the function when someone clicks.