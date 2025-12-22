import { useMyContext } from "./MyContext";

const C = () => {
  const { setCount } = useMyContext();

  return (
    <div>
      <h1 className="text-white text-3xl flex items-center justify-center flex-col  bg-red-800 p-8">
        C
        <button
          className="text-lg bg-gray-500 text-black p-2 rounded-[5px] active:scale-95 cursor-pointer mt-5"
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Increment
        </button>
        <br />
      </h1>
    </div>
  );
};

export default C;
