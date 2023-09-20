import '../style/Header.css'


function Header(){

   

    return (
        <div className="App">

         
      <div className='body-navbar'>

      <div className='main-navbar'>

      <header className="navbar">
     <div className='logo'>
     <img src="/photo/fav.png" alt="Logo" />
     <h1>KARMA</h1>
     </div>
     <div className='navbar-div'>
        <ul className="main">
          <li>Home</li>
          <div class="dropdown"><li>Shop</li>
          <ul class="dropdown-menu">
              <li>Shop now</li>
              <li>Product Details</li>
              <li>Product Checkout</li>
              <li>Shopping Cart</li>
              <li>Confirmation</li>
          </ul>
        </div>
          <div class="dropdown">
          <li>blog</li>
          <ul class="dropdown-menu">
              <li>Blog</li>
              <li>Blog Details</li>
          </ul>
        </div>
        <div class="dropdown"> 
         <li>Pages</li>
          <ul class="dropdown-menu">
              <li>Login</li>
              <li>Tracking</li>
              <li>Elements</li>
          </ul>
        </div>
        
          <li>Contact</li>

          <div className='icons'>

          <img src="/photo/bag.png" alt="bag" />
           <img src="/photo/search.png" alt="Logo" />
          </div>
        
        </ul>
     </div>
      </header>
      {/* respon-nav */}
      <div class="respon-nav">
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn"> 
            
            <img src='/photo/logo.png'/>
            <img src='/photo/menu.png' />
           
        </label>
 
      <ul>
        <li><a class="active" href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Feedback</a></li>
        <li><input type="text" name="text" placeholder='search'/><input type="submit" value="search"></input></li>
      </ul>
    </div>
        {/* respons-nav end */}
      </div>
      <div className='nav-body'>

      <div className='navm'>
        
      <div className='nav-bottom'>
            <h1>Nike New <br/>Collection!</h1>
          
      </div>
        <div className='nav-text'>
        <div className='nav-div'>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
        </div>
        </div>
       <div className='bag'>
        <div className='bag-main'>

          <div className='plus'>
          <img src="/photo/plus.png" alt="Logo" />
          </div>
          <div className='plus-add'>
              <p>Add to Bag</p>
          </div>
        </div>
       </div>
      </div>
      <div className='nav-img'>
      <img src="/photo/banner-img.png" alt="Logo" />
      </div>
  
   
      </div>
      </div>
       <div className='header'>
        <div className='header-main'>
        <div className='delivery'>
            <img src="/photo/f-icon1.png" alt="Logo" />
            <h1>Free Delivery</h1>
            <p>Free Shipping on all order</p>
        </div>
        <div className='delivery'>
            <img src="/photo/f-icon2.png" alt="Logo" />
            <h1>Free Delivery</h1>
            <p>Free Shipping on all order</p>
        </div>
        <div className='delivery'>
            <img src="/photo/f-icon3.png" alt="Logo" />
            <h1>Free Delivery</h1>
            <p>Free Shipping on all order</p>
        </div>
        <div className='delivery'>
            <img src="/photo/f-icon4.png" alt="Logo" />
            <h1>Free Delivery</h1>
            <p>Free Shipping on all order</p>
        </div>
        </div>
       </div>
        <div className='header-img'>
        <div className='header-img-body1'>
            <div className='first-img'>
                <img src="/photo/c1.jpg" alt="Logo" />
                <img src="/photo/c2.jpg" alt="Logo" />
            </div>
            <div className='first-img2'>
                <img src="/photo/c3.jpg" alt="Logo" />
                <img src="/photo/c4.jpg" alt="Logo" />
            </div>
        </div>
        <div className='header-img-body2'>
            <img src="/photo/c5.jpg" alt="Logo" />
        </div>
        </div>
        {/* product */}

       
        </div>
    )
    
}

export default Header;