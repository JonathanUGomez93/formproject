import '../../styles/account.css'

const Account =() => {
  return (
    <>
      <h1 className='sectionTitle'>Opciones de Cuenta</h1>
      <div className='accountContainer'>
        <div className='login'>
          <h2 className='accountTitle'>Inicia Sesión</h2>
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
          <h2 className='accountTitle'>Registro</h2>
          <form className='accountForm' action="" method="post">
            <label htmlFor="user">Usuario</label>
            <input type="text" placeholder='Ingresa tu usuario' />

            <label htmlFor="password">Contraseña</label>
            <input type="password" placeholder='Crea una contraseña' />

            <label htmlFor="email">Tu email</label>
            <input type="email" placeholder='tumail@tumail.com' />

            <button type='submit' className='submit'>Crear Cuenta</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Account