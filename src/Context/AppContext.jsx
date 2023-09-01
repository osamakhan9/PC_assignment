
import React, { useEffect, useState } from 'react'
import { createContext } from 'react'



export const AppContext = createContext() 




// Name, Image, Weight, Price.

const AllProductsData = {
  menData : [
    {
      id:1,
      Display_image : "https://assets.ajio.com/medias/sys_master/root/20230825/7xrX/64e80892ddf77915197a574d/-473Wx593H-466493467-black-MODEL4.jpg",
      hover_Image: "https://assets.ajio.com/medias/sys_master/root/20230825/nEYE/64e80892ddf77915197a5747/-473Wx593H-466493467-black-MODEL5.jpg",
      Name: "Baggy Jeans with Insert-Pockets",
      price:699,
      Weight: "1b 1b",
      amount:1,
      moreImage: [
        "https://assets.ajio.com/medias/sys_master/root/20230825/7xrX/64e80892ddf77915197a574d/-473Wx593H-466493467-black-MODEL4.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230825/nEYE/64e80892ddf77915197a5747/-473Wx593H-466493467-black-MODEL5.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230825/UOye/64e80892ddf77915197a5733/-1117Wx1400H-466493467-black-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230726/f5vz/64c13249eebac147fc8a667a/-473Wx593H-420434299-blue-MODEL.jpg",
        "https://assets.ajio.com/medias/sys_master/root/20230726/k0az/64c1305eeebac147fc8a5bba/-473Wx593H-420434299-blue-MODEL5.jpg"
      ]
    },
    {
      id:2,
      Display_image : "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/4/d/c/free-half-sleeve-kedar-gowtram-original-imagnrcybvj9nerw.jpeg?q=70",
      hover_Image: "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/8/r/i/free-half-sleeve-kedar-gowtram-original-imagnrcyud3dttxw.jpeg?q=70",
      Name: "Embroidered Semi Stitched Lehenga Choli",
      price:1499,
      Weight: "2b 2b",
      amount:1,
      moreImage: [
        "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/4/d/c/free-half-sleeve-kedar-gowtram-original-imagnrcybvj9nerw.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/8/r/i/free-half-sleeve-kedar-gowtram-original-imagnrcyud3dttxw.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/z/l/v/free-half-sleeve-kedar-gowtram-original-imagnpeydqukkeuz.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/i/v/c/free-half-sleeve-kedar-gowtram-original-imagnpey5kc6xw2g.jpeg?q=70",
  "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/y/j/y/free-half-sleeve-kedar-gowtram-original-imagnrburfu5ggdv.jpeg?q=70"
      ]
    },
    {
      id:3,
      Display_image : "https://rukminim2.flixcart.com/image/832/832/xif0q/top/z/s/w/xxl-4424-sheetal-associates-original-imagqf6nmfmnyrym.jpeg?q=70",
      hover_Image: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/k/r/5/s-4421-sheetal-associates-original-imagzezwjpqeb6rz.jpeg?q=70",
      Name: "Casual Regular Sleeves Solid Women White Top",
      price:399,
      Weight: "0.4 1b",
      amount:1,
      moreImage: [
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/z/s/w/xxl-4424-sheetal-associates-original-imagqf6nmfmnyrym.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/k/r/5/s-4421-sheetal-associates-original-imagzezwjpqeb6rz.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/5/h/1/s-4421-sheetal-associates-original-imagzezwf739dqtu.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/w/y/d/s-4421-sheetal-associates-original-imagzezwrzrna3qq.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/t/l/i/s-4421-sheetal-associates-original-imagzezwcmwmszr7.jpeg?q=70"
      ]
    },
    {
      id:4,
      Display_image : "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/j/u/8/s-20021-sheetal-associates-original-imagq7dfgyhh4chf.jpeg?q=70",
      hover_Image: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/y/w/g/xl-20023-sheetal-associates-original-imagq7dfh5fvukdn.jpeg?q=70",
      price:499,
      Name: "Women Co-ords White, Black Dress",
      Weight: "3b 1b",
      amount:1,
      moreImage: [
        "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/j/u/8/s-20021-sheetal-associates-original-imagq7dfgyhh4chf.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/y/w/g/xl-20023-sheetal-associates-original-imagq7dfh5fvukdn.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/w/x/h/l-20028-sheetal-associates-original-imagq7dfxtyzh9ub.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/h/j/r/l-20028-sheetal-associates-original-imagq7dfuwabhzp9.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/g/l/c/l-20028-sheetal-associates-original-imagq7dfrybgbyeu.jpeg?q=70"
      ]
    },
    {
      id:5,
      Display_image : "https://rukminim2.flixcart.com/image/832/832/xif0q/top/d/q/x/xl-patti-piko-trendy-era-original-imagm2tm4kcszsgm.jpeg?q=70",
      hover_Image: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/t/k/a/xl-patti-piko-trendy-era-original-imagm2tmgz3htkxw.jpeg?q=70",
      Name:"Casual Regular Sleeves Striped Women Multicolor Top",
      price:799,
      Weight: "1b 4b",
      amount:1,
      moreImage: [
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/t/k/a/xl-patti-piko-trendy-era-original-imagm2tmgz3htkxw.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/d/q/x/xl-patti-piko-trendy-era-original-imagm2tm4kcszsgm.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/y/o/c/xl-patti-piko-trendy-era-original-imagm2tm7nepcdpy.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/k/5/s/xl-patti-piko-trendy-era-original-imagm2tmvgy7hr8c.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/top/c/3/h/xl-patti-piko-trendy-era-original-imagm2tmqqc5hrr3.jpeg?q=70"
      ]
    },
    {
      id:6,
      Display_image : "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708213-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg",
      Name: "Black Half Sleeve T-shirt",
      price:399,
      Weight:"2v 4b",
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708213-1.jpg",
        "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg",
        "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708218-2.jpg",
        "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708229-4.jpg",
        "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg"
      ]
    },{
      id:7,
      Display_image : "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/z/0/k/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagrdhcgyk7papf.jpeg?q=70",
      hover_Image: "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/k/s/a/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagkrpgkazwg8kx.jpeg?q=70",
      Name: "Bubble Gum Stripe T-Shirt",
      price:499,
      Weight:"9s 3b",
      amount:1,
      moreImage: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/k/s/a/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagkrpgkazwg8kx.jpeg?q=70",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/z/0/k/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagrdhcgyk7papf.jpeg?q=70",
         "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/z/v/xl-all-rbcpon-sky-one-nb-nicky-boy-original-imagrdhka9mzrn5d.jpeg?q=70",
         "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/e/h/8/m-all-rbcpon-sky-one-nb-nicky-boy-original-imagrt3h3zhtv4bw.jpeg?q=70",
         "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/p/k/xl-all-rbcpon-sky-one-nb-nicky-boy-original-imagnaqnfhnk4z6w.jpeg?q=70"
      ]
    },
    {
      id:8,
      Display_image : "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
      Name: "Toffe Half Sleeve T-shirt",
      price:299,
      Weight:"4c 1a",
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814408-6.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814397-3.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814413-7.jpg"
      ]
    },
    {
      id:9,
      Display_image : "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
      Name: "Men's Blue & Pink Color Block T-shirt    ",
      price:399,
      Weight:"5b 7b",
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500503-5.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500519-8.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500508-6.jpg"
      ]
    },
    {
      id:10,
      Display_image : "https://rukminim2.flixcart.com/image/832/832/l33cia80/sari/d/e/j/free-chand-black-atilaa-fashion-unstitched-original-imageafqqr5ahseg.jpeg?q=70",
      hover_Image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/u/x/7/free-masti-black-hesika-unstitched-original-imags7gfczgdwyqf.jpeg?q=70",
      price:499,
      Name: "Embroidered Daily Wear Net Saree",
      Weight:"09a 2b",
      amount:1,
      moreImage: [
             "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/u/x/7/free-masti-black-hesika-unstitched-original-imags7gfczgdwyqf.jpeg?q=70",
             "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/u/n/h/free-masti-black-hesika-unstitched-original-imags7gfgzqrrsyg.jpeg?q=70",
             "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/g/9/4/free-masti-black-hesika-unstitched-original-imagrk5djdxdtcre.jpeg?q=70",
             "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/d/x/8/free-masti-black-hesika-unstitched-original-imagrk5kh9zhcd46.jpeg?q=70",
             "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/n/2/e/free-masti-black-hesika-unstitched-original-imagrk7fc9hncjst.jpeg?q=70"

      ]
    },
    {
      id:11,
      Display_image : "https://images.bewakoof.com/t1080/men-s-red-striped-oversized-t-shirt-425013-1655751638-2.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/men-s-red-striped-oversized-t-shirt-425013-1655751632-1.jpg",
      Name: "Toffe Half Sleeve T-shirt",
      price:299,
      Weight:"4b 7b",
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814408-6.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814397-3.jpg",
        "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814413-7.jpg"
      ]
    },
    {
      id:12,
      Display_image : "https://images.bewakoof.com/t1080/men-s-black-anime-back-printed-oversized-t-shirt-468376-1655751023-1.jpg",
      hover_Image: "https://images.bewakoof.com/t1080/men-s-black-anime-back-printed-oversized-t-shirt-468376-1655751034-3.jpg",
      Name: "Black Half Sleeve T-shirt",
      price:399,
      Weight:"7b 1b",
      amount:1,
      moreImage: [
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500503-5.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500519-8.jpg",
        "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500508-6.jpg"
      ]
    },
    
   
  ],
  
}

