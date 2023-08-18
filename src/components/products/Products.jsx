import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './product.css';
import ProductData from '../../assets/data/productData';
import { AiFillCloseCircle } from "react-icons/ai";


const Products = () => {
    const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false);
    const detailPage = (Products) => {
        setDetail([{ ...Products }])
        setClose(true)
    }
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            {
                close ?
                    <div className='detail_Container'>
                        <div className='detail_Content'>
                            <button className='close' onClick={() => setClose(false)}><AiFillCloseCircle /></button>
                            {
                                detail.map((x) => {
                                    return (
                                        <>
                                            <div className='row detail_info'>
                                                <div className='col-lg-12 col-md-12 col-sm-12 img_box'>
                                                    <img src={x.img} alt={x.Title} />
                                                </div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 des-box'>
                                                    <h2>{x.Title}</h2>
                                                    <p>{x.detail_info}</p>
                                                </div>

                                            </div>
                                        </>
                                    )
                                }
                                )
                            }

                        </div>

                    </div> : null
            }
            <div className='Product-items' id='Products'>
                <h1>Products</h1>
                <Carousel responsive={responsive}>
                    {ProductData.map(currElm => (
                        <div className='card' key={currElm.id}>
                            <img className='product--image' src={currElm.img} alt='' />
                            <h3>{currElm.Title}</h3>
                            <p>{currElm.Des}</p>
                            <button onClick={() => detailPage(currElm)}>View Product</button>
                        </div>
                    ))}
                </Carousel>
            </div>
        </>
    );
};

export default Products;
