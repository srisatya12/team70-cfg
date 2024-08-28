const express = require("express");
const inventoryRouter = express.Router();
const { update } = require("../Controllers/inventoryController");

inventoryRouter
.route('/update')
.post(update)