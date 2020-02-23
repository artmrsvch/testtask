import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest, resetUserRequest } from "../modules/actions";

function UserList() {
    const dispatch = useDispatch();
    const { users, isLoggedIn } = useSelector(stateSelect => stateSelect);

    const handleClick = () => {
        users.links.next_url && dispatch(getUserRequest(users.links.next_url));
    };
    const setTooltipText = ({ target }) => {
        if (target.offsetWidth < target.scrollWidth) {
            const tooltip = target.classList.contains("user-list__name")
                ? target.parentNode.children[5]
                : target.parentNode.children[6];
            target.style.cursor = "pointer";
            tooltip.style.padding = "0.3125rem 0.625rem"; //иначе показыватся пустой блок из паддингов если в css
            tooltip.textContent = target.textContent;
        }
    };
    useEffect(() => {
        isLoggedIn && dispatch(resetUserRequest());
    }, [isLoggedIn]);
    useEffect(() => {
        dispatch(getUserRequest());
    }, []);
    return (
        <section className="section userList-section">
            <div className="container userList-container">
                <h2 className="title userList-title">Our cheerful users</h2>
                <ul className="user-list">
                    {users.users &&
                        users.users.map(({ id, name, email, phone, position, photo }) => (
                            <li key={id} className="user-list__item">
                                <div className="user-list__wrap-pic">
                                    <img className="user-list__img" src={photo} />
                                </div>
                                <span onMouseEnter={setTooltipText} className="user-list__name">
                                    {name}
                                </span>
                                <span className="user-list__position">{position}</span>
                                <span onMouseEnter={setTooltipText} className="user-list__email">
                                    {email}
                                </span>
                                <span className="user-list__phone-number">{phone}</span>
                                <span className="tooltip tooltip-name"></span>
                                <span className="tooltip tooltip-email"></span>
                            </li>
                        ))}
                </ul>
                <div className="btn-wrap">
                    {users.links.next_url && (
                        <button onClick={handleClick} className="btn">
                            Show more
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}

export default UserList;
