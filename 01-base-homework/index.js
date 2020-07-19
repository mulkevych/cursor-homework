const APPLE = 15.678;    
const KIWI = 123.965;   
const ORANGE = 90.2345;

console.log('Найбільше число:    ' + Math.max(APPLE,KIWI,ORANGE));
console.log('Найменше число:     ' + Math.min(APPLE,KIWI,ORANGE));

const allProducts = APPLE + KIWI + ORANGE;
   console.log('Сума усіх фруктів:  ' + allProducts);

const withoutCoin = Math.floor(APPLE) + Math.floor(KIWI) + Math.floor(ORANGE);
   console.log('Сума усіх фруктів без копійок : ' + withoutCoin);

const circle = Math.ceil(allProducts/100)*100;
   console.log('Сума товарів округела до сотих: '+ circle);

const evenValue = (withoutCoin% 2 ===0) ? true: false;
   console.log('Cума товарів парне чи непарне число?:' + evenValue);

const money = 500;
const restCustomer = money - allProducts;
   console.log('Решта покупця  ' + restCustomer );

const avarage = allProducts / 3;
   console.log('Середнє значення товарів ' + avarage.toFixed(2));

const discount = Math.floor(Math.random()*40 + 1);
   console.log('Випадкова знижка  ' + discount);

const discountMoney = allProducts * discount / 100; 
   console.log('Суму знижки ' + discountMoney.toFixed(2));

const restMoney = allProducts - discountMoney;
   console.log('Решта клієнта з знижкою ' + restMoney.toFixed(2));

const cost = Math.floor(allProducts)/2;
   console.log('Собівартість продуктів ' +  cost);

const profit = cost-discountMoney;
   console.log('Чистий прибуток ' +  profit);
