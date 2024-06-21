import Swal from "sweetalert2";

const AddBooks = () => {


    const handleNewBook = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const author = form.author.value;
        const genre = form.genre.value;
        const price = form.price.value;
        const stock = form.stock.value;
        const image = form.image.value;

        const newBook_info = {title, author, genre, price, stock, image}

        // send it to server
        fetch('http://localhost:6001/books/', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook_info)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    // position: "center",
                    icon: "success",
                    title: "Your book has been Uploaded",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
       


    }

  return (
    <div className="w-2/3 container mx-auto p-6 bg-gray-200 shadow-md rounded-lg mt-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New Book </h1>
      <form className="space-y-4" onSubmit={handleNewBook}>
        <div>
          <label for="title" className="text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="block w-full border-gray-300 rounded-md shadow-sm p-1 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter title"
            required
          />
        </div>

        <div>
          <label for="author" className="text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            className="block w-full border-gray-300 rounded-md shadow-sm p-1 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter author"
            required
          />
        </div>

        <div>
          <label for="genre" className="text-sm font-medium text-gray-700">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            className="block w-full border-gray-300 rounded-md shadow-sm p-1 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter genre"
            required
          />
        </div>

        <div>
          <label for="price" className="text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="block w-full border-gray-300 rounded-md shadow-sm p-1 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter price"
            required
          />
        </div>

        <div>
          <label for="stock" className="text-sm font-medium text-gray-700">
            Stock
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            className="block w-full border-gray-300 rounded-md shadow-sm p-1 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter stock"
            required
          />
        </div>

        <div>
          <label for="image" className="text-sm font-medium text-gray-700">
            Cover Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            className="block w-full border-gray-300 rounded-md shadow-sm p-1 focus:border-indigo-500 focus:ring-indigo-500"
            placeholder="Enter image link"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition duration-200"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBooks;