const CartDataToMatch = [
  {
    id:1,
    Display_image : "https://assets.ajio.com/medias/sys_master/root/20230825/7xrX/64e80892ddf77915197a574d/-473Wx593H-466493467-black-MODEL4.jpg",
    hover_Image: "https://assets.ajio.com/medias/sys_master/root/20230825/nEYE/64e80892ddf77915197a5747/-473Wx593H-466493467-black-MODEL5.jpg",
    Name: "Baggy Jeans with Insert-Pockets",
    price:699,
    Weight: "1b 1b",
    amount:1,
    moreImage: [
      "https://assets.ajio.com/medias/sys_master/root/20230825/7xrX/64e80892ddf77915197a574d/-473Wx593H-466493467-black-MODEL4.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230825/nEYE/64e80892ddf77915197a5747/-473Wx593H-466493467-black-MODEL5.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230825/UOye/64e80892ddf77915197a5733/-1117Wx1400H-466493467-black-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230726/f5vz/64c13249eebac147fc8a667a/-473Wx593H-420434299-blue-MODEL.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20230726/k0az/64c1305eeebac147fc8a5bba/-473Wx593H-420434299-blue-MODEL5.jpg"
    ]
  },
  {
    id:2,
    Display_image : "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/4/d/c/free-half-sleeve-kedar-gowtram-original-imagnrcybvj9nerw.jpeg?q=70",
    hover_Image: "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/8/r/i/free-half-sleeve-kedar-gowtram-original-imagnrcyud3dttxw.jpeg?q=70",
    Name: "Embroidered Semi Stitched Lehenga Choli",
    price:1499,
    Weight: "2b 2b",
    amount:1,
    moreImage: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/4/d/c/free-half-sleeve-kedar-gowtram-original-imagnrcybvj9nerw.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/8/r/i/free-half-sleeve-kedar-gowtram-original-imagnrcyud3dttxw.jpeg?q=70",
"https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/z/l/v/free-half-sleeve-kedar-gowtram-original-imagnpeydqukkeuz.jpeg?q=70",
"https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/i/v/c/free-half-sleeve-kedar-gowtram-original-imagnpey5kc6xw2g.jpeg?q=70",
"https://rukminim2.flixcart.com/image/832/832/xif0q/lehenga-choli/y/j/y/free-half-sleeve-kedar-gowtram-original-imagnrburfu5ggdv.jpeg?q=70"
    ]
  },
  {
    id:3,
    Display_image : "https://rukminim2.flixcart.com/image/832/832/xif0q/top/z/s/w/xxl-4424-sheetal-associates-original-imagqf6nmfmnyrym.jpeg?q=70",
    hover_Image: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/k/r/5/s-4421-sheetal-associates-original-imagzezwjpqeb6rz.jpeg?q=70",
    Name: "Casual Regular Sleeves Solid Women White Top",
    price:399,
    Weight: "0.4 1b",
    amount:1,
    moreImage: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/z/s/w/xxl-4424-sheetal-associates-original-imagqf6nmfmnyrym.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/k/r/5/s-4421-sheetal-associates-original-imagzezwjpqeb6rz.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/5/h/1/s-4421-sheetal-associates-original-imagzezwf739dqtu.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/w/y/d/s-4421-sheetal-associates-original-imagzezwrzrna3qq.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/t/l/i/s-4421-sheetal-associates-original-imagzezwcmwmszr7.jpeg?q=70"
    ]
  },
  {
    id:4,
    Display_image : "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/j/u/8/s-20021-sheetal-associates-original-imagq7dfgyhh4chf.jpeg?q=70",
    hover_Image: "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/y/w/g/xl-20023-sheetal-associates-original-imagq7dfh5fvukdn.jpeg?q=70",
    price:499,
    Name: "Women Co-ords White, Black Dress",
    Weight: "3b 1b",
    amount:1,
    moreImage: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/j/u/8/s-20021-sheetal-associates-original-imagq7dfgyhh4chf.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/y/w/g/xl-20023-sheetal-associates-original-imagq7dfh5fvukdn.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/w/x/h/l-20028-sheetal-associates-original-imagq7dfxtyzh9ub.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/h/j/r/l-20028-sheetal-associates-original-imagq7dfuwabhzp9.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/dress/g/l/c/l-20028-sheetal-associates-original-imagq7dfrybgbyeu.jpeg?q=70"
    ]
  },
  {
    id:5,
    Display_image : "https://rukminim2.flixcart.com/image/832/832/xif0q/top/d/q/x/xl-patti-piko-trendy-era-original-imagm2tm4kcszsgm.jpeg?q=70",
    hover_Image: "https://rukminim2.flixcart.com/image/832/832/xif0q/top/t/k/a/xl-patti-piko-trendy-era-original-imagm2tmgz3htkxw.jpeg?q=70",
    Name:"Casual Regular Sleeves Striped Women Multicolor Top",
    price:799,
    Weight: "1b 4b",
    amount:1,
    moreImage: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/t/k/a/xl-patti-piko-trendy-era-original-imagm2tmgz3htkxw.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/d/q/x/xl-patti-piko-trendy-era-original-imagm2tm4kcszsgm.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/y/o/c/xl-patti-piko-trendy-era-original-imagm2tm7nepcdpy.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/k/5/s/xl-patti-piko-trendy-era-original-imagm2tmvgy7hr8c.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/top/c/3/h/xl-patti-piko-trendy-era-original-imagm2tmqqc5hrr3.jpeg?q=70"
    ]
  },
  {
    id:6,
    Display_image : "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708213-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg",
    Name: "Black Half Sleeve T-shirt",
    price:399,
    Weight:"2v 4b",
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708213-1.jpg",
      "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg",
      "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708218-2.jpg",
      "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708229-4.jpg",
      "https://images.bewakoof.com/t1080/men-s-white-abstract-printed-slim-fit-shirt-534387-1659708239-6.jpg"
    ]
  },{
    id:7,
    Display_image : "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/z/0/k/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagrdhcgyk7papf.jpeg?q=70",
    hover_Image: "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/k/s/a/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagkrpgkazwg8kx.jpeg?q=70",
    Name: "Bubble Gum Stripe T-Shirt",
    price:499,
    Weight:"9s 3b",
    amount:1,
    moreImage: [
      "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/k/s/a/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagkrpgkazwg8kx.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/z/0/k/l-all-rbcpon-sky-one-nb-nicky-boy-original-imagrdhcgyk7papf.jpeg?q=70",
       "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/u/z/v/xl-all-rbcpon-sky-one-nb-nicky-boy-original-imagrdhka9mzrn5d.jpeg?q=70",
       "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/e/h/8/m-all-rbcpon-sky-one-nb-nicky-boy-original-imagrt3h3zhtv4bw.jpeg?q=70",
       "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/z/p/k/xl-all-rbcpon-sky-one-nb-nicky-boy-original-imagnaqnfhnk4z6w.jpeg?q=70"
    ]
  },
  {
    id:8,
    Display_image : "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
    Name: "Toffe Half Sleeve T-shirt",
    price:299,
    Weight:"4c 1a",
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814408-6.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814397-3.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814413-7.jpg"
    ]
  },
  {
    id:9,
    Display_image : "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
    Name: "Men's Blue & Pink Color Block T-shirt    ",
    price:399,
    Weight:"5b 7b",
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500503-5.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500519-8.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500508-6.jpg"
    ]
  },
  {
    id:10,
    Display_image : "https://rukminim2.flixcart.com/image/832/832/l33cia80/sari/d/e/j/free-chand-black-atilaa-fashion-unstitched-original-imageafqqr5ahseg.jpeg?q=70",
    hover_Image: "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/u/x/7/free-masti-black-hesika-unstitched-original-imags7gfczgdwyqf.jpeg?q=70",
    price:499,
    Name: "Embroidered Daily Wear Net Saree",
    Weight:"09a 2b",
    amount:1,
    moreImage: [
           "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/u/x/7/free-masti-black-hesika-unstitched-original-imags7gfczgdwyqf.jpeg?q=70",
           "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/u/n/h/free-masti-black-hesika-unstitched-original-imags7gfgzqrrsyg.jpeg?q=70",
           "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/g/9/4/free-masti-black-hesika-unstitched-original-imagrk5djdxdtcre.jpeg?q=70",
           "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/d/x/8/free-masti-black-hesika-unstitched-original-imagrk5kh9zhcd46.jpeg?q=70",
           "https://rukminim2.flixcart.com/image/832/832/xif0q/sari/n/2/e/free-masti-black-hesika-unstitched-original-imagrk7fc9hncjst.jpeg?q=70"

    ]
  },
  {
    id:11,
    Display_image : "https://images.bewakoof.com/t1080/men-s-red-striped-oversized-t-shirt-425013-1655751638-2.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/men-s-red-striped-oversized-t-shirt-425013-1655751632-1.jpg",
    Name: "Toffe Half Sleeve T-shirt",
    price:299,
    Weight:"4b 7b",
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814402-4.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814387-1.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814408-6.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814397-3.jpg",
      "https://images.bewakoof.com/t1080/toffe-half-sleeve-t-shirt-394625-1655814413-7.jpg"
    ]
  },
  {
    id:12,
    Display_image : "https://images.bewakoof.com/t1080/men-s-black-anime-back-printed-oversized-t-shirt-468376-1655751023-1.jpg",
    hover_Image: "https://images.bewakoof.com/t1080/men-s-black-anime-back-printed-oversized-t-shirt-468376-1655751034-3.jpg",
    Name: "Black Half Sleeve T-shirt",
    price:399,
    Weight:"7b 1b",
    amount:1,
    moreImage: [
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500482-1.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500497-4.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500503-5.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500519-8.jpg",
      "https://images.bewakoof.com/t1080/black-irismen-color-block-t-shirt-464958-1658500508-6.jpg"
    ]
  },
    
]

