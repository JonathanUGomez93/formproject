import '../../styles/account.css'

const Account =() => {
  return (
    <>
      <div className='accountContainer'>
        <div className='login'>
          <h1 className='accountTitle'>Inicia Sesión</h1>
          <form className='loginForm'>
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
          <h2 className='accountTitle'>Crea Tu Cuenta</h2>
        </div>
      </div>
    </>
  )
}

export default Account