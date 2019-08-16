class User {
  fullName: string
  firstName: string
  lastName: string

  constructor(firstName:string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = `${firstName} ${lastName}`
  }
}

interface Person1 {
  firstName: string
  lastName: string
}

function greeter(person:Person1) {
  return 'hello ' + person.firstName + ' ' + person.lastName
}

let user = new User('berial', 'yue')

console.log(greeter(user))

let isDone:boolean = false

let decLiteral:number = 20
let hexLiteral:number = 0x14
let bingryLiteral:number = 0b10100
let octalLiteral:number = 0o24

let myName:string = 'berial'
myName = 'berialyue'

let age:number = 30
let sentence = `Hello,my name is${myName}.

I'll be ${age + 1} year old next month`

let list:number[] = [1,2,3,4,5]
let list2: Array<number> = [1,2,3,4,5]

let x:[string, number]

x = ['hello', 20]

enum Color {
  Red =1,
  Green,
  Blue
}

let c:string = Color[2]
console.log(c)

let notSure: any= 4
notSure = 'berial'
notSure = false

let list3:any[] = [1,'be',true]

function warnUser():void {
  console.log('this is my waring message')
}

let num: number = 3
num = null

function error(message: string):never {
  throw new Error(message)
}

function fail() {
  return error('something failed')
}

let someValue:any = 'this is a string'

// let strLength:number = (<string>someValue).length

let strLength:number = (someValue as string).length

function f() {
  var a = 10
  return function g() {
    var b = a + 1
    return b
  }
}

var g = f()

g()

function f1(shouldInitialize) {
  if(shouldInitialize) {
    var x =10
  }
  return x
}

f1(true)
f1(false)

function sumMatrix(matrix) {
  var sum = 0
  for(var i=0;i<matrix.length;i++){
    var currentRow = matrix[i]
    for(var j=0;j<currentRow.length;j++){
      sum += currentRow[j]
    }
  }
  return sum
}

var matrix = [
  [1,2,3],
  [4,5,6]
]

console.log(sumMatrix(matrix))

for(var i = 0; i<10;i++) {
  (function(i){
    setTimeout(function(){
    console.log(i)
  },100*i)
  })(i)
}

function f4(condition:boolean, x:number) {
  if(condition){
    let x =100
    return x
  }
  return x
}
f4(true,0)

function sumMatrix1(martix:number[][]){
  let sum = 0
  for(let i =0;i<martix.length;i++){
    let currentRow = martix[i]
    for(let j=0;j<currentRow.length;j++){
      sum += currentRow[j]
    }
  }
  return sum
}

console.log(sumMatrix1(matrix))

let [first, ...rest] = [1,2,3,4]
console.log(first)
console.log(rest)

let  o ={
  a: 'foo',
  b:12,
  c: 'bar'
}
let {a,...b} = o
let total = b.b+b.c.length
console.log(total)

function keepWholeObject(wholeObject:{a:string,b?:number}) {
  let {a,b=1000} = wholeObject
}

function f5({a='',b=0}={a:'23'}):void{}

f5()
f5({})
f5({a:'yes'})

interface LabelledValue {
  label:string
}

function printLabel(labelledObj:LabelledValue){
  console.log(labelledObj.label)
}

let myObj = {size: 10, label:'berial'}
printLabel(myObj)

interface Square {
  color: string,
  area: number
}

interface SquareConfig {
  color?:string
  width?:number
}

