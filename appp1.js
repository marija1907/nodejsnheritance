var car = {
    nameCar: '',
    color: '',
    driver: '',
    drive: function(){
        return this.driver + ' have ' + this.nameCar + ' in a ' + this.color + ' color ';
    }
}

var mike = Object.create(car);//first we create empty object which is prototype at the car object, and this object have access of all metods and properties in the car object
mike.nameCar = 'golf';
mike.color = 'red';
mike.driver = 'Mike';

var dona = Object.create(car);
dona.nameCar = 'passat';
dona.color = 'blue';
dona.driver = 'Dona';
//a both object now share same drive function
//both of this object point at the car object as the their prototype
console.log(mike.drive());
console.log(dona.drive());
