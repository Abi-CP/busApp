// routes.js

import Account from './routes/Account.svelte'
import BookingPage from './routes/BookingPage.svelte'
import Home from './routes/Home.svelte'
import Login from './routes/Login.svelte'
import MyBookings from './routes/MyBookings.svelte'
import Register from './routes/Register.svelte'
import SearchResults from './routes/SearchResults.svelte'

export const routes = {
  '/': Home,
  '/search-result': SearchResults,
  '/login': Login,
  '/register': Register,
  '/account': Account,
  '/booking-page': BookingPage,
  '/my-bookings': MyBookings
}
