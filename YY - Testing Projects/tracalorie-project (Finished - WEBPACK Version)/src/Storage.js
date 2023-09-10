class Storage {
    static getCalorieLimit (defaultLimit = 2000) {
        let calorieLimit;

        if (localStorage.getItem('calorieLimit') === null) {
            calorieLimit = defaultLimit;
        } else {
            calorieLimit = +localStorage.getItem('calorieLimit');
        }
        return calorieLimit;
    }

    static setCalorieLimit (calorieLimit) {
        localStorage.setItem('calorieLimit', calorieLimit)
    }

    static getTotalCalories (defaultTotalCalories = 0) {
        let totalCalories;

        if (localStorage.getItem('totalCalories') === null) {
            totalCalories = defaultTotalCalories;
        } else {
            totalCalories = +localStorage.getItem('totalCalories');
        }
        return totalCalories;
    }

    static updateTotalCalories (totalCalories) {
        localStorage.setItem('totalCalories', totalCalories)
    }

    static getMeals () {
        let meals;

        if (localStorage.getItem('meals') === null) {
            meals = [];
        } else {
            meals = JSON.parse(localStorage.getItem('meals'))   /*Parses the data from the DB that was received as JSON, then deserializes it into a JavaScript object.*/
        }
        return meals;
    }

    static saveMeal (meal) {
        const meals = Storage.getMeals()
        meals.push(meal);
        localStorage.setItem('meals', JSON.stringify(meals))    /*Converts the Array (or Object) to a JSON String to be stored in the DB*/
    }

    static getWorkouts () {
        let workouts;

        if (localStorage.getItem('workouts') === null) {
            workouts = [];
        } else {
            workouts = JSON.parse(localStorage.getItem('workouts'))   /*Parses the data from the DB that was received as JSON, then deserializes it into a JavaScript object.*/
        }
        return workouts;
    }

    static saveWorkout (workout) {
        const workouts = Storage.getWorkouts()
        workouts.push(workout);
        localStorage.setItem('workouts', JSON.stringify(workouts))    /*Converts the Array (or Object) to a JSON String to be stored in the DB*/
    }

    static removeMeal(id) {
        const meals = Storage.getMeals()
        meals.forEach((meal, index) => {
            
            if (meal.id === id) {
                meals.splice(index, 1)
            }
        })

        localStorage.setItem('meals', JSON.stringify(meals)) 
    }
    
    static removeWorkout(id) {
        const workouts = Storage.getWorkouts()
        workouts.forEach((workout, index) => {
            
            if (workout.id === id) {
                workouts.splice(index, 1)
            }
        })

        localStorage.setItem('workouts', JSON.stringify(workouts)) 
    }

    static clearAll () {
        localStorage.clear();
    }
}


export default Storage;