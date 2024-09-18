import { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { getDataEndpoint } from './Components/Home/dataApi';

function App() {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await getDataEndpoint(`page${page}.json`);
        const content=data?.page?.['content-items']?.content
        if (data && content) {
          setItems((prevItems) => [...prevItems, ...content]);
          setTitle(data?.page?.title); // Set the title from the API call
        } else {
          setError('No data found');
        }
      } catch  {
        setError('Error loading data');
      } finally {
        setIsLoading(false);
      }
    };
    loadData();
  }, [page]);

  return (
    <Box>
      <Header title={title} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Home
          items={items}
          searchTerm={searchTerm}
          setPage={setPage}
          page={page}
          error={error}
          isLoading={isLoading}
        />
    </Box>
  );
}

export default App;
