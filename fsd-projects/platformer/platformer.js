$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(180, 600, 160, 10, "red")
createPlatform(0, 490, 160, 10, "orange")
createPlatform(180, 390, 160, 10, "yellow")
createPlatform(0, 290, 160, 10, "green")
createPlatform(0, 700, 160, 10, "pink")
createPlatform(180, 190, 160, 10, "blue")
createPlatform(0, 90, 160, 10, "purple")
createPlatform(340, 0, 10, 650, "black")
createPlatform(350, 300, 400, 10, "white")
createPlatform(750, 400, 10, 1000, "violet")
createPlatform(450, 650, 150, 10, "brown")
createPlatform(350,550, 130, 10, "grey")
createPlatform(450, 450, 200, 10, "teal")
createPlatform(900, 650, 200, 10, "aqua")
createPlatform(1100, 520, 200, 10, "bisque")
createPlatform(1300, 390, 150, 10, "chartreuse")
createPlatform(1000, 300, 200, 10, "deeppink")
createPlatform(1000, 170, 200, 10, "gold")
createPlatform(350, 170, 400, 10, "lavender")
createPlatform(1000, 180, 10, 200, "springgreen")

    // TODO 3 - Create Collectables
createCollectable("heart", 10, 10)
createCollectable("heart", 730, 330)
createCollectable("heart", 350, 130)

    
    // TODO 4 - Create Cannons
createCannon("bottom", 50, 1000)
createCannon("right", 215, 1500)
createCannon("left", 670, 1800)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
