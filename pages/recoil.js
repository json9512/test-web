import { useCallback } from 'react';
import {
  atom,
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

const valueState = atom({
  key: 'value',
  default: 0,
});

const value2State = atom({
  key: 'value2',
  default: 0,
});

function ChildComponent1() {
  const value1 = useRecoilValue(valueState);
  return <div>{value1}</div>;
}

function ChildComponent2() {
  const value2 = useRecoilValue(value2State);
  return <div>{value2}</div>;
}

function ParentComponent() {
  const setValue = useSetRecoilState(valueState);
  const setValue2 = useSetRecoilState(value2State);

  const onClickValue1 = useCallback(() => {
    setValue((value) => value + 1);
  }, [setValue]);

  const onClickValue2 = useCallback(() => {
    setValue2((value) => value + 1);
  }, [setValue2]);

  return (
    <div
      style={{
        width: '50vw',
        height: '50vh',
        flexDirection: 'column',
        display: 'flex',
        margin: 'auto',
      }}
    >
      <button onClick={onClickValue1}>change value 1</button>
      <button onClick={onClickValue2}>change value 2</button>
      <br />
      <ChildComponent1 />
      <ChildComponent2 />
    </div>
  );
}

export default function Home() {
  return (
    <RecoilRoot>
      <ParentComponent />
    </RecoilRoot>
  );
}
