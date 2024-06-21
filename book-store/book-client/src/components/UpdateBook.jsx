import { useLoaderData } from "react-router-dom";

const UpdateBook = () => {
  const book = useLoaderData();
  // console.log(book);
  const { _id } = book;
  console.log(_id);

  const handleUpdateBook = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const author = form.author.value;
    const genre = form.genre.value;
    const price = form.price.value;
    const stock = form.stock.value;
    const image = form.image.value;

    const updateBook_info = { title, author, genre, price, stock, image };

    console.log(updateBook_info);

    // ----------------------------------------
    const options = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBook_info),
    };

    fetch(`http://localhost:6001/books/${_id}`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <div className="w-4/5 container mx-auto p-6 bg-blue-200 mt-4 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Update Book Info</h1>
      <form className="space-y-4" onSubmit={handleUpdateBook}>
        <div>
          <label htmlFor="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={book.title}
            className="block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <label htmlFor="author" className="text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            defaultValue={book.author}
            className="block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter author"
            required
          />
        </div>
        <div>
          <label htmlFor="genre" className="text-sm font-medium text-gray-700">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            defaultValue={book.genre}
            className="block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter genre"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={book.price} // Default numeric value
            className="block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter price"
            required
          />
        </div>
        <div>
          <label htmlFor="stock" className="text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            defaultValue={book.stock} // Default numeric value
            className="block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter stock"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="text-sm font-medium text-gray-700">
            Cover Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={book.image}
            className="block p-2 w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
