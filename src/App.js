import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  
  const [listTitle, setListTitle] = useState('My List');
  const [isAscending, setIsAscending] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const toggleSortOrderHandler = useCallback(() => {
    setIsAscending((prevIsAscending) => !prevIsAscending);
  }, []);

  const listItems = useMemo(() => {
    const itemsCopy = [5, 3, 1, 10, 9];
    return isAscending ? itemsCopy.sort((a, b) => a - b) : itemsCopy.sort((a, b) => b - a);
  }, [isAscending]);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      {/* Button to toggle sort order */}
      <Button onClick={toggleSortOrderHandler}>
        Change to {isAscending ? "Descending" : "Ascending"} Order
      </Button>
    </div>
  );
}

export default App;
