import { Mobile } from './mobile';

let movil1 = new Mobile;
movil1.setName("Nokia3210")

let movil2 = new Mobile;
movil2.setName("iPhone3G")


let movil3 = new Mobile;
movil3.setName("Samsung Galaxy 10")

movil1.print();
movil2.print();
movil3.print();


movil1.setCameraNumber(4);
movil1.setIs5G(true);

movil1.print();
movil2.print();
movil3.print();



let mobiles: Mobile[] = [movil1, movil2, movil3];

for(let i = 0; i < mobiles.length; i++)
{
    mobiles[i].print();
}