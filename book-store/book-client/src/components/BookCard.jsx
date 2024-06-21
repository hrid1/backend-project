
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BookCard = ({ book, books, setBooks }) => {
//   console.log(book);
  const { _id, title, author, genre, price, stock, image } = book;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:6001/books/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              //   update books
              const newBooks = books.filter((book) => book._id !== id);
              setBooks(newBooks);
            }
          });
      }
    });

    console.log("delete this", id);
    // fetch(`http://localhost:6001/books/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  return (
    <>
      <div className="bg-blue-100 shadow-md rounded-lg overflow-hidden w-full border-1">
        <img
          className="w-full p-1 h-64 object-cover rounded-md"
          src={image}
          alt={title}
        />

        <div className="p-4 text-left">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-gray-700">by {author}</p>
          <p className="text-gray-500">{genre}</p>
          <p className="mt-2 text-gray-600">${price}</p>
          <p className="mt-2 text-gray-600">Stock: {book.stock}</p>
          <div className="mt-4 flex space-x-2">
            <Link
              to={`/book/${_id}`}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              View
            </Link>
            <Link
              to={`/updatebook/${book._id}`}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Update
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
