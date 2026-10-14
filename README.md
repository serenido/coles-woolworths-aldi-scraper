# Coles, Woolworths and ALDI Price Scraper API

Search Coles, Woolworths and ALDI at once. Get price, was price, specials, unit price per kg or L, barcode and stock, plus a free cheapest-store comparison.

Runs in the cloud on Apify. No servers, no proxy setup, no code to maintain. **[Open it on Apify](https://apify.com/serenido/au-supermarket-prices)**

**Price:** $0.30 per 1,000 products, plus $0.00005 per run. No monthly fee. Apify's free plan gives $5 of usage every month, no credit card needed. [Current price](https://apify.com/serenido/au-supermarket-prices/pricing).

## What you get

- Coles, Woolworths and ALDI in one run
- Price, was price, special label and unit price (per kg, L or each)
- Barcode (EAN), size, brand and stock
- Free cheapest-store comparison for every search term
- ALDI prices are its listed in-store prices (ALDI does not sell these products online)

## Quick start: Python

```bash
pip install apify-client
```

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("serenido/au-supermarket-prices").call(run_input={
    "searchTerms": [
        "milk",
        "eggs"
    ],
    "maxItemsPerStore": 20,
    "sortBy": "unit_price_low"
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

## Quick start: JavaScript (Node.js)

```bash
npm install apify-client
```

```javascript
import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("serenido/au-supermarket-prices").call({
    "searchTerms": [
        "milk",
        "eggs"
    ],
    "maxItemsPerStore": 20,
    "sortBy": "unit_price_low"
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
```

## Quick start: one HTTP call

Runs the tool and returns the rows in one request. Good for runs under 5 minutes; for bigger runs use the Python or JavaScript example.

```bash
curl -X POST "https://api.apify.com/v2/acts/serenido~au-supermarket-prices/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"searchTerms": ["milk", "eggs"], "maxItemsPerStore": 20, "sortBy": "unit_price_low"}'
```

Get your token in [Apify Console > Settings > API & Integrations](https://console.apify.com/settings/integrations).

## Use it from AI apps (MCP)

Any app that supports remote MCP servers (Claude, ChatGPT, Cursor, VS Code and others) can run this tool for you. Add this server URL: `https://mcp.apify.com?tools=serenido/au-supermarket-prices`. Your Apify account connects on first use. Example config for Cursor:

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=serenido/au-supermarket-prices"
    }
  }
}
```

## Input example

```json
{
  "searchTerms": [
    "milk",
    "eggs"
  ],
  "maxItemsPerStore": 20,
  "sortBy": "unit_price_low"
}
```

Turn single stores on or off, or ask for specials only. All options are listed on the [input page](https://apify.com/serenido/au-supermarket-prices/input-schema).

## Output example (one row)

```json
{
  "store": "Woolworths",
  "searchTerm": "milk",
  "name": "Woolworths Full Cream Milk 3L",
  "brand": "Woolworths",
  "size": "3L",
  "price": 4.95,
  "wasPrice": null,
  "onSpecial": false,
  "unitPriceText": "$1.65 / 1L",
  "pricePerUnit": 1.65,
  "perUnit": "L",
  "barcode": "9300633556150",
  "available": true,
  "productUrl": "https://www.woolworths.com.au/shop/productdetails/888140"
}
```

Download as JSON, CSV or Excel, or connect to Make, Zapier or n8n.

## Use cases

- Grocery price comparison apps and sites
- Tracking specials and price changes
- Market and inflation research in Australia

## More tools by Serenido

- [Weibo Scraper](https://github.com/serenido/weibo-scraper): posts, hot searches, comments and creators. No login.
- [Bilibili Scraper](https://github.com/serenido/bilibili-scraper): videos, comments, danmaku and creators. No login.
- [AliExpress Product Details Scraper](https://github.com/serenido/aliexpress-product-details-scraper): every variant with price and stock, shipping to 89 countries.
- [AliExpress Search Scraper](https://github.com/serenido/aliexpress-search-scraper): price, discount and exact order count for any search.
- [Google Trends Scraper](https://github.com/serenido/google-trends-scraper): interest over time, rising queries, regions and Trending Now.

## Support

Found a bug or need a field? Open an issue here or on the [Issues tab on Apify](https://apify.com/serenido/au-supermarket-prices/issues).

Use it only for public data and follow the website's terms and the laws that apply to you. This project is not affiliated with the websites it reads.
