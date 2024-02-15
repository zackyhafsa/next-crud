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
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
