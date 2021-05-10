import './App.css';
import { CounterHook } from './components/CounterHook';
import { EffectHook } from './components/EffectHook';
import { FormHook } from './components/FormHook';
import { ItemHook } from './components/ItemHook';
import { MouseEventEffect } from './components/MouseEventEffect';

function App() {
  return (
    <div className="App">
      {/* <CounterHook />
      <FormHook />
      <ItemHook /> */}
      {/* <EffectHook /> */}
      <MouseEventEffect />
    </div>
  );
}

export default App;
