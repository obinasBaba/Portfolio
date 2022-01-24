---
contentKey: blog
title: Magnet-button
date: 2021-06-16T08:06:43.916Z
tags:
  - tag: "#framer-motion"
  - tag: "#js"
  - tag: "#React"
thumbnail: /img/featured-media.png
---
<!--StartFragment-->

### **The birth of an idea**

In my portfolio I have used the effect of Magnetic-Button, w/c lets you trigger the hover effect on the element when the cursor is near it, but not over it yet. The effect gives a very interactive effect to the site.

Lets us see the basic code snippets and walk through them together.
The first logic we need to understand is we need a way to detect the distance b/n the element and the cursor so that we can decide how much distance(radius) is enough to invoke the interaction.

```javascript
class MagneticHover{
    constructor(options) {
        //get any callback is passed or create default callback
        this.cb = options.callback || ((distance) => 
            console.log(distance));
        
        this.element = options.element;  // target element
        this.radius = options.radius; // distance to invoke the cb
        this._init(); // initialization
    }
}
```

```javascript
class MagneticHover{
    // ...
    
    _init() {
        window.addEventListener("mousemove", this._handleMouseMove);
    }

    get _elementPosition() {
        const elementCoordinate = this.element.getBoundingClientRect();
        return {
            left: elementCoordinate.left + document.body.scrollLeft,
            right: elementCoordinate.left + document.body.scrollLeft + this.element.offsetWidth,
            top: elementCoordinate.top + document.body.scrollTop,
            bottom: elementCoordinate.top + document.body.scrollTop + this.element.offsetHeight,
        };
    }
    
    _handleMouseMove({ clientX, clientY }) {
        this.mouseX = clientX;
        this.mouseY = clientY;
        if (this._isWithinRange()) {
            this._distance = this._getResultingDistance();
        } else {
            this._distance = 100;
        }
        this.cb(this._distance);
    }

    _isWithinRange() {
        return this._getDiagonalDistance() < this.radius;
    }

    _getDiagonalDistance() {
        const distanceX = this._mouseMoveRange.x - this.mouseX;
        const distanceY = this._mouseMoveRange.y - this.mouseY;
        const hypotenuse = this._getHypotenuse(distanceX, distanceY);
        return Math.floor(hypotenuse);
    }

    _getResultingDistance() {
        return this._getPercent(
            this.radius,
            this._getDiagonalDistance()
        );
    }

    get _mouseMoveRange() {
        const { left, right, top, bottom } = this._elementPosition;
        const coordinatX = this._intersectX ? this.mouseX : (right < this.mouseX ? right : left);
        const coordinatY = this._intersectY ? this.mouseY : (bottom < this.mouseY ? bottom : top);
        return {
            x: coordinatX,
            y: coordinatY,
        };
    }
}
```

We need to check for interaction with the element along the x & y-axis, when this two function return true we now our cursor is on the element

```javascript
class MagneticHover{
    // ...

    get _intersectX() {
        const { left, right } = this._elementPosition;
        return Math.min(this.mouseX, right) >= Math.max(this.mouseX, left);
    }

    /**
     * @return {Object} checks intersection with an element along the y axis
     * @return {boolean} intersection Y axis
     */
    get _intersectY() {
        const { top, bottom } = this._elementPosition;
        return Math.min(this.mouseY, bottom) >= Math.max(this.mouseY, top);
    }
}
```


<!--EndFragment-->