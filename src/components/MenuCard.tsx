import React, { useState, useEffect } from 'react';
import MenuData from '../MenuData.json';

export default function MenuCard() {
  const [menuItem, setMenuItem] = useState(null);
  const [completeMenu, setCompleteMenu] = useState(MenuData);
  const [day, setDay] = useState("Monday");
  const [starter, setStarter] = useState("");
  const [priceStarter, setPriceStarter] = useState("");
  const [main, setMain] = useState("");
  const [priceMain, setPriceMain] = useState("");
  const [dessert, setDessert] = useState("");
  const [priceDessert, setPriceDessert] = useState("");

  useEffect(() => {
    localStorage.setItem('menus', JSON.stringify(completeMenu))
  }, [completeMenu])

  
  useEffect(() => {
    console.log(MenuData);
    fetch('http://localhost:8000/menu')
    .then(res => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      setMenuItem(data);
      setPriceStarter(priceStarter);
      setPriceMain(priceMain);
      setPriceDessert(priceDessert);
      console.log(menuItem);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // const menu = { day, starter, priceStarter, main,  priceMain, dessert, priceDessert }
    const menuLength = MenuData.length;
    const id = menuLength;
    const day = "day";
    const starterName = "starter";
    const priceStarter = 4.20;
    const mainName = "main";
    const priceMain = 6.99;
    const dessertName = "dessert";
    const priceDessert = 4.20;

    const newMenuItem = {
      id: id,
      day: day,
      starter: {
        name: starterName,
        priceStarter: priceStarter
      },
      main: {
          name: mainName, 
          priceMain: priceMain
      },
      dessert: {
          name: dessertName, 
          priceDessert: priceDessert
      }
    
    }
    
    setCompleteMenu([...completeMenu, newMenuItem]);
  }



  return (
    <>
    <div className="md:container md:mx-auto mx-auto h-800 w-900 p-4 px-4">
      <div className="s p-4 border-4 ">
        <div className="box-border md:box-content h-350 w-800 p-4 border-4 text-center decoration-clone bg-gradient-to-b from-green-100 to-blue-150 text-transparent text-purple-500 text-opacity-50 text-6xl">
          Menu Card
        </div>
          <div className="grid grid-cols-3 grid-template-columns: repeat(6, minmax(0, 1fr))">
            <div className="border-solid border-2 bg-green-300 text-center">Monday
                <div className="underline bg-white">
                  <p className="name">starter</p>
                  <p className="price">price</p>
                </div>
                <div className="underline  bg-white">
                  <p className="name">main</p>
                  <p className="price">price</p>
                </div>
                <div className="underline bg-white">
                  <p className="name">Dessert</p>
                  <p className="price">price</p>
                </div>
            </div>
            <div className="border-solid border-2 bg-green-300 text-center">Tuesday
                <div className="underline bg-white ">
                  <p className="name">Starter</p>
                  <p className="price">price</p>
                </div>
                <div className="underline  bg-white">
                  <p className="name">Main</p>
                  <p className="price">price</p>
                </div>
                <div className="underline bg-white">
                  <p className="name">Dessert</p>
                  <p className="price">price</p>
                </div>
            </div>
            <div className="border-solid border-2 bg-green-300 text-center">Wednesday
              <div className="underline bg-white ">
                  <p className="name">Starter</p>
                  <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                  <p className="name">Main</p>
                  <p className="price">price</p>
              </div>
              <div className="underline bg-white ">
                  <p className="name">Dessert</p>
                  <p className="price">price</p>
              </div>
            </div>
            <div className="border-solid border-2 bg-green-300 text-center">Thursday
              <div className="underline bg-white">
                <p className="name">Starter</p>
                <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                <p className="name">Main</p>
                <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                <p className="name">Dessert</p>
                <p className="price">price</p>
              </div>
            </div>
            <div className="border-solid border-2 bg-green-300 text-center">Friday
              <div className="underline bg-white">
                <p className="name">Starter</p>
                <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                <p className="name">Main</p>
                <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                <p className="name">Dessert</p>
                <p className="price">price</p>
              </div>
            </div>
            <div className="border-solid border-2 bg-green-300 text-center">Saturday
              <div className="underline bg-white">
                <p className="name">Starter</p>
                <p className="price">price</p>
              </div>
              <div className="underline  bg-white">
                <p className="name">Main</p>
                <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                <p className="name">Dessert</p>
                <p className="price">price</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <p>Add your menu here : </p>
    <form  onSubmit={handleSubmit} className="w-full max-w-sm">
      <label className="block text-left max-width 100%">
        <span className="text-gray-700">Pick a day</span>
        <select className="form-select block w-full mt-1"
        value={day} onChange={(e) => setDay(e.target.value)}>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
        </select>
      </label>
      <div className="flex items-center border-b border-teal-500 py-2">
        <label htmlFor="starter">starter</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={starter}
        onChange={(e) => setStarter(e.target.value)}></input>
        <label htmlFor="priceStarter">price</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={priceStarter}
        onChange={(e) => setPriceStarter(e.target.value)}></input>
      </div>
      <div className="flex items-center border-b border-teal-500 py-2">
        <label htmlFor="starter">main</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={main}
        onChange={(e) => setMain(e.target.value)}></input>
        <label htmlFor="priceMain">price</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={priceMain}
        onChange={(e) => setPriceMain(e.target.value)}></input>
      </div>
      <div className="flex items-center border-b border-teal-500 py-2">
        <label htmlFor="starter">dessert</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={dessert}
        onChange={(e) => setDessert(e.target.value)}></input>
        <label htmlFor="priceDessert">price</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={priceDessert}
        onChange={(e) => setPriceDessert(e.target.value)}></input>
      </div>
      <button className="flex-shrink-0 border-solid border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="submit" >
        + Add
      </button>
      <p> {day}</p>
      <p> {starter} {priceStarter}</p>
      <p> {main} {priceMain}</p>
      <p> {dessert} {priceDessert}</p>
    </form>
    </>
  )
}

