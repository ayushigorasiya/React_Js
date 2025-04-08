import React from 'react';
import '../App.css'; // External CSS file for styling

const Quote = ({ quote }) => {
    return (
       <>
        <div className="quote-container">
            <h1>My Quotes API</h1>
            <table className="quote-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Quote</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {quote.map((q, i) => {
                        return (
                            <tr key={i}>
                                <td>{q.id}</td>
                                <td>{q.quote}</td> {/* Render quote text */}
                                <td>{q.author}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
        </>
    );
}

export default Quote;
