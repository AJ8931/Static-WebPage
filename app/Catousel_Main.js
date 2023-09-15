import React from 'react'
import Carousel, { CarouselItem } from './Carousel'

const Catousel_Main = () => {
    return (
        <div>
            <Carousel>
                <CarouselItem>
                    Item1
                </CarouselItem>
                <CarouselItem>
                    Item2
                </CarouselItem>
                <CarouselItem>
                    Item3
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default Catousel_Main