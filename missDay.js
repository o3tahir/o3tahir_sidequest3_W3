// NOTE: Do NOT add setup() or draw() in this file
// Outcome scene: Missed the whole day (Choice 2, -2 Health)

const missDayBtn = {
  x: 400,
  y: 680,
  w: 250,
  h: 70,
  label: "Continue",
};

function drawMissDay() {
  background(255, 200, 200); // light red

  // Title
  fill(120, 40, 40);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("You Missed the Whole Day!", width / 2, 100);

  // Outcome text
  fill(120, 40, 40);
  textSize(15);
  textAlign(CENTER, TOP);
  text(
    "You closed your eyes 'just for a moment'...\n" +
      "But when you woke up again, it was 2 PM!\n\n" +
      "You completely missed school. Now you have to explain\n" +
      "to both your parents AND your teachers why you skipped.",
    width / 2,
    200,
    700,
  );

  // Health display
  fill(120, 40, 40);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Health: " + health, 30, 30);

  // Continue button
  drawMissDayButton(missDayBtn);
  cursor(isHover(missDayBtn) ? HAND : ARROW);
}

function drawMissDayButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();
  fill(hover ? color(255, 120, 120, 220) : color(255, 150, 150, 190));
  rect(x, y, w, h, 10);

  fill(120, 40, 40);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

function missDayMousePressed() {
  if (isHover(missDayBtn)) {
    currentScreen = "ending";
  }
}

function missDayKeyPressed() {
  if (keyCode === ENTER || key === " ") {
    currentScreen = "ending";
  }
}
