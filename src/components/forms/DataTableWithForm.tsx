"use client";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/initSupabase";
import { Button } from "../common/Button";
import Table from "../tables/Table";
import Modal from "../common/Modal";
import FormInput from "../forms/FormInput";


export default function DataTableWithForm() {
  const [documents, setDocuments] = useState([]);
  const [formInputData, setFormInputData] = useState({
    full_name: "",
    serial_number: "",
    national_id_number: "",
    latitudinal_location: "",
    longitudinal_location: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setFormInputData({
      full_name: "",
      serial_number: "",
      national_id_number: "",
      latitudinal_location: "",
      longitudinal_location: "",
    })
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputData({
      ...formInputData,
      [e.target.name]: e.target.value
    });
  };

  const fetchDocuments = async () => {
    const { data, error } = await supabase.from('land-documents').select('*');
    if (error) {
      console.error("Error fetching countries:", error);
    } else {
      setDocuments(data);
    }
  };
  useEffect(() => {
    fetchDocuments();
  }, [documents]);

  const addDocument = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { full_name, serial_number, national_id_number, latitudinal_location, longitudinal_location } = formInputData;
    const { error } = await supabase
      .from('land-documents')
      .insert(
        [
          {
            full_name: full_name,
            serial_number: serial_number,
            national_id_number: national_id_number,
            latitudinal_location: latitudinal_location,
            longitudinal_location: longitudinal_location
          }
        ]
      );
    if (error) {
      console.error("Error adding document:", error);
    }
    setIsModalOpen(false);
  }

  return (
    <>
      <Table tableData={documents} />
      <div className="flex items-center justify-center pt-6">
        <Button onClick={toggleModal}>Register Your Land</Button>
      </div>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <FormInput
            formInputData={formInputData}
            handleChange={handleChange}
            handleSubmit={addDocument}
          />
        </Modal>
      )}
    </>
  );
}
