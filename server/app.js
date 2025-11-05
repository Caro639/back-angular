const express = require("express");
const { DUMMY_PROPERTIES, DUMMY_TOKEN } = require("./data");
const cors = require("cors");

const soldProperties = [DUMMY_PROPERTIES[DUMMY_PROPERTIES.length - 2].id];
const maxOfferProperties = [DUMMY_PROPERTIES[DUMMY_PROPERTIES.length - 1].id];
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/properties", (req, res) => {
  const previews = DUMMY_PROPERTIES.map((property) => ({
    id: property.id,
    title: property.title,
    thumbnailUrl: property.thumbnailUrl,
    price: property.price,
    surface: property.surface,
    city: property.city,
    offerMade: property.offerMade,
    favourite: property.favourite,
  }));
  res.json(previews);
});

app.get("/api/properties/:id", (req, res) => {
  const propertyId = req.params.id;
  const found = DUMMY_PROPERTIES.find((property) => property.id === propertyId);
  if (!found) {
    res.status(404).json({ message: "Property not found" });
    return;
  }
  res.json(found);
});

app.post("/api/properties/:id/offer", (req, res) => {
  const found = DUMMY_PROPERTIES.find(
    (property) => property.id === req.params.id
  );
  if (!found) {
    res.status(404).json({ message: "Property not found" });
    return;
  }
  found.offerMade = true;
  res.json({ id: req.params.id, message: "Offer made successfully" });
});

app.get("/api/properties/:id/sold", (req, res) => {
  res.json({ id: req.params.id, sold: soldProperties.includes(req.params.id) });
});

app.get("/api/properties/:id/offer-limit-reached", (req, res) => {
  res.json({
    id: req.params.id,
    offerLimitReached: maxOfferProperties.includes(req.params.id),
  });
});

app.post("/api/properties/:id/favourite", (req, res) => {
  const authHeader = req.headers.authorization;
  console.log("Received auth header:", authHeader);
  console.log("Expected token:", `Bearer ${DUMMY_TOKEN}`);

  if (!authHeader || authHeader !== `Bearer ${DUMMY_TOKEN}`) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const found = DUMMY_PROPERTIES.find(
    (property) => property.id === req.params.id
  );
  if (!found) {
    res.status(404).json({ message: "Property not found" });
    return;
  }
  found.favourite = !found.favourite;
  res.json();
});

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
