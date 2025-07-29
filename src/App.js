import Imagen from './components/basicos/imagen';
import './lib/bootstrap-5.3.6-dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="container mt-5">
      <section className="mb-5">
        <Imagen
          src="mecanica.jpg"
          alt="Placeholder"
          width="150"
          height="150"
          className="d-block mb-3"
        />
      </section>

    </div>
  );
}

export default App;
