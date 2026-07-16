const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, stock: 8 },
    { id: 2, name: "Mechanical Keyboard", category: "Accessories", price: 95, stock: 15 },
    { id: 3, name: "Wireless Mouse", category: "Accessories", price: 40, stock: 30 },
    { id: 4, name: "27-inch Monitor", category: "Electronics", price: 320, stock: 10 },
    { id: 5, name: "USB-C Hub", category: "Accessories", price: 55, stock: 22 },
    { id: 6, name: "Gaming Chair", category: "Furniture", price: 280, stock: 5 },
    { id: 7, name: "Webcam", category: "Electronics", price: 75, stock: 18 },
    { id: 8, name: "Headphones", category: "Audio", price: 150, stock: 12 },
    { id: 9, name: "Smartphone", category: "Electronics", price: 900, stock: 7 },
    { id: 10, name: "Notebook", category: "Stationery", price: 5, stock: 100 }
];
/* ---------- Map ----------- */
console.log("---------- Map -----------")
console.log(products.map((item) => item.name))
console.log(products.map((item) => {
    return { ...item, priceWithText: `${item.name} : ${item.price}` }
}))
console.log(products.map((item) => {
    return {
        ...item,
        priceWithTax: item.price * 1.1
    }
}))
console.log(products.map((item) => item.price))
console.log(products.map((item) => item.category))
console.log(products.map((item) =>  `${item.name} - $${item.price}`))
/* ---------- Filter ----------- */
console.log("---------- Filter -----------")
console.log(products.filter((item)=>  item.stock > 10))
console.log(products.filter((item)=>item.price < 50))
console.log(products.filter((item)=>item.price < 300 && item.price > 50))
console.log(products.filter((item)=> item.category==='Electronics'))
console.log(
    products
    .filter((item)=> item.price > 10)
    .map((item)=> `${item.name} - $${item.price}`)
)
/* This is empty because `map` and `filter` are defined in that order.  */
console.log(
    products
    .map((item)=> `${item.name} - $${item.price}`)
    .filter((item)=> item.price > 10)
)
/* ---------- Find ----------- */
console.log("---------- Find -----------")
console.log(products.find((item)=> item.name==="Laptop"))
console.log(products.find((item)=> item.id===3))
console.log(products.find((item)=> item.price<40))
/* this is undefined */
console.log(products.find((item)=> item.id===30))
/* ---------- Reduce ----------- */
console.log("---------- Reduce -----------")
console.log("total price : "+products.reduce((total, product)=>total+product.price,0))
console.log("max price : "+products.reduce((topPrice, product)=>Math.max(topPrice,product.price),0))
console.log("min price : "+products.reduce(
    (topPrice, product)=>Math.min(topPrice,product.price),products[0].price))

console.log("avg : "+products.reduce((total, product)=>total+product.price,0)/products.length)
console.log(products.reduce((total, product)=>{
    if(product.price>50) return total+1
    else return total
},0))
console.log(products.reduce((result, product)=>{
    if(!result[product.category]){result[product.category]=[]}
    result[product.category].push(product)
    return result
},{}))
console.log(products.reduce((result, product)=>{
    const category = product.category;
    result[category] = (result[category]||0)+1
    return result
},{}))