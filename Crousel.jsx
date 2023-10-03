import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from "./Item"
import Slider from "./Slider.json"
function Carusel(props) {

    return (
        <Carousel>
            {
                Slider.map((item) => <Item key={item.id} item={item} />)
            }
        </Carousel>
    )
}
export default Carusel;