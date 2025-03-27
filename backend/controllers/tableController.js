const Table = require("../models/tableModel.js");
const mongoose = require("mongoose");

const addTable = async (req, res, next) => {
  try {
    const { tableNo } = req.body;

    if (!tableNo) {
      const error = createHttpError(400, "Please provide tableNo");
      return error;
    }

    const isTablePresent = await Table.findOne({ tableNo });

    if (isTablePresent) {
      const error = createHttpError(404, "Table All ready exist");
      return error;
    }

    const newTable = new Table({ tableNo });
    await newTable.save();
    res.status(201).json({
      success: true,
      message: "Table Added Successfully",
      data: newTable,
    });
  } catch (error) {
    next(error);
  }
};
const getTable = async (req, res, next) => {
  try {
    const tables = await Table.find();
    res.status(200).json({ success: true, message: "Tables", data: tables });
  } catch (error) {
    next(error);
  }
};
const updateTable = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = createHttpError(404, "Invalid Id!");
      return next(error);
    }

    const { status, orderId } = req.body;
    const table = await Table.findByIdAndUpdate(
      id,
      { status, currentOrder: orderId },
      { new: true }
    );
    if (!table) {
      const error = createHttpError(404, "Table Not Found");
      return error;
    }
    res.status(200).json({
      success: true,
      message: "Table Updated Successfully",
      data: table,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addTable,
  getTable,
  updateTable,
};
