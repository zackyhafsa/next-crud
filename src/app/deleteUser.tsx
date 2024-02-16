"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function DeleteUser(user: Users) {
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const handleChange = () => {
    setModal(!modal);
  };

  const router = useRouter();

  const handleDelete = async (userId: number) => {
    setIsMutating(true);
    await fetch(`http://localhost:5000/users/${userId}`, {
      method: "DELETE",
    });
    setIsMutating(false);
    setModal(false);
    router.refresh();
  };

  return (
    <div>
      <button className="btn btn-error btn-sm text-white" onClick={handleChange}>
        Hapus
      </button>
      <input type="checkbox" className="modal-toggle" checked={modal} onChange={handleChange} />
      <div className="modal">
        <div className="modal-box">
          <h1 className="font-bold text-2xl text-slate-800">Hapus</h1>
          <h1>Apakah anda ingin menghapus data {user.name}</h1>
          <div className="flex gap-2 justify-end items-center mt-3">
            <button className="btn" onClick={handleChange}>
              Tidak
            </button>
            {!isMutating ? (
              <button className="btn btn-error text-white" onClick={() => handleDelete(user.id)}>
                Hapus
              </button>
            ) : (
              <button className="btn loading">Hapus</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
