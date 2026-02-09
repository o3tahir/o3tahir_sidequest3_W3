// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file defines the opening story scene with 3 choices

// ---- Choice buttons
const storyBtn1 = {
  x: 400,
  y: 350,
  w: 380,
  h: 60,
  label: "1) Get up quickly and get ready",
};

const storyBtn2 = {
  x: 400,
  y: 430,
  w: 380,
  h: 60,
  label: "2) Go back to sleep",
};

const storyBtn3 = {
  x: 400,
  y: 510,
  w: 380,
  h: 60,
  label: "3) Check phone in bed",
};

// ---- Draw function
function drawStory() {
  background(255, 240, 245); // soft pink

  // Title
  fill(60, 30, 50);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("Wake Up Late!", width / 2, 100);

  // Description
  fill(60, 30, 50);
  textSize(15);
  textAlign(CENTER, TOP);
  text(
    "Your alarm went off 30 minutes late.\nYou're already supposed to be at school!\nWhat do you do?",
    width / 2,
    160,
    700,
  );

  // Health display
  fill(60, 30, 50);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Health: " + health, 30, 30);

  // Draw choice buttons
  drawStoryButton(storyBtn1);
  drawStoryButton(storyBtn2);
  drawStoryButton(storyBtn3);

  // Cursor feedback
  const over = isHover(storyBtn1) || isHover(storyBtn2) || isHover(storyBtn3);
  cursor(over ? HAND : ARROW);
}

// ---- Helper function to draw a choice button
function drawStoryButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();
  fill(hover ? color(255, 150, 200, 220) : color(255, 180, 220, 190));
  rect(x, y, w, h, 10);

  fill(40, 20, 40);
  textSize(13);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ---- Mouse input
function storyMousePressed() {
  if (isHover(storyBtn1)) {
    health += 1;
    currentScreen = "onTime";
  } else if (isHover(storyBtn2)) {
    health -= 2;
    currentScreen = "missDay";
  } else if (isHover(storyBtn3)) {
    health -= 1;
    currentScreen = "parentsYell";
  }
}

// ---- Keyboard input
function storyKeyPressed() {
  if (key === "1") {
    health += 1;
    currentScreen = "onTime";
  } else if (key === "2") {
    health -= 2;
    currentScreen = "missDay";
  } else if (key === "3") {
    health -= 1;
    currentScreen = "parentsYell";
  }
}
