import Shop from './Components/Shop/Shop';
import Cart from './Components/Cart/Cart';
import './App.css';

function App() {
  return (
    <div className='container d-flex'>
      <div className="col-md-6">
        <Shop />
      </div>
      <div className="col-md-6">
        <Cart />
      </div>
    </div>
  );
}

export default App;
