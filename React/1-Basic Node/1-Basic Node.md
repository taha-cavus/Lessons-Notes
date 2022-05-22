# Basic Node

    # npm init: 
    node.js dosyasını oluşturur.

    # node fileName: 
    dosyayı terminalde çalıştırır.

    # scripts(json’ın içinde): 
    buaraya fonksyon/kısayol  tanımlıyoruz kısaca.

    # dependencies(bağımlılıklar): 
    indirdiğimiz kütüphanaler burada yazar. kütüphane indirince modüle dosyası yüklenir. node modül dosyamız silinirse sadece 
    “npm instal” yazarak bütün kütüğhaneleri tekrar indirir.

    # ES6 Modül Sistemi: 
    json dosyamıza “type”: “module”,  	tanımı yaparız. Bundan sonra ES6’ya uymamız gerekir.
    Örneğin var slugify = require(“slugify”); şeklinde import etmiycez.
	import slugify from “slugify”; şeklinde import etmek zorundayız.

    # export default topla; 
    içeride tanımladığımız fonksyonu dışarı aktarır. kullanmak için 
    import Topla from “./my-module.js”; adresini kullanacağımız dizinin içine yazarız.

    # export: 
    exportu functionların tanımlarken başa yazabiliyoruz: export const hello = () =>{... veya aynı anda birden fazla fonksyonu yazabiliroyurz: export{func1,func2};
        Not: default olarak aldığımızı exportu import ederken birden fazla aldıklarımız gibi süslü parantez içinde import yazmıyacağız.
        ör: import hello, {topla,cikar} from “./…”;

    # export değişken_türü değişken_adı = değer  => yani bir değişkenide export edebiliriz.



not: npmjs.com: bütün kütüphanlaeri içeren site.
