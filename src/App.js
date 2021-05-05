import './App.css';
import { CounterHook } from './components/CounterHook';
import { EffectHook } from './components/EffectHook';
import { FormHook } from './components/FormHook';
import { ItemHook } from './components/ItemHook';

function App() {
  return (
    <div className="App">
      {/* <CounterHook />
      <FormHook />
      <ItemHook /> */}
      <EffectHook />
    </div>
  );
}

export default App;
