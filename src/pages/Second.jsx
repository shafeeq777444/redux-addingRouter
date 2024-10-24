import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue2} from "../redux/addSlice";
import { useNavigate } from "react-router-dom";

const Second = () => {
    const dispatch = useDispatch();
    const value2 = useSelector((state) => state.add.value2);
    console.log(value2, "value 2");
    const navigate=useNavigate()
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
               navigate("/third")
                    
                }}
                action=""
            >
                <input type="number" onChange={(e) => dispatch(setValue2(e.target.value))} />
                <button type="submit">=</button>
            </form>
        </div>
    );
};

export default Second;

