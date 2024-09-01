import React, { useState } from 'react';
import MenuCard from "./MenuCard";
import Menu from './menuApi';
import './style.css';
import Navbar from "./navbar";

const uniqueData=[...new Set(Menu.map((curElem)=>{
  return curElem.category;

})
),"All"
];
// console.log(uniqueData);

const Resturants = () => {

  const [menuData,setMenuData]=useState(Menu);
   const [catlist,setcatlist]=useState(uniqueData);

const filterData=(category)=>{
  if(category==="All"){
     setMenuData(Menu);
     return;
  }
  const updatedata=Menu.filter((curElem)=>{
    return curElem.category===category;
  });
  setMenuData(updatedata);
};
  return (
    <>
      <Navbar filterData={filterData} catlist={catlist}/>
        <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturants
