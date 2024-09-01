import React from "react";

const MenuCard = ({ menuData }) => {
//   console.log(menuData);
  return (
    <>
      {menuData.map((curElem) => {
        const { id, image, name, category, description }=curElem;
        return (
          <>
         

       
            <div className="card" key={id} style={{ width: "18rem" }}>
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <span className="card-id">{id}</span>

                <h5 className="card-title">{name}</h5>
                <span className="card-category">{category}</span>

                <p className="card-text">
                   {description}
                  
                </p>
                <span>Order Now</span>
                {/* <a href="#" className="btn btn-primary">
                    Go somewhere
                </a> */}
              </div>
            </div>
            
          </>
        );
      })}
    </>
  );
};

export default MenuCard;
