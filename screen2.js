class Screen2 {
  constructor() {

  }

  display() {

    var made = 0;
    var total = 0;
    var gameState = 1;
    var insM;
    var rule1M;
    var startM;
    if (gameState === 1) {
      var backGround = createElement("div");
      backGround.id("backGround");
      backGround.position(0, 0);
      
      //console.log("screen2 has been created");
      
      var logo = createImg(
        'logo.PNG',
        'LogoM'
      );
      logo.parent(backGround);
      logo.position(width / 25, height / 2);
      logo.id("logoM");
      var beginM = createImg(
        'beginM.png',
        'beginM'
      );
      beginM.parent(backGround);
      beginM.position(width / 2.4, height);
      beginM.id("beginM");
      beginM.mousePressed(change);
      beginM.touchStarted(change);
    }

    function change() {
      logo.hide();
      beginM.hide();
      gameState = 2;
      insM = createImg(
        'insM.png',
        'insM'
      );
      insM.parent(backGround);
      insM.position(width / 25, height/ 9);
      insM.id("insM");
      rule1M = createImg(
        'rules2.png',
        'rule1M'
      );
      rule1M.parent(backGround);
      rule1M.position(width / 32, height/ 3);
      rule1M.id("rule1M");
      
      startM = createImg(
        'startM.png',
        'startM'
      );
      startM.parent(backGround);
      startM.position(width / 2.5, height +200);
      startM.id("startM");
      startM.mousePressed(change1M);
      startM.touchStarted(change1M);
    }
  
      function change1M() {
        var x
        var y
        insM.hide();
        rule1M.hide();
        startM.hide();
        
        var warn= createElement("h4")
        warn.html("TAP   TWICE   TO   BEGIN")
        warn.position(60,30)
        
        //court for medium screen
        var courtM= createImg(
          'Court.png',
          'Court'
        );
        courtM.position(width/2-180,height/2+200)
        courtM.id("courtM")
//court button touched for position
courtM.touchStarted(function(){document.getElementById("courtM").addEventListener("touchstart",function(e){
              x= e.touches[0].clientX;
              y= e.touches[0].clientY;
              warn.hide()
             
     })
  })
        //make and miss text heading created
        var make = createElement('h2', "M A K E");
        make.position(width / 12 , height / 4);
        var miss = createElement('h2', "M I S S");
        miss.position(width / 1.4, height / 4);
        
//make button created positioned, provided with id
        var makeButtonM = createImg(
          'makeButton.PNG',
          'makeButtonM'
        );
        makeButtonM.parent(backGround);
        makeButtonM.position(width / 8, height / 2);
        makeButtonM.id("makeButtonM");
    
//when make button is pressed
makeButtonM.touchStarted(function() {
          makeImg = createImg(
            'circle2.png',
            'makeImg'
          );
          makeImg.position(x - 13, y - 13);
          made = made + 1;
          total = total + 1;
        });

//make button created positioned, provided with id
        var missButtonM = createImg(
          'missedButton.PNG',
          'missedButtonM'
        );
        missButtonM.parent(backGround);
        missButtonM.position(width / 1.4, height/2);
        missButtonM.id("missButtonM");
        var missed = 0;
        
// for when miss button is pressed
        missButtonM.touchStarted(function() {
          missImg = createImg(
            'cross.png',
            'missImg'
          );
          missImg.position(x - 15, y - 15);
          total = total + 1;
        });

//button three created
        var button3 = createButton("FINISH >");
        button3.position(width/2, height/2+150);
        button3.id("startButton2");
        button3.touchStarted(change2);

        function change2() {
          makeButtonM.hide();
          missButtonM.hide();
          miss.hide();
          make.hide();
          console.log("finished");
          
          
          var accuracy = createElement('h2', "A C C U R A C Y");
          accuracy.position(width / 2 - 97, height / 2 - 350);

          var score = createElement('h1');
          score.html(made + "/" + total)
          score.position(width / 2 - 60, height / 2 - 310);

          var percent = createElement('h2', "P E R C E N T A G E");
          percent.position(width / 2 - 130, height / 2 - 190);

          var percentage = Math.round(made / total * 100);


          score = createElement('h1');
          score.html(percentage + "%")
          score.position(width / 2 - 70, height / 2 - 160);
        }
      }

    }

  
}