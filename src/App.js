import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header/Header';
import Banner from './componentes/Banner/Banner';
import Card from './componentes/Card/Card';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null)

  const handleButtonClick = () => {
    setShowForm(!showForm)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form =event.target;
    const newFormData ={
      title: form.title.value,
      description: form.description.value,
      file: form.file.files[0].name,
    };
    setFormData(newFormData);
    setShowForm(false);
    alert('Formulario enviado')

  }
  return (
    <div className="App">
     <Header onButtonClick={handleButtonClick} />

     {showForm && (
        <form className="form-container"onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Título:</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div>
            <label htmlFor="description">Descripción:</label>
            <textarea id="description" name="description" required />
          </div>
          <div>
            <label htmlFor="file">Archivo de Video:</label>
            <input type="file" id="file" name="file" required />
          </div>
          <button type="submit">Enviar</button>
        </form>
        )}
          <Banner />
            <Card categoria="FRONTEND"/>
            <Card categoria="BACK END"/>
            <Card categoria="INNOVACION Y GESTION"/>

         <header className="App-header">
          
       
      </header>
    </div>
  );
}

export default App;
