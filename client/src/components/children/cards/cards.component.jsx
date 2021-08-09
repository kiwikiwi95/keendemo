import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { border } from '@material-ui/system';
import { useSortedCards, useSortState } from '../../../hooks/cards.hooks';
import Container from './cards.styles';

const Cards = () => {
  const [cards, setCards] = useState([]);
  const { handleSort } = useSortedCards(cards, setCards, 'config');
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell padding='none'>
                <div className='head'>
                  <h3>name</h3>
                  <button type='button' onClick={() => handleSort('name')}>
                    ▲<br />▼
                  </button>
                </div>
              </TableCell>
              <TableCell padding='none'>
                <div className='head'>
                  <h3>cmc</h3>
                  <button type='button' onClick={() => handleSort('cmc')}>
                    ▲<br />▼
                  </button>
                </div>
              </TableCell>
              <TableCell padding='none'>
                <div className='head'>
                  <h3>score</h3>
                  <button type='button' onClick={() => handleSort('score')}>
                    ▲<br />▼
                  </button>
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cards.map(({ id, name, cmc, score }) => (
              <TableRow key={id}>
                <TableCell padding='none'>
                  <div className='entry'>{name}</div>
                </TableCell>
                <TableCell padding='none'>
                  <div className='entry'>{cmc}</div>
                </TableCell>
                <TableCell padding='none'>
                  <div className='entry'>{score}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Cards;
