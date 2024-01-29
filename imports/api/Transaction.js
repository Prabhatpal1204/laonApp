import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

Transactions = new Mongo.Collection("transactions");

Transactions.schema = new SimpleSchema({
  user: {
    type: String,
  },
  amount: {
    type: Number,
  },
  term: {
    type: Number,
  },
  status: {
    type: String,
    allowedValues: ["pending", "funded", "paid"],
  },
});
