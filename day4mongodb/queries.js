
//1.top 5 orders
db.cart.aggregate([
    {$sort:{"Amount": -1}},
    {$limit:5}
])

//2.total order amount per user

db.cart.aggregate([
    {$group: 
        {_id: "$User_Id",
        total: 
        {$sum: "$Amount"}
        }
    }
])

//3.frequency of prodcuts ordered

db.cart.aggregate([
       { "$unwind" : "$Cart_Items" },
       { "$group": { "_id": "$Cart_Items.product_id", "count": { "$sum": "$Cart_Items.quantity"} } },
])

//4.city with most orders

db.cart.aggregate(
    [  
        {"$group" : {_id:"$Shipping_Address.city", count:{$sum:1}}},
        { "$sort": {
            "count": -1
          }
        },
        {$limit:1}
    ])


