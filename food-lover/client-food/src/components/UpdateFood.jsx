import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
  const foodItem = useLoaderData();



  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.category.value;
    const image = form.image.value;

    const newFood = { name, description, price, category, image };
    // console.log("Update Food info: ", newFood);
    // ------------------------------------------------------------
    fetch(`http://localhost:6002/foods/${foodItem._id}`, {
        method: "PUT",
        headers: {
            'content-type': "application/json",
        },
        body: JSON.stringify(newFood)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount>0) {
            Swal.fire({
               
                icon: "success",
                title: "Item has been Updated",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  };



  return (
    <div className="bg-gray-900 h-screen pt-3">
      <h1 className="mt text-3xl font-bold text-center text-white">
        Update Food Details
      </h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mt-5 bg-gray-400 p-5 rounded"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-00  "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={foodItem.name}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700  "
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={foodItem.description}
            required
            rows={3}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700  "
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={foodItem.price}
            step="0.01"
            min="0"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700  "
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            defaultValue={foodItem.category}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700  "
          >
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            defaultValue={foodItem.image}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateFood;
