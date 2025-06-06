import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './View.css';

function View() {
  const [allrecord, setAllrecord] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users')) || [];
    setAllrecord(data);
  }, []);

  const deleteRecord = (id) => {
    let data = allrecord.filter(val => val.id !== id);
    localStorage.setItem('users', JSON.stringify(data));
    setAllrecord(data);
    alert("Record deleted successfully");
  }

  const editRecord = (id) => {
    navigate(`/edit/${id}`);
  }

  return (
    <div className="containerr">
      <h1 className="page-title">User Records</h1>
      <div className="top-bar">
        <Link to="/add" className="btn btn-primary">+ Add New User</Link>
      </div>

      <div className="cards-container">
        {
          allrecord.length === 0 ? (
            <p className="no-data">No records available.</p>
          ) : (
            allrecord.map(({ id, name, email, password, gender, courses, city, doj }) => (
              <article key={id} className="card">
                <header className="card-header">
                  <h2 className="card-name">{name}</h2>
                  <span className="card-id">ID: {id}</span>
                </header>
                <section className="card-body">
                  <p><strong>Email:</strong> <span>{email}</span></p>
                  <p><strong>Password:</strong> <span>{password}</span></p>
                  <p><strong>Gender:</strong> <span>{gender}</span></p>
                  <p><strong>Courses:</strong> <span>{courses.join(', ')}</span></p>
                  <p><strong>City:</strong> <span>{city}</span></p>
                  <p><strong>DOJ:</strong> <span>{doj}</span></p>
                </section>
                <footer className="card-footer">
                  <button onClick={() => deleteRecord(id)} className="btn btn-danger">Delete</button>
                  <button onClick={() => editRecord(id)} className="btn btn-secondary">Edit</button>
                </footer>
              </article>
            ))
          )
        }
      </div>
    </div>
  );
}

export default View;
