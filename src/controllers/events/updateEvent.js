// const { Book } = require('../../models');
// const { NotFound } = require('http-errors');
// const { booksServices } = require('../../services');

// const updateStatus = async (req, res) => {
//   const { id } = req.params;
//   const { _id: owner } = req.user;
//   const { status } = req.body;

//   const updatedBook = await booksServices.updateStatus(id, owner, status);

//   if (!updatedBook) {
//     throw NotFound(`Book with id ${id} not found`);
//   }
//   res.status(200).json({
//     status: 'success',
//     code: 200,
//     payload: { updatedBook },
//   });
// };
// module.exports = updateStatus;
