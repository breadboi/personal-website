import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get('https://brettcarney.com/api/github/languages');
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error occured" });
  }
};