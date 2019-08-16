var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'hello ' + person.firstName + ' ' + person.lastName;
}
var user = new User('berial', 'yue');
console.log(greeter(user));
var isDone = false;
var decLiteral = 20;
var hexLiteral = 0x14;
var bingryLiteral = 20;
var octalLiteral = 20;
var myName = 'berial';
myName = 'berialyue';
var age = 30;
var sentence = "Hello,my name is" + myName + ".\n\nI'll be " + (age + 1) + " year old next month";
var list = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
var x;
x = ['hello', 20];
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color[2];
console.log(c);
var notSure = 4;
notSure = 'berial';
notSure = false;
var list3 = [1, 'be', true];
function warnUser() {
    console.log('this is my waring message');
}
var num = 3;
num = null;
function error(message) {
    throw new Error(message);
}
function fail() {
    return error('something failed');
}
var someValue = 'this is a string';
// let strLength:number = (<string>someValue).length
var strLength = someValue.length;
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
g();
function f1(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
f1(true);
f1(false);
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }
    return sum;
}
var matrix = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(sumMatrix(matrix));
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
function f4(condition, x) {
    if (condition) {
        var x_1 = 100;
        return x_1;
    }
    return x;
}
f4(true, 0);
function sumMatrix1(martix) {
    var sum = 0;
    for (var i_1 = 0; i_1 < martix.length; i_1++) {
        var currentRow = martix[i_1];
        for (var j = 0; j < currentRow.length; j++) {
            sum += currentRow[j];
        }
    }
    return sum;
}
console.log(sumMatrix1(matrix));
var _a = [1, 2, 3, 4], first = _a[0], rest = _a.slice(1);
console.log(first);
console.log(rest);
var o = {
    a: 'foo',
    b: 12,
    c: 'bar'
};
var a = o.a, b = __rest(o, ["a"]);
var total = b.b + b.c.length;
console.log(total);
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1000 : _a;
}
function f5(_a) {
    var _b = _a === void 0 ? { a: '23' } : _a, _c = _b.a, a = _c === void 0 ? '' : _c, _d = _b.b, b = _d === void 0 ? 0 : _d;
}
f5();
f5({});
f5({ a: 'yes' });
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: 'berial' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black', width: 100 });
console.log(mySquare);
var p1 = { x: 10, y: 10 };
var g1 = [1, 2, 3, 4];
var rp = g1;
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray;
myArray = ['123', '234'];
var myStr = myArray[0];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beep beep');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick toc');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 20);
var analog = createClock(AnalogClock, 12, 10);
var squre1 = {};
squre1.color = 'blue';
squre1.sideLength = 10;
squre1.penWidth = 5.0;
function getCounter() {
    var counter = (function (star) { });
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
var c1 = getCounter();
c1(10);
c1.reset();
c1.interval = 5.0;
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
var ImageC = /** @class */ (function (_super) {
    __extends(ImageC, _super);
    function ImageC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageC.prototype.select = function () { };
    return ImageC;
}(Control));
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello" + this.greeting;
    };
    return Greeter;
}());
var greeter1 = new Greeter('world');
console.log(greeter1.greet());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + " moved " + distance + "m");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distance) {
        if (distance === void 0) { distance = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distance);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distance);
    };
    return Horse;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof!');
    };
    return Dog;
}(Animal));
var dog = new Dog('wangcai');
dog.bark();
dog.move(10);
var sam = new Snake('Sammy');
var tom = new Horse('Tommy');
sam.move();
tom.move(50);
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, 'Rhino') || this;
    }
    return Rhino;
}(Animal));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department;
    };
    return Employee;
}(Person));
var howgard = new Employee('Howgard', 'Sales');
console.log(howgard.getElevatorPitch());
var passcode = 'secret passcode1';
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    Object.defineProperty(Employee2.prototype, "fullName", {
        get: function () {
            return this._fullname;
        },
        set: function (newName) {
            if (passcode && passcode === 'secret passcode') {
                this._fullname = newName;
            }
            else {
                console.log('Error: Unauthorized update of employee!');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee2;
}());
var employee2 = new Employee2();
employee2.fullName = 'Bob smith';
if (employee2.fullName) {
    console.log(employee2.fullName);
}
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }));
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name " + this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting ad Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am");
    };
    AccountingDepartment.prototype.genterateReport = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(Department));
var department;
department = new AccountingDepartment();
department.printMeeting();
department.printName();
var Greeter2 = /** @class */ (function () {
    function Greeter2(message) {
        this.greeting = message;
    }
    Greeter2.prototype.greet = function () {
        if (this.greeting) {
            return "Hello " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    };
    Greeter2.standardGreeting = 'Hello, there';
    return Greeter2;
}());
var greeter2;
greeter2 = new Greeter2();
console.log(greeter2.greet());
var greeterMaker = Greeter2;
greeterMaker.standardGreeting = 'Hey there';
var greeter3 = new greeterMaker();
console.log(greeter3.greet());
var point3d = { x: 1, y: 2, z: 3 };
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + ' ' + restOfName;
}
var buildNameFn = buildName;
var res1 = buildName(undefined, 'bob');
var res2 = buildName('bob', 'smith');
var deck = {
    suits: ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: _this.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.onClickBad = function (e) {
            _this.type = e.type;
        };
    }
    return Handler;
}());
var h = new Handler();
var uiElement = {
    addClickListener: function () { }
};
uiElement.addClickListener(h.onClickBad);
var suits = ['hearts', 'spades', 'clubs', 'diamonds'];
function pickCard(x) {
    if (Array.isArray(x)) {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x === 'number') {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [
    { suit: 'diamonds', card: 2 },
    { suit: 'spades', card: 9 },
    { suit: 'hearts', card: 5 }
];
var pickedCard1 = myDeck[pickCard(myDeck)];
console.log("card1: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
console.log("card2: " + pickedCard2.card + " of " + pickedCard2.suit);
