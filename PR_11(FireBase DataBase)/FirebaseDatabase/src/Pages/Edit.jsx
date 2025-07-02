import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getDatabase, ref, update } from 'firebase/database';
import { app } from '../Firebase';

function Edit() {
  const location = useLocation();
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setInput({
      name: location?.state?.name || '',
      company: location?.state?.company || '',
      email: location?.state?.email || '',
      phone: location?.state?.phone || '',
      message: location?.state?.message || ''
    });
  }, [location?.state]);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const db = getDatabase(app);

  const handleSubmit = (e) => {
    e.preventDefault();
    const singleRow = ref(db, `users/${location?.state?.id}`);
    update(singleRow, {
      name: input.name,
      company: input.company,
      email: input.email,
      phone: input.phone,
      message: input.message
    }).then(() => {
      alert(`Data was updated successfully!`);
      navigate('/');
    }).catch((err) => {
      console.log(err);
      alert('Error updating data.');
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h2 style={styles.heading}>✏️ Edit User</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={changeInput}
              placeholder="Enter your name"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Company:</label>
            <input
              type="text"
              name="company"
              value={input.company}
              onChange={changeInput}
              placeholder="Enter your company"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={changeInput}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Phone:</label>
            <input
              type="number"
              name="phone"
              value={input.phone}
              onChange={changeInput}
              placeholder="Enter your phone"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Message:</label>
            <textarea
              name="message"
              value={input.message}
              onChange={changeInput}
              placeholder="Enter your message"
              style={styles.textarea}
              required
            />
          </div>

          <button type="submit" style={styles.button}>Update</button>
        </form>

        <Link to="/" style={styles.link}>← Back to View</Link>
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
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: '30px',
    borderRadius: '10px',
    color: '#f1f1f1',
    width: '100%',
    maxWidth: '600px',
    boxShadow: '0 0 15px rgba(0,0,0,0.6)'
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#fff',
    fontSize: '24px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  field: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  label: {
    flex: '0 0 100px',
    fontWeight: 'bold',
    color: '#ccc'
  },
  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '15px'
  },
  textarea: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #555',
    backgroundColor: '#333',
    color: '#fff',
    resize: 'vertical',
    minHeight: '80px',
    fontSize: '15px'
  },
  button: {
    padding: '12px',
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

export default Edit;
