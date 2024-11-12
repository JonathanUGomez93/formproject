import '../../styles/account.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Account =() => {
  return (
    <>
      <h1 className='sectionTitle'>Opciones de Cuenta</h1>
      <div className='accountContainer'>
        <div className='login'>
          <h2 className='accountTitle'>Ingresa</h2>
          <div className='socialsLogin'>
            <button>Inicia sesión con <FontAwesomeIcon icon={faGoogle} /></button>
            <button>Inicia sesión con <FontAwesomeIcon icon={faFacebook}/></button>
          </div>
          <div className='separator'></div>
          <form className='accountForm'>
            <label htmlFor="email">Correo Electrónico</label>
            <input type='email' placeholder='tumail@tumail.com' />
            <label htmlFor="password">Poné tu contraseña</label>
            <input type='password' placeholder='*****' />
            <button type='submit' className='submit'>Ingresar</button>
          </form>
          <div className='helper'>
            <a href="/">¿Olvidaste tu contraseña?</a>
            <div>
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Recordarme</label>
            </div>
          </div>
        </div>
        <div className='register'>
          <h2 className='accountTitle'>Registrate</h2>
          <div className='socialsLogin'>
            <button>Registrate con <FontAwesomeIcon icon={faGoogle} /></button>
            <button>Registrate con <FontAwesomeIcon icon={faFacebook}/></button>
          </div>
          <div className='separator'></div>
          <form className='accountForm' action="" method="post">
            <label htmlFor="user">Usuario</label>
            <input type="text" placeholder='Ingresa tu usuario' />

            <label htmlFor="password">Contraseña</label>
            <input type="password" placeholder='Crea una contraseña' />

            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" placeholder='tumail@tumail.com' />

            <button type='submit' className='submit'>Crear Cuenta</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Account