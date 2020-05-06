
const fetchmeal = function () {
    let input = $("input").val()
  console.log(input)
    $.get(`/recipes/${input}`, function (data) {
        
        $("#meals-template").empty()
       
        console.log(data)
       for(let i =0 ; i < data.meals.length ;i++){
            let ingredients = data.meals[i].ingredients
            let title =  data.meals[i].title
            let thumbnail =  data.meals[i].thumbnail
            let href =  data.meals[i].href
        
            $("#meals-template").append(`<div><a href="${href}">${title}</a></div><img src="${thumbnail}" width="300" height="300"><p>${ingredients}</p> `)
        }
     
    })
}

/*const render = function (data) {
    $("#meals-template").empty()
    const source = $('#meals-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template({data });
    $("#meals-template").append(newHTML);
    console.log(newHTML)

}*/