'use strict'

class Rectangle{

    constructor(height, width) {
        this.height = height
        this.wight = width
    }

    calcArea(){
        return this.height * this.wight
    }

}


class ColoredRectangleWithtext extends Rectangle{
    constructor(height, width, text, bcColor) {
        super(height, width);
        this.text = text
        this.bgColor = bcColor
    }

    show(){
        console.log(this)
    }
}


let myRectange = new Rectangle(5, 6)
let a = new ColoredRectangeWithtext(6, 7, 'asf', 'blue')
a.show()
