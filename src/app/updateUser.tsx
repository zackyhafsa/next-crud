"use client";

import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function UpdateUser(user: Users) {
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [modal, setModal] = useState(false);
  const [isMutating, setIsMutating] = useState(false);

  const handleChange = () => {
    setModal(!modal);
  };

  const router = useRouter();

  const handleUpdate = async (e: SyntheticEvent) => {
    await fetch(`http://localhost:5000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        username,
        email,
      }),
    });
    setModal(false);
    router.refresh();
    console.log(user);
  };

  return (
    <div>
      <button className="btn btn-warning btn-sm text-white" onClick={handleChange}>
        Edit
      </button>
      <input type="checkbox" className="modal-toggle" checked={modal} onChange={handleChange} />
      <div className="modal">
        <div className="modal-box">
          <h1 className="font-bold text-2xl text-slate-800 my-2">Edit {user.id}</h1>
          <form className="flex flex-col gap-2" onSubmit={handleUpdate}>
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
                onClick={handleUpdate}
              >
                Edit
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
