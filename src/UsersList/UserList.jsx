import React from "react";
import man from "../assets/man-laptop-v1.svg";

function UserList() {
    return (
        <section className="section userList-section">
            <div className="container userList-container">
                <h2 className="title userList-title">Our cheerful users</h2>
                <ul className="user-list">
                    <li className="user-list__item">
                        <div className="user-list__wrap-pic">
                            <img className="user-list__img" src={man} alt="" />
                        </div>
                        <span className="user-list__name">Maximillian</span>
                        <span className="user-list__position">
                            Contextual advertising specialist
                        </span>
                        <span className="user-list__email">controldepartment@gmail</span>
                        <span className="user-list__phone-number">+380 50 678 03 24</span>
                    </li>
                </ul>
                <div className="btn-wrap">
                    <button className="btn">Show more</button>
                </div>
            </div>
        </section>
    );
}

export default UserList;
