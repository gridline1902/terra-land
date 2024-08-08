
interface FormInputData {
  full_name: string;
  serial_number: string;
  national_id_number: string;
  latitudinal_location: string;
  longitudinal_location: string;
}

interface FormInputProps {
  formInputData: FormInputData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  getLocation: () => void;
}

const FormInput: React.FC<FormInputProps> = (
  {
    formInputData,
    handleChange,
    handleSubmit,
    getLocation
  }
) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="full_name"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="full_name"
            type="text"
            onChange={handleChange}
            value={formInputData.full_name}
            name="full_name"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="serial_number"
          >
            Serial Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="serial_number"
            type="text"
            onChange={handleChange}
            value={formInputData.serial_number}
            name="serial_number"
            placeholder="Serial Number"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="national_id_number"
          >
            National Identity Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="national_id_number"
            type="text"
            onChange={handleChange}
            value={formInputData.national_id_number}
            name="national_id_number"
            placeholder="NIN"
          />
        </div>
        <div className="flex gap-8 mb-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="latitudinal_location"
            >
              Latitude
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="latitudinal_location"
              type="text"
              onChange={handleChange}
              value={formInputData.latitudinal_location}
              name="latitudinal_location"
              placeholder="Latitude"
              readOnly
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="longitudinal_location"
            >
              Longitude
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="longitudinal_location"
              type="text"
              onChange={handleChange}
              value={formInputData.longitudinal_location}
              name="longitudinal_location"
              placeholder="Longitude"
              readOnly
            />
          </div>

        </div>
        <div className="mb-4">
          <div className="flex justify-between">
            <h1 className="block text-gray-700 text-sm font-bold mb-2">Geolocation</h1>
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 px-2 py-1 text-white font-bold rounded focus:outline-none focus:shadow-outline"
              onClick={getLocation}
            >
              Get Location
            </button>

          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInput;
