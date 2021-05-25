class Screen{
    constructor(){

    }

    display(){
      
        var made = 0;
        var total = 0;
        var gameState = 1;
      
        if (gameState === 1){
          var backGround = createElement("div");
          backGround.id("backGround");
          backGround.position(0,0);
           
          var logo = createImg(
              '/images/logo.PNG',
              'Logo'
            );
          
          logo.parent(backGround);
          logo.position(width/2-320, height/2-200);
          logo.id("logo");
          
          var button = createButton('BEGIN >');
          button.position(width/2-65, height/2+100);
          button.id("startButton");
          
          button.mousePressed(change);
          button.touchStarted(change);
        }
      
      
        function change() {
          logo.hide();
          button.hide();
          
          gameState = 2;
          
          var instructions = createElement('h1', 'INSTRUCTIONS');
          instructions.position(width/2-225, height/2-360);
          
          var no1 = createElement('h4', '1.');
          no1.position(width/2-375, height/2-200);
          
          var rule1 = createElement('h5', 'If you make a shot, click the make button, and then click the spot on the court<br>   where you shot from, it should show a circle there.')
          rule1.position(width/2-350, height/2-207);
          
          var no2 = createElement('h4', '2.');
          no2.position(width/2-375, height/2-100);
          
          var rule2 = createElement('h5', 'If you miss a shot, click the miss button, and then click the spot on the court<br>   where you shot from, it should show a cross there.')
          rule2.position(width/2-350, height/2-107);
          
          var no3 = createElement('h4', '3.');
          no3.position(width/2-375, height/2);
          
          var rule3 = createElement('h5', 'After you are done, click the finish button on top of your screen, you will see<br> a summary. Take a screenshot of the page to keep track of your progress.')
          rule3.position(width/2-350, height/2-7);
          
          var quote = createElement('h5', "We don't quit, we don't cower, we don't run. We endure and conquer.")
          quote.position(width/2-315, height/2+110);
          
          var kobe = createElement('h4', '- Kobe Bryant');
          kobe.position(width/2-90, height/2+150);
          
          var button2 = createButton("START >");
          button2.position(width/2-70, height/2+250);
          button2.id("startButton2");
          button2.mousePressed(change1);
          button2.touchStarted(change1);
          
          function change1() {
                instructions.hide();
                no1.hide();
                rule1.hide();
                no2.hide();
                rule2.hide();
                no3.hide();
                rule3.hide();
                quote.hide();
                kobe.hide();
                button2.hide();
            
                var court = createImg(
                  '/images/Court.png',
                  'Court'
                );
          
                court.position(width/2-280, height/2-5);
                court.id("court");
                court.mouseClicked(function () {
                  x = mouseX;
                  y = mouseY;
                  console.log(x+" and "+y);
                });
            
                court.touchStarted(function () {
                  x = mouseX;
                  y = mouseY;
                  console.log(x+" and "+y);
                });
            
                var make = createElement('h2', "M A K E");
                make.position(width/2-210,height/2-250);
            
                var miss = createElement('h2', "M I S S");
                miss.position(width/2+70,height/2-250);
            
                var makeButton = createImg(
                  '/images/makeButton.PNG',
                  'makeButton'
                );
            
                makeButton.parent(backGround);
                makeButton.position(width/2-195, height/2-165);
                makeButton.id("makeButton");
                makeButton.mouseClicked(function () {
                  makeImg = createImg(
                    '/images/circle2.png',
                    'makeImg'
                  );
                  makeImg.position(x-13,y-13);
                  made = made + 1;
                  total = total + 1;
                });
            
                makeButton.touchStarted(function () {
                  makeImg = createImg(
                    '/images/circle2.png',
                    'makeImg'
                  );
                  makeImg.position(x-13,y-13);
                  made = made + 1;
                  total = total + 1;
                });


                var missButton = createImg(
                  '/images/missedButton.PNG',
                  'missedButton'
                );
                missButton.parent(backGround);
                missButton.position(width/2+80, height/2-165);
                missButton.id("missButton");
            
                var missed = 0;
                missButton.mouseClicked(function () {
                  missImg = createImg(
                    '/images/cross.png',
                    'missImg'
                  );
                  
                  missImg.position(x-15,y-15);
                  total = total+1;
                });
            
                missButton.touchStarted(function () {
                  missImg = createImg(
                    '/images/cross.png',
                    'missImg'
                  );
                  
                  missImg.position(x-15,y-15);
                  total = total+1;
                });

              var button3 = createButton("FINISH >");
              button3.position(width/2+50, height/2-50);
              button3.id("startButton2");
              button3.mousePressed(change2);
            
              function change2(){
                    makeButton.hide();
                    missButton.hide();
                    miss.hide();
                    make.hide();
                
                    var accuracy = createElement('h2', "A C C U R A C Y");
                    accuracy.position(width/2-150,height/2-310);

                    var score = createElement('h1');
                    score.html(made+"/"+total)
                    score.position(width/2-60, height/2-310);

                    var percent = createElement('h2', "P E R C E N T A G E");
                    percent.position(width/2-130,height/2-190);

                    var percentage = Math.round(made/total*100);


                    var score = createElement('h1');
                    score.html(percentage+"%")
                    score.position(width/2-70, height/2-160);
              } 
            }

    }
    
    }
}
