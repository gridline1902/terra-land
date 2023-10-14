import { useState } from "react";
import SparkMD5 from "spark-md5";
import FormInput from "./FormInput";
import Table from "./Table";
import { Button } from "./Button";
import Modal from "./Modal";

const DisplayFormDataTable = () => {


  const [isModalOpen, setIsModalOpen] = useState(false);


  const [tableData, setTableData] = useState([]);




  const [formInputData, setformInputData] = useState({
    fullName: "",
    serialNumber: "",
    file: null,
    fileHash: "",
    NationalIdentityNumber: "",
    latitude: "",
    longitude: ""
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    if (type === "file") {
      const reader = new FileReader();
      const file = event.target.files[0];

      reader.onload = (e) => {
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(e.target.result);
        const hash = spark.end();
        setformInputData((prevData) => ({
          ...prevData,
          [name]: file,
          fileHash: hash,
        }));
      };

      reader.readAsArrayBuffer(file);
    } else {
      setformInputData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = [...tableData, formInputData];
      setTableData(newData);
      const emptyInput = {
        fullName: "",
        serialNumber: "",
        file: "",
        fileHash: "",
        NationalIdentityNumber: "",
        latitude: "",
        longitude: ""
      };
      setformInputData(emptyInput);
      toggleModal(); // Close the modal
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div>
        <Table tableData={tableData} />
      </div>
      <div className="mt-6 flex flex-col items-center justify-center">
        <Button onClick={toggleModal}> Register Your Land </Button>
      </div>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
        <FormInput
          handleChange={handleChange}
          formInputData={formInputData}
          handleSubmit={handleSubmit}
        />
        </Modal>
      )}
    </>
  );
};

export default DisplayFormDataTable;
