 resultsArray = [];
confidence = object.score * 100;


function setup() {
  
}

function draw() {
  if (resultsArray.length > 0) {
    for (let i = 0; i < resultsArray.length; i++) {
      let object = resultsArray[i];
      let confidence = object.confidence * 100; 
      let label = object.label;
      let x = object.x;
      let y = object.y;
      let w = object.width;
      let h = object.height;

    
      fill(255);
      textSize(16);
      text(label + ": " + nf(confidence, 2, 2) + "%", x + 10, y + 20);

      
      noFill();
      stroke(255, 0, 0);
      strokeWeight(2);
      rect(x, y, w, h);
    }
  }
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  resultsArray = results;
  
  document.getElementById('object-count').innerText = "Detected " + resultsArray.length + " objects.";
}

