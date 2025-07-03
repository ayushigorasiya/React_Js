import React, { useEffect, useState } from 'react';
import { addDoc, collection, deleteDoc, getDocs, getFirestore, doc } from 'firebase/firestore';
import { app } from '../FirebaseConfig';

function App() {
  const [input, setInput] = useState({ todo: '' });
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value
    });
  };

  const db = getFirestore(app);

  // Fetch all todos from Firestore
  const loadTodos = async () => {
    try {
      const todosRef = collection(db, "todos");
      const todoSnapshot = await getDocs(todosRef);

      const todos = todoSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setTodoList(todos);
    } catch (error) {
      console.log("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  // Add a new todo to Firestore
  const addTodo = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "todos"), { todo: input.todo });
      alert("Todo added successfully!");
      loadTodos(); // Re-fetch todos after adding
    } catch (error) {
      console.log("Error adding todo:", error);
    }

    setInput({ todo: '' });
  };

  // Clear all todos from Firestore
  const clearTodos = async () => {
    try {
      const todosRef = await getDocs(collection(db, "todos"));
      const deletePromises = todosRef.docs.map((todoDoc) => {
        const todoRef = doc(db, "todos", todoDoc.id);
        return deleteDoc(todoRef);
      });

      await Promise.all(deletePromises);
      alert("All todos cleared!");
      loadTodos();
    } catch (error) {
      console.log("Error clearing todos:", error);
    }
  };

  // Remove a specific todo
  const removeTodo = async (id) => {
    try {
      const todoRef = doc(db, "todos", id);
      await deleteDoc(todoRef);
      alert("Todo removed successfully!");
      loadTodos();
    } catch (error) {
      console.log("Error removing todo:", error);
    }
  };

  return (
    <div className="app-container">
      <div className="header">
        <h1>Todo List</h1>
      </div>

      <div className="content">
        <div className="form-container">
          <h2>Add Todo</h2>
          <form onSubmit={addTodo}>
            <input
              type="text"
              name="todo"
              value={input.todo}
              onChange={handleInputChange}
              placeholder="Add your todo..."
              className="todo-input"
            />
            <button type="submit" className="submit-button">Add Todo</button>
          </form>
        </div>

        <div className="todo-list">
          <h2>Your Todos</h2>
          <table className="todo-table">
            <thead>
              <tr>
                <th>Todo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todoList.length > 0 ? (
                todoList.map((todo) => (
                  <tr key={todo.id}>
                    <td>{todo.todo}</td>
                    <td>
                      <button onClick={() => removeTodo(todo.id)} className="remove-btn">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">No todos available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="footer">
          <button onClick={clearTodos} className="clear-btn">Clear All Todos</button>
        </div>
      </div>

      <style jsx>{`
        /* Global Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: #181818;
          color: #f5f5f5;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          overflow: hidden;
        }

        .app-container {
          width: 80%;
          max-width: 900px;
          background-color: #212121;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          min-height: 70vh;
        }

        .app-container:hover {
          transform: scale(1.02);
        }

        .header h1 {
          color: #FF6347;
          text-align: center;
          font-size: 36px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .content {
          margin-top: 30px;
        }

        .form-container {
          text-align: center;
          margin-bottom: 30px;
        }

        .form-container h2 {
          font-size: 24px;
          color: #FFFFFF;
          margin-bottom: 20px;
        }

        .todo-input {
          padding: 12px 20px;
          font-size: 16px;
          width: 100%;
          max-width: 450px;
          border: 1px solid #333;
          border-radius: 8px;
          background-color: #333;
          color: #fff;
          margin-bottom: 20px;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .todo-input:focus {
          outline: none;
          border-color: #FF6347;
          box-shadow: 0 0 8px rgba(255, 99, 71, 0.5);
        }

        .submit-button {
          padding: 12px 30px;
          font-size: 16px;
          background-color: #D3D3D3; /* Light Grey */
          color: #333;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #A9A9A9; /* Darker Grey */
        }

        .todo-list {
          margin-top: 40px;
        }

        .todo-table {
          width: 100%;
          margin-top: 20px;
          border-collapse: collapse;
        }

        .todo-table th,
        .todo-table td {
          padding: 12px 20px;
          border: 1px solid #444;
          text-align: left;
        }

        .todo-table th {
          background-color: #333;
          color: #FFFFFF;
          text-transform: uppercase;
        }

        .todo-table td {
          background-color: #282828;
        }

        .todo-table tr:hover td {
          background-color: #3a3a3a;
        }

        .remove-btn {
          background-color: #D3D3D3; /* Light Grey */
          color: #333;
          padding: 8px 16px;
          font-size: 14px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .remove-btn:hover {
          background-color: #A9A9A9; /* Darker Grey */
        }

        .clear-btn {
          background-color: #D3D3D3; /* Light Grey */
          color: #333;
          padding: 12px 30px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: 20px;
        }

        .clear-btn:hover {
          background-color: #A9A9A9; /* Darker Grey */
        }

        .footer {
          text-align: center;
          margin-top: 40px;
        }
      `}</style>
    </div>
  );
}

export default App;
