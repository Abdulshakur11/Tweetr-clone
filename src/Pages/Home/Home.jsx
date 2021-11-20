import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import SiteRightBr from "../../Components/SiteRBr/SiteRBr";
import ToDo from "../../Components/ToDo/ToDo"
import "./Home.scss";

function Home() {
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setItems(data));
    }, []);
    

  return (
    <>
      <div className="home-wrapper">
        <Header />

        <div className="main">
          <div className="profile__name-wrapper">
            <div>
              <h3 className="user-name">Home</h3>
            </div>
          </div>

          <div className="main-hero">
              <ToDo></ToDo>
          </div>

          {items.length > 0 && (
            <ul className="users-list">
              {items.map((item) => {
                return (
                  <li className="users-item" key={item.id}>
                    <div className="users-item-wrapper">
                      <Link to={`/users/${item.id}`} className="avatar-img">{item.username[0]}</Link>
                      <div className="users-item-name-wrapper">
                        <Link className="users-item-name" to={`/users/${item.id}`}>{item.username}</Link>
                        <a href="/" className="users-item-name-link">{item.email}</a>
                      <p className="users-item-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit impedit minus modi ullam, natus voluptatibus.</p>
                      </div>
                    </div>
                    
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <SiteRightBr >
        </SiteRightBr>
      </div>
    </>
  );
}

export default Home;
