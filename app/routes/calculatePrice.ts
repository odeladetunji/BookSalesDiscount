import express = require('express');
import { Request, Response, NextFunction } from "express";
const router: express.Router = express.Router();

router.post('/', function(req: Request, res: Response){
  // SOLUTION IS WRITTEN IN TYPE SCRIPT AND
  // COMPILE TO JAVASCRIPT.
  console.log(req.body);
  function getPriceAndDiscount(){
     return new Promise((resolve, reject) => {

       let singleInputPrice: number = 0;
       function singleInput(){
           for(let u in req.body){
                if(req.body[u] > 0)
                   singleInputPrice = req.body[u] * 8;
           }

           computePrices();
           console.log(singleInputPrice);
       }
       // we are going to first of all loop
       // the orders from the request body and
       // store each order inside an array
       let container: number[] = [];
       for(let u in req.body){
         if(req.body[u] == '' || req.body[u] == null)
             req.body[u] = 0;
         container.push(req.body[u]);
       }
       let singleDuplicatePurchase: number[] = container;
       // this variables will be used during execution
       // of code
       let priceOfUndiscountedItem: number = 0;
       let discount: number = 0;
       let noDiscount: boolean = false;
       let computedDiscountPrice: number = 0;
       let singleOrder: boolean = false;
       // this function called getDiscount is used to compute discount on
       // each iteration of the ordered items contained
       // the container array
       function getDisCount(count: number){
           switch(count){
              case 1:
                  noDiscount = true;
                  break;
              case 2:
                  discount = 0.05 * count * 8;
                  computedDiscountPrice = computedDiscountPrice + (count * 8) - discount;
                  break;
              case 3:
                  discount = 0.10 * count * 8;
                  computedDiscountPrice = computedDiscountPrice + (count * 8) - discount;
                  break;
              case 4:
                  discount = 0.20 * count * 8;
                  computedDiscountPrice = computedDiscountPrice + (count * 8) - discount;
                  break;
              case 5:
                  discount = 0.25 * count * 8;
                  computedDiscountPrice = computedDiscountPrice + (count * 8) - discount;
                  break;
           }
       }

       function loopOrders(aContainer: number[]){
           let count: number = 0;
           console.log(aContainer)
           for(let i=0; i<aContainer.length; i++){
              if(aContainer[i] != 0){
                 count++;
                 aContainer[i] = aContainer[i] - 1;
              }
           }

           getDisCount(count); // getting discount on different product ordered
           switch(count){
              case 1:
                singleInput();
                break;
              default:
                checkforOnlyAnItem(aContainer);   // checking if there are still variety
           }
           // getDisCount(count);  // getting discount on different product ordered
       }

       loopOrders(container);
       function checkforOnlyAnItem(container: number[]){
           console.log(container)
           let count: number = 0;
           container.map(element => {
               if(element > 0){
                   count++;
               }
           });

           if(count > 1)
             checkContainer(container);  // it means there are still variety
           if(count == 1)
             priceOfRepeatedPurchase(container);  // it means no variety again
           if(count == 0)
             computePrices();  // no product can be found in the basket
       };

       function priceOfRepeatedPurchase(container: number[]){
           console.log(container);
           console.log('888888888888')
           container.map(element => {
             if(element > 0)
                 priceOfUndiscountedItem = element * 8;
           });
           console.log(priceOfUndiscountedItem);
           computePrices();  // no product can be found in the basket
       }

       function checkContainer(aContainer: number[]){
           loopOrders(aContainer);
           console.log(aContainer)
       }

       function computePrices(){
           if(noDiscount == true)
               resolve({price: singleInputPrice });
           resolve({price: priceOfUndiscountedItem + computedDiscountPrice })
       }
     });
  }

  // Am returning a promise here!
  getPriceAndDiscount().then(price => {
     console.log(price)
     res.send(price);
  });
});

export { router as calculatePrice };
// module.exports = router;
