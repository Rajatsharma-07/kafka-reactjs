import axios from 'axios';
import './App.css';

function App() {
  const handleSendEmail = () => {
    axios.post('/api/v1/send/email', {email_body: 'Hi from Kafka'})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
  }
  return (
    <div className="App">
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
}

export default App;
