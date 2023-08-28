import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error('Stripe secret key not found in environment variables.');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2023-08-16',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Your paymentIntent creation code here
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000, // Replace with the actual amount
        currency: 'usd', // Replace with the desired currency
        // Add other Payment Intent properties as needed
      });

      // Return the Payment Intent to the client
      res.status(200).json({ paymentIntent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while creating the Payment Intent.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
