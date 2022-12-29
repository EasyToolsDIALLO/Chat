import React from 'react';
import Datascience from '../assets/trisectoriel.webp';
import WebBanner from '../assets/bannier_site_web_.png';
import Directeur from '../assets/dg-2-1.jpg';
import './styles/Banner.css';
//import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-carousel-minimal';

const Banner = () => {
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const data = [
    {
      image:
        'https://www.dakaractu.com/photo/art/grande/36264452-32474268.jpg?v=1565195042',
      caption: 'Entrée',
    },
    {
      image:
        'https://www.esmt.sn/sites/default/files/styles/actualit_s/public/imgl0742.jpg?itok=YZI_w-O7',
      caption: 'Graduation',
    },
    {
      image: 'https://cio-mag.com/wp-content/uploads/2021/04/dg-2-1.jpg',
      caption: 'Directeur Général',
    },
    {
      image: 'https://www.sencampus.com/app/uploads/esmt-4-850x478.jpg',
      caption: 'Laboratoire',
    },
    {
      image:
        'https://www.univ-usto.dz/laboratoires1/lmse/images/f_IdFF4451_1.jpg',
      caption: 'Laboratoire Electronique',
    },
    {
      image:
        'https://i0.wp.com/www.digitalbusiness.africa/wp-content/uploads/2016/10/ecole-Superieure-Multinationale-des-Telecommunications_ESMT_formation.jpg?fit=1000%2C600&ssl=1',
      caption: 'Promotion 2012',
    },
    {
      image:
        'https://www.esmt.sn/sites/default/files/styles/actualites_article_/public/sur_lingenierie_des_reseaux_en_fibre_optique_cfosd_1.png?itok=EC_3wlSc',
      caption: 'Certification',
    },
    {
      image:
        'https://www.univ-usto.dz/laboratoires1/lmse/images/f_IdFF4451_1.jpg',
      caption: 'Laboratoire Electronique',
    },
    {
      image:
        'https://media.datalumni.com/uploads/schools/3322d457-3260-4a78-99eb-b11ff3b4d624.png',
      caption: '40ième anniversaire',
    },
    {
      image: 'https://pbs.twimg.com/tweet_video_thumb/Fiz0fpGX0AE_GMr.jpg',
      caption: 'Coaching Start-up',
    },
  ];

  return (
    <div className="banner">
      <Carousel
        data={data}
        time="5000"
        width="1360px"
        height="800px"
        captionStyle={captionStyle}
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={false}
      />
    </div>
  );
};

export default Banner;
