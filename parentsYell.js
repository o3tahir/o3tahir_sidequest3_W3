// NOTE: Do NOT add setup() or draw() in this file
// Outcome scene: Parents yell at you (Choice 3, -1 Health)

const parentsYellBtn = {
  x: 400,
  y: 680,
  w: 250,
  h: 70,
  label: "Continue",
};

function drawParentsYell() {
  background(255, 220, 180); // light orange

  // Title
  fill(100, 60, 20);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("Your Parents Found You!", width / 2, 100);

  // Outcome text
  fill(100, 60, 20);
  textSize(15);
  textAlign(CENTER, TOP);
  text(
    "You're scrolling through your phone, still in bed...\n" +
      "Suddenly your parents burst in the door!\n\n" +
      "They yell about how you're wasting time, missing school,\n" +
      "and need to get moving RIGHT NOW.",
    width / 2,
    200,
    700,
  );

  // Health display
  fill(100, 60, 20);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Health: " + health, 30, 30);

  // Continue button
  drawParentsYellButton(parentsYellBtn);
  cursor(isHover(parentsYellBtn) ? HAND : ARROW);
}

function drawParentsYellButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();
  fill(hover ? color(255, 180, 100, 220) : color(255, 200, 130, 190));
  rect(x, y, w, h, 10);

  fill(100, 60, 20);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

function parentsYellMousePressed() {
  if (isHover(parentsYellBtn)) {
    currentScreen = "ending";
  }
}

function parentsYellKeyPressed() {
  if (keyCode === ENTER || key === " ") {
    currentScreen = "ending";
  }
}
