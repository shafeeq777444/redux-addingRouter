import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue1 } from "../redux/addSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const value1 = useSelector((state) => state.add.value1);
    console.log(value1, "value 1");
    const navigate=useNavigate()
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    navigate("/second")
                    
                }}
                action=""
            >
                <input type="number" onChange={(e) => dispatch(setValue1(e.target.value))} />
                <button type="submit">+</button>
            </form>
        </div>
    );
};

export default Home;
