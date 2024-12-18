
import './App.css'
import ProductList from './components/ProductList'
import useLogin from './hooks/useLogin'
function App() {
  const {isLoggedIn,handleLogIn,handleLogOut} =useLogin();

  return (
    <>
      <div>
      <button onClick={isLoggedIn ?handleLogOut : handleLogIn} className='bg-yellow-400 my-3 rounded-lg text-3xl'>
        {
          isLoggedIn ? "Log Out" : "Log In"
        }
      </button>
        <ProductList/>
      </div>
    </>
  )
}

export default App
