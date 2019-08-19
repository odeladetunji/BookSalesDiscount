"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
exports.calculatePrice = router;
router.post('/', function (req, res) {
    // SOLUTION IS WRITTEN IN TYPE SCRIPT AND
    // COMPILE TO JAVASCRIPT.
    console.log(req.body);
    function getPriceAndDiscount() {
        return new Promise(function (resolve, reject) {
            var singleInputPrice = 0;
            function singleInput() {
                for (var u in req.body) {
                    if (req.body[u] > 0)
                        singleInputPrice = req.body[u] * 8;
                }
                computePrices();
                console.log(singleInputPrice);
            }
            // we are going to first of all loop
            // the orders from the request body and
            // store each order inside an array
            var container = [];
            for (var u in req.body) {
                if (req.body[u] == '' || req.body[u] == null)
                    req.body[u] = 0;
                container.push(req.body[u]);
            }
            var singleDuplicatePurchase = container;
            // this variables will be used during execution
            // of code
            var priceOfUndiscountedItem = 0;
            var discount = 0;
            var noDiscount = false;
            var computedDiscountPrice = 0;
            var singleOrder = false;
            // this function called getDiscount is used to compute discount on
            // each iteration of the ordered items contained
            // the container array
            function getDisCount(count) {
                switch (count) {
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
            function loopOrders(aContainer) {
                var count = 0;
                console.log(aContainer);
                for (var i = 0; i < aContainer.length; i++) {
                    if (aContainer[i] != 0) {
                        count++;
                        aContainer[i] = aContainer[i] - 1;
                    }
                }
                getDisCount(count); // getting discount on different product ordered
                switch (count) {
                    case 1:
                        singleInput();
                        break;
                    default:
                        checkforOnlyAnItem(aContainer); // checking if there are still variety
                }
                // getDisCount(count);  // getting discount on different product ordered
            }
            loopOrders(container);
            function checkforOnlyAnItem(container) {
                console.log(container);
                var count = 0;
                container.map(function (element) {
                    if (element > 0) {
                        count++;
                    }
                });
                if (count > 1)
                    checkContainer(container); // it means there are still variety
                if (count == 1)
                    priceOfRepeatedPurchase(container); // it means no variety again
                if (count == 0)
                    computePrices(); // no product can be found in the basket
            }
            ;
            function priceOfRepeatedPurchase(container) {
                console.log(container);
                console.log('888888888888');
                container.map(function (element) {
                    if (element > 0)
                        priceOfUndiscountedItem = element * 8;
                });
                console.log(priceOfUndiscountedItem);
                computePrices(); // no product can be found in the basket
            }
            function checkContainer(aContainer) {
                loopOrders(aContainer);
                console.log(aContainer);
            }
            function computePrices() {
                if (noDiscount == true)
                    resolve({ price: singleInputPrice });
                resolve({ price: priceOfUndiscountedItem + computedDiscountPrice });
            }
        });
    }
    // Am returning a promise here!
    getPriceAndDiscount().then(function (price) {
        console.log(price);
        res.send(price);
    });
});
// module.exports = router;
