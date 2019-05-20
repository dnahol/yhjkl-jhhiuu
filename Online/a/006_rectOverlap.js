/* Write a program to return the intersection of two
given rectangles. The rectangle is represented in an
object and has the following properties:

x - bottom left X-axis position
y - bottom left Y-axis position

width - rectangle width
height - rectangle height

If there is no intersection, return:
{x:0, y:0, width: -1, height: -1}

If there is intersection, return the rectangle
object with the above properties.

Example:
*/

let rect1 = {
x: 0,
y: 0,

width: 10,
height: 10
};

let rect2 = {
x: 5,
y: 0,

width: 5,
height: 5
}; 

function rectOverlap(r1, r2) {
  let doOverlap = function(r1, r2) {
    if (((r1.x + r1.width) < r2.x) || ((r2.x + r2.width) < r1.x)) {
    return false;
    }
    if (((r1.y + r1.height) < r2.y) || ((r2.y + r2.height) < r1.y)) {
    return false;
    }
    return true;
  }
  if (doOverlap(r1, r2)) {
    return {
	    x: Math.max(r1.x, r2.x),
	    y: Math.max(r1.y, r2.y),
	    width: Math.min(r1.x + r1.width, r2.x + r2.width) - Math.max(r1.x, r2.x),
	    height: Math.min(r1.y + r1.height, r2.y + r2.height) - Math.max(r1.y, r2.y)
    }
  } else {
  return {
    x: 0,
    y: 0,
    width: -1,
    hegith: -1
    }
  }
}

console.log(rectOverlap(rect1, rect2));
// {x: 5, y: 0, width: 5, height: 5}

/* SOLTUION:
There are many different ways where rectangles can intersect.
A more intuitive approach is to focus on conditions where

rectangles do not intersect.
These rectangles don't overlap if one of these is met:

One rectangle is above top edge of other rectangle.
One rectangle is on left side of left edge of other rectangle.
Otherwise, the rectangles intersect, which means all points
with those X and Y values common to the rectangles are
the nonempty intersection.

The time complexity is O(1) since the number of
operations is constant independent of the rectangles' size.
*/
