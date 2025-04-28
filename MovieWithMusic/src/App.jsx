// import React, { useState, useEffect } from 'react';
// import ResultList from './ResultList';

// const App = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Prompt only once
//   useEffect(() => {
//     const userInput = prompt('What is your favourite Song or Movie?');
//     if (userInput) {
//       setQuery(userInput);
//     }
//   }, []);

//   // Fetch data when query changes
//   useEffect(() => {
//     if (query === '') return;

//     setLoading(true);
//     fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=10`)
//       .then((res) => res.json())
//       .then((data) => {
//         setResults(data.results || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [query]);

//   return (
//     <div>
//       {loading && <div id="loading"></div>}
//       <ResultList items={results} />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import ResultList from './ResultList';

const App = () => {
  const [query, setQuery] = useState(''); // Store the user's input
  const [results, setResults] = useState([]); // Store fetched results
  const [loading, setLoading] = useState(false); // Handle loading state
  const [promptShown, setPromptShown] = useState(false); // Track if prompt is shown

  // Show prompt only once
  useEffect(() => {
    if (!promptShown) {
      const userInput = prompt('What is your favourite Song or Movie?');
      if (userInput) {
        setQuery(userInput); // Set the input for the API query
      }
      setPromptShown(true); // Mark that prompt is shown
    }
  }, [promptShown]);

  // Fetch data whenever the query changes
  useEffect(() => {
    if (query === '') return;

    setLoading(true);
    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&limit=18`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [query]);

  return (
    <div>
      {loading && <div id="loading"></div>}
      <ResultList items={results} />
    </div>
  );
};

export default App;
