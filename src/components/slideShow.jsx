import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import img1 from '../../public/images/blogs-and-article.png';
import img2 from '../../public/images/blog-writer.png';
import img3 from '../../public/images/content-digital.png';

const SlideShow = ({ width }) => (
  <Carousel
    showThumbs={false}
    width={width}
    autoPlay={true}
    infiniteLoop={true}
  >
    <div>
      <Image
        src={img1}
        alt="Blog Image 3"
        width={800}
        height={500}
      ></Image>
    </div>
    <div>
      <Image
        src={img2}
        alt="Blog Image 3"
        width={800}
        height={500}
      ></Image>
    </div>
    <div>
      <Image
        src={img3}
        alt="Blog Image 3"
        width={800}
        height={500}
      ></Image>
    </div>
  </Carousel>
);
export default SlideShow;
