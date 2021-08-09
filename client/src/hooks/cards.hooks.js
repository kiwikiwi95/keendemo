import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import { sort } from './utils';

export const useSortedCards = (cards, setCards, key, defaultConfig = null) => {
  const [sortConfig, setSortConfig] = useState(() => {
    const sortConfig = window.localStorage.getItem(key);
    return sortConfig !== null ? JSON.parse(sortConfig) : defaultConfig;
  }, []);
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(sortConfig));
    setSortConfig(sortConfig);
  }, [key, sortConfig]);
  useMemo(() => {
    const sortCards = async cards => {
      try {
        if (cards) {
          let sortedCards = [...cards];
          if (sortConfig) {
            sortedCards = sort(sortedCards, sortConfig);
          }
          setCards(sortedCards);
        }
      } catch (error) {
        console.error(error);
      }
    };
    const fetchCards = async () => {
      try {
        const options = {
          url: 'cards',
          method: 'get'
        };
        const { statusText, data } = await axios(options);
        if (statusText === 'OK') {
          sortCards(data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchCards();
  }, [sortConfig]);

  const handleSort = term => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.term === term &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ term, direction });
  };

  return { handleSort };
};

export const useSortState = (defaultConfig, key) => {
  const [config, setConfig] = useState(() => {
    const sortConfig = window.localStorage.getItem(key);
    return sortConfig !== null ? JSON.parse(sortConfig) : defaultConfig;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(config));
  }, [key, config]);
  return [config, setConfig];
};
