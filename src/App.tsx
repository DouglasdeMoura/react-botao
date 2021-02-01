import React from 'react';
import { FiUser } from 'react-icons/fi';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  return (
    <>

      <Input background="#ffffff" color="#000000" iconStart={<FiUser size={14} />} iconEnd={<FiUser size={14} />} label="Input" type="text" />
      <Button
        background="#f00"
        color="#000"
        iconStart={<FiUser size={16} />}
        iconEnd={<FiUser size={16} />}
      >
        Botão teste
      </Button>

    </>
  );
}

export default App;
