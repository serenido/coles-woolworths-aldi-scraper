import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("teegemspod/au-supermarket-prices").call({
    "searchTerms": [
        "milk",
        "eggs"
    ],
    "maxItemsPerStore": 20,
    "sortBy": "unit_price_low"
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
