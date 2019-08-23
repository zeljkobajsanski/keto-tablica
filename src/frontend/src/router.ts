import Vue from 'vue'
import Router from 'vue-router'
import MealPlanner from "@/pages/MealPlanner.vue";
import MacroCalculator from "@/pages/MacroCalculator.vue";

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',
    routes: [
        {path: '/meal-planner', name: 'meal-planner', component: MealPlanner},
        {path: '/macro-calculator', name: 'macro-calculator', component: MacroCalculator},
        {path: '/', redirect: '/meal-planner'},
    ]
})
