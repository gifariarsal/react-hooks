import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Counter from './components/hooksExample/Counter';
import CounterEffect from './components/hooksExample/CounterEffect';
import InputName from './components/hooksExample/InputName';
import CounterWithReducer from './components/hooksExample/CounterWithReducer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<h1>Welcome to React Hooks Example</h1>} />
        <Route path='/use-state' element={<Counter />} />
        <Route path='/use-effect' element={<CounterEffect />} />
        <Route path='/use-ref' element={<InputName />} />
        <Route path='/use-reducer' element={<CounterWithReducer />} />
      </Routes>
    </div>
  );
}

export default App;
