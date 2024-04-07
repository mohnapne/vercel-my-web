import { NextApiRequest, NextApiResponse } from 'next';


export default (req:NextApiRequest, res:NextApiResponse) => {
  res.status(200).json([
    {
      id: "dev",
      num: 1,
      title: "Parimatch Team. Dev",
      video: "https://player.vimeo.com/video/687635911?h=f6d6077349&autoplay=1",
      img: "/images/videos/dev.mp4",
    },

    {
      id: "adidas",
      num: 2,
      title: "Adidas Kruzhok. The Game",
      video: "https://player.vimeo.com/video/564537555?h=5a961260b7&autoplay=1",
      img: "/images/videos/adidas.mp4",
    },

    {
      id: "mne-twenty",
      num: 3,
      title: "Markina - I'm Twenty",
      video: "https://player.vimeo.com/video/849741264?h=a21931563c&autoplay=1",
      img: "/images/videos/mne-twenty.mp4",
    },

    {
      id: "practicum",
      num: 4,
      title: "Practicum. Ride",
      video: "https://player.vimeo.com/video/513517513?h=bfdd041335&autoplay=1",
      img: "/images/videos/practicum.mp4",
    },
    {
      id: "loh",
      num: 5,
      img: "/images/videos/loh.mp4",
      video: "https://www.youtube.com/watch?v=Q6R_KrVtAfQ&t=1s&autoplay=1",
      title: "Kruzhok. The Movie",
    },

    {
      id: "selipanov",
      num: 6,
      title: "Dmitry Selipanov - Sarabande",
      video: "https://www.youtube.com/embed/mdnxHMGB_84",
      img: "/images/videos/selipanov.mp4",
    },
    {
      id: "shaherezada",
      num: 7,
      title: "Shaherezada Ballet. Trailer",
      video: "https://player.vimeo.com/video/687996471?h=05e551b161&autoplay=1",
      img: "/images/videos/shaherezada.mp4",
    },

    {
      id: "life-melody",
      num: 8,
      title: "Help needed. Melody of Life",
      video: "https://player.vimeo.com/video/564533944?h=dcf9005b2b&autoplay=1",
      img: "/images/videos/life-melody.mp4",
    },

    {
      id: "surface-lab",
      num: 9,
      title: "Surface Lab. Trailer",
      video: "https://player.vimeo.com/video/687725966?h=3a5101198d&autoplay=1",
      img: "/images/videos/surface-lab.mp4",
    },

    {
      id: "kruzhok",
      num: 10,
      title: "Kruzhok. Trailer",
      video: "https://player.vimeo.com/video/312996018?h=50924003c3&autoplay=1",
      img: "/images/videos/kruzhok.mp4",
    },
    {
      id: "fram-albania",
      num: 11,
      title: "FRAM club. Albania",
      video: "https://player.vimeo.com/video/687706233?h=31a141be73&autoplay=1",
      img: "/images/videos/fram-albania.mp4",
    },
    {
      id: "svora",
      num: 12,
      title: "Svora Music Fest",
      video: "https://player.vimeo.com/video/687706233?h=31a141be73&autoplay=1",
      img: "/images/videos/svora.mp4",
    },
    {
      id: "za-pelenoi",
      num: 13,
      title: "Markina — Za pelenoi",
      video: "https://player.vimeo.com/video/700427298?h=31a4046e1b&autoplay=1",
      img: "/images/videos/za-pelenoi.mp4",
    },

    {
      id: "den-stroitelya",
      num: 14,
      title: "Day of the Builder. Documentary",
      video: "https://player.vimeo.com/video/313009169?h=ee4dad40e7&autoplay=1",
      img: "/images/videos/den-stroitelya.mp4",
    },

    {
      id: "pari-hero",
      num: 16,
      title: "Parimatch Team Heroes. Historian",
      video: "https://player.vimeo.com/video/687707451?h=67df365516&autoplay=1",
      img: "/images/videos/pari-hero.mp4",
    },

    {
      id: "fram-chechnya",
      num: 17,
      title: "FRAM club. Kavkaz",
      video: "https://player.vimeo.com/video/687645039?h=e0e26ac2f4&autoplay=1",
      img: "/images/videos/fram-chechnya.mp4",
    },

    {
      id: "kruzhok-adidas",
      num: 15,
      title: "Adidas Kruzhok. Playgrounds",
      video: "https://player.vimeo.com/video/687746635?h=c063fb3b96&autoplay=1",
      img: "/images/videos/kruzhok-adidas.mp4",
    },

    {
      id: "science-danila",
      num: 18,
      title: "Homo Science: Physicist",
      video: "https://player.vimeo.com/video/687709994?h=0bf3eb9285&autoplay=1",
      img: "/images/videos/science-danila.mp4",
    },

    {
      id: "simple-things",
      num: 19,
      title: "Help needed. Simple things",
      video: "https://player.vimeo.com/video/687707076?h=085fbae938&autoplay=1",
      img: "/images/videos/simple-things.mp4",
    },
    {
      id: "proletarka",
      num: 20,
      title: "Proletarka. Trailer",
      video: "https://player.vimeo.com/video/188592418?h=a77a0c97a9&autoplay=1",
      img: "/images/videos/proletarka.mp4",
    },
  ]);
};
