import {useState} from 'react';

import Button, {ButtonProps} from 'src/components/Button';
import styles from './App.module.scss';

function App() {
  const [count, setCount] = useState(0);

  const handleClick: ButtonProps['onClick'] = value => {
    setCount(count => count + 1);
    console.log('App:onClick', value);
  };

  return (
    <div className={styles.root}>
      <Button onClick={handleClick}>count is</Button>
    </div>
  );
}

export default App;
