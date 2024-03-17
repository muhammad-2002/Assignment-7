import { useState } from "react";

const DisplayTable = ({ wantClick, setWantClick }) => {
  const [currentPre, setPre] = useState([]);
  let [currentTime, setTime] = useState(0);
  let [currentCal, setCal] = useState(0);
  const handlePreparing = (data) => {
    const removeData = wantClick.filter(
      (item) => item.recipe_id !== data.recipe_id
    );
    setWantClick(removeData);
    const newPre = [...currentPre, data];
    setPre(newPre);
    let time = parseInt(data.preparing_time.split(" ")[0]);
    currentTime += time;
    setTime(currentTime);
    let cal = parseInt(data.calories.split(" ")[0]);
    currentCal += cal;
    setCal(currentCal);
  };
  return (
    <div className="border w-full border-solid rounded-md border-gray-400 h-[650px]  md:p-4 p-1">
      <div className="w-full md:w-[70%] mx-auto mb-10">
        <h1 className="text-center text-3xl leading-4 ">
          Want to cook:{wantClick.length}
        </h1>
        <hr></hr>
      </div>
      <div>
        <table className="w-full  ">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 bg-gray-300">SL</th>
              <th className="px-1 md:px-10 py-2 bg-gray-300">Name</th>
              <th className="px-4 py-2 bg-gray-300">Time</th>
              <th className="px-4 py-2 bg-gray-300">Calories</th>
              <th className="px- md:px-4 py-2 bg-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {wantClick.map((data, index) => (
              <tr key={data.recipe_id} className="border-none bg-gray-200 ">
                <td className="border px-1 md:px-4 py-2">{index + 1}</td>
                <td className="border px-1 md:px-2 py-2">{data.recipe_name}</td>
                <td className="border px-1 md:px-4 py-2">
                  {data.preparing_time}
                </td>
                <td className="border px-1 md:px-4 py-2">{data.calories}</td>
                <td className="border px-1 md:px-4 py-2">
                  <button
                    onClick={() => handlePreparing(data)}
                    className="bg-green-500 outline-none border-none
            hover:bg-green-700 text-white font-bold py-2 px-1 md:px-4 rounded-full"
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-[70%] mx-auto mb-10">
        <h1 className="text-center text-3xl md:leading-4 leading-7">
          Currently cooking: {currentPre.length}
        </h1>
        <hr></hr>
      </div>
      <div>
        <table className="bg-gray-200 ">
          <tr className=" bg-gray-300">
            <th className="px-4 py-2">SL</th>
            <th className=" px-3 md:px-16 py-2">Name</th>
            <th className="px-3 md:px-10 py-2">Time</th>
            <th className="px-10 py-2">Calories</th>
          </tr>

          {currentPre.map((item, idx) => (
            <tr key={Math.random()}>
              <td className="px-2 py-2">{idx + 1}</td>
              <td className="px-1 py-2">{item.recipe_name}</td>
              <td className="border px-2 py-2">{item.preparing_time}</td>
              <td className="border px-2 py-2">{item.calories}</td>
            </tr>
          ))}

          <tr className="">
            <td className=" "></td>
            <td className=""></td>
            <td className="border px-2 py-2">total time ={currentTime} min</td>
            <td className="border px-2 py-2">
              total calories ={currentCal} cal
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DisplayTable;
