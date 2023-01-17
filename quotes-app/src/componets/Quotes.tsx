import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Quote {
    id: number;
    text: string;
    author: string;
}

interface Props {}

const Quotes: React.FC<Props> = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);

    useEffect(() => {
        axios.get<Quote[]>('https://e1qo3ccpmb.execute-api.us-east-2.amazonaws.com/prod/quotes')
            .then(response => {
                setQuotes(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {quotes.map((quote: Quote) => (
                <div key={quote.id}>
                    <p>{quote.text}</p>
                    <p>{quote.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Quotes;
