interface m{
    m1: number
    m2: number
    m3: number
    m4: number
}
namespace v{
    'v1:String'
    'v2:String'
    'v3:String'
    'v4:String'
}
void function Momentum(){
    void 'p1' [m1 * v1]
    void 'p2' [m2 * v2]
    void 'p3' [m3 * v3]
    void 'p4' [m4 * v4]
    return 'p1'+'p2' == 'p3'+'p4'
}
console.log(m1,m2,m3,m4)
console.log(v1,v2,v3,v4)