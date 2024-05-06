function App() {
  return (
    <>
      <nav className='navbar navbar-expand'>
        <div className='container d-flex justify-content-center'>
          <ul className='Navbar p-2 navbar-nav w-50 d-inline-flex flex-nowrap justify-content-between '>
            <li className='nav-item'>Proyectos</li>
            <li className='nav-item'>Sobre mí</li>
            <li className='nav-item'>Contacto</li>
          </ul>
        </div>
      </nav>
      <main className='container d-flex flex-column gap-4'>
        <section className='mt-4 d-flex flex-row align-items-center gap-2'>
          <img
            src='https://unavatar.io/meiduko'
            className='rounded-circle'
            height='100px'
            alt='mi foto'
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi eos
            temporibus natus itaque{' '}
          </p>
        </section>
        <section className='d-flex flex-column gap-4'>
          <h2>Proyectos</h2>
          <article className='d-flex flex-row align-items-center gap-2'>
            <div
              style={{
                height: '300px',
                minWidth: '200px',
                backgroundColor: '#000'
              }}
            />
            <div>
              <h4>Nombre</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique fugit in omnis architecto, aliquid excepturi illo hic.
                Qui harum aliquam voluptatem ea modi deleniti corporis,
                repudiandae unde! Nostrum, perspiciatis rem
              </p>
            </div>
          </article>
          <article className='d-flex flex-row align-items-center gap-2'>
            <div
              style={{
                height: '300px',
                minWidth: '200px',
                backgroundColor: '#000'
              }}
            />
            <div>
              <h4>Nombre</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique fugit in omnis architecto, aliquid excepturi illo hic.
                Qui harum aliquam voluptatem ea modi deleniti corporis,
                repudiandae unde! Nostrum, perspiciatis rem
              </p>
            </div>
          </article>
        </section>
        <section className='m-4'>
          <form action=''>
            <label htmlFor=''>Contacta conmigo!</label>
            <input
              className='form-control'
              type='text'
              readOnly
              value='borjago.bgo@gmail.com'
            />
            <button className='btn btn-outline-secondary'>Contactar</button>
            <button className='btn btn-outline-secondary'>Copiar</button>
          </form>
        </section>
      </main>
    </>
  )
}

export default App
