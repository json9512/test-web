import { useCallback, useState } from 'react';

function ChildComponent({ value }) {
  return <div>{value}</div>;
}

function ParentComponent() {
  const [value, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const onSetValue1 = useCallback(() => {
    setValue1((value) => value + 1);
  }, []);

  const onSetValue2 = useCallback(() => {
    setValue2((value) => value + 1);
  }, []);

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
      <button onClick={onSetValue1}>change value 1</button>
      <button onClick={onSetValue2}>change value 2</button>
      <br />
      <ChildComponent value={value} />
      <ChildComponent value={value2} />
    </div>
  );
}

export default function Home() {
  return <ParentComponent />;
}
