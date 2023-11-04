let result = [
    { Emp: 1, name: "AAA" },
    { Emp: 2, name: "BBB" }
]

function show() {
    let value = result.filter((ele ) => {
        return ele.Emp
    })
}

show();
// console.log(value);

let result2 = result.map((ele)=>{
    return ele.Emp
})

console.log(result2);w45rewdesw`aq  aqww2werw3e43w2qsw321   q   2q  wa22awqewse32qwe23w4e321    dsewq32`


Db.result.find({Emp:2});
Db.result.insertOne({Emp:3});
Db.result.updateOne({Emp:2,name:"CCC"});