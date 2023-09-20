import '../style/Reklama.css'


function Reklama(){

    return (
        <div className='rek-allmain'>

        <div className='reklama-main'>
        
            <div className='reklama-left'>
                <div className='reklama-left-tmain'>
        
                <div className='reklama-left-text'>
                <h1>Exclusive Hot Deal Ends <br/>Soon!</h1>
                <p>Who are in extremely love with eco friendly system.</p>
                    <div className='rek-time'>
                        <div className='r-time'>
                        <h1>29</h1>
                        <p>Days</p>
                        </div>
                        <div className='r-time'>
                        <h1>23</h1>
                        <p>Hours</p>
                        </div>
                        <div className='r-time'>
                        <h1>43</h1>
                        <p>mins</p>
                        </div>
                        <div className='r-time'>
                        <h1>24</h1>
                        <p>Secs</p>
                        </div>
                    </div>
                    <div className='r-button-main'>
                    <div className='r-button'>
                     Shop Now
                       
                    </div>
                    </div>
                </div>

                </div> 
            </div>
            <div className='reklama-right'>
                <div className='rigth-img'>
                    <a href='#'>
                <img src="/photo/prev.png" alt='prev' />
                    </a>
                </div>
                  <div className='main-right'>
                    <img src="/photo/product/rek.png" alt='rek'/>
                    <div className='item-price'>
                        <h6>$150.00</h6>
                        <h6>$210.00</h6>
                    </div>
                    <h4>addidas New Hammer<br/> sole for Sports<br/>person</h4>
                    <div className='btn-body'>
                    <div className='rbtn-main'>
                        <div className='r-btn'>
                       <img src='/photo/product/whitebag.png' alt='whitebag' />
                        </div>
                        <span className='r-bag'>Add to Bag</span>
                    </div>
                    </div>
                </div>
                  <div className='rigth-img'>
                  <a href='#'>
                    <img src="/photo/next.png" alt='next' />
                    </a>
                </div>
            </div>

          
        </div>
            <div className='rek-footer'>
                <div className='rek-ftmain'>
                
                        <img src="/photo/product/1.png" alt='1'/>
                
                        <img src="/photo/product/2.png" alt='2' />
               
                        <img src="/photo/product/3.png" alt='3' />
                
                        <img src="/photo/product/4.png" alt='4' />
               
                        <img src="/photo/product/5.png" alt='5'/>
                </div>
            </div>
        </div>
        
    )
}

export default Reklama;