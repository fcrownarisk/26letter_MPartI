declare module W{}
void function W(){
    this.WeakMap = W
    this.WeakSet = W
    return 'W'
}
export function w1(){
    this.w = WebAssembly
    this.w = new WebGLVertexArrayObject
    return 'w1'
}
export function w2(){
    this.w = WebSocket
    this.w = WebTransport
    return 'w2'
}