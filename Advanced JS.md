# Destructing

Arraylerde:

```javascript
var arr = [100,200,300,400]

var [number1,number2] = arr;
//number1 = 100, number2 = 200 olur
```
<br/>
<br/>
Objelerde:

```javascript
const numbers = {
    a: 10,
    b: 20,
    c: 30,
    d: 40,
    e: 50
};

const {a,c,e} = numbers; //yani değişken isimleri aynı olmalı istenilen eşitlikle
const {a:number1, c:n  umber3, e:number5} = numbers; //yada bu şekilde başka isme atayabiliriz.
```
<br/>
<br/>
Fonksyonlarda:

```javascript
        const getlang = () => {
            return ["Python","java"]
        }

        const [lang1,lang2] = getlang();
        console.log(lang1,lang2) //yani return değerini destructingleyebiliyoruz.
```

## Spread Operator
JS'de referance veri tipleri bellekte konum tuttukları için bir "=" ifadesinde o değişkenede o adresi verir
ve ikiside aynı yeri tuttuğundan birinde yapılan değişiklik diğerinide etkiler. Bunun için eşitlemek yerine 
kopyalamalı. Birkaç yolu var. Bunlardan biri spread. 

```javascript
        const taha = ["Python","java"]

        const deneme = [...taha];
        deneme.push("js")
        console.log(deneme,taha) //dersek sadece denemenin sonunda "js" elemanı olduğunu görürüz.
```
Ve spread operatörü esnekte kullanılabilir yani

```javascript
const taha = ["Python","java"]
const deneme = ["C++","C#", ...taha]; //Yeni değer: ["C++","C#","Python","java"] olur.
```

Bir diziyi parçalayalım:

```javascript
const number = [1,2,3,4,5,6,7]
const [a,b, ...number2] = numbers;
console.log(a,b) //1,2
console.log(number2)  //3,4,5,6,7
```



# For in VS For of
for in==> dizi obje veya stringlerdeki her bir elemanın index numarasını döner.  
for of==> objede gezinemez, dizilerde ve stringlerde gezinebilir. Ve for in'den farkı index numarasını dönmez direk value'leri döner.

<br/>
<br/>

# MAPS
Bir key value dizisi.

```javascript
const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
//cities map'i üzerinde foreach, for in ve for of'la filan farklı farklı şekillerde istediğimiz gibi gezinebiliriz.
Array.from(cities) //Bu objeyi [["key","value"],["key","value"]]'ye dönüştürür.
```
<br/>
<br/>
<br/>

# Spread vs Destrucging,  Maps ve Sets Neden Üretilmiş-asıl olayları ne?
<br/>
<br/>
<br/>
<br/>
<br/>

# JAVASCRİPT ES6 ÖNCESİ OOP

***this***: bulunduğun scope'daki objeyi verir.  
***
***window***: en dıştaki yani global scope objemizdir.
***
***Obje OLuşturmak:***: 

//object literal basit obje yazımı ama usefull değil. bu yüzden constructurları kullanırız
```javascript
const emp1 = { 
    name: "Taha",
    age: 21,
    showInfos: function() {console.log("Bilgiler gösteriliyor")}
}

//sonradan farklı bir sınıf eleman ekliyelim:
emp1.salary = 5999;
```

//Yapıcı Fonksyon -Constructor: oluşturduğumuz bir objeden başka objelerimizi oluşturmamızı saglar.
// mesela new Date() de bir constructor. Bu objeden istediğimiz kadar başka obje üretebiliyoruz.
```javascript
function Employee(name,age,salary){ //fonksyonun ilk harfi büyük yazılır!
    this.name = name;
    this.age = age;
    this.salary = salary;
    
    this.showInfos = function(){
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("Taha",21,60000)
emp1.showInfos();
const emp2 = new Employee("Faruk",21,90000)
emp2.showInfos();
```

***
***PROTOTYPE***: Javascript'de class'lar yoktur. Prototype'lar vardır. Ve bu prototype'lar her oluşturduğumuz objede default olara vardır. Yani prototype chain oluşur. Mesela ürettiğimiz objemizde toString() diye fonksyon
oluşturursak ve çalıştırırsak default fonksyon değil bizimki çalışacaktır çünkü sıralama bizim ürettiğimiz objeden başlar ve var mı-yok mu sorgusuna göre derine inmeye devam eder yani her objenin kalıtım aldığı prototype'a, taaa ki aradığını bulana kadar.

![](/pic/proto.PNG)

Mesela bir constructer ürettik ve içine bir fonksyon atadık. Sonra bundan 100 tane obje ürettik. 
Böyle bir durumda bellekte boşuna 100 tane fonksyon tutmuş olucak. Prototype'ın avantajı burada devereye giriyor. Eğer biz bu fonksyonu constructor'ın içine değil de prototype'a yazarsak 100 tane değil bir tane fonksyon tanımlamış oluruz bellekte.

❌  Don't do this          |  ☑ Do this
:-------------------------:|:-------------------------:
![](/pic/proto2.PNG)       |  ![](/pic/proto3.PNG)

Başka bir objeyi kalıtım almak. Yarattığımız bir objeyi kalıtım alırsak, kalıtım aldığımız objenin özellikleri proto'nun içine alınır.
![](/pic/objectCreate.PNG)

Bir constructor'ın ilk prototyp'ı kendisidir. Sonra sırayla objeye kadar iner. En son obje protoype'ı vardır.
Bu örnek başka objenin prototype'ını nasıl aldığımız ve proto zincirlerini görüyoruz.
![](/pic/chainProto.PNG)

<br/>
<br/>
<br/>
<br/>
<br/>

# JAVASCRİPT ES6
ES6 2015 yılında çıktı ve standart sürüm oldu. Tarayıcılar hala ES5 kullanıyor ama ***babel*** sayesinde 
yazdığımız kodlar ES6'ya dönüştürülüyor. Yani aslında ES6 ile ES5 arasındaki farkı daha çok daha clean, okunbilir ve az kod yazmak(syntatic sugar). 

❌  ES6 ÖNCESİ             |  ☑ ES6
:-------------------------:|:-------------------------:
![](/pic/ES6%20%C3%B6ncesi.PNG)       |  ![](/pic/ES6.PNG)