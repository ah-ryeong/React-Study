import logo from './logo.svg';
import './App.css';
import { useState, useTransition, useDeferredValue } from 'react';

let a = new Array(10000).fill(0);

function App() {
  let [name, setName] = useState('');
  // startTransition은 함수임 -> 늦게처리
  // isPending은 startTransition이 처리중일 때 true로 변함
  let [isPending, startTransition] = useTransition();

  // 여기 집어넣은 state는 좀 늦게 처리해줌 -> startTransition이랑 같음
  let state = useDeferredValue(name);

  return (
    <div className="App">
      {/* useTransition으로 느린 컴포넌트 성능향상 */}
      <input onChange={(e) => { 
          startTransition(() => {
            setName(e.target.value);
          })
        }} />

      {
        isPending ? '로딩중' :
        a.map(() => {
          return <div>{name}</div>
        })
      }
    </div>
  );
}

export default App;
