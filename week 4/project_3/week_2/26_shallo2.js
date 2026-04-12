/* Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

🎯 Task:
      1. Create a deep copy of order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged*/
            const order = {
                orderId: "ORD1001",
                customer: {
                    name: "Anita",
                    address: {
                        city: "Hyderabad",
                        pincode: 500085
                    }
                },
                items: [
                    { product: "Laptop", price: 70000 }
                ]
            };
            let cppy=structuredClone(order)
            order.customer.address.city="boopal"
            order.items[0].price=9
            console.log(order)
            console.log(cppy)


