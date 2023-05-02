import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    { id: 0, brand: 'Toyota', hp: 324, traction: 'RWD' },
    { id: 1, brand: 'Nissan', hp: 280, traction: 'AWD' },
    { id: 2, brand: 'Honda', hp: 273, traction: 'RWD' },
    { id: 3, brand: 'Mazda', hp: 255, traction: 'RWD' },
  ];

  return (
    <div className="App">
      <h1>
        Concessionária HELLO THERE!
      </h1>
      <p>Venha conhecer mais sobre carros 'U'</p>
      <div>
        {cars.map((cars) => (
          <CarDetails
            key={cars.id}
            brand={cars.brand}
            hp={cars.hp}
            traction={cars.traction}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
