import { getDatabase, onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../Firebase';

function View() {
  const navigate = useNavigate();
  const [users, setUsers] = useState({});
  const db = getDatabase(app);
  
  const getUser = () => {
    const alldata = ref(db, 'users');
    onValue(alldata, (row) => {
      const data = row.val();
      setUsers(data || {});
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = (id) => {
    const deletedata = ref(db, `users/${id}`);
    remove(deletedata)
      .then(() => {
        alert(`Record Deleted Successfully...!`);
        getUser();
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
  };

  const editUser = (id, name, company, email, phone, message) => {
    let ddata = { id, name, company, email, phone, message };
    navigate(`/edit`, { state: ddata });
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2 style={styles.header}>View User</h2>
        <hr style={styles.hr} />
        <div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Id</th>
                <th style={styles.tableHeader}>Name</th>
                <th style={styles.tableHeader}>Company</th>
                <th style={styles.tableHeader}>Email</th>
                <th style={styles.tableHeader}>Phone</th>
                <th style={styles.tableHeader}>Message</th>
                <th style={styles.tableHeader}>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                Object.entries(users).map(([key, value]) => (
                  <tr key={key}>
                    <td style={styles.tableData}>{key}</td>
                    <td style={styles.tableData}>{value.name}</td>
                    <td style={styles.tableData}>{value.company}</td>
                    <td style={styles.tableData}>{value.email}</td>
                    <td style={styles.tableData}>{value.phone}</td>
                    <td style={styles.tableData}>{value.message}</td>
                    <td style={styles.tableData}>
                      <button 
                        onClick={() => deleteUser(key)} 
                        style={styles.blueButton}
                      >
                        Delete
                      </button> &nbsp;&nbsp;&nbsp;&nbsp;
                      <button 
                        onClick={() => editUser(key, value.name, value.company, value.email, value.phone, value.message)} 
                        style={styles.blueButton}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <hr style={styles.hr} />
        <Link to={`/add`} style={styles.link}>Add</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundImage: 'url("https://wallpapers.com/images/featured/dark-background-b59iy2towqy5yrgb.jpg")',
    backgroundColor: 'rgba(0, 0, 0, 0.44)',
    backgroundBlendMode: 'overlay',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px'
  },
  content:{
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: '30px',
    borderRadius: '10px',
    color: '#f1f1f1',
    width: '80%',
    maxWidth: '1200px',
    boxShadow: '0 0 15px rgba(0,0,0,0.6)'
  },
  header: {
    color: '#f1f1f1',
  },
  hr: {
    borderColor: '#333',
    margin: '20px 0',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    backgroundColor: '#333',
    color: '#f1f1f1',
    padding: '10px',
    textAlign: 'left',
  },
  tableData: {
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #333',
  },
   blueButton: {
    padding: '8px',
    backgroundColor: 'rgb(183 180 180)',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px'
  },
   link: {
    display: 'block',
    textAlign: 'center',
    marginTop: '20px',
    color: '#90caf9',
    textDecoration: 'none'
  }
};

export default View;
