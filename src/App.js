
import './App.css';
import Card from  "./Componentpages/Card.js" ;   // './Componentpages/Card.js'
               
              
function App() {

  return (
    <div className='App'>
       <section class="pricing py-5">
       <div class="container">
       <div class="row">
        <Card price="10" user="Single User" storage="10GB" />
        <Card  price="20" user="Double Users"  storage="20GB"/>
        <Card  price="30" user="Triple Users"  storage="30GB"/>
        <Card  price="40"  user="Four Users"  storage="40GB"/>
        <Card  price="50" user="Five Users" storage="50GB"/>
        <Card price="1000" user="Multiple Users" storage="UNLIMITED"/>
      </div>
      </div>
      </section>
    </div>
      
  );
}

export default App;
