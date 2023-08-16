import { useState } from "react";

function App() {
  interface FamilyTypes {
    FamilyName: string;
    Father: string;
    Mother: string;
    Brother: string;
    Sister:String;
    Youngest: string;
  }
  const [selectedOption, setSelectedOption] = useState<string>(""); // Initialize the state with an empty string
  const [inputData, setInputData] = useState<string>("");

  const [family, setFamily] = useState<FamilyTypes>({
    FamilyName: "",
    Father: "",
    Mother: "",
    Brother: "",
    Sister:"",
    Youngest: "",
  });
 
  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const addFamilyMember = () => {
    console.log(selectedOption)
    console.log(inputData)
    if (inputData === "") {
      alert("Please add name")
      return; // Don't add if no option or input data is provided
    }

    setFamily((prevFamily) => ({
      ...prevFamily,
      [selectedOption]: inputData,
    }));
    
    setSelectedOption(""); // Clear the selected option
    setInputData(""); // Clear the input data
  };

  const deleteFamilyMember = () => {
    console.log(selectedOption)
    console.log(inputData)
    if (selectedOption === "") {
      alert("Please select a family member")
      return; // Don't add if no option or input data is provided
    }

    setFamily((prevFamily) => ({
      ...prevFamily,
      [selectedOption]: "",
    }));
    
    setSelectedOption(""); // Clear the selected option
    setInputData(""); // Clear the input data
  };
  return (
    <>
      <div data-theme="night" className="w-full h-screen">
        <div className="lg:w-[50%] w-[90%] mt-10 m-auto h-auto ">
        <h1 className="font-bold text-2xl text-center">Family Tree</h1>
          <div className="p-10">
            <div className="border-[1px flex justify-center">
              <div className="form-control w-full max-w-[10rem]">
                <label className="label">
                  <span className="label-text-
                  ">Family Name</span>
                </label>
                <p
                  className="input input-bordered input-info w-full max-w-[10rem]">{family.FamilyName}</p>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="border-[1px flex justify-evenly">
            <div className="form-control w-full max-w-[10rem]">
                <label className="label">
                  <span className="label-text-
                  ">Father's Name</span>
                </label>
                <p
                  className="input input-bordered input-info w-full max-w-[10rem]">{family.Father}</p>
              </div>
              <div className="form-control w-full max-w-[10rem]">
                <label className="label">
                  <span className="label-text-
                  ">Mothers Name</span>
                </label>
                <p
                  className="input input-bordered input-info w-full max-w-[10rem]">{family.Mother}</p>
              </div>
            </div>
          </div>
          <div className="p-10">
            <div className="border-[1px flex justify-evenly">
            <div className="form-control w-full max-w-[10rem]">
                <label className="label">
                  <span className="label-text-
                  ">Sister's Name</span>
                </label>
                <p
                  className="input input-bordered input-info w-full max-w-[10rem]">{family.Sister}</p>
              </div>
              <div className="form-control w-full max-w-[10rem]">
                <label className="label">
                  <span className="label-text-
                  ">Brother's Name</span>
                </label>
                <p
                  className="input input-bordered input-info w-full max-w-[10rem]">{family.Brother}</p>
              </div>
              <div className="form-control w-full max-w-[10rem]">
                <label className="label">
                  <span className="label-text-
                  ">Youngest's Name</span>
                </label>
                <p
                  className="input input-bordered input-info w-full max-w-[10rem]">{family.Youngest}</p>
              </div>
            </div>
          </div>
          <form  className="px-5 py-10">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Pick Family Branch Catergory</span>
              </label>
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="select select-bordered"
              >
                <option disabled value="">
                  Pick one
                </option>
                <option value="FamilyName">Family Name</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Youngest">Youngest</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className=" italic text-sm ">family member's name</label>
              <input
                type="text"
                placeholder="Type here.."
                className="input input-bordered input-info w-full max-w-xs"
                value={inputData}
                onChange={handleInputChange}
              />
            </div>
            <div className=" space-x-3">
            <button onClick={(e)=> {
              e.preventDefault()
              addFamilyMember();
            }
            } className="btn btn-active btn-primary my-2">Add/Edit</button>
            <button
            onClick={(e)=> {
              e.preventDefault()
              deleteFamilyMember();
            }}
            className="btn btn-active btn-accent my-2">Delete</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
