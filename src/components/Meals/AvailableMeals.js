import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Chole Bhature',
    description: 'Famous Punjabi Dish!',
    price: 120,
  },
  {
    id: 'm2',
    name: 'Pizza',
    description: 'Fresh Hand tossed Pizza!',
    price: 160,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'Indian desi burger',
    price: 75,
  },
  {
    id: 'm4',
    name: 'Vada Pav',
    description: 'Famous marathi style Vada Pav',
    price: 45,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
