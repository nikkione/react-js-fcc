import { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);
  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*()_+';

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [charAllowed, length, numberAllowed]);

  const copyPassToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  useEffect(() => {
    generatePassword();
  }, [charAllowed, length, numberAllowed]);

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-center text-2xl font-bold mb-4'>Password Generator</h1>
      <div className='mb-4'>
        <input
          type='text'
          readOnly
          className='border border-gray-300 rounded p-2 w-full mb-2'
          placeholder='Password'
          value={password}
          ref={passwordRef}
        />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'
          onClick={copyPassToClipboard}
        >
          Copy
        </button>
      </div>
      <div>
        <div className='mb-4'>
          <input
            type='range'
            min={6}
            max={30}
            className='cursor-pointer w-full'
            value={length}
            name='range'
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor='range' className='block text-sm font-medium text-gray-700'>
            Length: {length}
          </label>
        </div>
        <div className='mb-4'>
          <input
            type='checkbox'
            className='rounded text-blue-600 focus:ring-blue-500'
            name='numbers'
            id='numbers'
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='numbers' className='ml-2 text-sm font-medium text-gray-700'>
            Numbers
          </label>
        </div>
        <div>
          <input
            type='checkbox'
            className='rounded text-pink-600 focus:ring-pink-500'
            name='character'
            id='character'
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='character' className='ml-2 text-sm font-medium text-gray-700'>
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
