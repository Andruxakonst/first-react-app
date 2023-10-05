import Costs from "./components/Costs/Costs";
const App = () =>{
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
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
