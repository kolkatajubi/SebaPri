let arr=[1,2,1,5,1,0,1,4,3,6,9]
let s=0
for (let i in arr){
    setTimeout(()=>{
    console.log(arr[i])
},s)
s=s+arr[i]*1000
}
console.log("Hello !!")