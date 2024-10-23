import Sedan from './Sedan.js';
import Child from './Child.js';
import Parent from './Parent.js';

const dad = new Parent('John', 45, 'male', 'SUV');
const daughter = new Child('Jane', 10, 'female', '3학년');
const son = new Child('Jack', 8, 'male', '1학년');

const familyCar = new Sedan('BMW', '520d', 2018, 'black');

familyCar.start();
dad.getInCar(familyCar);
dad.driveCar();
daughter.getInCar(familyCar);
son.getInCar(familyCar);
daughter.playInCar();
son.playInCar();
familyCar.stop();

// 객체
console.log(familyCar);
console.log('내 차는:' + familyCar); // 문자열로 변환됨.
console.log('내 차는:', familyCar); // 객체로 출력됨. raw 값.
console.log(`내 차는: ${familyCar}`); // 문자열로 변환됨.
