import './Home.css'
import 'boxicons'
import Header from "./shablon/Header"
import Product from "./shablon/Product"
import Reklama from "./shablon/Reklama"
import Footer from './shablon/Footer'
function Home(){
   
    return (
    <div>
    <Header></Header>
    <Product></Product>
    <Reklama></Reklama>
    <Footer></Footer>
    </div>
    )
}

export default Home