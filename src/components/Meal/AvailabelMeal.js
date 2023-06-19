import classes from './AvailableMeal.module.css'

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Samsoa',
      description: 'Stuffed with fresh potatoes & peas',
      price: 20,
    },
    {
      id: 'm2',
      name: 'Chole Bhature',
      description: 'Most famous breakfast!',
      price: 90,
    },
    {
      id: 'm3',
      name: 'Burger',
      description: 'Desi burger, raw, chessy',
      price: 55,
    },
    {
      id: 'm4',
      name: 'Green Salad',
      description: 'Healthy...and green...',
      price: 120,
    },
  ];
  
  const AvailableMeal = () => {
    const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);
  
    return (
      <section className={classes.meals}>
        <ul>{mealsList}</ul>
      </section>
    );
  };
  
  export default AvailableMeal;