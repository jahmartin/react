import React from 'react';
import {Link} from "react-router-dom";


function HomePage() {
    return(
        <section className="section">
            <div className="container-title">
                <div className="title-home">Financiamiento
                    para empresas SaaS
                    y modelos de suscripción</div>

                <Link className="button-credit" to={"/register"} >SOLICITA TU CREDITO EMPRESARIAL A55</Link>

            </div>

        </section>
    );
}

export default HomePage
