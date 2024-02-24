import * as inventory from './endpoints/inventory.js';
import express from 'express';

const app = express();
const port = 3000;


app.post('/inventory/add', (req, res) => {
  let response = inventory.add_item_to_inventory(req);
  res.send(response)
})
app.post('/inventory/list', (req, res) => {
  let response = inventory.add_item_to_inventory(req);
  res.send(response)
})
app.post('/inventory/modify', (req, res) => {
  let response = inventory.add_item_to_inventory(req);
  res.send(response)
})
app.post('/inventory/remove', (req, res) => {
  let response = inventory.add_item_to_inventory(req);
  res.send(response)
})

app.listen(port, () => {
  console.log(`API is listening at http://localhost:${port}`);
});