import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Input,
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
  const [searchValue, setSearchValue] = useState("");
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://e1qo3ccpmb.execute-api.us-east-2.amazonaws.com/prod/quotes');
        const data = await res.json();
        setQuotes(data);
        setFilteredQuotes(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    if (searchValue) {
      const filteredData = quotes.filter(quote => {
        console.log(quote)
        return quote.author.toLowerCase().includes(searchValue.toLowerCase())
      }
      );
      setFilteredQuotes(filteredData);
    } else {
      setSearchValue(" ");
    }
  }, [searchValue, quotes]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>

      <Input
        placeholder="Search List"
        onChange={handleSearch}
        size="lg"
        borderColor="blue.500"
        bg="white.200"
        borderWidth="2px"
        fontSize="lg"
        color="green.500"
      />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table variant='striped' colorScheme='blue'>
          <Thead>
            <Tr>
              <Td>ID</Td>
              <Td>Quote</Td>
              <Td>Author</Td>
            </Tr>
          </Thead>
          <Tbody>
            {filteredQuotes.length > 0 ? (
              filteredQuotes.map((quote: Quote) => (
                <Tr key={quote.id}>
                  <Td>{quote.id}</Td>
                  <Td>{quote.quote}</Td>
                  <Td>{quote.author}</Td>
                </Tr>
              ))
            ) : (
              quotes.map((quote: Quote) => (
                <Tr key={quote.id}>
                  <Td>{quote.id}</Td>
                  <Td>{quote.quote}</Td>
                  <Td>{quote.author}</Td>
                </Tr>
              ))
            )}
          </Tbody>
        </Table>
      )}
    </div>
  );

};

export default Quotes;
