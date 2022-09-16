import { useCallback } from 'react';
import { atom, RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';

const valueState = atom({
  key: 'value-obj',
  default: {
    value1: 0,
    value2: 0,
  },
});

function ChildComponent1() {
  const state = useRecoilValue(valueState);
  return <div>{state.value1}</div>;
}

function ChildComponent2() {
  const state = useRecoilValue(valueState);
  return <div>{state.value2}</div>;
}

function ParentComponent() {
  const setValue = useSetRecoilState(valueState);
  const setValue2 = useSetRecoilState(valueState);

  const onClickValue1 = useCallback(() => {
    setValue((state) => ({
      ...state,
      value1: state.value1 + 1,
    }));
  }, [setValue]);

  const onClickValue2 = useCallback(() => {
    setValue2((state) => ({
      ...state,
      value2: state.value2 + 1,
    }));
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
