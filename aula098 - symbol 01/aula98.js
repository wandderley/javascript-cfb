const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for("luiz")
const s4 = Symbol.for("curso")

console.log(s1)
console.log(s2)
console.log(s3)

console.log(s1 == s2) //false
console.log(s3 == s4) //true

console.log(typeof(s1))

console.log(Symbol.keyFor(s3)) //luiz
console.log(Symbol.keyFor(s4)) //curso
console.log(Symbol.keyFor(s2)) // undefined