import './styles.css';
import TextField from './TextField';
import CoolButton from './CoolButton';
import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [textQuery, setTextQuery] = useState("");
  const [chatGPTResponse, setChatGPTResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [keyAPI, setKeyAPI] = useState("");

  const btnClick = () => {
    if (!textQuery) {
      alert("Escriba una pregunta");
      return;
    }

    setLoading(true);

    axios.post('https://enscz9b91f.execute-api.us-east-1.amazonaws.com/preview/query', {
      query: textQuery
    },
    {
      headers: { 'x-api-key': "Bearer " + keyAPI }
    })
    .then((response) => {
      setChatGPTResponse(response.data.body)
      setLoading(false);
    }, (error) => {
      console.log(error);
    });
  }

  const txtChange = (event) => {
    setTextQuery(event.target.value);
  }

  const keyChange = (event) => {
    setKeyAPI(event.target.value);
  }

  return (
    <div className="App">
      <div className='label'>API Key</div>
      <input type='text' id='token' onChange={keyChange} />
      <TextField label="Escriba su prompt aqui:" changeHandler={txtChange} />
      <CoolButton caption="Enviar" clickHandler={btnClick} loading={loading} />
      <TextField label="Respuesta de Chat GPT:" contents={chatGPTResponse} />
    </div>
  );
}

export default App;
