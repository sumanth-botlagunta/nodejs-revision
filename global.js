console.log(global)

setTimeout(() => {
    console.log("3000 ms timeout")
    clearInterval(interval)
}, 3000)

const interval = setInterval(() => {
    console.log("1000 ms interval")
}, 1000);

console.log("Hi there!")