const AppContextProvider = ({children}) => {


  const [cartData, setCartData] = useState([])

  const [price, setPrice] = useState(0);
  const [discountPrice, setdiscountPrice] = useState(0);
  const [TotalQty, setTotalQty] = useState(0);
  const [Totalprice, setTotalPrice] = useState(0);


  const handleRemove = (id) => {
    const arr = cartData.filter((item) => item.id !== id);
    setCartData(arr);
    handlePrice();
  };

  const cartDataEmpty = ()=>{
    setCartData([])
  }

  const handlePrice = () => {
    let ans = 0;
    let discountP = 0;
    let Qty=0;

    cartData.map((item) => {
      ans += item.amount * item.price
      discountP += item.amount * item.Weight
      Qty += item.amount
    });
    setPrice(ans);
    setdiscountPrice(discountP)
    setTotalPrice(ans+discountP)
    setTotalQty(Qty)
  };
  

  
useEffect(() => {
handlePrice();
});

  console.log(price)

  
  const handleCart = (data)=>{

    if (cartData.indexOf(data) !== -1) return;
    setCartData([...cartData,data])

  }

  console.log(cartData)


  const handleChange = (item, d) => {

    const ind = cartData.indexOf(item);
    const arr = cartData;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCartData([...arr]);

  };
  
  
  return (

    <div>

  <AppContext.Provider value={{  AllProductsData, cartData, handleCart, CartDataToMatch, handleChange ,handleRemove, price, discountPrice, Totalprice, cartDataEmpty,
  handlePrice, TotalQty }} >

      {children}

  </AppContext.Provider>

      
    </div>
  )
}

export default AppContextProvider
