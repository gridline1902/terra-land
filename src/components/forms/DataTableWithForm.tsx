"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import Table from "../tables/Table";
import { Button } from "../common/Button";
import Modal from "../common/Modal";
import FormInput from "./FormInput";

export default function DataTableWithForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    fullName: "",
    serialNumber: "",
    file: null,
    fileHash: "",
    nationalIdNumber: "",
    latitude: "",
    longitude: ""
  });
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <>
      <Table tableData={tableData} />
      <div className="flex items-center justify-center pt-6">
        <Button onClick={toggleModal}>
          Register Your Land
        </Button>
      </div>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <FormInput
            handleChange={() => {}}
            formInputData={formInputData}
            handleSubmit={() => {}}
          />
        </Modal>
      )

      }
    </>
  )


}
