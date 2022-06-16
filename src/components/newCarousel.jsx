import React, { Component } from 'react';
import kar1 from '../assets/kar1.png';
import kar2 from '../assets/kar2.jpg';
import kar3 from '../assets/kar3.jpg';
import '../css/newCarousel.css';

function Carousel() {
    return (
        <>
            <input type="radio" id="s-1" name="slider-control" checked="checked" />
            <input type="radio" id="s-2" name="slider-control" />
            <input type="radio" id="s-3" name="slider-control" />
            <div class="js-slider">
                <figure class="js-slider_item img-1">
                    <div class="js-slider_img">
                        <img class="c-img-w-full" src={kar1} alt="" />
                    </div>
                    <figcaption class="wo-caption">
                        <h3 class="wo-h3">KIU Security system</h3>
                        <ul class="wo-credit">
                            <li>
                                you can do this way
                            </li>
                        </ul>
                    </figcaption>
                </figure>
                <figure class="js-slider_item img-2">
                    <div class="js-slider_img">
                        <img class="c-img-w-full" src={kar2} alt="" /></div>
                    <figcaption class="wo-caption">
                        <h3 class="wo-h3">blah blah</h3>
                        <ul class="wo-credit">
                            <li>blah blah blah</li>
                        </ul>
                    </figcaption>
                </figure>
                <figure class="js-slider_item img-3">
                    <div class="js-slider_img">
                        <img class="c-img-w-full" src={kar3} alt="" />
                    </div>
                    <figcaption class="wo-caption">
                        <h3 class="wo-h3">blah blah</h3>
                        <ul class="wo-credit">
                            <li>blah blah</li>
                        </ul>
                    </figcaption>
                </figure>
                <div class="js-slider_nav">
                    <label class="js-slider_nav_item s-nav-1 prev" for="s-3"></label>
                    <label class="js-slider_nav_item s-nav-1 next" for="s-2"></label>
                    <label class="js-slider_nav_item s-nav-2 prev" for="s-1"></label>
                    <label class="js-slider_nav_item s-nav-2 next" for="s-3"></label>
                    <label class="js-slider_nav_item s-nav-3 prev" for="s-2"></label>
                    <label class="js-slider_nav_item s-nav-3 next" for="s-1"></label>
                </div>
                <div class="js-slider_indicator">
                    <div class="js-slider-indi indi-1"></div>
                    <div class="js-slider-indi indi-2"></div>
                    <div class="js-slider-indi indi-3"></div>
                </div>
            </div>
        </>
    );
}

export default Carousel;
