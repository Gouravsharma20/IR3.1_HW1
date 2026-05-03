import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../components/Header"

export default function Restaurants() {
  return (
    <>
    <Header/>
    <main className="container py-4">
        <p class="fs-1">Restaurants</p>
      <div>
        <div className="card mb-3" style={{maxwidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="img-fluid rounded-start" alt="Restaurant interior"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


        


        <div className="card mb-3" style={{maxwidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src='https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="img-fluid rounded-start" alt="Restaurant interior"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>


    

     
   

      

    </main>
    </>
    
  );
}