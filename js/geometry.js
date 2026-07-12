/*==================================================
                SCIENTIFIC CALCULATOR
==================================================*/

const display = document.getElementById("display");

function appendValue(value) {

    if (!display) return;

    display.value += value;

}

function clearDisplay() {

    if (!display) return;

    display.value = "";

}

function deleteLast() {

    if (!display) return;

    display.value = display.value.slice(0, -1);

}

function calculate() {

    if (!display) return;

    try {

        display.value = eval(display.value);

    }

    catch {

        alert("Invalid Expression!");

    }

}



/*==================================================
                    DIAMETER
==================================================*/

function calculateDiameterRadius() {

    const r = parseFloat(document.getElementById("radiusInput").value);

    const result = document.getElementById("radiusResult");

    if (isNaN(r)) {

        result.innerHTML = "Please enter a valid radius.";

        return;

    }

    const diameter = 2 * r;

    result.innerHTML =

    "<strong>Formula:</strong> d = 2r <br><br>" +

    "<strong>Solution:</strong><br>" +

    "d = 2 × " + r + "<br>" +

    "d = " + diameter + "<br><br>" +

    "<strong>Answer:</strong> " + diameter;

}



function calculateDiameterCircumference() {

    const c = parseFloat(document.getElementById("circumferenceInput").value);

    const result = document.getElementById("circumferenceResult");

    if (isNaN(c)) {

        result.innerHTML = "Please enter a valid circumference.";

        return;

    }

    const diameter = c / Math.PI;

    result.innerHTML =

    "<strong>Formula:</strong> d = C ÷ π <br><br>" +

    "<strong>Solution:</strong><br>" +

    "d = " + c + " ÷ π<br>" +

    "d = " + diameter.toFixed(2) + "<br><br>" +

    "<strong>Answer:</strong> " +

    diameter.toFixed(2);

}



function calculateDiameterArea() {

    const area = parseFloat(document.getElementById("areaInput").value);

    const result = document.getElementById("areaResult");

    if (isNaN(area)) {

        result.innerHTML = "Please enter a valid area.";

        return;

    }

    const diameter = 2 * Math.sqrt(area / Math.PI);

    result.innerHTML =

    "<strong>Formula:</strong> d = 2√(A ÷ π)<br><br>" +

    "<strong>Solution:</strong><br>" +

    "d = 2√(" + area + " ÷ π)<br>" +

    "d = " + diameter.toFixed(2) + "<br><br>" +

    "<strong>Answer:</strong> " +

    diameter.toFixed(2);

}



function calculateRadiusFromDiameter() {

    const d = parseFloat(document.getElementById("diameterInput").value);

    const result = document.getElementById("diameterResult");

    if (isNaN(d)) {

        result.innerHTML = "Please enter a valid diameter.";

        return;

    }

    const radius = d / 2;

    result.innerHTML =

    "<strong>Formula:</strong> r = d ÷ 2<br><br>" +

    "<strong>Solution:</strong><br>" +

    "r = " + d + " ÷ 2<br>" +

    "r = " + radius + "<br><br>" +

    "<strong>Answer:</strong> " +

    radius;

}

/*==================================================
                    AREA
==================================================*/

function calculateSquareArea() {

    const side = parseFloat(document.getElementById("squareSide").value);
    const result = document.getElementById("squareAreaResult");

    if (isNaN(side) || side <= 0) {
        result.innerHTML = "Please enter a valid side length.";
        return;
    }

    const area = side * side;

    result.innerHTML =
    "<strong>Formula:</strong> A = s²<br><br>" +
    "<strong>Solution:</strong><br>" +
    "A = " + side + "²<br>" +
    "A = " + area + "<br><br>" +
    "<strong>Answer:</strong> " + area + " square units";

}



