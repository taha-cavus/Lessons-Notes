/*
=>npm i node-fetch
*/

//import ES6 sonrası old için package'a type-module ekledik.
import fetch from "node-fetch";


//klasik fetch işlemi
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => console.log(users));


//NOT: eğer aynı scopta(ASYNCRON YAPI) birden fazla fecth yaparsak hangi verinin önce hangisin sonra geleceğini bilemeyiz. İç içe fetch yazarak sıralamyı sağlayabiliriz.
// AMA===>CLEAN OLMAZ VE okunması zor olur
fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())
    .then((users) => {
        console.log(users)
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((data) => data.json())
            .then((users) => console.log(users));
    });


//BU YÜZDEN ASYN-AWAİT KULLANIRIZ: asyb fonksyon oluştururp await ile adımların sırasını set ederiz
async function getData(){
    const data = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
        ).json()

    const data2 = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
        ).json()

    console.log(data)
    console.log(data2)
}
getData()






//javascriptte ananoim fonksyon oluşturmak. ==>()()
// (()=>{console.log("hello")})()

//eğer yukarıdaki yapıyı bir fonksyona atamayıp anonim fonksyonda çalıştırmak istersek:
// (async()=>{const data = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json()

// const data2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json()

// console.log(data)
// console.log(data2)})()



///////////////CTRL + K, CTRL + U ===> REMOVE COMMENT LİNE