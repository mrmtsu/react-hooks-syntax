import { useEffect, useState } from "react"

export const MouseEventEffect = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener('mouseover', getMousePosition)
    return () => {
      window.removeEventListener('mouseover', getMousePosition)
    }
  }, []);

  return (
    <div>
      <ul>
        <li>x座標: {x}</li>
        <li>y座標: {y}</li>
      </ul>
    </div>
  )
}
