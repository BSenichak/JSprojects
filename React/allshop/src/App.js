import "./App.css";
import Header from "./components/Header";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Tovar from "./components/Tovar/Tovar";
import NotFound from "./components/NotFound/NotFound";
import Checkout from "./components/Chekout/Checkout";
import CheckoutDone from "./components/Chekout/CheckoutDone";

function App() {
  const [categories] = useState([
    {
      id: 1,
      categoryName: "Мед",
      subCategory: ["Липовий", "Соняшниковий", "Акаційовий"],
    },
    {
      id: 2,
      categoryName: "Рамки",
      subCategory: ["Липові", "Дубові", "Акаційові"],
    },
    {
      id: 3,
      categoryName: "Ягоди",
      subCategory: ["Клубника", "Малина", "Виноград", "Вишні"],
    }
  ]);
  const [items] = useState([
    {
      id: 1,
      name: "Мед липовий 2022",
      desc: "Мед липовий, добірний солодкий, дуже якісний і тд",
      category: "Липовий",
      prise: 99.99,
      image : "https://c.ndtvimg.com/2021-07/7s38qeug_honey_625x300_05_July_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
      rating: 2.1,
      descFull: "lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper nostra ultricies posuere rhoncus tristique vel turpis leo nec interdum hendrerit mattis donec sodales est scelerisque finibus habitant pharetra ridiculus sociosqu facilisi tincidunt quam sollicitudin praesent ex eleifend tortor in congue eros justo neque quisque convallis eu vulputate dignissim potenti dis arcu suspendisse faucibus duis semper nullam pretium massa placerat pulvinar primis luctus litora laoreet integer mauris lectus parturient aliquam fusce sem imperdiet ad enim morbi facilisis iaculis purus aptent eget libero proin fermentum lacus taciti condimentum non commodo augue sagittis ante inceptos class etiam cras mollis bibendum netus molestie"
    },
    {
      id: 2,
      name: "Мед акаційовий 2022",
      desc: "Якийсь опис",
      category: "Липовий",
      prise: 79.99,
      image: "http://pasikabrody.com.ua/wp-content/uploads/2017/08/0-1.jpg",
      rating: 3.1,
      descFull: "lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper nostra ultricies posuere rhoncus tristique vel turpis leo nec interdum hendrerit mattis donec sodales est scelerisque finibus habitant pharetra ridiculus sociosqu facilisi tincidunt quam sollicitudin praesent ex eleifend tortor in congue eros justo neque quisque convallis eu vulputate dignissim potenti dis arcu suspendisse faucibus duis semper nullam pretium massa placerat pulvinar primis luctus litora laoreet integer mauris lectus parturient aliquam fusce sem imperdiet ad enim morbi facilisis iaculis purus aptent eget libero proin fermentum lacus taciti condimentum non commodo augue sagittis ante inceptos class etiam cras mollis bibendum netus molestie"
    },
    {
      id: 3,
      name: "Рамка акаційова 2021",
      desc: "Якийсь опис",
      category: "Липовий",
      prise: 199.99,
      image: "https://svitroslyn.ua/upload/iblock/db7/db7883697f7d320d49e22ce1cbc0f8ae.jpg",
      rating: 4.1,
      descFull: "lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper nostra ultricies posuere rhoncus tristique vel turpis leo nec interdum hendrerit mattis donec sodales est scelerisque finibus habitant pharetra ridiculus sociosqu facilisi tincidunt quam sollicitudin praesent ex eleifend tortor in congue eros justo neque quisque convallis eu vulputate dignissim potenti dis arcu suspendisse faucibus duis semper nullam pretium massa placerat pulvinar primis luctus litora laoreet integer mauris lectus parturient aliquam fusce sem imperdiet ad enim morbi facilisis iaculis purus aptent eget libero proin fermentum lacus taciti condimentum non commodo augue sagittis ante inceptos class etiam cras mollis bibendum netus molestie"
    },
    {
      id: 4,
      name: "Рамка дубова 2022",
      desc: "Якийсь опис",
      category: "Дубова",
      prise: 90.99,
      image: "https://ukrbee.ua/4538-home_default/ramki-dlya-vulika-z-drotom-i-vtulkami-10-sht.jpg",
      rating: 5.0,
      descFull: "lorem ipsum dolor sit amet consectetur adipiscing elit ullamcorper nostra ultricies posuere rhoncus tristique vel turpis leo nec interdum hendrerit mattis donec sodales est scelerisque finibus habitant pharetra ridiculus sociosqu facilisi tincidunt quam sollicitudin praesent ex eleifend tortor in congue eros justo neque quisque convallis eu vulputate dignissim potenti dis arcu suspendisse faucibus duis semper nullam pretium massa placerat pulvinar primis luctus litora laoreet integer mauris lectus parturient aliquam fusce sem imperdiet ad enim morbi facilisis iaculis purus aptent eget libero proin fermentum lacus taciti condimentum non commodo augue sagittis ante inceptos class etiam cras mollis bibendum netus molestie"
    },
  ])
  const [bascetItem, setBasketItem] = useState([])
  const [order, setOrder] = useState([])
  return (
    <div className="wrapper">
      <Header bascetItem={bascetItem} setBasketItem={setBasketItem}/>
      <Routes>
        <Route path="/" element={<Catalog categories={categories} items={items}/> } />
        <Route path="/tovar/:id" element={<Tovar items={items} setBasketItem={setBasketItem} bascetItem={bascetItem}/>}/>
        <Route path="/*" element={<NotFound />} />
        <Route path="/checkout" element={<Checkout bascetItem={bascetItem}  setOrder={setOrder}/>} />
        <Route path="/checkout/done" element={<CheckoutDone order={order} setBasketItem={setBasketItem}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
