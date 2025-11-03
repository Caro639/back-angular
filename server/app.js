const express = require('express');
const { DUMMY_PROPERTIES } = require('./data');
const soldProperties = [DUMMY_PROPERTIES[DUMMY_PROPERTIES.length - 2].id];
const maxOfferProperties = [DUMMY_PROPERTIES[DUMMY_PROPERTIES.length - 1].id];
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/api/properties', (req, res) => {
  const previews = DUMMY_PROPERTIES.map(property => ({
    id: property.id,
    title: property.title,
    thumbnailUrl: property.thumbnailUrl,
    price: property.price,
    surface: property.surface,
    city: property.city,
    offerMade: property.offerMade,
  }));
  res.json(previews);
});

app.get('/api/properties/:id', (req, res) => {
  const propertyId = req.params.id;
  const found = DUMMY_PROPERTIES.find(property => property.id === propertyId);
  if (!found) {
    res.status(404).json({ message: 'Property not found' });
    return;
  }
  res.json(found);
});

app.post('/api/properties/:id/offer', (req, res ) => {
  const found = DUMMY_PROPERTIES.find(property => property.id === req.params.id);
  if (!found) {
    res.status(404).json({ message: 'Property not found' });
    return;
  }
  found.offerMade = true;
  res.json({ id: req.params.id, message: 'Offer made successfully' });
});

app.get('/api/properties/:id/sold', (req, res) => {
  res.json({ id: req.params.id, sold: soldProperties.includes(req.params.id) });
});

app.get('/api/properties/:id/offer-limit-reached', (req, res) => {
  res.json({ id: req.params.id, offerLimitReached: maxOfferProperties.includes(req.params.id) });
});

app.listen(3030, () => {
  console.log('Server is running on port 3030');
});
