// routes.js

import Home from './routes/Home.svelte';
import SearchResults from './routes/SearchResults.svelte';

export const routes = {
  '/': Home,
  '/search-result': SearchResults,
};
