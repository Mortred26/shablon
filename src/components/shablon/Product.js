import '../style/Product.css'
import '../style/Header.css'
import { useEffect, useState } from 'react';

function Product(){
    const [overdata, OverData] = useState(null);
    
    useEffect(() => {
        fetch("http://localhost:4000/products")
        .then((res) => {
            return res.json();
        })
          .then((response) => {
            OverData(response);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    


   
     
    return (
      <div className='App'>
             <div className='product-head'>
          <div className='product-mhead'>
          <img src="/photo/prev.png" alt="Logo" />
            <h1>Coming Products</h1>
            <img src="/photo/next.png" alt='next'/>

          </div>
        </div>
        <div className='pr-text'>
          <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et</p>
        </div>  
        <div className='product-main'>
            <div className='product-body'>
            {
                overdata &&
                overdata.map((item)=>(
                <div className='product'>
                    <img src="/photo/product/p1.jpg" alt="Logo" />
                    <h6>{item.name}<br/>for Sports person</h6>
                    <div className='product-con'>
                        <h1>${item.price}.00</h1>
                        <p>${item.oldprice}.00</p>
                    </div>
                    <div className="product-icons">
                        <div className='pr-icons'>   
                       
                         <img src="/photo/product/whitebag.png" alt="Logo" />
                    
                    </div>                        
                        <div className='pr-icons'>
                       
                            <img src="/photo/product/hurt.png" alt="Logo" />
                     
                        </div>
                        <div className='pr-icons'>
                       
                            <img src="/photo/product/sync.png" alt="Logo" />
                      
                        </div>
                        <div className='pr-icons'>
                       
                            <img src="/photo/product/move.png" alt="Logo" />
                       
                        </div>
                    </div>
                </div>
                ))
            }
            </div>

        </div>
        <div className='product-main2'>
            <div className='product-body'>
         
            </div>

        </div>
      </div>
    )
}

export default Product;