function calculateRectangleArea() {

    const length = parseFloat(document.getElementById("rectangleLength").value);
    const width = parseFloat(document.getElementById("rectangleWidth").value);

    const result = document.getElementById("rectangleAreaResult");

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {

        result.innerHTML = "Please enter valid values.";

        return;

    }

    const area = length * width;

    result.innerHTML =
    "<strong>Formula:</strong> A = l × w<br><br>" +
    "<strong>Solution:</strong><br>" +
    "A = " + length + " × " + width + "<br>" +
    "A = " + area + "<br><br>" +
    "<strong>Answer:</strong> " + area + " square units";

}



function calculateTriangleArea() {

    const base = parseFloat(document.getElementById("triangleBase").value);
    const height = parseFloat(document.getElementById("triangleHeight").value);

    const result = document.getElementById("triangleAreaResult");

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {

        result.innerHTML = "Please enter valid values.";

        return;

    }

    const area = (base * height) / 2;

    result.innerHTML =
    "<strong>Formula:</strong> A = ½bh<br><br>" +
    "<strong>Solution:</strong><br>" +
    "A = ½ × " + base + " × " + height + "<br>" +
    "A = " + area + "<br><br>" +
    "<strong>Answer:</strong> " + area + " square units";

}



function calculateCircleArea() {

    const radius = parseFloat(document.getElementById("circleRadius").value);

    const result = document.getElementById("circleAreaResult");

    if (isNaN(radius) || radius <= 0) {

        result.innerHTML = "Please enter a valid radius.";

        return;

    }

    const area = Math.PI * radius * radius;

    result.innerHTML =
    "<strong>Formula:</strong> A = πr²<br><br>" +
    "<strong>Solution:</strong><br>" +
    "A = π × " + radius + "²<br>" +
    "A = " + area.toFixed(2) + "<br><br>" +
    "<strong>Answer:</strong> " + area.toFixed(2) + " square units";

}

/*==================================================
                PERIMETER
==================================================*/

function calculateSquarePerimeter() {

    const side = parseFloat(document.getElementById("squarePerimeterSide").value);
    const result = document.getElementById("squarePerimeterResult");

    if (isNaN(side) || side <= 0) {

        result.innerHTML = "Please enter a valid side length.";

        return;

    }

    const perimeter = 4 * side;

    result.innerHTML =
    "<strong>Formula:</strong> P = 4s<br><br>" +
    "<strong>Solution:</strong><br>" +
    "P = 4 × " + side + "<br>" +
    "P = " + perimeter + "<br><br>" +
    "<strong>Answer:</strong> " + perimeter + " units";

}



function calculateRectanglePerimeter() {

    const length = parseFloat(document.getElementById("rectanglePerimeterLength").value);
    const width = parseFloat(document.getElementById("rectanglePerimeterWidth").value);

    const result = document.getElementById("rectanglePerimeterResult");

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {

        result.innerHTML = "Please enter valid values.";

        return;

    }

    const perimeter = 2 * (length + width);

    result.innerHTML =
    "<strong>Formula:</strong> P = 2(l + w)<br><br>" +
    "<strong>Solution:</strong><br>" +
    "P = 2(" + length + " + " + width + ")<br>" +
    "P = 2(" + (length + width) + ")<br>" +
    "P = " + perimeter + "<br><br>" +
    "<strong>Answer:</strong> " + perimeter + " units";

}



function calculateTrianglePerimeter() {

    const a = parseFloat(document.getElementById("triangleSideA").value);
    const b = parseFloat(document.getElementById("triangleSideB").value);
    const c = parseFloat(document.getElementById("triangleSideC").value);

    const result = document.getElementById("trianglePerimeterResult");

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {

        result.innerHTML = "Please enter valid values.";

        return;

    }

    const perimeter = a + b + c;

    result.innerHTML =
    "<strong>Formula:</strong> P = a + b + c<br><br>" +
    "<strong>Solution:</strong><br>" +
    "P = " + a + " + " + b + " + " + c + "<br>" +
    "P = " + perimeter + "<br><br>" +
    "<strong>Answer:</strong> " + perimeter + " units";

}



