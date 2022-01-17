
//1.top 5 orders
db.cart.aggregate([
    {$sort:{"amount": -1}},
    {$limit:5}
])

//2.total order amount per user

db.cart.aggregate([
    {$group: 
        {_id: "$userId",
        total: 
        {$sum: "$amount"}
        }
    }
])

//3.frequency of prodcuts ordered

db.cart.aggregate([
       { "$unwind" : "$cartItems" },
       { "$group": { "_id": "$cartItems.productId", "count": { "$sum": "$cartItems.quantity"} } },
])

//4.city with most orders

db.cart.aggregate(
    [  
        {"$group" : {_id:"$shippingAddress.city", count:{$sum:1}}},
        { "$sort": {
            "count": -1
          }
        },
        {$limit:1}
    ])


