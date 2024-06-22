import { useForm } from "react-hook-form";
const AddFoodItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (newFoodItem) => {
    console.log(newFoodItem);

    // sendt to server
    fetch("http://localhost:6002/foods/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFoodItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
      {/* Form for adding a food item will go here */}

      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          New Recipe Vault
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: true })}
              className="w-full px-3 py-2 border rounded-md text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700"
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="w-full px-3 py-2 border rounded-md text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700"
            />
            {errors.description && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              step="0.01"
              id="price"
              {...register("price", { required: true })}
              className="w-full px-3 py-2 border rounded-md text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700"
            />
            {errors.price && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              {...register("category", { required: true })}
              className="w-full px-3 py-2 border rounded-md text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700"
            />
            {errors.category && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-200 font-bold mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              {...register("image", { required: true })}
              className="w-full px-3 py-2 border rounded-md text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-700"
            />
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex justify-center">
            <input
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoodItem;
