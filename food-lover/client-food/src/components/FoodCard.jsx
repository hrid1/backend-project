
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const FoodCard = ({ foodItem }) => {
  const { _id, name, description, price, category, image } = foodItem;

  const onDeleteClick = (id) => {
    console.log("Delete this id", id);
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
        fetch(`http://localhost:6002/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="p-8 rounded-t-lg" src={image} alt="food image" />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          {/* Category label (if needed) */}
          {/* <span className="text-xs text-gray-500 dark:text-gray-400">{category}</span> */}
        </div>
        <div className="flex items-center justify-between">
          <Link to={`/buy-food/${_id}`}>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Buy
            </button>
          </Link>
          <Link to={`/update-food/${_id}`}>
            <button
              
              className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600"
            >
              Update
            </button>
          </Link>
          <button
            onClick={() => onDeleteClick(_id)}
            className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
