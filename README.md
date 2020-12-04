# Challenge

Build a page that shows the available subscription plans to a user and allows them to choose what they’d like to purchase, the billing frequency and calculates the total cost for them.

## Restrictions

- Store the data in a database and query the table to get the data
- Use a NodeJS (with Typescript) backend to deliver the initial data
- Use an AJAX call to fetch alternate currency pricings via an API which returns, e.g.
JSON.
- Create the front-end in React/Angular
- Application(s) must be dockerized
- Work out the total cost of the plans.
- Use the plan code to render a flag.
- Use the name of the plan to label it.
- Have a toggle between monthly and annual billing and update the prices and total
accordingly.
- The total can be calculated in the backend or in the front-end).
- Any number of plans can be selected (including 0).
- The annual pricings should be selected initially.

## Data

|Plan code | Name   | Monthly cost | Annual Cost |
|----------|--------|--------------|-------------|
| gb       | UK     | £10          | £50         |
| fr       | France | £10          | £60         |
| de       | Germany| £15          | £75         |
| us       | USA    | £25          | £150        |
| jp       | Japan  | £15          | £65         |

## Out of scope

- Don’t feel the need to document the project other than perhaps instructions on how to
make it work on our machines to check it.  

# Run Application

Run NextJS app  
`npm run dev`  
  
Run Storybook Components  
`npm run storybook`  




