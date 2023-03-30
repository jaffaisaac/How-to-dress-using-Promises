// steps on how to dress using promise\
let In_House = false;
let dressing =(time,todo)=>{
   return new Promise((resolve,reject)=>{
        if(In_House){
            setTimeout(()=>{resolve(todo())},time)
        }
        else{
            reject(console.log(`Get to house to dress`))
        }
    })
}
dressing(5000,()=>{console.log(`get into house `)})
.then(
    ()=>{
        return dressing(3000,()=>{console.log(`get into dress room`)})
    }
).then(
    ()=>{
        return dressing(2000,()=>{console.log(`Pick up the Shirt and trousure and dress up `)})
    }
).then(
    ()=>{
        return dressing(1000,()=>{console.log('Get the socks on the feet')})
    }
).then(
    ()=>{
        return dressing(3000,()=>{console.log(`get your Shoes on and check in the mirror of your beaty`)})
    }
).catch(
    ()=>{
        console.log(`Get back to the house before`)
    }
).finally(
    ()=>{
        console.log('The Party in ongoin')
    }
)