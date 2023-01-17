import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react';

interface Quote {
  id: number;
  quote: string;
  author: string;
}

const Quotes: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://e1qo3ccpmb.execute-api.us-east-2.amazonaws.com/prod/quotes');
        const data = await res.json();
        setQuotes(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <Thead>
            <Tr>
              <Td>ID</Td>
              <Td>Quote</Td>
              <Td>Author</Td>
            </Tr>
          </Thead>
          <Tbody>
            {quotes.map((quote: Quote) => (
              <Tr key={quote.id}>
                <Td>{quote.id}</Td>
                <Td>{quote.quote}</Td>
                <Td>{quote.author}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </div>
  );
};

export default Quotes;