function calculateCirclePerimeter() {

    const radius = parseFloat(document.getElementById("circlePerimeterRadius").value);

    const result = document.getElementById("circlePerimeterResult");

    if (isNaN(radius) || radius <= 0) {

        result.innerHTML = "Please enter a valid radius.";

        return;

    }

    const circumference = 2 * Math.PI * radius;

    result.innerHTML =
    "<strong>Formula:</strong> C = 2πr<br><br>" +
    "<strong>Solution:</strong><br>" +
    "C = 2 × π × " + radius + "<br>" +
    "C = " + circumference.toFixed(2) + "<br><br>" +
    "<strong>Answer:</strong> " + circumference.toFixed(2) + " units";

}

/*==================================================
                    VOLUME
==================================================*/

function calculateCubeVolume() {

    const side = parseFloat(document.getElementById("cubeSide").value);
    const result = document.getElementById("cubeVolumeResult");

    if (isNaN(side) || side <= 0) {

        result.innerHTML = "Please enter a valid side length.";
        return;

    }

    const volume = Math.pow(side, 3);

    result.innerHTML =
    "<strong>Formula:</strong> V = s³<br><br>" +
    "<strong>Solution:</strong><br>" +
    "V = " + side + "³<br>" +
    "V = " + volume + "<br><br>" +
    "<strong>Answer:</strong> " + volume + " cubic units";

}



function calculatePrismVolume() {

    const length = parseFloat(document.getElementById("prismLength").value);
    const width = parseFloat(document.getElementById("prismWidth").value);
    const height = parseFloat(document.getElementById("prismHeight").value);

    const result = document.getElementById("prismVolumeResult");

    if (
        isNaN(length) ||
        isNaN(width) ||
        isNaN(height) ||
        length <= 0 ||
        width <= 0 ||
        height <= 0
    ) {

        result.innerHTML = "Please enter valid values.";
        return;

    }

    const volume = length * width * height;

    result.innerHTML =
    "<strong>Formula:</strong> V = l × w × h<br><br>" +
    "<strong>Solution:</strong><br>" +
    "V = " + length + " × " + width + " × " + height + "<br>" +
    "V = " + volume + "<br><br>" +
    "<strong>Answer:</strong> " + volume + " cubic units";

}



function calculateCylinderVolume() {

    const radius = parseFloat(document.getElementById("cylinderRadius").value);
    const height = parseFloat(document.getElementById("cylinderHeight").value);

    const result = document.getElementById("cylinderVolumeResult");

    if (
        isNaN(radius) ||
        isNaN(height) ||
        radius <= 0 ||
        height <= 0
    ) {

        result.innerHTML = "Please enter valid values.";
        return;

    }

    const volume = Math.PI * radius * radius * height;

    result.innerHTML =
    "<strong>Formula:</strong> V = πr²h<br><br>" +
    "<strong>Solution:</strong><br>" +
    "V = π × " + radius + "² × " + height + "<br>" +
    "V = " + volume.toFixed(2) + "<br><br>" +
    "<strong>Answer:</strong> " + volume.toFixed(2) + " cubic units";

}



function calculateSphereVolume() {

    const radius = parseFloat(document.getElementById("sphereRadius").value);

    const result = document.getElementById("sphereVolumeResult");

    if (isNaN(radius) || radius <= 0) {

        result.innerHTML = "Please enter a valid radius.";
        return;

    }

    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    result.innerHTML =
    "<strong>Formula:</strong> V = (4/3)πr³<br><br>" +
    "<strong>Solution:</strong><br>" +
    "V = (4/3) × π × " + radius + "³<br>" +
    "V = " + volume.toFixed(2) + "<br><br>" +
    "<strong>Answer:</strong> " + volume.toFixed(2) + " cubic units";

}