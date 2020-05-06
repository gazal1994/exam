const express = require('express')
const app = express()
const path = require('path')
const urllib = require('urllib')

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

app.get('/recipes/:ingredient',function(req,response){
    const ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}/`,function(err,data,res){
        if (err) {
            throw err; // you need to handle error
        }
        const  meal = JSON.parse(data).results
    
       const  meals = meal.map(m => {
          return {
                ingredients : m.ingredients ,
                title: m.title,
                thumbnail:m.thumbnail,
                href: m.href
            }
          
        })

        console.log(meals)
        response.send({meals})
         
    })
   
  

})

const port = 8080
app.listen(port,function(){
    console.log(port)
})
/*class allMeal {
    constructor(ingredients, title, thumbnail,  href) {
        this.ingredients = ingredients
        this.title = title
        this.thumbnail = thumbnail
        this.href = href
        
    }
}*/
