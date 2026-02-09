// NOTE: Do NOT add setup() or draw() in this file
// Final ending screen - displays message based on Health threshold

const endingBtn = {
  x: 400,
  y: 680,
  w: 260,
  h: 70,
  label: "Restart Story",
};

function drawEnding() {
  let bgColor, titleText, messageText, textColor;

  // Determine ending based on Health
  if (health >= 1) {
    // Good ending
    bgColor = [150, 220, 150];
    textColor = [30, 80, 30];
    titleText = "GOOD ENDING";
    messageText =
      "You took responsibility for yourself this morning.\n" +
      "By making smart choices, you stayed healthy and productive.\n\n" +
      "Your day went great! Keep up this positive energy.";
  } else if (health === 0 || health === -1) {
    // Neutral ending
    bgColor = [200, 200, 150];
    textColor = [80, 80, 40];
    titleText = "NEUTRAL ENDING";
    messageText =
      "Your day was just... average.\n" +
      "You made some decent choices, some not so great.\n\n" +
      "Nothing terrible happened, but you didn't excel either.\n" +
      "Tomorrow is a new opportunity.";
  } else {
    // Bad ending (Health <= -2)
    bgColor = [220, 120, 120];
    textColor = [100, 30, 30];
    titleText = "BAD ENDING";
    messageText =
      "You made poor choices this morning.\n" +
      "Your health and well-being took a real hit.\n\n" +
      "You lost the day, disappointed everyone around you,\n" +
      "and feel worse about yourself. This needs to change.";
  }

  background(...bgColor);

  // Title
  fill(...textColor);
  textSize(44);
  textAlign(CENTER, CENTER);
  text(titleText, width / 2, 100);

  // Ending message
  fill(...textColor);
  textSize(15);
  textAlign(CENTER, TOP);
  text(messageText, width / 2, 200, 700);

  // Health display
  fill(...textColor);
  textSize(14);
  textAlign(LEFT, TOP);
  text("Final Health: " + health, 30, 30);

  // Return button
  drawEndingButton(endingBtn, textColor);
  cursor(isHover(endingBtn) ? HAND : ARROW);
}

function drawEndingButton({ x, y, w, h, label }, textColor) {
  rectMode(CENTER);
  const hover = isHover({ x, y, w, h });

  noStroke();
  // Button color matches the ending theme
  if (health >= 1) {
    fill(hover ? color(120, 200, 120) : color(150, 200, 150));
  } else if (health === 0 || health === -1) {
    fill(hover ? color(180, 160, 80) : color(200, 180, 100));
  } else {
    fill(hover ? color(180, 60, 60) : color(200, 80, 80));
  }

  rect(x, y, w, h, 10);

  fill(255);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

function endingMousePressed() {
  if (isHover(endingBtn)) {
    health = 0;
    currentScreen = "menu";
  }
}

function endingKeyPressed() {
  if (keyCode === ENTER || key === "r" || key === "R") {
    health = 0;
    currentScreen = "menu";
  }
}
