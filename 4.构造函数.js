function Person(name, age) {
    this.name = name
    this.age = age
  }
  Person.prototype.setName = function (name) {
    this.name = name
  }

  function Student(name, age, price) {
    Person.call(this, name, age) //得到父类型的属性
    this.price = price
  }
  Student.prototype = new Person()  //得到父类型的方法
  Student.prototype.constructor = Student
  Student.prototype.setPrice = function (price) {
    this.price = price
  }


  class Phone{
    //构造方法
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }
    //父类的成员属性
    call(){
        console.log("我可以打电话!!");
    }
    static name = '手机';
    static change(){
        console.log("我可以改变世界");
    }
}

class SmartPhone extends Phone {
    //构造方法
    constructor(brand, price, color, size){
        super(brand, price);// Phone.call(this, brand, price)
        this.color = color;
        this.size = size;
    }

    photo(){
        console.log("拍照");
    }
    call(){
        console.log('我可以进行视频通话');
    }
}

const xiaomi = new SmartPhone('小米',799,'黑色','4.7inch');
console.log(SmartPhone);
console.log(xiaomi);
xiaomi.call();
xiaomi.photo();
xiaomi.playGame();
