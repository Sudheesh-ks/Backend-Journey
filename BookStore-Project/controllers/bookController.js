const bookModel = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const books = bookModel.find();
    res.status(200).json({ success: true, books });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "no books found" });
  }
};

const getAllBooksById = async (req, res) => {
  try {
    const bookId = req.params.id;
    const book = bookModel.findById(bookId);
    res.status(200).json({ success: true, books });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, message: "no books found with this id" });
  }
};

const addBooks = async (req, res) => {
  try {
    const BookData = req.body;

    const newBook = await bookModel.create(BookData);
    if (newBook) {
      res
        .status(200)
        .json({
          success: true,
          message: "Book added successfully",
          data: newBook,
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Book adding failed" });
  }
};

const updateBook = async (req, res) => {
  try {
    const updatedData = req.body;
    const bookId = req.params.id;
    const updatedBook = await bookModel.findByIdAndUpdate(bookId, updatedData, {
      new: true,
    });
    if (updatedBook) {
      res
        .status(200)
        .json({ success: true, message: "book updated successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Book updation failed" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const deletedBook = bookModel.findByIdAndDelete(bookId);
    if (deletedBook) {
      res
        .status(200)
        .json({ success: true, message: "book deleted successfully" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Book deletion failed" });
  }
};

module.exports = {
  getAllBooks,
  getAllBooksById,
  addBooks,
  updateBook,
  deleteBook,
};
