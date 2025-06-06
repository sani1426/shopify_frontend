import { sliderDataType } from "@/types";

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'Shopify'
   export const APP_SLOGAN =
     process.env.NEXT_PUBLIC_APP_SLOGAN || 'Spend less, enjoy more.'
   export const APP_DESCRIPTION =
     process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
     'An Online Shop built with Next.js and MongoDB'


    export const sliderData:sliderDataType[] = [
      {
        id: 1,
        title: "Pure Sound",
        offer: "Limited Time Offer 30% Off",
        description: ' Your Perfect Headphones Awaits!' ,
        buttonText1: "Buy now",
        buttonText2: "Find more",
        imgSrc: '/carousel/banner4.jpg'
      },
      {
        id: 2,
        title: "Next-Level Gaming",
        description: ' Discover PlayStation 5 Today!' ,
        offer: "Hurry up only few lefts!",
        buttonText1: "Shop Now",
        buttonText2: "Explore Deals",
        imgSrc: '/carousel/banner2.jpg'
      },
      {
        id: 3,
        title: "Power Meets Elegance ",
        description: 'Apple MacBook Pro is Here for you!' ,
        offer: "Exclusive Deal 40% Off",
        buttonText1: "Order Now",
        buttonText2: "Learn More",
        imgSrc: '/carousel/banner1.jpg'
      },
      {
        id: 4,
        title: "Power Meets Elegance",
        description: ' Apple MacBook Pro is Here for you' ,
        offer: "Exclusive Deal 40% Off",
        buttonText1: "Order Now",
        buttonText2: "Learn More",
        imgSrc: '/carousel/banner3.jpg'
      },
      // {
      //   id: 5,
      //   title: "Power Meets Elegance",
      //   description: ' Apple MacBook Pro is Here for you' ,
      //   offer: "Exclusive Deal 40% Off",
      //   buttonText1: "Order Now",
      //   buttonText2: "Learn More",
      //   imgSrc: '/carousel/banner5.jpg'
      // },
    ];
    export const video_slider:sliderDataType[] = [
      {
        id: 1,
        title: "Pure Sound",
        offer: "Limited Time Offer 30% Off",
        description: ' Your Perfect Headphones Awaits!' ,
        buttonText1: "Buy now",
        buttonText2: "Find more",
        imgSrc: '/videos/1.mp4'
      },
      {
        id: 2,
        title: "Next-Level Gaming",
        description: ' Discover PlayStation 5 Today!' ,
        offer: "Hurry up only few lefts!",
        buttonText1: "Shop Now",
        buttonText2: "Explore Deals",
        imgSrc: '/videos/2.mp4'
      },
      {
        id: 3,
        title: "Power Meets Elegance ",
        description: 'Apple MacBook Pro is Here for you!' ,
        offer: "Exclusive Deal 40% Off",
        buttonText1: "Order Now",
        buttonText2: "Learn More",
        imgSrc: '/videos/3.mp4'
      },
      {
        id: 4,
        title: "Power Meets Elegance",
        description: ' Apple MacBook Pro is Here for you' ,
        offer: "Exclusive Deal 40% Off",
        buttonText1: "Order Now",
        buttonText2: "Learn More",
        imgSrc: '/videos/4.mp4'
      },
      // {
      //   id: 5,
      //   title: "Power Meets Elegance",
      //   description: ' Apple MacBook Pro is Here for you' ,
      //   offer: "Exclusive Deal 40% Off",
      //   buttonText1: "Order Now",
      //   buttonText2: "Learn More",
      //   imgSrc: '/carousel/banner5.jpg'
      // },
    ];