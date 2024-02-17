import AddUser from "./addUser";
import DeleteUser from "./deleteUser";
import UpdateUser from "./updateUser";

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, { cache: "no-store" });
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
                    <DeleteUser {...user} />
                    <UpdateUser {...user} />
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
