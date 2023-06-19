import classes from './AvailableMeal.module.css'
import Card from '../UI/Card';
import MealItems from './MealItem/MealItems';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Samsoa',
      description: 'Flaky and crunchy fried Samosa!',
      price: 20,
    },
    {
      id: 'm2',
      name: 'Chole Bhature',
      description: 'most popular Punjabi dish!',
      price: 90,
    },
    {
      id: 'm3',
      name: 'Burger',
      description: 'Desi burger, raw, chessy!',
      price: 55,
    },
    {
      id: 'm4',
      name: 'Green Salad',
      description: 'Healthy and green!',
      price: 120,
    },
  ];
  
  const AvailableMeal = () => {
    const mealsList = DUMMY_MEALS.map((meal) => {
        return (<MealItems key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
        )
    });
  
    return (
      <section className={classes.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
      </section>
    );
  };
  
  export default AvailableMeal;