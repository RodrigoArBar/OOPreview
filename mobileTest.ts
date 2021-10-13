import { Mobile } from './mobile';

let movil1 = new Mobile;
movil1.name ="Nokia3210";

let movil2 = new Mobile;
movil2.name = "iPhone3G"


let movil3 = new Mobile;
movil3.name = "Samsung Galaxy 10"

console.log(movil1);
console.log(movil2);
console.log(movil3)


movil1.cameraNumber = 4;
movil1.is5G = true;

console.log(movil1);
console.log(movil2);
console.log(movil3)

