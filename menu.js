// NOTE: Do NOT add setup() or draw() in this file
// Menu screen - entry point to the story

const menuBtn = {
  x: 400,
  y: 400,
  w: 240,
  h: 80,
  label: "START",
};

function drawMenu() {
  background(100, 150, 180); // Soft teal background

  // Title
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("Wake Up Late?", width / 2, 150);

  // Instructions
  fill(255);
  textSize(16);
  textAlign(CENTER, TOP);
  text("Press START or ENTER to Begin", width / 2, 280);

  // Start button
  drawMenuButton(menuBtn);
  cursor(isHover(menuBtn) ? HAND : ARROW);
}

function drawMenuButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  // Button styling
  noStroke();
  fill(hover ? color(80, 120, 150) : color(60, 100, 130));
  rect(x, y, w, h, 10);

  // Button text
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

function menuMousePressed() {
  if (isHover(menuBtn)) {
    health = 0;
    currentScreen = "story";
  }
}

function menuKeyPressed() {
  if (keyCode === ENTER) {
    health = 0;
    currentScreen = "story";
  }
}
