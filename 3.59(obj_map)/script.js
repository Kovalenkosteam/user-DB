const shops = [
    { rice: 500 },
    { oil: 200 },
    { bread: 50 }
];
// const map = new Map();
const map=new Map([
    [{paper:400},8000]
]);
const arr=[3000,6000,34000];
// map.set(shop[0], 5000);
// map.set(shop[1], 15000);
// map.set(shop[2], 55000);
shops.forEach((shop,i)=>{
    map.set(shop,arr[i]);
});
// console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[1]));

// map.delete(key);
// map.clear();
// map.size;
// map.keys();


// const goods=[];
// for(let shop of map.keys()){
//     // console.log(shop);
//     goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);


// for(let price of map.values()){
//     console.log(price);
// }


// for(let price of map.entries()){
//     console.log(price);
// }
// for(let [shop,price] of map.entries()){
//     console.log(shop, price);
// }


// map.forEach((value,key,map)=>{
//     console.log(key,value);
// });


const user = {
    name: 'Eugene',
    surname: 'Kovalenko',
    birthday: '25/09/1992',
    showMyPublicData: function () {
        console.log(`${this.name} ${this.surname}`);
    }
};
const userMap=new Map(Object.entries(user));
console.log(userMap);
const newUserObj=Object.fromEntries(userMap);
console.log(newUserObj);