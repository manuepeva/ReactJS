import React, { Fragment, useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Formulario from './Components/Formulario/Formulario';
import Noticias from './Components/Noticias/Noticias';




function App() {

  // Definir la categoría de noticias
  const [categoria, guardarCategoria] = useState('');

  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const apikey = 'fda0e5c395c64c1ea4ee2ac7b4ba2fd4';
      const url = `http://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=${apikey}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    }
    consultarAPI();
  }, [categoria])


  return (


    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <Noticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
