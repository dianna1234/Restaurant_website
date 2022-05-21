import mongoose from "mongoose";

let breakfastSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  more: {
    type: String,
    required: true,
  },
  modalTitle: {
    type: String,
    required: true,
  },
  modalText: {
    type: String,
    required: true,
  },
  closeBtn: {
    type: String,
    required: true,
  },
  dataTarget: {
    type: String,
    required: true,
  },
  modalId: {
    type: String,
    required: true,
  },
});

export let Breakfast = mongoose.model("Breakfast", breakfastSchema);
