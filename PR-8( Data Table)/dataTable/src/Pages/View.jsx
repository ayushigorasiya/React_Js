import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const View = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState("light");
    const [allProperties, setAllProperties] = useState([]);

    //create a state for reset 
    const [originalData, setOriginalData] = useState([]);

    //Create a State for Searching Data

    const [SearchData, setSearchData] = useState({
        agent: "",
        address: "",
        type: "",
        price: "",
        status: ""
    })


    //create a state for sorting data
    const [sortData, setSortData] = useState({
        field: 'id',
        order: true
    });

    const handleData = (e) => {
        setSearchData({
            ...SearchData,
            [e.target.name]: e.target.value
        });
    }

    //filter Data start

    const filterData = allProperties.filter((val) => {
        return (
            val.address.toLowerCase().includes(SearchData.address.toLowerCase()) &&
            val.type.toLowerCase().includes(SearchData.type.toLowerCase()) &&
            val.price.toLowerCase().includes(SearchData.price.toLowerCase()) &&
            val.status.toLowerCase().includes(SearchData.status.toLowerCase()) &&
            val.agent.toLowerCase().includes(SearchData.agent.toLowerCase())
        )
    })

    //filter Data end

    //handelSort Start

    const handelSort = (field) => {
        setSortData((i) => {
            const newOrder = i.field === field ? !i.order : true;
            const sortingData = [...filterData].sort((a, b) => {
                const A = field === 'id' ? a.id : a.agent.toLowerCase();
                const B = field === 'id' ? b.id : b.agent.toLowerCase();

                if (A > B) {
                    return newOrder ? 1 : -1;
                } else {
                    return newOrder ? -1 : 1;
                }
            });

            setAllProperties(sortingData);
            localStorage.setItem('properties', JSON.stringify(sortingData));

            return { field, order: newOrder };  // Update both field and order
        });
    }

    //handelSort End


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("properties")) || [];
        setAllProperties(data);
        setOriginalData(data); /// reset ke liye
    }, [])

    // Delete Properties Start
    const deleteProperty = (id) => {
        const updated = allProperties.filter((item) => item.id !== id);
        setAllProperties(updated);
        localStorage.setItem("properties", JSON.stringify(updated));
        alert("Property was Deleted!");
    };
    // Delete Properties End

    // Edit Properties Start
    const editProperty = (id) => {
        navigate(`/edit/${id}`);
    };
    // Edit Properties End
    return (
        <div>
            <div className={`${theme}-theme`}>
                <div className="theme-container">
                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        Switch to {theme === "light" ? "Dark" : "Light"} Theme
                    </button>
                    <button>

                        <Link to="/add" >Add Property</Link>
                    </button>
                    <div className="theme-box">

                        <h2 align="center">Field Wise Filter Data</h2>

                        <tr className="filter-section">
                            <td>
                                <input type="text" placeholder='Search By Agent Name..' name='agent' value={SearchData.agent} onChange={handleData} />
                            </td>
                            <td>
                                <input type="text" placeholder='Search By Property Address..' name='address' value={SearchData.address} onChange={handleData} />
                            </td>
                            <td>
                                <div className="radio-group">
                                    <input type="radio" name='type' value='rent' checked={SearchData.type === 'rent'} onChange={handleData} />Rent
                                    <input type="radio" name='type' value='sale' checked={SearchData.type === 'sale'} onChange={handleData} />Sale
                                </div>
                            </td>
                            <td>
                                <input type="number" name='price' value={SearchData.price} placeholder='Search By Price....!' onChange={handleData} />
                            </td>
                            <td>
                                <select name="status" value={SearchData.status} onChange={handleData}>
                                    <option value="">- - - Select Status - - -</option>
                                    <option value="Available">Available</option>
                                    <option value="Sold">Sold</option>
                                    <option value="Rented">Rented</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={() => {
                                    setSearchData({
                                        agent: "",
                                        address: "",
                                        type: "",
                                        price: "",
                                        status: ""
                                    });
                                    setAllProperties(originalData);
                                    setSortData({
                                        field: 'id',
                                        order: true
                                    });
                                }}>
                                    Reset
                                </button>
                            </td>
                        </tr>
                        <h2>All Property Listings</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th onClick={() => handelSort('id')} style={{ cursor: 'pointer' }}>ID</th>
                                    <th onClick={() => handelSort('agent')} style={{ cursor: 'pointer' }}>Agent</th>
                                    <th>Address</th>
                                    <th>Type</th>
                                    <th>Price</th>
                                    <th >Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterData.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.agent}</td>
                                        <td>{item.address}</td>
                                        <td>{item.type}</td>
                                        <td>{item.price}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <button onClick={() => editProperty(item.id)}>Edit</button>
                                            <button onClick={() => deleteProperty(item.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View
