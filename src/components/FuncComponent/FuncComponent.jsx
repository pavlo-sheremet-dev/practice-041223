import { useEffect, useState } from 'react';

// const useCustomHook = () => {}

export const FuncComponent = ({ counter }) => {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);
  const [userName, setUserName] = useState('Pavlo');

  useEffect(() => {
    if (!counter) return;
    console.log('update');
    setValue(counter);
  }, [counter]);

  useEffect(() => {
    console.log('MOUNT FUNCTION COMPONENT');

    const onKeyDown = e => {
      console.log(e.code);
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      console.log('UNMOUNT FUNCTION COMPONENT');
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const onChangeValue = () => {
    // setValue(10);
    setValue(prevValue => {
      return prevValue + 10;
    });
  };

  const addMovie = () => {
    // setMovies(prev => [...prev, { id: '1', name: 'avatar' }]);
    setValue(p => p + 10);
    setUserName(prevName => `${prevName} Sheremet`);
  };

  return (
    <div>
      <div>FUNCTION</div>
      <span>Hello {userName.toUpperCase()}</span>
      <div>{!!value && <div>Has value {value}</div>}</div>
      <button onClick={onChangeValue}>CHANGE VALUE</button>
    </div>
  );
};
