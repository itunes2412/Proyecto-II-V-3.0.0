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
      <img  src="img/volvo.jpg">
      </img>
      </div>
    </header>
    <section>
      
         <h2>
            CONOCENOS SOMOS MUEBLERIAS TRONCASO
        </h2>

      <div className="informacion">
          <div className="informacion_imagen">
              <img src="img/servicio.jpg">
              </img>
          </div>
          <div className="informacion_texto">
              <p>
              Muebles Troncaos es la primera mueblería online de México. Fabricante de muebles, salas, comedores, recámaras y accesorios para el hogar. 
              Fabricamos muebles, como tú lo quieres, solo elige el modelo, estilo, material y color. Nosotros nos encargamos del resto. 
              Así de fácil es comprar tus muebles online de manera rápida y cómoda desde tu hogar.
              Con nosotros encontraras gran variedad y estilos en salas, sillones, sofás, recámaras, sofás cama, mesas, sillas, muebles de TV, accesorios y muchos muebles más para tu hogar. 
              Visita nuestras tiendas y mueblerías y conoce los artículos que tenemos para ti.
              </p>
          </div>
      </div>
    </section>
    <footer>
      <div className="telefonos">
        <h3>Télefono</h3>
        <p>555-555-5555</p>
        <p>555-555-5555</p>
        <p>555-555-5555</p>
      </div>
      <div className="correos">
        <h3>Correos</h3>
        <p>correo@correo.es</p>
        <p>correo@correo.es</p>
        <p>correo@correo.es</p>
      </div>
      <div className="sucursales">
        <h3>Sucursales</h3>
        <p>Guadalajara</p>
        <p>Tlaquepaque</p>
        <p>Zapopan</p>
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