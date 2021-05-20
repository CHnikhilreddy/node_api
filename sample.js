function add(a,b){
    return new Promise((reslove,reject)=>{
        const d = a+b
        if(d>100){
            reject("give smaller number")
        }
        else{
            reslove(d)
        }
    })
}

add(200,3).then((data)=>{console.log(data)}).catch((error)=>{console.log(error)})