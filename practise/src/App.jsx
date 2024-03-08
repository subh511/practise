// import { useContext, useState } from "react";
// import { CountContext } from "./components/ContextApi";

import { RecoilRoot,useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenCounter} from "./components/store/atoms/Count";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

//introduce a paramater which can show count format;
function Count() {
  return (
    <div>
      <CountRenderer  />
      <Button />
      <EvenCountRenderer/>
    </div>
  );
}
function CountRenderer() {
  const count = useRecoilValue(countAtom)

  return <div>{count}</div>;
}
function EvenCountRenderer(){
  const isEven = useRecoilValue(evenCounter)
  return(
    <div>
    {isEven % 2 == 0 ? "it is even" : null}
    </div>
  )
}

function Button() {
  const setCount = useSetRecoilState(countAtom)
  return (
    <div>
      <button onClick={() => setCount(count =>count + 1)}>increase</button>
      <button onClick={() => setCount(count =>count - 1)}>decrease</button>
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
