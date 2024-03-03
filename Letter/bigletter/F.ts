const m1 = 1;
const m2 = 2;
const m3 = 3;
const m4 = 4;
enum mass{
    m1,m2,m3,m4
 }
console.log(mass)
void function trace(){
   return  m1*m3*m4
}
void function det(){
   return m1*m2 == m3*m4
}
void function tracedet(){
    return (m1*m2)%(m3*m4)
}
void function dettrace(){
    return (m1%m2)*(m3%m4)
}
console.log(`m1`,`m2`,`m3`,`m4`)
console.log('trace','det','tracedet','dettrace')