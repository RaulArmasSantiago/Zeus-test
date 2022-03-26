import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const HomeCarousel = () => {
  const img = [
    {
      src: 'https://i.blogs.es/c0e607/dftb1/1366_521.jpeg',
      titulo: 'Anime'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mFNDR_Y9pPBGjoj_MhnXqCuvEqLqc7nJMQ&usqp=CAU',
      titulo: 'Deporte'
    },
    {
      src: 'https://www.uv.mx/fei/files/2014/08/LRSC.png',
      titulo: 'Mascotas'
    },
    {
      src: 'https://www.uv.mx/veracruz/mass/files/2019/10/UV.jpg',
      titulo: 'Paisajes'
    },
    {
      src: 'https://www.conadeipfba.org.mx/sites/default/files/dev1/sites/default/files/images/equipos/logos/halcones-uver.png',
      titulo: 'Peliculas'
    }
  ]

  return (
    <Carousel autoPlay>
      {
        img.map((item, key) => {
          return (
            <div style={{height: '80vh'}}>
              <img alt={key} src={item.src} height='90%'/>
              <p className="legend">{item.titulo}</p>
            </div>
          )
        })
      }
    </Carousel>
  )
}

export default HomeCarousel;