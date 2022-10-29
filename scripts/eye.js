$(".move-area").mousemove(function(event) {
  var eyeOne = $(".eye-one");
  // console.log('eyeOne', eyeOne)
  var x = (eyeOne.offset().left) + (eyeOne.width() / 2);
  var y = (eyeOne.offset().top) + (eyeOne.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 135;
  eyeOne.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

$(".move-area").mousemove(function(event) {
  var eyeTwo = $(".eye-two");
  // console.log('eyeTwo', eyeTwo)
  var x = (eyeTwo.offset().left) + (eyeTwo.width() / 2);
  var y = (eyeTwo.offset().top) + (eyeTwo.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 135;
  eyeTwo.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

$(".move-area").mousemove(function(event) {
  var eyeThree = $(".eye-three");
  // console.log('eyeThree', eyeThree)
  var x = (eyeThree.offset().left) + (eyeThree.width() / 2);
  var y = (eyeThree.offset().top) + (eyeThree.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 135;
  eyeThree.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

$(".move-area").mousemove(function(event) {
  var eyeFour = $(".eye-four");
  // console.log('eyeFour', eyeFour)
  var x = (eyeFour.offset().left) + (eyeFour.width() / 2);
  var y = (eyeFour.offset().top) + (eyeFour.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 135;
  eyeFour.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

$(".move-area").mousemove(function(event) {
  var eyeFive = $(".eye-five");
  // console.log('eyeFive', eyeFive)
  var x = (eyeFive.offset().left) + (eyeFive.width() / 2);
  var y = (eyeFive.offset().top) + (eyeFive.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 135;
  eyeFive.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
});

let displayLockCounter = 0

const backgroundsArray = ['nubula-bg','sky-bg', 'sky-flip-bg', 'black-bg', 
'none', 'time-bg', 'comp-tree-bg']


let counterOne = 5
$(".almond-one").click(function(){
  let almond = $(".almond-one");
  let newBg = backgroundsArray[Math.floor(Math.random()*backgroundsArray.length)]
  backgroundsArray.forEach(elem => {
    if (almond.hasClass(elem)) {
      almond.removeClass(elem)
      
      while(elem == newBg) {
        newBg = backgroundsArray[Math.floor(Math.random()*backgroundsArray.length)]
      }
    }
  })
  if (counterOne < 5) {
    counterOne = counterOne + 1
    almond.addClass(newBg)
  } else if (counterOne == 5) {
    counterOne = counterOne + 1
    almond.addClass('char83-bg')
    displayLockCounter = displayLockCounter + 1
    if (displayLockCounter == 5) {
      $('.lock-plate').removeClass('d-none')
    }
  }
})

let counterTwo = 5
$(".almond-two").click(function(){
  let almond = $(".almond-two");
  let newBg = backgroundsArray[Math.floor(Math.random()*backgroundsArray.length)]
  backgroundsArray.forEach(elem => {
    if (almond.hasClass(elem)) {
      almond.removeClass(elem)
      
      while(elem == newBg) {
        newBg = backgroundsArray[Math.floor(Math.random()*backgroundsArray.length)]
      }
    }
  })
  if (counterTwo < 5) {
    counterTwo = counterTwo + 1
    almond.addClass(newBg)
  } else if (counterTwo == 5) {
    counterTwo = counterTwo + 1
    almond.addClass('char84-bg')
    displayLockCounter = displayLockCounter + 1
    if (displayLockCounter == 5) {
      $('.lock-plate').removeClass('d-none')
    }
  }
})

let counterThree = 5
$(".almond-three").click(function(){
  let almond = $(".almond-three");
  let newBg = backgroundsArray[Math.floor(Math.random()*backgroundsArray.length)]
  backgroundsArray.forEach(elem => {
    if (almond.hasClass(elem)) {
      almond.removeClass(elem)
      
      while(elem == newBg) {
        newBg = backgroundsArray[Math.floor(Math.random()*backgroundsArray.length)]
      }
    }
  })
  if (counterThree < 5) {
    counterThree = counterThree + 1
    almond.addClass(newBg)
  } else if (counterThree == 5) {
    counterThree = counterThree + 1
    almond.addClass('char79-bg')
    // $('.eye-one').addClass('d-none')
    displayLockCounter = displayLockCounter + 1
    if (displayLockCounter == 5) {
      $('.lock-plate').removeClass('d-none')
    }
  }
})
let counterFour = 5
$(".almond-four").click(function(){
  let almond = $(".almond-four");
  let newBg = backgroundsArray[Math.floor(Math.random()*backgroundsArray.length)]
  backgroundsArray.forEach(elem => {
    if (almond.hasClass(elem)) {
      almond.removeClass(elem)
      
      while(elem == newBg) {
        newBg = backgroundsArray[Math.floor(Math.random()*backgroundsArray.length)]
      }
    }
  })
  if (counterFour < 5) {
    counterFour = counterFour + 1
    almond.addClass(newBg)
  } else if (counterFour == 5) {
    counterFour = counterFour + 1
    almond.addClass('char76-bg')
    displayLockCounter = displayLockCounter + 1
    if (displayLockCounter == 5) {
      $('.lock-plate').removeClass('d-none')
    }
  }
})

let counterFive = 5
$(".almond-five").click(function(){
  let almond = $(".almond-five");
  let newBg = backgroundsArray[Math.floor(Math.random()*backgroundsArray.length)]
  backgroundsArray.forEach(elem => {
    if (almond.hasClass(elem)) {
      almond.removeClass(elem)
      
      while(elem == newBg) {
        newBg = backgroundsArray[Math.floor(Math.random()*backgroundsArray.length)]
      }
    }
  })

  if (counterFive < 5) {
    counterFive = counterFive + 1
    almond.addClass(newBg)
  } else if (counterFive == 5) {
    counterFive = counterFive + 1
    almond.addClass('char69-bg')
    // $('.eye-one').addClass('d-none')
    displayLockCounter = displayLockCounter + 1
    if (displayLockCounter == 5) {
      $('.lock-plate').removeClass('d-none')
    }
  }
})

// Automatic Blinking

setInterval(() => {
  console.log('eyes closed')
  $('.almond-mon > .shut span').css('height', '100%')
  setTimeout(() => {
    console.log('eyes open')
    $('.almond-mon > .shut span').css('height', '15%')
  }, 200);
}, Math.floor(Math.random() * (10000 - 7000 + 1) + 7000));

setInterval(() => {
  console.log('eyes closed')
  $('.almond-ra > .shut span').css('height', '100%')
  setTimeout(() => {
    console.log('eyes open')
    $('.almond-ra > .shut span').css('height', '15%')
  }, 200);
}, Math.floor(Math.random() * (10000 - 7000 + 1) + 7000));



// class EyeCanvas {
//   constructor(canvas) {
//     this.ctx = canvas.getContext('2d');
//     this.height = canvas.clientHeight;
//     this.width = canvas.clientWidth;
//     this.position = {
//       x: canvas.offsetLeft,
//       y: canvas.offsetTop
//     };
//     this.center = {
//       x: this.width / 2,
//       y: this.height / 2
//     };
//     this.leftCorner = { x: 0, y: this.center.y };
//     this.rightCorner = { x: this.width, y: this.center.y };
//     this.ctx.lineWidth = 4;
//     //Calculate quadratic-Bezier-curve control points based on eye's openness
//     this.openness = 0.325;  //0.325 will be max
//     this.quadControlPoints = {
//       topLid: {
//         x: this.width / 2,
//         y: -(this.openness * this.height)
//       },
//       bottomLid: {
//         x: this.width / 2,
//         y: this.height + (this.openness * this.height)
//       }
//     }
//   };  //End constructor

//   //Clears canvas for drawing/updating
//   clear() {
//     this.ctx.clearRect(0, 0, this.width, this.height);
//   };
  
//   calculateTFromSlope(slope, xPositivity) {
//     var t = (0.5 * (Math.atan(Math.abs(slope)) / (Math.PI / 2)));
//     //If cursor is right of center, make t go past 0.5
//     if(xPositivity > 0) {
//       t = 0.5 + (0.5 - t);
//     }

//     return t;
//   }

//   //Returns a point on eyelid corresponding to a given t (0 <= t <= 1) and which eyelid cursor is closer to
//   calculateBezierPointOnEyelid(t, yPositivity) {
//     var lid = (yPositivity > 0) ? 'bottomLid' : 'topLid';
//     return {
//       x: (((1 - t)**2 * this.leftCorner.x)
//         + (2 * (1 - t) * t * this.quadControlPoints[lid].x)
//         + (t**2 * this.rightCorner.x)),
//       y: (((1 - t)**2 * this.leftCorner.y)
//         + (2 * (1 - t) * t * this.quadControlPoints[lid].y)
//         + (t**2 * this.rightCorner.y))
//     };
//   }

//   findPupilPosition(x, y, radius) {
//     //Line dimensions from center to mouse point
//     var rise = y - this.center.y;
//     var run = x - this.center.x;
//     var slope = run ? (rise / run) : 0;

//     //Calculate line-direction info (quadrant), and set values in case of vertical or horizontal lines
//     var xPositivity = run ? (Math.abs(run) / run) : 0;
//     var yPositivity = rise ? (Math.abs(rise) / rise) : 1;

//     //Angle of line from center of pupil to edge of eyelid
//     var angle = 55; //base angle (in degrees)
//     //Calculate angle from center of pupil to collision point on eyelid curve (to radians)
//     var angleCalc = (Math.PI * (angle / 180)) + ((1 - (angle / 90)) * Math.atan(Math.abs(slope)));
//     //Edge points on pupil to check collision with eyelids (when cursor is inside eyelids)
//     var pupilEdge  = {
//       x: x + (radius * Math.cos(angleCalc) * xPositivity),
//       y: run ? y + (radius * Math.sin(angleCalc) * yPositivity) : y + (radius * yPositivity)
//     }

//     //Nested ternary keeps t within lids (0 <= t <= 1) when pupil is near corners
//     var tForCollisionCheck = ((pupilEdge.x < radius) ? radius : ((pupilEdge.x > (this.width - radius)) ? (this.width - radius) : pupilEdge.x)) / 300;

//     var curvePointForCollisionCheck = this.calculateBezierPointOnEyelid(tForCollisionCheck, yPositivity);

//     /***** Variables above here are calculated first for use in finding collision with eyelids *****/

//     var pupilPosition = { x: x, y: y }; //Initialized to cursor or default position, and will be returned if there's no collision

//     //If there's a collision, determine pupil's position on eyelid...
//     if( (yPositivity > 0) ? (pupilEdge.y > curvePointForCollisionCheck.y) : (pupilEdge.y < curvePointForCollisionCheck.y) ) {
//       let distanceFromCursorToCurve = Math.sqrt((x - curvePointForCollisionCheck.x)**2 + (y - curvePointForCollisionCheck.y)**2);

//       //Avoid complicated calculations if cursor is perfectly vertical from center
//       if(!run) {
//         pupilPosition = { x: x, y: (this.calculateBezierPointOnEyelid(0.5, yPositivity).y - (radius * yPositivity)) };
//       }
//       //Soft collision (cursor position is still within eyelids)
//       else if( (distanceFromCursorToCurve < radius)
//          && ((this.calculateBezierPointOnEyelid((x / 300), yPositivity).y - y) * yPositivity > 0) )
//       {
//         //Find where line intersects curve through iteration (recalculate pupilEdge and collisionCheck values and check against cursor position)
//         let prevDistance = 0;
//         //Below for loop could use improvement
//         for(let i = 0; (i < 5) && (prevDistance !== distanceFromCursorToCurve); i++) {
//           //When distance between mouse and eyelid is less than radius, roughly recalculate a new pupil edge using that distance
//           pupilEdge  = {
//             x: x + (distanceFromCursorToCurve * Math.cos(angleCalc) * xPositivity),
//             y: run ? y + (distanceFromCursorToCurve * Math.sin(angleCalc) * yPositivity) : (curvePointForCollisionCheck.y * yPositivity)
//           }
//           let oldT = tForCollisionCheck;
//           //Calculate more appropriate t
//           if(distanceFromCursorToCurve > 2) {
//             tForCollisionCheck = pupilEdge.x / 300;
//           }
//           else {
//             //When distance is small, close in incrementally
//             tForCollisionCheck = (pupilEdge.x - (xPositivity * (distanceFromCursorToCurve / 2))) / 300;
//           }

//           //Find a closer curve point to check against
//           curvePointForCollisionCheck = this.calculateBezierPointOnEyelid(tForCollisionCheck, yPositivity);

//           prevDistance = distanceFromCursorToCurve;
//           distanceFromCursorToCurve = Math.sqrt((x - curvePointForCollisionCheck.x)**2 + (y - curvePointForCollisionCheck.y)**2);

//           pupilPosition = {
//             x: curvePointForCollisionCheck.x - (radius * Math.cos(angleCalc) * xPositivity),
//             y: curvePointForCollisionCheck.y - (radius * Math.sin(angleCalc) * yPositivity)
//           }
//         }
//       }
//       //Hard collision (cursor position is on or outside eyelids)
//       else {
//         let tFromLineAngle = this.calculateTFromSlope(slope, xPositivity); //rough t value

//         let pointFromLineAngle = this.calculateBezierPointOnEyelid(tFromLineAngle, yPositivity); //rough point calc

//         let tDiffFromAngleChange = tFromLineAngle - (this.calculateTFromSlope((pointFromLineAngle.y - this.center.y) / (pointFromLineAngle.x - this.center.x), xPositivity));
//         curvePointForCollisionCheck = this.calculateBezierPointOnEyelid((tFromLineAngle + tDiffFromAngleChange), yPositivity);
//         //Calculate point on curve closer and closer to line until they intersect (or it's close enough (limit 5 iterations))
//         for(let i = 0;
//           ((i < 5) && !(Math.floor(curvePointForCollisionCheck.y - this.center.y) === Math.floor(slope * (curvePointForCollisionCheck.x - this.center.x))));
//           i++)
//         {
//           tDiffFromAngleChange = (tFromLineAngle + tDiffFromAngleChange)
//             - (this.calculateTFromSlope((pointFromLineAngle.y - this.center.y)
//               / (pointFromLineAngle.x - this.center.x), xPositivity));

//           curvePointForCollisionCheck = this.calculateBezierPointOnEyelid((tFromLineAngle + tDiffFromAngleChange), yPositivity);

//           pointFromLineAngle = curvePointForCollisionCheck; //Next closer point
//         } //End for loop

//         pupilPosition = {
//           x: curvePointForCollisionCheck.x - (radius * Math.cos(angleCalc) * xPositivity),
//           y: curvePointForCollisionCheck.y - (radius * Math.sin(angleCalc) * yPositivity)
//         }
//       }

//       //Check for collision in corners
//       if( Math.abs(curvePointForCollisionCheck.y - (this.center.y - (curvePointForCollisionCheck.y - this.center.y)))
//         < Math.abs(curvePointForCollisionCheck.y - (pupilPosition.y - (radius * Math.sin(angleCalc) * yPositivity))) )
//       {
//         //Set collision point and position as though slope is 0...
//         curvePointForCollisionCheck.x = xPositivity > 0 ? this.width + 1 : -1;
//         pupilPosition.x = curvePointForCollisionCheck.x - (radius * Math.cos(Math.PI * (55/180)) * xPositivity);
//         //...then make final position calculation
//         pupilPosition = {
//           x: pupilPosition.x - (xPositivity * Math.abs( curvePointForCollisionCheck.x - (pupilPosition.x - (radius * Math.cos(Math.PI * (55 / 180)) * xPositivity)) )),
//           y: this.center.y
//         }
//       }
//     }

//     return pupilPosition;
//   }

//   //Use built-in Bezier-curve functions to draw eye shape according to corner points and given control points
//   //(apparently there's a quadratic Bezier function)
//   drawLids() {
//     this.ctx.beginPath();
//     this.ctx.moveTo(this.leftCorner.x, this.leftCorner.y); //start point (left corner)
    
//     this.ctx.quadraticCurveTo(
//       this.quadControlPoints.topLid.x, this.quadControlPoints.topLid.y,
//       this.rightCorner.x, this.rightCorner.y
//     );

//     this.ctx.quadraticCurveTo(
//       this.quadControlPoints.bottomLid.x, this.quadControlPoints.bottomLid.y,
//       this.leftCorner.x, this.leftCorner.y
//     );

//     this.ctx.stroke();
//   };

//   //Draw pupil based on cursor position
//   drawPupil(x, y) {
//     var pupil = {};
//     var pupilRadius = 20; //Best to keep under 30

//     //If no positions are given, then the mouse is outside the DOM and the pupil is centered
//     if(!x || !y) {
//       pupil.x = this.center.x;
//       pupil.y = this.center.y;
//     }
//     else {
//       pupil = this.findPupilPosition(x - this.position.x, y - this.position.y, pupilRadius);
//     }

//     //Draw pupil using calculated values
//     this.ctx.beginPath();
//     this.ctx.arc(pupil.x, pupil.y, pupilRadius, 0, 2 * Math.PI);
//     this.ctx.fill();
//   }
// };  //End EyeCanvas class declaration


// /************************************ Where the action starts ************************************/
// document.addEventListener("DOMContentLoaded", function(event) {
//   var eye = new EyeCanvas(document.getElementById("canvas"));
//   eye.drawLids();
//   eye.drawPupil();

//   document.addEventListener("mousemove", function(e) {
//     eye.clear();
//     eye.drawLids();
//     eye.drawPupil(e.clientX, e.clientY);
//   }, false);

//   document.addEventListener("mouseout", function(e) {
//     eye.clear();
//     eye.drawLids();
//     eye.drawPupil();
//   });
// });
