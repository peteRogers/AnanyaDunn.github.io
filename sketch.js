let qArray;



let buttonArray = []
let cQuestion = 0
let mig
let title
let backgroundImage
let buttonHeight

qArray = [
  {q: "What is your favorite Colour?", 
    answer:["Orange", "Blue", "Yellow", "Yellow", "Pink", "Duck-Egg Blue"],
    img:["a1.png", 
    "a2.png", 
    "a3.png", 
    "a4.png", 
    "a5.png", 
    "a6.png"]
  },
  {q: "Who is your favorite Artist?", 
    answer:["Catfish And The Bottlemen", "Avicii", "Amadou and Mariam", "Aphex Twin ", "Jessie J", "Bon Iver"],
    img:["b1.png", 
    "b2.png", 
    "b3.png", 
    "b4.png", 
    "b5.png", 
    "b6.png"]
  },
  {q: "What is your favorite Book?", 
    answer:["Milk and Honey", "Breasts and Eggs", "Dork Diaries", "Muddle Earth", "An Abundance of Katherines", "On the Road"],
    img:["c1.png", 
    "c2.png", 
    "c3.png", 
    "c4.png", 
    "c5.png", 
    "c6.png"]
  },
  {q: "What is your favorite Drink?", 
  answer:["Strongbow Darkfruit", "Orange Juice", "Water", "Lemon San Pellegrino", "Lucozade", "Chocolate Milkshake"],
  img:["d1.png", 
  "d2.png", 
  "d3.png", 
  "d4.png", 
  "d5.png", 
  "d6.png"]
},
{q: "What is your favorite Film?", 
answer:["Me and Earl and the Dying Girl", "We bought a Zoo", "Peter Pan", "Almost Famous", "The Incredibles", "Too Many to Choose"],
img:["e1.png", 
"e2.png", 
"e3.png", 
"e4.png", 
"e5.png", 
"e6.png"]
},
{q: "What is your favorite Food?", 
answer:["Pasta", "Pasta", "Pasta", "Lasagne", "Orzo Pasta", "Pasta"],
img:["f1.png", 
"f2.png", 
"f3.png", 
"f4.png", 
"f5.png", 
"f6.png"]
},
{q: "Which Social Media?", 
answer:["Instagram", "Instagram", "Snapchat", "Snapchat", "What is a Phone?", "Flappy Bird"],
img:["g1.png", 
"g2.png", 
"g3.png", 
"g4.png", 
"g5.png", 
"g6.png"]
},
{q: "What is your ambition?", 
answer:["Artist", "Singer", "To be Famous", "Cinematographer", "Director", "I don't know"],
img:["h1.png", 
"h2.png", 
"h3.png", 
"h4.png", 
"h5.png", 
"h6.png"]
}
,
{q: "Completed Look.", 
answer:["", "", "", "", "", ""],
img:["", 
"", 
"", 
"", 
"", 
""]
}

  
  

]

function preload(){
  backgroundImage = loadImage("0.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonHeight = height / 8
 // background('grey');
  var by = buttonHeight
  fill(0)
  title = createButton(qArray[0].q);
  title.style('font-size', ""+buttonHeight/5+"px");
  title.style('background-color', color(255))
  title.style('text-align', 'right')
  title.style('border', 'none')
  title.position(0, 0); 
  title.size(width/2, buttonHeight);
  
  
  text("Question", 0, 0)
  for (var i = 0; i < 6; i++) {
    let button = createButton(qArray[cQuestion].answer[i]);
    button.style('font-size', ""+buttonHeight/6+"px");
    button.style('background-color', color(255))
    button.style('border', 'none')
    button.style('text-align', 'right')
    button.position(0, by); 
    button.size(width/2, buttonHeight );
    button.id(i)
    
    by = by + buttonHeight
    button.mouseOver(function () {
      changeOver(button);
    });
    button.mouseOut(function () {
      changeOut(button);
    });
    button.mouseReleased(function () {
      choiceMade(button);
    });
    
    buttonArray.push(button)
  }
  if(width < height){
    backgroundImage.resize(width/2, 0)
  }else{
    backgroundImage.resize(0, height)
  }
  console.log((height - backgroundImage.height)/2)
  image(backgroundImage, width/2, (height - backgroundImage.height)/2)
}

function changeOver(b) {
  let col = color(25, 23, 200, 50);
  
  b.style('background-color', col);
}

function draw(){

}


function changeOut(b) {
  let col = color(255, 255, 255);

  b.style('background-color', col);
}

function choiceMade(b) {
  
  
  
  let img = loadImage(qArray[cQuestion].img[b.id()], function(){
    if(width < height){
      img.resize(width/2, 0)
    }else{
      img.resize(0, height)
    }
    
    image(img, width/2, (height - img.height)/2);
    console.log("faafoo")
  })
  cQuestion = cQuestion + 1
  title.elt.innerHTML = qArray[cQuestion].q
 
  for(var i in qArray[cQuestion].answer){
      buttonArray[i].elt.innerHTML = qArray[cQuestion].answer[i]
  }
 
}

