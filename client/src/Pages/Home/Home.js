import React from 'react'
import { Carousel } from 'react-bootstrap'

const Home = () => {
  return (
    <div>
        <h1>the home page</h1>
        <Carousel>
      <Carousel.Item>
        <img
          src="https://th.bing.com/th/id/OIP.j22p_vykr9dfuaMs1FBmpAAAAA?w=185&h=251&c=7&r=0&o=5&pid=1.7" width="30%"px
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://th.bing.com/th/id/OIP.Wdh4sWdZ6fqOZJQcsiM2GQHaJQ?w=146&h=183&c=7&r=0&o=5&pid=1.7" width="30%"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://th.bing.com/th/id/OIP.rlEHfJjgehVlGOG_fsACOwHaLF?w=185&h=277&c=7&r=0&o=5&pid=1.7" width="30%"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1 >CONTACTEZ NOUS</h1>
    <img src='https://th.bing.com/th/id/OIP.CgMA7_4O9siZiRejcPUT6AAAAA?w=151&h=180&c=7&r=0&o=5&pid=1.7' alt='img'/>
      <div className="contain" style={{ width: "35rem" }}>
    
        <a href="tel:+216-78443500">
          <img  src="=" alt='' />
        </a>
    
        <body>
      <div class="bg-cover"></div>
     </body>
    </div></div>
  )
}

export default Home