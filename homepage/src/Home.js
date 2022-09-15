import React from 'react'
import './Home.css';

const Home = () => {
    return (
        <div className='maincontainer'>
            <div className='header'>
                <div className='navbar'>
                    <div className='header-divleft'>
                        <a href="https://www.spotmentor.com/" target='blank'>
                            <img src='http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg' alt='logo' />
                        </a>
                    </div>
                    <div className='header-divright'>
                        <div className='header-divright_items' id='header-divright_items1'>
                               <div >
                                <span>All Categories</span>
                                <span id='header-divright_items1_span'>^</span>
                              </div>
                              <hr id='header-divright_items1_hr' />  
                              <div>
                                <input id='header-divright_items1_input' placeholder='Search for items...' />
                                <img id='header-divright_items1_img' src='https://cdn-icons-png.flaticon.com/512/482/482631.png' alt='search' />
                                </div>
                        </div>

                        <div className='header-divright_items' id='header-divright_items2'>
                            <img id='header-divright_items2_img' src='https://www.iconpacks.net/icons/2/free-icon-location-2950.png' alt='Location'/>
                            <span id='header-divright_items2_span'>Your Location</span>
                            <span id='header-divright_items2_span2'>^</span>
                        </div>

                        <div className='header-divright_items' id='header-divright_items3'>
                            <img id='header-divright_items3_img' src='https://images.vexels.com/media/users/3/155425/isolated/lists/656e36a687dada7c22ee3146ab8adf26-three-thick-arrows-circle.png' alt='arrow symbol'/>
                            <span id='header-divright_items3_span'>Compare</span>
                        </div>

                        <div className='header-divright_items' id='header-divright_items3'>
                            <img id='header-divright_items3_img' src='https://cdn3.iconfinder.com/data/icons/marketing-e-commerce/128/icons_-_marketing-41-512.png' alt='arrow symbol'/>
                            <span id='header-divright_items3_span'>Wishlist</span>
                        </div>

                        <div className='header-divright_items' id='header-divright_items3'>
                            <img id='header-divright_items3_img' src='https://png.pngitem.com/pimgs/s/177-1771609_yue-jia-fresh-navigation-bar-shopping-cart-shopping.png' alt='arrow symbol'/>
                            <span id='header-divright_items3_span'>Cart</span>
                        </div>

                        <div className='header-divright_items' id='header-divright_items3'>
                            <img id='header-divright_items3_img' src='https://icons-for-free.com/iconfiles/png/512/avatar+human+man+profile+icon-1320085876716628234.png' alt='arrow symbol'/>
                            <span id='header-divright_items3_span'>Account</span>
                        </div>
                        
                      
                    </div>
                </div>

                <hr id='maincontainer-hrOne'/>

                <div className='navbar2' >
                    
<div className='navbar2-divleft'>
<div className='navbar2-items' id='navbar2-items1'>
    <img id='navbar2-items1_img' src='https://icons-for-free.com/iconfiles/png/512/grid+menu+menu+icon+icon-1320165660588647274.png' alt='logo'/>
    <span>Browse All Categories</span>
    <span id='navbar2-items1_span'>^</span>
</div>

<div className='navbar2-items ' id='navbar2-items2' >
    <img id='navbar2-items2_img' src='https://icon-library.com/images/flame-icon-png/flame-icon-png-0.jpg' alt='fire logo'/>
    <span>Details</span>
</div>
<div className='navbar2-items' >Home</div>
<div className='navbar2-items' >About</div>
<div className='navbar2-items' >Shop</div>
<div className='navbar2-items' >Venders</div>
<div className='navbar2-items' >Mega menu</div>
<div className='navbar2-items' >Blog</div>
<div className='navbar2-items' >Pages</div>
<div className='navbar2-items' >Contact</div>
</div>

                 <div className='navbar2-divright'>
                    <div id='navbar2-divright_img'>
                        <img src='http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-headphone.svg' alt='logo'/>
                    </div>
                    <div>
                        <h1 id='navbar2-divright_h1'>1900 - 888</h1>
                        <span id='navbar2-divright_span'>24/7 Support Center</span>
                    </div>
                 </div>

                </div>
                <hr id='maincontainer-hrOne'/>
            </div>
            <div className='homebar'>
                {/* <img src='http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-12.png' alt='background-image '/> */}
               <div className='homebar-child'>
                <div className='homebar-child_left'>
                <img className='homebar-child_left_img' src='http://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-4.png' alt='logo'/>
                <span className='daily-snacks'>Snacks box <br/>daily save </span>
                <span className='Sign-up'>Sign up for the daily newsletter </span>
               <div className='homebar-child_left_div'>
            <img id='homebar-child_left_div_arrow' src='http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-plane.png' alt='logo'/>
            <input id='homebar-child_left_div_input' type='email' placeholder='Your eamill address' />
            <button id='homebar-child_left_div_button'>Subscribe</button>
               </div>
                </div>
                <div className='homebar-child_right'>
                    <img className='homebar-child_right_img' src='http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-11.png' alt='logo' />
                    {/* <span className='deliver-to'>Delivered <br/> to your <br/> home</span> */}

                    <span class="blue">Delivered<br/>to </span> 
                     <span class="logo">your</span>
                     <span class="home">home</span>
                     <button id='homebar-child_right_button'>Shop Now</button>
                </div>

               </div>
            </div>
        </div>
    )
}
// 
export default Home;










               {/* <div className='homebar-left'>             
                    <img src='http://wp.alithemes.com/html/nest/demo/assets/imgs/slider/slider-4.png' alt='logo'/>
                 
                </div>
                <div className='homebar-right'>
                    <img src='http://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-11.png' alt='logo'/>
                </div> */}