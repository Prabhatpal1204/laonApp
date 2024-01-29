import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
const LoanRequests = new Mongo.Collection("loanRequests");

LoanRequests.schema = new SimpleSchema({
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
