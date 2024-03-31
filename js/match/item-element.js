const cardsData = [
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857850/JS-Games/1_fwr9yt.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857857/JS-Games/2_s1x5xt.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857864/JS-Games/3_kau9u0.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857872/JS-Games/4_rvbsma.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857879/JS-Games/5_aboue6.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857886/JS-Games/6_wukmz7.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857894/JS-Games/7_egkkvw.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857901/JS-Games/8_hx41aq.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857908/JS-Games/9_rrrgzl.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857916/JS-Games/11_qlff4h.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857923/JS-Games/10_k80def.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857930/JS-Games/12_ftvibe.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857938/JS-Games/13_nyvyuk.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857945/JS-Games/14_t8wjzx.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857953/JS-Games/15_rg0xrm.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857960/JS-Games/16_wgfdxq.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857968/JS-Games/17_lqx3ts.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857975/JS-Games/18_d1jn1k.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857982/JS-Games/19_sjkjdv.png',
  },
  {
    src: 'https://res.cloudinary.com/doepexhxk/image/upload/v1711857990/JS-Games/20_bh3qrc.png',
  },
];

export const cardItemEl = value => {
  return `<li class="match__cards--item" data-value='${value}'>
  <img src=${cardsData[value].src}
  alt="card"
  class="match__card--img"
  width="200"
  height="200" />
  </li>`;
};
