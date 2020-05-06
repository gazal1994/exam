class Renderer {
    constructor(api) {
        this.data = api
    }
    rendermeal() {
        const $meal = $(".meals-container")
        $meal.empty()
        const mealSource = $('#meals-template').html();
        const mealTemplate = Handlebars.compile(mealSource);
        const mealInfo = this.data.meals
        const mealHTML = userTemplate(mealInfo);
        $meal.append(mealHTML)
    }
}