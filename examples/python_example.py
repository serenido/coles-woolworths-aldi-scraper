import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run = client.actor("teegemspod/au-supermarket-prices").call(run_input={
    "searchTerms": [
        "milk",
        "eggs"
    ],
    "maxItemsPerStore": 20,
    "sortBy": "unit_price_low"
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
