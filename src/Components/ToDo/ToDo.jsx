import { useRef, useState } from "react";
import avatar from "../../images/boburaka.png";
import "./ToDo.scss";
import mountain from "../../images/mountain.svg"
import gif from "../../images/gif.svg"
import books from "../../images/books.svg"
import smile from "../../images/smile.svg"
import data from "../../images/data.svg"

function ToDo() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );
  const addToDoRef = useRef();
  const btn = useRef();


  const handleAdd = (evt) => {
    evt.preventDefault();

    const data = {
      id: todos.length + 1 || 1,
      value: addToDoRef.current.value,
    };
    addToDoRef.current.value = null;
    setTodos(data);

    window.localStorage.setItem("item", JSON.stringify(data));
  };

  return (
    <>
      <div className="todos-wrapper">
        <div className="form-wrapper">
          <img src={avatar} alt="avatar"  />
          <form onSubmit={handleAdd}>
            <div>
              <input
                ref={addToDoRef}
                className="add-input"
                type="text"
                placeholder="What’s happening"
              />
            </div>
            <button ref={btn} type="submit" className="add-btn">
              Tweet
            </button>
          </form>
        </div>
        <ul className="icons-list">
          <li className="icon-item">
            <img src={mountain} alt="" />
          </li>
          <li className="icon-item">
            <img src={gif} alt="" />
          </li>
          <li className="icon-item">
            <img src={books} alt="" />
          </li>
          <li className="icon-item">
            <img src={smile} alt="" />
          </li>
          <li className="icon-item">
            <img src={data} alt="" />
          </li>
        </ul>

        {todos.length > 0 && (
          <ul>
            {todos.map((todo) => {
              return (
                <li>
                  <p>{todo.value}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default ToDo;
