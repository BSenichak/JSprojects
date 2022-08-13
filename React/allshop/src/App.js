import "./App.css";
import Header from "./components/Header";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

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
      desc: "Якийсь опис",
      category: "Липовий",
      prise: 99.99,
      image : "https://c.ndtvimg.com/2021-07/7s38qeug_honey_625x300_05_July_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
      rating: 2.1
    },
    {
      id: 2,
      name: "Мед акаційовий 2022",
      desc: "Якийсь опис",
      category: "Липовий",
      prise: 79.99,
      image: "http://pasikabrody.com.ua/wp-content/uploads/2017/08/0-1.jpg",
      rating: 3.1
    },
    {
      id: 3,
      name: "Рамка акаційова 2021",
      desc: "Якийсь опис",
      category: "Липовий",
      prise: 199.99,
      image: "https://svitroslyn.ua/upload/iblock/db7/db7883697f7d320d49e22ce1cbc0f8ae.jpg",
      rating: 4.1
    },
    {
      id: 4,
      name: "Рамка дубова 2022",
      desc: "Якийсь опис",
      category: "Дубова",
      prise: 90.99,
      image: "https://ukrbee.ua/4538-home_default/ramki-dlya-vulika-z-drotom-i-vtulkami-10-sht.jpg",
      rating: 5.0
    },
  ])

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Catalog categories={categories} items={items}/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
