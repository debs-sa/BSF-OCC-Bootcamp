class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        throw new Error(`Method not implemented.`);
    }
}

class Rectangle extends Shape {
    displayFormula() {
        console.log(`The area of the rectangle is:, ${this.width} * ${this.height}`);
    }
    calculateArea() {
        let area = this.width * this.height;
        console.log(`The area of the rectangle is: `, area);
    }
}

let shape1 = new Rectangle(3, 6);
shape1.displayFormula();
shape1.calculateArea();