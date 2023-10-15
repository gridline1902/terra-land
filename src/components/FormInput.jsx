import { Button } from "./Button";

const FormInput = ({ handleChange, formInputData, handleSubmit  }) => {
  return (
    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="fullName"
        >
          Full Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fullName"
          type="text"
          onChange={handleChange}
          value={formInputData.fullName}
          name="fullName"
          placeholder="Full Name"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="serialNumber"
        >
          Serial Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="serialNumber"
          type="text"
          onChange={handleChange}
          value={formInputData.serialNumber}
          name="serialNumber"
          placeholder="Serial Number"
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="NationalIdentityNumber"
        >
          National Identity Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="NationalIdentityNumber"
          type="text"
          onChange={handleChange}
          value={formInputData.identityNumber}
          name="NationalIdentityNumber"
          placeholder="NIN"
        />
      </div>
      <div className="mb-4 flex">
        <div className="w-1/2 mr-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="latitude"
          >
            Latitude
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="latitude"
            type="text"
            onChange={handleChange}
            value={formInputData.latitude}
            name="latitude"
            placeholder="e.g., 40.7128"
          />
        </div>
        <div className="w-1/2 ml-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="longitude"
          >
            Longitude
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="longitude"
            type="text"
            onChange={handleChange}
            value={formInputData.longitude}
            name="longitude"
            placeholder="e.g., -74.0060"
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="file"
        >
          File
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="file"
          type="file"
          onChange={handleChange}
          name="file"
        />
      </div>
      <div className="flex items-center justify-between">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default FormInput;