function createSquare(config: SquareConfig):Square {
  let newSquare = {color:'white', area: 100}
  if(config.color) {
    newSquare.color = config.color
  }
  if(config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({color:'black',width:100})

console.log(mySquare)

interface Point {
  readonly x:number
  readonly y:number
}

let p1:Point = {x:10,y:10}

let g1:number[] = [1,2,3,4]
let rp:ReadonlyArray<number> = g1

interface SearchFunc {
  (source: string, subString: string):boolean
}

let mySearch:SearchFunc
mySearch = function(source:string,subString:string):boolean {
  let result = source.search(subString)
  return result > -1
}

interface StringArray {
  [index:number]:string
}

let myArray:StringArray
myArray = ['123','234']
let myStr:string = myArray[0]

interface ClockInterface {
  tick()
}

interface ClockConstructor {
  new(hour:number, minut4e:number):ClockInterface
}

function createClock (ctor:ClockConstructor, hour:number,minute:number):ClockInterface {
  return new ctor(hour,minute)
}

class DigitalClock implements ClockInterface {
  constructor(h:number,m:number) {}

  tick() {
    console.log('beep beep')
  }
}

class AnalogClock implements ClockInterface {
  constructor(h:number,m:number) {}

  tick() {
    console.log('tick toc')
  }
}

let digital = createClock(DigitalClock,12,20)
let analog = createClock(AnalogClock,12,10)

interface Shape {
  color:string
}
interface PenStroke {
  penWidth: number
}
interface Square1 extends Shape,PenStroke {
  sideLength: number
}

let squre1 = {} as Square1
squre1.color = 'blue'
squre1.sideLength = 10
squre1.penWidth = 5.0

interface Counter {
  (start:number):string

  interval:number
  reset():void
}

function getCounter():Counter {
  let counter = (function(star:number) {}) as Counter
  counter.interval = 123
  counter.reset = function() {
    
  }
  return counter
}

let c1 = getCounter()
c1(10)
c1.reset()
c1.interval = 5.0

class Control {
  private state:any
}

interface SelectableContorl extends Control {
  select()
}

class Button extends Control implements SelectableContorl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

class ImageC extends Control implements SelectableContorl{
  select() {}
}

class Greeter {
  greeting:string
  constructor(message:string) {
    this.greeting = message
  }
  greet() {
    return `Hello${this.greeting}`
  }
}

let greeter1 = new Greeter('world')
console.log(greeter1.greet())

class Animal {
  private name:string

  constructor(name:string) {
    this.name = name
  }

  move(distance:number = 0) {
    console.log(`${this.name} moved ${distance}m`)
  }
}

class Snake extends Animal {
  constructor(name:string) {
    super(name)
  }
  move(distance:number = 5){
    console.log('Slithering...')
    super.move(distance)
  }
}

class Horse extends Animal {
  constructor(name:string) {
    super(name)
  }
  move(distance:number = 45){
    console.log('Galloping...')
    super.move(distance)
  }
}
class Dog extends Animal {
  bark() {
    console.log('Woof!')
  }
}

const dog = new Dog('wangcai')
dog.bark()
dog.move(10)

let sam = new Snake('Sammy')
let tom = new Horse('Tommy')

sam.move()
tom.move(50)


class Rhino extends Animal {
  constructor() {
    super ('Rhino')
  }
}

class Person {
  protected constructor(readonly name: string) {
  }
}

class Employee extends Person{
  private department: string

  constructor(name:string,department:string) {
    super(name)
    this.department = department
  }
  getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`
  }
}

let howgard = new Employee('Howgard','Sales')
console.log(howgard.getElevatorPitch())

let passcode = 'secret passcode1'
class Employee2 {
  private _fullname:string
  get fullName():string {
    return this._fullname
  }

  set fullName(newName:string) {
    if(passcode && passcode === 'secret passcode') {
      this._fullname = newName
    } else {
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

let employee2 = new Employee2()
employee2.fullName = 'Bob smith'
if(employee2.fullName) {
  console.log(employee2.fullName)
}

class Grid {
  static origin = {x:0,y:0}

  scale: number

  constructor(scale) {
    this.scale = scale
  }

  calculateDistanceFromOrigin(point: {x:number,y:number}) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

let grid1 = new Grid(1.0)
let grid2 = new Grid(5.0)

console.log(grid1.calculateDistanceFromOrigin({x:3,y:4}))
console.log(grid2.calculateDistanceFromOrigin({x:3,y:4}))

abstract class Department {
  name:string

  constructor (name:string) {
    this.name = name
  }

  printName():void {
    console.log(`Department name ${this.name}`)
  }

  abstract printMeeting():void 
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting ad Auditing')
  }

  printMeeting():void{
    console.log(`The Accounting Department meets each Monday at 10am`)
  }

  genterateReport():void {
    console.log('Generating accounting reports...')
  }
}

let department:Department
department = new AccountingDepartment()
department.printMeeting()
department.printName()

class Greeter2 {
  static standardGreeting = 'Hello, there'

  greeting:string

  constructor(message?:string) {
    this.greeting = message
  }

  greet() {
    if(this.greeting){
      return `Hello ${this.greeting}`
    } else {
      return Greeter2.standardGreeting
    }
    
  }
}

let greeter2:Greeter2
greeter2 = new Greeter2()
console.log(greeter2.greet())

let greeterMaker:typeof Greeter2 = Greeter2
greeterMaker.standardGreeting = 'Hey there'

let greeter3:Greeter2 = new greeterMaker()
console.log(greeter3.greet())

interface Point1 {
  x: number
  y: number
}

interface Point3d extends Point1 {
  z: number
}

let point3d:Point3d = {x:1,y:2,z:3}

function add(x:number, y:number):number {
  return x+y
}

let myAdd:(baseValue:number,increment:number) =>number = function(x:number,y:number):number {
  return x + y
}

function buildName(firstName:string,...restOfName:string[]):string {
  return firstName + ' ' + restOfName
}

let buildNameFn:(fname:string,...rest:string[])=>string = buildName

let res1 = buildName(undefined,'bob')
let res2 = buildName('bob','smith')

interface Card {
  suit:string
  card:number
}

interface Deck {
  suits:string[]
  cards:number[]
  createCardPicker(this:Deck):() => Card
}

let deck = {
  suits: ['hearts','spades', 'clubs','diamonds'],
  cards:Array(52),
  createCardPicker: function(this:Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13
      }
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log(`card: ${pickedCard.card} of ${pickedCard.suit}`)

interface UIElement {
  addClickListener(onclick:(this:void,e:Event)=> void):void
}

class Handler {
  type:string

  onClickBad = (e:Event) => {
    this.type = e.type
  }
}

let h = new Handler()

let uiElement:UIElement = {
  addClickListener() {}
}

uiElement.addClickListener(h.onClickBad)

let suits = ['hearts','spades','clubs','diamonds']

function pickCard(x:{suit:string; card:number}[]):number
function pickCard(x:number):{suit:string;card:number}

function pickCard(x):any {
  if(Array.isArray(x)) {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if(typeof x === 'number'){
    let pickedSuit = Math.floor(x/13)
    return {suit:suits[pickedSuit],card: x % 13}
  }
}

let myDeck = [
  {suit: 'diamonds', card: 2},
  {suit: 'spades', card: 9},
  {suit: 'hearts', card: 5}
]

let pickedCard1 = myDeck[pickCard(myDeck)]
console.log(`card1: ${pickedCard1.card} of ${pickedCard1.suit}`)

let pickedCard2 = pickCard(15)
console.log(`card2: ${pickedCard2.card} of ${pickedCard2.suit}`)

