import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./components/store/atoms/Count";

function App() {

  return (
    <RecoilRoot>
      <Count/>
      </RecoilRoot>
  );
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Button />
    </div>
  );
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)
  return <div>{count}</div>;
}
function Button() {
  const setCount = useSetRecoilState(countAtom);
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>increase!</button>
      <button onClick={() => setCount(count => count - 1)}>decrease!</button>
    </div>
  );
}

export default App;
