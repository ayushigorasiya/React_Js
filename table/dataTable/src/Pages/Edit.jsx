import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const [theme, setTheme] = useState("light");
    const navigate = useNavigate();
    const { editid } = useParams();
    const [allProperties, setAllProperties] = useState(
        JSON.parse(localStorage.getItem("properties"))
        || []);
    const [formData, setFormData] = useState({
        address: "",
        type: "",
        price: "",
        status: "",
        agent: "",
    });

    useEffect(() => {
        const single = allProperties.find(val => val.id == editid);
        if (single)
            setFormData(single);
    }, [editid, allProperties]);
    const changeInput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const up = allProperties.map(val => (val.id == editid ? formData : val));
        localStorage.setItem("properties", JSON.stringify(up));
        setAllProperties(up);
        alert("Property Successfully Added!");
        navigate("/");
    };
    return (
        <div className={`${theme}-theme`}>
            <div className="theme-container">
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    Switch to {theme === "light" ? "Dark" : "Light"} Theme
                </button>

                <h2>My React_Router_CRUD</h2>

                <h2>Edit Property</h2>

                <form onSubmit={handleSubmit} className="theme-box modern-form">
                    <div className="form-group">
                        <label>Agent Name</label>
                        <input
                            type="text"
                            name="agent"
                            value={formData.agent}
                            placeholder="Enter Agent Name...!"
                            onChange={changeInput}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Property Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            placeholder="Enter Property Adress....!"
                            onChange={changeInput}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Property Type</label>
                        <div className="radio-group">
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    value="rent"
                                    checked={formData.type === "rent"}
                                    onChange={changeInput}
                                />
                                Rent
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="type"
                                    value="sale"
                                    checked={formData.type === "sale"}
                                    onChange={changeInput}
                                />
                                Sale
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Status</label>
                        <select name="status" value={formData.status} onChange={changeInput}>
                            <option value="" >- - - Select Status - - -</option>
                            <option value="Available">Available</option>
                            <option value="Sold">Sold</option>
                            <option value="Rented">Rented</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            placeholder="Enter Property Price...!"
                            onChange={changeInput}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button className="submitbtn" type="submit">Edit Property</button>

                        <button><Link to="/">View Property</Link></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Edit
