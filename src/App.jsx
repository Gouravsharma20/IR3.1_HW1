import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header.jsx'

function App() {

  return (
    <>
    <Header/>
    <main className="container py-4">
        <h1>Featured Restraunts</h1>
        <img src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded mx-auto d-block img-fluid'></img>
        <h3 className='pt-4'><strong>Taste of Italy</strong></h3>
        <p>Italian | rating:4.5</p>
        <p>123 Main Street Anytown USA</p>
        <img src='https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded mx-auto d-block img-fluid'></img>
        <h3  className='pt-4'><strong>Spice Village</strong></h3>
        <p>Indian | rating:4.3</p>
        <p>456 ELM Street Anytown USA</p>
    </main>
    </>
    
  )
  }

export default App
