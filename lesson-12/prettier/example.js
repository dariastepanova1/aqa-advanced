function a(b,c){
var d=[]
for(var e=0;e<b.length;e++){
if(b[e]%2===0){
d.push(b[e]*c)
}else{
d.push(b[e]+c)
}
}
return d
}

var x=[1,2,3,4,5,6]
var y=a(x,10)

for(var i=0;i<y.length;i++){
console.log("value:",y[i])
}

setTimeout(function(){
console.log("done")
},1000)