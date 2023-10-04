import CostItem from "./components/CostItem";
function App() {
    const costs = [
        {
            date : new Date(2021, 2, 12),
            description : 'Холодильник',
            price : 999.99,
        },
        {
            date : new Date(2021, 11, 25),
            description : 'MacBook',
            price : 1254.72,
        },
        {
            date : new Date(2021, 3, 1),
            description : 'Джинсы',
            price : 49.99,
        },
    ];

  return (
    <div>
      <h1>Начнем изучение REACT</h1>
        <CostItem
            date={costs[0].date}
            description={costs[0].description}
            price={costs[0].price}>
        </CostItem>
        <CostItem
            date={costs[1].date}
            description={costs[1].description}
            price={costs[1].price}>
        </CostItem>
        <CostItem
            date={costs[2].date}
            description={costs[2].description}
            price={costs[2].price}>
        </CostItem>
    </div>
  );
}

export default App;
