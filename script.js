class Info {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }

    static calculateTriple(value = 1) {
        return value * 3;
    }
}

class Geometry extends Info {
    constructor (name, description, length) {
        super(name, description);
        this.length = length;
    }

    calculateArea (parameter) {
        return this.length * parameter;
    }
}

// Tạo các đối tượng của lớp hình học và gọi các thuộc tính
const triangle = new Geometry('triangle', "A polygon with three sides", 3);
console.log(triangle.name);
console.log(triangle.description);
console.log(triangle.length);
console.log(triangle.calculateArea(4));
console.log(Geometry.calculateTriple(2));