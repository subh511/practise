import { useState } from "react";


function App() {

  const [count,setCount] = useState(0);

  return (
    <div>
    <Count count={count} setCount={setCount}/>
    <Button/>
    </div>
  );
}

function Count({count}) {
  return (
    <div>
    {count}
    </div>
  );
}

function Button({count,setCount}){

  return(
    <div>
    <button>increase</button>
    <button>decrease</button>
    </div>
  )
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
