import React, { useState, useEffect } from 'react'

export const EffectHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const incrementButton = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  useEffect(() => {
    document.title = `クリック数： ${count} 回`
    console.log('render');
  },[count]);

  return (
    <div>
      <p>クリック数： {count} 回</p>
      <p>名前： {name} </p>
      <input
        type="text"
        value={name}
        onChange={onChangeName}
      />
      <button onClick={incrementButton}>カウント + 1</button>
    </div>
  )
}
