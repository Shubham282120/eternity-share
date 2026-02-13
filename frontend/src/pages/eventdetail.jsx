import React, { useState } from "react";

function Eventdetail() {
    const [activeTab, setActiveTab] = useState("tab01");

    return (
        <>

            <header class="page-header" data-background="assets/images/page-header01.jpg">
                <div class="container">
                    <h1>name</h1>
                    <p>We love staying in hotels</p>
                </div>
                {/*{/* end container */}
                <div class="scroll-down"></div>
                {/*{/* end scroll-down */}
            </header>
            <section class="content-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="event-headline">
                                <div class="rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i> <small>17 guest reviews</small></div>
                                {/* end rating */}
                                <h3>The Quardo Hotel New York City, Tapestry<br /> Collection Summit</h3>
                                <address>
                                    {/* <span><i class="lni lni-map-marker"></i> 145 E 47th St, New York City, NY 10017-2007 </span> */}
                                    <span><i class="lni lni-phone"></i>+91 99877 28747</span></address>
                            </div>
                            {/* end event-headline */}
                        </div>
                        {/* end col-12 */}

                        <div class="col-12">
                            <div class="room-gallery-top">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"> <a href="assets/images/gallery/gallery-img1" data-fancybox><img src="assets/images/gallery/gallery-img1.jpeg" alt="Image" /></a> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"> <a href="assets/images/gallery/gallery-img1" data-fancybox><img src="assets/images/gallery/gallery-img2.jpeg" alt="Image" /></a> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"> <a href="assets/images/gallery/gallery-img1" data-fancybox><img src="assets/images/gallery/gallery-img3.jpeg" alt="Image" /></a> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"> <a href="assets/images/gallery/gallery-img1" data-fancybox><img src="assets/images/gallery/gallery-img4.jpeg" alt="Image" /></a> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"> <a href="assets/images/gallery/gallery-img1" data-fancybox><img src="assets/images/gallery/gallery-img5.jpeg" alt="Image" /></a> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"> <a href="assets/images/gallery/gallery-img1" data-fancybox><img src="assets/images/gallery/gallery-img6.jpeg" alt="Image" /></a> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"> <a href="assets/images/gallery/gallery-img1" data-fancybox><img src="assets/images/gallery/gallery-img7.jpeg" alt="Image" /></a> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"> <a href="assets/images/gallery/gallery-img1" data-fancybox><img src="assets/images/gallery/gallery-img8.jpeg" alt="Image" /></a> </div>
                                    {/* end swiper-slide */}
                                </div>
                                {/* end swiper-wrapper */}
                            </div>
                            {/* end room-gallery-top */}
                            <div class="room-gallery-thumbs">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide"><img src="assets/images/gallery/gallery-img1.jpeg" alt="Image" /> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"><img src="assets/images/gallery/gallery-img2.jpeg" alt="Image" /> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"><img src="assets/images/gallery/gallery-img3.jpeg" alt="Image" /> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"><img src="assets/images/gallery/gallery-img4.jpeg" alt="Image" /> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"><img src="assets/images/gallery/gallery-img5.jpeg" alt="Image" /> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"><img src="assets/images/gallery/gallery-img6.jpeg" alt="Image" /> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"><img src="assets/images/gallery/gallery-img7.jpeg" alt="Image" /> </div>
                                    {/* end swiper-slide */}
                                    <div class="swiper-slide"><img src="assets/images/gallery/gallery-img8.jpeg" alt="Image" /> </div>
                                    {/* end swiper-slide */}
                                </div>
                                {/* end swiper-wrapper */}
                            </div>
                            {/* end room-gallery-thumbs */}
                        </div>
                        {/* end col-12 */}

                        <div class="col-12">
                            <div class="room-info-box">
                                <h6>About Event</h6>
                                <p>Step inside The <strong>Quardo Hotel</strong>, Tapestry Collection by Tahrn : an authentic modern boutique hotel conveniently located in the heart
                                    of Midtown East. Breathe in the exquisite scent of white tea and enjoy our signature lavender lemonade as you prepare for another day of urban exploration. At The Quardo Hotel, you can expect service with one goal in mind: authentic interactions that lead to one-of-a-kind moments. <u>Guestroom balconies</u>, floor-to-ceiling windows, a premier penthouse, and an inspired rooftop bar and lounge immerse you into a picture-perfect view of Midtown Manhattan's iconic skyline. </p>
                                <p>Whether you find yourself in New York for business or leisure, you'll find a luxurious escape in your artfully appointed guestroom. If you crave authentic <strong>New York</strong>, look no further.
                                    Historic Turtle Bay houses the United Nations Headquarters, bringing together passionate luminaries from all across the globe.
                                    Neighboring Grand Central Terminal, Rockefeller Center, and the Chrysler Building.
                                </p>
                            </div>
                            {/* end room-info-box */}
                        </div>
                        {/* end col-12 */}
                        <div class="col-12">
                            <div class="content-tab">
                                <ul class="tab-nav">
                                    <li class="active"><a href="#tab01">Benefits</a></li>
                                    <li><a href="#tab02">Features</a></li>
                                    {/* <li><a href="#tab03">Speakers</a></li> */}
                                </ul>
                                <div id="tab01" class="tab-item active-item">
                                    <ul>
                                        {/* <li><figure><img src="assets/images/icon01.png" alt="Image"/></figure><b>Room Type</b></li> */}
                                        <li><figure><img src="assets/images/icon02.png" alt="Image" /></figure><b>Room services</b></li>
                                        <li><figure><img src="assets/images/icon08.png" alt="Image" /></figure><b>Parking ( No charges apply)</b></li>
                                        <li><figure><img src="assets/images/icon04.png" alt="Image" /></figure><b>Free Wifi</b></li>
                                        <li><figure><img src="assets/images/icon03.png" alt="Image" /></figure><b>Dining</b></li>
                                        <li><figure><img src="assets/images/icon05.png" alt="Image" /></figure><b>Shower</b></li>
                                        <li><figure><img src="assets/images/icon01.png" alt="Image" /></figure><b>Bride Room </b></li>
                                        <li><figure><img src="assets/images/icon01.png" alt="Image" /></figure><b>Groom Room </b></li>
                                        <li><figure><img src="assets/images/icon07.png" alt="Image" /></figure><b>Other facilities</b></li>
                                        {/* <li><figure><img src="assets/images/icon02.png" alt="Image"/></figure><b>Room services</b></li> */}
                                        {/* <li><figure><img src="assets/images/icon03.png" alt="Image"/></figure><b>Parking (charges may apply)</b></li> */}
                                        {/* <li><figure><img src="assets/images/icon04.png" alt="Image"/></figure><b>Business</b></li> */}
                                        {/* <li><figure><img src="assets/images/icon05.png" alt="Image"/></figure><b>Dining</b></li> */}
                                        {/* <li><figure><img src="assets/images/icon06.png" alt="Image"/></figure><b>In room entertainment</b></li> */}
                                        {/* <li><figure><img src="assets/images/icon07.png" alt="Image"/></figure><b>Other facilities</b></li> */}
                                    </ul>
                                </div>
                                {/* end tab-item */}
                                <div id="tab02" class="tab-item">
                                    <p>Breathe in the exquisite scent of white tea and enjoy our signature lavender lemonade as you prepare for another day of urban exploration. At <u>The Quardo Hotel</u>, you can expect service with one goal in mind: authentic interactions that lead to one-of-a-kind moments. Guestroom balconies, floor-to-ceiling windows, a premier penthouse, and an inspired rooftop bar</p>
                                    <p>Browse our current selection of inclusive packages from Pride of Britain. Whether it’s the grandeur of a country house, a luxury idyllic hideaway or a romantic retreat, search our 48 hotels for your perfect match</p>
                                </div>
                                {/* end tab-item */}
                                <div id="tab03" class="tab-item">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-6">
                                            <img src="assets/images/team-member01.jpg" alt="Image" />
                                        </div>
                                        {/* end col-4 */}
                                        <div class="col-lg-4 col-md-6">
                                            <img src="assets/images/team-member02.jpg" alt="Image" />
                                        </div>
                                        {/* end col-4 */}
                                        <div class="col-lg-4 col-md-6">
                                            <img src="assets/images/team-member03.jpg" alt="Image" />
                                        </div>
                                        {/* end col-4 */}
                                    </div>
                                    {/* end row */}
                                </div>
                                {/* end tab-item */}
                            </div>
                            {/* end content-tab */}
                        </div>
                        {/* end col-12 */}
                        <div class="col-12">
                            <div class="clearfix spacing-100"></div>
                            {/* end clearfix */}
                        </div>
                        {/* end col-12 */}
                        {/* <div class="col-12">
                            <div class="section-title">
                                <h6>Panoramas</h6>
                                <h2>Discover All</h2>
                            </div>
                            <figure class="image">
                                <img src="assets/images/image-panorama.jpg" alt="Image" />
                            </figure>
                        </div> */}
                        {/* end col-12 */}
                    </div>
                    {/* end row */}
                </div>
                {/* end container */}
            </section>
            {/* end content-section */}
            {/* <section class="content-section" data-background="assets/images/section-bg02.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="video-box">
                                <a href="videos/video01.mp4" data-fancybox class="play-btn"><i class="lni lni-play"></i></a>
                                <h2>Great hospitality is the key to Pride of Britain’s <br/>
                                    longstanding reputation for excellence.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/*end content-section */}
            {/* <section class="content-section">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <ul class="rooms-list">
                                <li>
                                    <div class="room-box">
                                        <figure class="reveal-effect wow"><a href="room-detail.html"><img src="assets/images/room-thumb01.jpg" alt="Image"/></a></figure>
                                        <div class="content">
                                            <div class="price-line"><span>STAY FROM</span> $50.00</div>
                                            <h3><a href="room-detail.html">Deluxe Room</a></h3>
                                            <p>Always dreamed of staying in a castle hotel?
                                                The UK has some historic gems, ranging from
                                                Norman conquest pads</p>
                                            <div class="bottom-specs">
                                                <div class="icons"> <img src="assets/images/icon01.png" alt="Image"/> <img src="assets/images/icon02.png" alt="Image" /> <img src="assets/images/icon03.png" alt="Image" /> <img src="assets/images/icon04.png" alt="Image"/> <img src="assets/images/icon05.png" alt="Image"/> </div>
                                                    <div class="reviews">925 guest reviews <span>8.0</span></div>
                                                </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="room-box">
                                                <figure class="reveal-effect wow"><a href="room-detail.html"><img src="assets/images/room-thumb02.jpg" alt="Image"/></a></figure>
                                                <div class="content">
                                                    <div class="price-line"><span>STAY FROM</span> $60.00</div>
                                                    <h3><a href="room-detail.html">Double Room</a></h3>
                                                    <p>Always dreamed of staying in a castle hotel?
                                                        The UK has some historic gems, ranging from
                                                        Norman conquest pads</p>
                                                    <div class="bottom-specs">
                                                        <div class="icons"> <img src="assets/images/icon01.png" alt="Image"/> <img src="assets/images/icon02.png" alt="Image"/> <img src="assets/images/icon03.png" alt="Image"/> <img src="assets/images/icon04.png" alt="Image"/> <img src="assets/images/icon05.png" alt="Image"/> </div>
                                                            <div class="reviews">925 guest reviews <span>8.0</span></div>
                                                        </div>

                                                        </div>
                                                        </div>
                                                        </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                        </section>*/}
            <section class="content-section no-spacing" data-background="#d39929">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="footer-bar"><i class="lni lni-protection"></i>
                                <h6>Luxury Venue • Best Price • Book Now</h6>
                                <strong>+91 99877 28747</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Eventdetail;
