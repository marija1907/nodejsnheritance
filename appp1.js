var car = {
    nameCar: '',
    color: '',
    driver: '',
    drive: function(){
        return this.driver + ' have ' + this.nameCar + ' in a ' + this.color + ' color ';
    }
}

var mike = Object.create(car);
mike.nameCar = 'golf';
mike.color = 'red';
mike.driver = 'Mike';

var dona = Object.create(car);
dona.nameCar = 'passat';
dona.color = 'blue';
dona.driver = 'Dona';

console.log(mike.drive());
console.log(dona.drive());