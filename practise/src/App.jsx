import { useContext, useState } from "react";
import { CountContext } from "./components/ContextApi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={count}>
      <Count setCount={setCount} />
    </CountContext.Provider>
  );
}

function Count({ setCount }) {
  const count = useContext(CountContext)
  return (
    <div>
      <CountRenderer  />
      <Button count={count} setCount={setCount} />
    </div>
  );
}

function CountRenderer() {
  const count = useContext(CountContext);

  return <div>{count}</div>;
}
function Button({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
}

// <CountRenderer />
// <Button />

// function CountRenderer() {
//   const count = useRecoilValue(countAtom)
//   return <div>{count}</div>;
// }
// function Button() {
//   const setCount = useSetRecoilState(countAtom);
//   return (
//     <div>
//       <button onClick={() => setCount(count => count + 1)}>increase!</button>
//       <button onClick={() => setCount(count => count - 1)}>decrease!</button>
//     </div>
//   );
// }

export default App;
