import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {
    query: { id, name },
    method,
    headers: { authorization },
  } = req;

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ id, name: `User ${id}`, authorization });
      break;
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}`, authorization });
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
