import { useState } from 'react';
import { ClassComponent } from './ClassComponent/ClassComponent';
import { FuncComponent } from './FuncComponent/FuncComponent';

export const App = () => {
  const [isClass, setIsClass] = useState(false);
  const [counter, setCounter] = useState(0);

  const toggleComponents = () => setIsClass(p => !p);

  const increment = () => setCounter(prev => prev + 5);

  return (
    <div className={'test'}>
      .<button onClick={toggleComponents}>TOGGLE COMPONENTS</button>
      <div>{counter}</div>
      <button onClick={increment}>INCREMENT COUNTER</button>
      {isClass ? (
        <ClassComponent counter={counter} />
      ) : (
        <FuncComponent counter={counter} />
      )}
    </div>
  );
};
