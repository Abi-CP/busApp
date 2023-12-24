// server/src/stripe.mjs

import { Router } from 'express';
import Stripe from 'stripe';

const router = Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2020-08-27' });
console.log('Stripe Secret Key:', process.env.STRIPE_SECRET_KEY);


router.post('/create-payment-intent', async (req, res) => {
  const { amount, currency, description, customerId } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      description,
      customer: customerId,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).json({ error: 'Error creating PaymentIntent' });
  }
});

export { router }; // Export the router instance
