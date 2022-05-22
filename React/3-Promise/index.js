/*
npm i axios 
==>json parse'a gerek yok. fazladan awaite gerek yok. 
==>dönen objedir. obje altındaki dataya ulaşmak için süslü parantez içine alınmalı. Tabi dönen data birden fazla olduğunda bu datayı aşağıdaki gibi isimlendirmeliyiz.
*/

import axios from "axios"

async function getData() {
    const {data: users1} = await axios("https://jsonplaceholder.typicode.com/users")
    
    const {data: users2} = await axios("https://jsonplaceholder.typicode.com/users")
    
    console.log(users1)
    console.log(users2)
}
getData()


/*
            PROMİSE 
*/
const getComments = (number) => {
    return new Promise((resolve , reject) =>{
        if(number === 1){
            resolve({text:"selam"});
        }
        reject("bir problem oluştu!")
    });
};
getComments(2)
.then((data) => console.log(data))
.catch((e) => console.log(e));



//Datalarla promise'ı kullanalım:
const getUsers = () =>{
    return new Promise(async(resolve,reject) =>{
        const{data} = await axios("https://jsonplaceholder.typicode.com/users");

        resolve(data);
    });
}

const getPost = (post_id) =>{
    return new Promise(async(resolve,reject) =>{
        const{data} = await axios("https://jsonplaceholder.typicode.com/posts/" + post_id);
        resolve(data)
    })
}

////burada datalar yine senktron yapıda geleceği için istediğimiz bir durum meydana gelebilir
getUsers()
.then((data) => console.log(data))
.catch((e) => console.log(e));

getPost(1)
.then((data) => console.log(data))
.catch((e) => console.log(e))

////bu yüzden anonim bir fonksyonda bunları async yapalım. artık hep ilk users gelicek sonra post 1 gelicek.
(async ()=>{
    await getUsers()
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
    
    await getPost(1)
    .then((data) => console.log(data))
    .catch((e) => console.log(e))
})()

////then'den ve catch'lerden de kurtulmak istersek:
////burada try-catch kullanarak hata fırlatması yapabiliriz
(async ()=>{
    const users = await getUsers()
    const post1 = await getPost(1)

    console.log(users)
    console.log(post1)
})()



////PROMİSE ALL: bu şekilde de birden fazla yapıyı böyle sıralayabiliriz.
Promise.all([getUsers(), getPost(1)])
.then(console.log())
.catch(console.log())




/////BAZI ARRAY FONKSYONLAR
//some: eğer dizideki bir eleman şarta uyuyorsa true döner
//every: eğer dizideki bütün elemanlar şarta uyuyorsa true döner
//ÖR.
// const every = users.every((item) => item.age > 20);
// console.log(every)


//meyveler.includes("muz") ==== listede varsa true döner, yoksa false