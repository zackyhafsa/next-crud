import AddUser from "./addUser";

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: Users[] = await res.json();
  return (
    <div className="px-[20%] py-5">
      <h1 className="font-bold text-3xl text-slate-800">NextJs Crud</h1>
      <div className="overflow-x-auto">
        <AddUser />
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, id) => {
              return (
                <tr key={user.id}>
                  <th>{id + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td className="flex gap-2">
                    <button className="btn btn-error btn-sm text-white">Hapus</button>
                    <button className="btn btn-warning btn-sm text-white">Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
