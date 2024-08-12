import productData from "../data/product.json" with { type: "json" };
import trickData from "../data/tip_trick.json" with { type: "json" };


const productContainer = document.getElementById('products-container')
const trickContainer =document.getElementById('trick-container')

let productShows = ``
productData.map((product)=>(
    productShows+=
    `  <div class="product-card">
                        <div class="image">
                            <img src="${product.image}" alt="123" />
                        </div>
                        <div class="product-detail">
                            <div class="product-name">${product.productName}</div>
                            <div class="product-fullname">
                                ${product.detail}
                            </div>
                            <div class="price">
                                <div class="new-price">${product.newPrice}</div>
                                <div class="old-price">${product.oldPrice}</div>
                            </div>
                        </div>

                        ${product.sale?`<div class="sale circle">-${product.sale}%</div>`:``}
                        ${product.new?`<div class="new circle">New</div>`:``}
                    <div class="add-to-cart">
                    <div class="button-container">
                    <button class="add-button">Add to cart</button>
            <div class="more-action">
                <div class="share">
                    <div class="icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 16C17.212 16 16.5 16.31 15.966 16.807L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.088 18.308C15.0317 18.5344 15.0022 18.7667 15 19C15 19.5933 15.1759 20.1734 15.5056 20.6667C15.8352 21.1601 16.3038 21.5446 16.8519 21.7716C17.4001 21.9987 18.0033 22.0581 18.5853 21.9424C19.1672 21.8266 19.7018 21.5409 20.1213 21.1213C20.5409 20.7018 20.8266 20.1672 20.9424 19.5853C21.0581 19.0033 20.9987 18.4001 20.7716 17.8519C20.5446 17.3038 20.1601 16.8352 19.6667 16.5056C19.1734 16.1759 18.5933 16 18 16Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <div class="content">Share</div>
                </div>
                <div class="like">
                    <div class="icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 16C17.212 16 16.5 16.31 15.966 16.807L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.088 18.308C15.0317 18.5344 15.0022 18.7667 15 19C15 19.5933 15.1759 20.1734 15.5056 20.6667C15.8352 21.1601 16.3038 21.5446 16.8519 21.7716C17.4001 21.9987 18.0033 22.0581 18.5853 21.9424C19.1672 21.8266 19.7018 21.5409 20.1213 21.1213C20.5409 20.7018 20.8266 20.1672 20.9424 19.5853C21.0581 19.0033 20.9987 18.4001 20.7716 17.8519C20.5446 17.3038 20.1601 16.8352 19.6667 16.5056C19.1734 16.1759 18.5933 16 18 16Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                    <div class="content">Like</div>
                </div>
            </div>
                    </div>
                    </div>
                    
                        </div>`))


let trickShow = ``
trickData.map((trick)=>(
    trickShow+=` <div class="trick-card">
                    <div class="trick-image">
                        <img src="${trick.image_url}" alt="image-tip" />
                    </div>
                    <div class="trick-infor">
                        <div class="trick-title">${trick.title}</div>
                        <div class="date">${trick.date}</div>
                    </div>
                </div>`
))




trickContainer.innerHTML=trickShow            
productContainer.innerHTML=productShows
           

