// ------------------------------------------------------------
// main.js = the “router” (traffic controller) for the whole game
// ------------------------------------------------------------
//
// Idea: this project has multiple screens (start, instructions, game, win, lose).
// Instead of putting everything in one giant file, each screen lives in its own
// file and defines two main things:
//   1) drawX()         → how that screen looks
//   2) XMousePressed() / XKeyPressed() → how that screen handles input
//
// This main.js file does 3 important jobs:
//   A) stores the current screen in a single shared variable
//   B) calls the correct draw function each frame
//   C) sends mouse/keyboard input to the correct screen handler

// ------------------------------
// Global game state
// ------------------------------
// This variable is shared across all files because all files run in the same
// global JavaScript scope when loaded in index.html.
//
// We store the “name” of the current screen as a string.
// Only one screen should be active at a time.
let currentScreen = "menu"; // Flow: "menu" | "story" | "onTime" | "missDay" | "parentsYell" | "ending"
// ADDED: Player health stat for story
let health = 0;
// ------------------------------
// setup() runs ONCE at the beginning
// ------------------------------
// This is where you usually set canvas size and initial settings.
function setup() {
  createCanvas(800, 800);

  // Sets a default font for all text() calls
  // (This can be changed later per-screen if you want.)
  textFont("sans-serif");
}

// ------------------------------
// draw() runs every frame (many times per second)
// ------------------------------
// This is the core “router” for visuals.
// Depending on currentScreen, we call the correct draw function.
function draw() {
  // Menu + Story flow. Each screen file defines its own draw function:
  //   menu.js          → drawMenu()
  //   story.js         → drawStory()
  //   onTime.js        → drawOnTime()
  //   missDay.js       → drawMissDay()
  //   parentsYell.js   → drawParentsYell()
  //   ending.js        → drawEnding()

  if (currentScreen === "menu") drawMenu();
  else if (currentScreen === "story") drawStory();
  else if (currentScreen === "onTime") drawOnTime();
  else if (currentScreen === "missDay") drawMissDay();
  else if (currentScreen === "parentsYell") drawParentsYell();
  else if (currentScreen === "ending") drawEnding();
  else {
    // Safety fallback: if currentScreen is invalid, reset to menu.
    // This prevents a "soft lock" with a blank screen.
    currentScreen = "menu";
    drawMenu();
  }
  // (Optional teaching note)
  // This “if/else chain” is a very common early approach.
  // Later in the course you might replace it with:
  // - a switch statement, or
  // - an object/map of screens
}

// ------------------------------
// mousePressed() runs once each time the mouse is clicked
// ------------------------------
// This routes mouse input to the correct screen handler.
function mousePressed() {
  // Menu + Story flow. Each screen *may* define a mouse handler.
  // The ?.() means "call this function only if it exists"

  if (currentScreen === "menu") menuMousePressed?.();
  else if (currentScreen === "story") storyMousePressed?.();
  else if (currentScreen === "onTime") onTimeMousePressed?.();
  else if (currentScreen === "missDay") missDayMousePressed?.();
  else if (currentScreen === "parentsYell") parentsYellMousePressed?.();
  else if (currentScreen === "ending") endingMousePressed?.();
}

// ------------------------------
// keyPressed() runs once each time a key is pressed
// ------------------------------
// This routes keyboard input to the correct screen handler.
function keyPressed() {
  // Menu + Story flow. Each screen *may* define a key handler.

  if (currentScreen === "menu") menuKeyPressed?.();
  else if (currentScreen === "story") storyKeyPressed?.();
  else if (currentScreen === "onTime") onTimeKeyPressed?.();
  else if (currentScreen === "missDay") missDayKeyPressed?.();
  else if (currentScreen === "parentsYell") parentsYellKeyPressed?.();
  else if (currentScreen === "ending") endingKeyPressed?.();
}

// ------------------------------------------------------------
// Shared helper function: isHover()
// ------------------------------------------------------------
//
// Many screens have buttons.
// This helper checks whether the mouse is inside a rectangle.
//
// Important: our buttons are drawn using rectMode(CENTER),
// meaning x,y is the CENTRE of the rectangle.
// So we check mouseX and mouseY against half-width/half-height bounds.
//
// Input:  an object with { x, y, w, h }
// Output: true if mouse is over the rectangle, otherwise false
function isHover({ x, y, w, h }) {
  return (
    mouseX > x - w / 2 && // mouse is right of left edge
    mouseX < x + w / 2 && // mouse is left of right edge
    mouseY > y - h / 2 && // mouse is below top edge
    mouseY < y + h / 2 // mouse is above bottom edge
  );
}
