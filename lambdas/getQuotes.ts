import { APIGatewayEvent, Context, APIGatewayProxyResult } from 'aws-lambda';

interface Quote {
    id: number;
    text: string;
    author: string;
}

const quotes: Quote[] = [
    {
        id: 1,
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        id: 2,
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        id: 3,
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    }
];

export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    return {
        statusCode: 200,
        body: JSON.stringify(quotes)
    };
};
