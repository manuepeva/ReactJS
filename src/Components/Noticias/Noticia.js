import React from 'react';
import styles from '../Formulario/Formulario.module.scss';
import PropTypes from 'prop-types';

const Noticia = ({ noticia }) => {

    // Extraer y mostrar la información de la API a la interfaz

    const { urlToImage, url, title, description, source } = noticia;
    const image = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt="title" />
            <span className="card-title">{source.name}</span>
        </div>
        : null;

    return (
        <div className="col s12 m6 l4">
            <div className={`card ${styles.cardHeight}`}>
                {image}
                <div className="card-content">
                    <h3 className={styles.classH}>{title}</h3>
                    <p className={styles.pHeight}>{description}</p>
                </div>
                <div className="card-action buttonAct">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    )
}

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;
