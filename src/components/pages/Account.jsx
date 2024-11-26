import '../../styles/account.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useState, useContext, useEffect } from 'react';
import { context } from "../CustomProvider"
const Account = () => {
  //creacion de usuario:
  const {users,loguedUser, agregarUsuario, logUser} = useContext(context);
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      id: Date.now(),
      user: usuario,
      email: email,
      password: password,
      cart: [],
      logued: false
    };
    agregarUsuario(nuevoUsuario);
    setUsuario('');
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    console.log("Usuarios Existentes",users);
  }, [users])

  //logueo de usuario existente
  const [loginMail, setLoginMail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();

    const usuarioEncontrado = users.find((user) => user.email === loginMail && user.password === loginPassword);
    if (usuarioEncontrado) {
      usuarioEncontrado.logued = true;
      logUser(usuarioEncontrado);
      console.log("LOGUEADO CORRECTAMENTE");
      console.log('Usuario logueado:', usuarioEncontrado);
      console.log('Estado loguedUser:', usuarioEncontrado);
    } else {
      console.log("Usuario o contraseña incorrectos");
    }
    setLoginMail("");
    setLoginPassword("");
  };

  useEffect(() => { console.log("Usuario logueado en el estado loguedUser:", loguedUser); }, [loguedUser]);
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
          <form className='accountForm' onSubmit={handleLogin}>
            <label htmlFor="email">Correo Electrónico</label>
            <input type='email' placeholder='tumail@tumail.com' value={loginMail} onChange={(e) =>setLoginMail(e.target.value)} required />
            <label htmlFor="password">Poné tu contraseña</label>
            <input type='password' placeholder='*****' value={loginPassword} onChange={(e) =>setLoginPassword(e.target.value)} required/>
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
          <form className='accountForm' onSubmit={handleSubmit}>
            <label htmlFor="user">Usuario</label>
            <input type="text" placeholder='Ingresa tu usuario' value={usuario} onChange={(e) => setUsuario(e.target.value)} required />

            <label htmlFor="password">Contraseña</label>
            <input type="password" placeholder='Crea una contraseña' value={password} onChange={(e) =>setPassword(e.target.value)} required />
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" placeholder='tumail@tumail.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
            
            <button type='submit' className='submit'>Crear Cuenta</button>
          </form>
        </div>
      </div>
    </>
  )
}
export default Account