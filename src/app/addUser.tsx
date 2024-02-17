"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const handleChange = () => {
    setModal(!modal);
  };

  const router = useRouter();

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
      }),
    });
    setIsMutating(false);
    setName("");
    setUsername("");
    setEmail("");
    setModal(false);
    router.refresh();
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
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2">
              Name
              <input
                type="text"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Username
              <input
                type="text"
                className="grow"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2">
              Email
              <input
                type="text"
                className="grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </form>
          <div className="flex gap-2 justify-end">
            <button className="btn btn-error text-white mt-3 modal-action" onClick={handleChange}>
              Batal
            </button>
            {!isMutating ? (
              <button
                className="btn btn-success text-white mt-3"
                type="submit"
                onClick={handleSubmit}
              >
                Tambah
              </button>
            ) : (
              <button className="btn loading" type="button">
                ...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
