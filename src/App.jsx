import React, { useState } from 'react'
import Container from './components/util/Container';
import Button from './components/util/Button';
import Input from './components/Input';
import Title from './components/util/Title';
import Error from './components/util/Error';

function App() {

  const [error, setError] = useState(false);
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  function convertTemperature() {
        
    if((celsius === '' && fahrenheit === '') || (celsius !== '' && fahrenheit !== '')) {
      setError(true);
      return;
    }

    setError(false);

    if(celsius !== '') {
      setFahrenheit((parseFloat(celsius) * 1.8 + 32).toFixed(2));
      setCelsius('');
    }

    if(fahrenheit !== '') {
      setCelsius(((parseFloat(fahrenheit) - 32) / 1.8).toFixed(2));
      setFahrenheit('');
    }

  }

  return (
    <React.Fragment>
      <Container>
        <Title>Conversor Hi-Tech de Temperatura</Title>
        <Error>{error ? 'O input está errado!' : ''}</Error>
        <Input type='number' value={celsius} onChange={(e) => setCelsius(e.target.value)} placeholder="Celsius"></Input>
        <Input type='number' value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} placeholder="Fahrenheit"></Input>
        <div>
          <Button onClick={convertTemperature}>Converter</Button>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
