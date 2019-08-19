// THIS UNIT TEST IS BEEN WRITTEN IN JAVASCRIPT!


const usedFunctions = {
    singleInput:
              (req) => {
                  let singleInputPrice = 0;
                  for(let u in req.body){
                       if(req.body[u] > 0)
                          singleInputPrice = req.body[u] * 8;
                  }

                  return singleInputPrice;
              },

    changeContentsOfArrayToIntegers:
               (req) => {
                  let container = [];
                  for(let u in req.body){
                    if(req.body[u] == '' || req.body[u] == null)
                        req.body[u] = 0;
                    container.push(req.body[u]);
                  }

                  return container;
              },
    getDiscounts:
         (count) => {
              let noDiscount = false;
              let discount = 0;
              let computedDiscountPrice = 0;
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

              return computedDiscountPrice;

          },

    loopContainer:
                    (aContainer) => {
                          let count = 0;
                          for(let i=0; i<aContainer.length; i++){
                             if(aContainer[i] != 0){
                                count++;
                                aContainer[i] = aContainer[i] - 1;
                             }
                          }

                          return count;
                          // getDisCount(count);  // getting discount on different product ordered
                    },

     checkingForVarietyOfItems:
                   (container) => {
                         let count = 0;
                         container.map(function (element) {
                             if (element > 0) {
                                 count++;
                             }
                         });
                         if (count > 1)
                              return 'greater than one';
                         if (count == 1)
                              return 'equal to one';
                         if (count == 0)
                              return 'equal to zero';
                   },

     leftSingleProductTypeRemaining:
                   (container) => {
                       let priceOfUndiscountedItem = 0;
                       container.map(function (element) {
                           if (element > 0)
                               priceOfUndiscountedItem = element * 8;
                       });

                       return priceOfUndiscountedItem;
                   }

}

module.exports = usedFunctions;
