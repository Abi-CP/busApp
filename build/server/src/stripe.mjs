// stripe.mjs

import { Router } from 'express';
import Stripe from 'stripe';

const router = Router();

const stripeSecretKey = 'sk_test_51OQqOjSEuj1HRmQXbOGow0OlEtiGSIVIYYQOjQlZ6EqBMkp2rRElclRHKMZcW31YUYJx1sLnOGiX2rpSvepx51ZS00X8gXNPgv'; 
const stripe = new Stripe(stripeSecretKey, { apiVersion: '2020-08-27' });

// Function to create a new customer on Stripe and return the customer ID
const createStripeCustomer = async (userEmail) => {
  const customer = await stripe.customers.create({
    email: userEmail,
    // Add more details as needed
  });
  return customer.id;
};

router.post('/create-payment-intent', async (req, res) => {
  const { userEmail, amount, currency } = req.body;

  try {
    const customerId = await createStripeCustomer(userEmail);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      customer: customerId,
      email: userEmail,
    });
    console.log( paymentIntent.client_secret +'   '+ paymentIntent.payment_method)
    res.json({ clientSecret: paymentIntent.client_secret, paymentMethodId: paymentIntent.payment_method });
  } catch (error) {
    console.error('Error creating PaymentIntent:', error);
    res.status(500).json({ error: 'Error creating PaymentIntent' });
  }
});

export { router };
