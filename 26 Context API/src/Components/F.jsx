import { useMyContext } from "./MyContext";


const F = () => {

   const {count}  =  useMyContext();
//    console.log(data);

  return (
    <div>
      <h1 className="text-white text-3xl flex items-center justify-center flex-col  bg-lime-600 p-8">
       <p>{count}</p>
        F
      </h1>
    </div>
  );
};

export default F;
