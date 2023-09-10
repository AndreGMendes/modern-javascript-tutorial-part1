import Storage from './Storage';




class Calorietracker {
    constructor () {
        this._calorieLimit = Storage.getCalorieLimit();
        this._totalCalories = Storage.getTotalCalories();
        this._meals = Storage.getMeals();
        this._workouts = Storage.getWorkouts();

        this._displayCaloriesLimit();
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();

        document.getElementById('limit').value = this._calorieLimit;
    }

    // --------------------------------------------------------------------------------------------
    // UI Actions (Public Methods)
    // --------------------------------------------------------------------------------------------
    addMeal (meal) {
        this._meals.push(meal)
        this._totalCalories += meal.calories;
        Storage.updateTotalCalories(this._totalCalories);
        Storage.saveMeal(meal);
        this._displayNewMeal(meal);
        this._render();
        console.log(`-----> ${meal.name} with a total of ${meal.calories} calories was consumed`)
    }

    addWorkOut (workout) {
        this._workouts.push(workout)
        this._totalCalories -= workout.calories;
        Storage.updateTotalCalories(this._totalCalories);
        Storage.saveWorkout(workout);


        this._displayNewWorkout(workout);
        this._render();
        console.log(`-----> ${workout.calories} calories were burned with ${workout.name}`)
    }

    removeMeal (id) {
        const index = this._meals.findIndex((meal) => meal.id === id)
        
        if (index !== -1) {
            const meal = this._meals[index]
            this._totalCalories -= meal.calories;
            Storage.updateTotalCalories(this._totalCalories);
            this._meals.splice(index, 1);
            Storage.removeMeal(id);
            this._render();
        }
    }

    removeWorkout (id) {
        const index = this._workouts.findIndex((workout) => workout.id === id)
        
        if (index !== -1) {
            const workout = this._workouts[index]
            this._totalCalories += workout.calories;
            Storage.updateTotalCalories(this._totalCalories);
            this._workouts.splice(index, 1);
            Storage.removeWorkout(id);
            this._render();
        }
    }

    reset () {
        this._meals = [];
        this._workouts = [];
        this._totalCalories = 0;
        Storage.clearAll();
        this._render();
    }

    setLimit (calorieLimit) {
        this._calorieLimit = calorieLimit;
        Storage.setCalorieLimit(calorieLimit)
        this._displayCaloriesLimit();
        this._render();
    }

    loadsItems () {
        this._meals.forEach((meal) => {this._displayNewMeal(meal)}) 
        this._workouts.forEach((workout) => {this._displayNewWorkout(workout)}) 
    }

    // --------------------------------------------------------------------------------------------
    // UPDATE changes to the DOM Elements (Private Methods)
    // --------------------------------------------------------------------------------------------
    // Update Values
    // --------------------------------------------------------------------------------------------
    _displayCaloriesLimit () {
        console.log(`Calorie Limit: ${this._calorieLimit}`);
        const calorieLimitEl = document.getElementById('calories-limit').innerText = this._calorieLimit
    }

    _displayCaloriesTotal () {
        console.log(`Total Calories - Gain/Loss (Consumed - Burned): ${this._totalCalories}`);
        const totalCaloriesEl = document.getElementById('calories-total').innerText = this._totalCalories
    }

    _displayCaloriesConsumed () {
        const consumed = this._meals.reduce((total, meal) => total + meal.calories, 0);
        console.log(`Calories Consumed: ${consumed}`);  

        const caloriesConsumedEl = document.getElementById('calories-consumed').innerText = consumed;
    }

    _displayCaloriesBurned () {
        const burned = this._workouts.reduce((total, workout) => total + workout.calories, 0);
        console.log(`Calories Burned: ${burned}`);  

        const caloriesBurnedEl = document.getElementById('calories-burned').innerText = burned;
    }

    _displayCaloriesRemaining () {
        const caloriesRemaining = this._calorieLimit - this._totalCalories;
        console.log(`Calories Remaining: ${caloriesRemaining}`); 

        const caloriesRemainingEl = document.getElementById('calories-remaining').innerText = caloriesRemaining;
        const progressBarEl = document.getElementById('calorie-progress');

        if (caloriesRemaining <= 0) {
            document.getElementById('calories-remaining').parentElement.parentElement.classList.remove('bg-light');
            document.getElementById('calories-remaining').parentElement.parentElement.classList.add('bg-danger');

            progressBarEl.classList.remove('bg-success')
            progressBarEl.classList.add('bg-danger')

        } else {
            document.getElementById('calories-remaining').parentElement.parentElement.classList.add('bg-light');
            document.getElementById('calories-remaining').parentElement.parentElement.classList.remove('bg-danger');

            progressBarEl.classList.remove('bg-danger')
            progressBarEl.classList.add('bg-success')
        }
    }

    _displayNewMeal (meal) {
        const mealsEl = document.getElementById('meal-items')
        const mealEl = document.createElement('div');
        mealEl.classList.add('card', 'my-2') ;
        mealEl.setAttribute('data-id', meal.id)

        mealEl.innerHTML = 
        `
        <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
                <h4 class="mx-1">${meal.name}</h4>
                <div class="fs-1 bg-primary text-white text-center rounded-2 px-2 px-sm-5">${meal.calories}</div>
                <button class="delete btn btn-danger btn-sm mx-2"><i class="fa-solid fa-xmark"></i></button>
            </div>
        </div>
        `
        mealsEl.appendChild(mealEl);
    }

    _displayNewWorkout (workout) {
        const workoutsEl = document.getElementById('workout-items')
        const workoutEl = document.createElement('div');
        workoutEl.classList.add('card', 'my-2') ;
        workoutEl.setAttribute('data-id', workout.id)

        workoutEl.innerHTML = 
        `
        <div class="card-body">
            <div class="d-flex align-items-center justify-content-between">
                <h4 class="mx-1">${workout.name}</h4>
                <div class="fs-1 bg-secondary text-white text-center rounded-2 px-2 px-sm-5">${workout.calories}</div>
                <button class="delete btn btn-danger btn-sm mx-2"><i class="fa-solid fa-xmark"></i></button>
            </div>
        </div>
        `
        workoutsEl.appendChild(workoutEl);
    }

    // --------------------------------------------------------------------------------------------
    // Update Progress Bar
    // --------------------------------------------------------------------------------------------
    _displayCaloriesProgress () {
        const progressBarEl = document.getElementById('calorie-progress');
        const percentage = (this._totalCalories/this._calorieLimit) * 100;
        const width = Math.min(percentage, 100);
        console.log(`${width}%`);

        progressBarEl.style.width = `${width}%`;
        progressBarEl.innerText = `${width.toFixed(2)}%`
    }

    // --------------------------------------------------------------------------------------------
    // RENDER those changes to the DOM (Private Methods)
    // --------------------------------------------------------------------------------------------
    _render () {
        this._displayCaloriesLimit();
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
    }
}

export default Calorietracker;