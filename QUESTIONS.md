#### Q: Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation? 

A: I didn't get to properly design a mobile ui so while the website looks good on desktop the table view has parts that poke out of their container on mobile. 



#### Q: Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it) 

A: I feel like I got somewhat carried away with both the typescript typing system and splitting everything into seperate files. Some of the libraries I imported also weren't really necessary. The swr library I used to constantly render new data for example  wasn't really necessary for a project like this.

#### Q: If you have to scale your solution to 100 users/second traffic what changes would you make, if any? 

A: 

- I would implement caching (redis) for the backend so that the third party apis aren't hit too often in a short time 
- In the same vein I would also implement rate limiting for the backend. I gave users the options to request new data whenever they wanted if they felt the wait was too long but this could easily cause problems at scale with no rate limiting. 
- The frontend could use some work to be more accessible/having a proper mobile interface 
- Add more third party crypto exchange apis to the backend so users have more options to look at  
- Keep recent data from the third party apis in storage (sql or nosql ) to have something to display on the frontend in case any of them are down 

#### Q: What are some other enhancements you would have made, if you had more time to do this implementation 

A: I mentioned this already but fixing the mobile interface. Besides that I ended up noticing that coinbases prices on both currencies were never better than bittrex's so I would probably opt for another exchange api so that the recommendations wouldn't always be for bittrex.