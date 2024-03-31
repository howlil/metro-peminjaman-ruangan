import { useState, useEffect } from "react";
import tampilCara from "@/api/admin/cara/tampilCara";
import editCara from "@/api/admin/cara/editCara";
import { Skeleton } from "../Skeleton";
import Input from "../Input/Input";
import InputFile from "../Input/InputFile";
import { ButtonWithIcon } from "../ButtonWithIcon";
import Simpan from "../Overlays/Simpan";

export default function FormCara() {
  const [getCara, setCara] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSimpan, setShowSimpan] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedIdFile, setEditedIdFile] = useState(null); 
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await tampilCara();
        setCara(data.data.map(item => ({ ...item, id_file: item.id_file })));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
}, []);

  const handleSimpanOpen = () => {
    setShowSimpan(true);
  };


const handleEdit = async (editedData) => {
  try {
    const formData = new FormData();
    formData.append("link_tutorial", editedData.link_tutorial);
    if (editedData.file instanceof File) {
      formData.append("file", editedData.file);
    }

    if (editedIdFile) {
      const editedCara = await editCara(editedIdFile, formData);
      if (editedCara && editedCara.success) {
        const updatedCara = [...getCara];
        updatedCara[editedIndex] = editedData;
        setCara(updatedCara);
        setShowSimpan(false);
        setEditedIndex(null);
        setEditedIdFile(null);
      } else {
        console.error("Failed to edit data");
      }
    } else {
      console.error("Invalid editedIdFile");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

  const handleInputChange = (index, field, value) => {
    const updatedCara = [...getCara];
    updatedCara[index][field] = value;
    setCara(updatedCara);
    setEditedIndex(index);
    setEditedIdFile(updatedCara[index].id_file);
  };

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : getCara ? (
        <div>
          {getCara.map((cara, index) => (
            <form action="#" method="post" key={cara.id_file}>
              <InputFile
                label="File Format Pengajuan"
                onChange={(files) => handleInputChange(index, "file", files[0])}
                placeholder={cara.file_pengajuan ? cara.file_pengajuan : "Pilih file"}
              />
              <Input
                label="Link Tutorial"
                value={cara.link_tutorial}
                onChange={(e) => handleInputChange(index, "link_tutorial", e.target.value)}
              />
              <div className="mt-10">
                <ButtonWithIcon
                  label="Simpan"
                  icon="/simpan.svg"
                  background="bg-custom-100"
                  onClick={handleSimpanOpen}
                />
              </div>
            </form>
          ))}
        </div>
      ) : (
        <Skeleton />
      )}
      {showSimpan && <Simpan onConfirm={handleEdit} onClose={() => setShowSimpan(false)} />}
    </>
  );
}
