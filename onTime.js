// NOTE: Do NOT add setup() or draw() in this file
// Outcome scene: Got to school on time (Choice 1, +1 Health)

const onTimeBtn = {
  x: 400,
  y: 680,
  w: 250,
  h: 70,
  label: "Continue",
};

function drawOnTime() {
  background(200, 240, 200); // light green

  // Title
  fill(40, 80, 40);
  textSize(36);
  textAlign(CENTER, CENTER);
  text("You Got to School on Time!", width / 2, 100);

  // Outcome text
  fill(40, 80, 40);
  textSize(15);
  textAlign(CENTER, TOP);
  text(
    "You jumped out of bed and got ready in record time.\n" +
      "You made the bus with seconds to spare!\n\n" +
      "You arrived at school on time. Your teacher gave you\n" +
      "a 'Great attendance!' comment.",
    width / 2,
    200,
    700,
  );

  // Health display
  fill(40, 80, 40);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Health: " + health, 30, 30);

  // Continue button
  drawOnTimeButton(onTimeBtn);
  cursor(isHover(onTimeBtn) ? HAND : ARROW);
}

function drawOnTimeButton({ x, y, w, h, label }) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();
  fill(hover ? color(150, 200, 150, 220) : color(180, 220, 180, 190));
  rect(x, y, w, h, 10);

  fill(40, 80, 40);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

function onTimeMousePressed() {
  if (isHover(onTimeBtn)) {
    currentScreen = "ending";
  }
}

function onTimeKeyPressed() {
  if (keyCode === ENTER || key === " ") {
    currentScreen = "ending";
  }
}
