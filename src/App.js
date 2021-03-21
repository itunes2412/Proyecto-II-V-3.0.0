import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <>
    <header>
      <nav>
        <div className="logo">
          <img src="img/Mueblerias.png">
          </img>
        </div>
        <div className="menu">
          <a href="#">
              Inicio
          </a>
          <a href="#">
           Pantallas
          </a>
          <a href="#">
            Estereos
          </a>
          <a href="#">
            Tablets
          </a>
          <a href="#">
            Celulares
          </a>
          <a href="#">
           Computadoras
          </a>
          <a href="#">
            Contacto
          </a>


        </div>
      </nav>
      <div className="cabecera">
      <img  src="img/Uno.png">
      </img>
      </div>
    </header>
    <section>
      
         <h2>
             
        </h2>

      <div className="informacion">
          <div className="informacion_imagen">
              <img src="img/electro.png">
              </img>
          </div>
          <div className="informacion_texto">
              <p align="justify">
              En Muebles Troncaso encontrarás los precios más baratos del mercado, con una selección de electrodomésticos de gran calidad. Te ofrecemos las mejores marcas, tales como Bosch, Balay, Samsung, Siemens,Teka, Electrolux, AEG, LG y otras muchas que se encuentran entre las más reconocidas y prestigiosas del mundo de los electrodomésticos.
              En nuestra tienda online te ponemos al alcance un amplio catálogo de electrodomésticos baratos para que puedas escoger el que más te guste al mejor precio del momento.
              Compra de forma sencilla, rápida y económica los electrodomésticos que necesites para tu hogar y equipa toda tu casa con los electrodomésticos baratos de calidad que estás buscando.

              </p>
          </div>
      </div>
    </section>
    <footer>
      <div className="telefonos">
        <h3>Servicio al Cliente</h3>
        <p>8000213000</p>
        <p>3312587421</p>
        
      </div>
      <div className="correos">
        <h3>Contacto</h3>
        <p>mueblestroncaso@troncaso.com</p>
        
      </div>
      <div className="sucursales">
        <h3>Sucursales</h3>
        <p>Guadalajara</p>
        <p>CDMX</p>
        <p>Monterrey</p>
      </div>
      <div className="redes">
          <img src="img/face.png"></img>
          <img src="img/insta.png"></img>
          <img src="img/twit.png"></img>
          <img src="img/you.png"></img>
      </div>
    </footer>
   </>
  );
}

export default App;