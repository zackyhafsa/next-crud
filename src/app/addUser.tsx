"use client";

import { useState } from "react";

export default function AddUser() {
  const [modal, setModal] = useState(false);

  const handleChange = () => {
    setModal(!modal);
  };

  return (
    <div>
      <button className="btn btn-neutral text-white mt-3" onClick={handleChange}>
        Tambah
      </button>
      <input type="checkbox" className="modal-toggle" checked={modal} onChange={handleChange} />
      <div className="modal">
        <div className="modal-box">
          <h1 className="font-bold text-2xl text-slate-800 my-2">Tambah User</h1>
          <form className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input type="text" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Username
              <input type="text" className="grow" />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input type="text" className="grow" />
            </label>
          </form>
          <div className="flex gap-2 justify-end">
            <button className="btn btn-error text-white mt-3 modal-action" onClick={handleChange}>
              Cancel
            </button>
            <button className="btn btn-success text-white mt-3">Tambah</button>
          </div>
        </div>
      </div>
    </div>
  );
}
