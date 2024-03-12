function Dashboard() {
  const data = [
    {
      id: 1,
      title: "some task 1",
      description: "some description 1",
      status: {
        label: "done",
        value: "done",
      },
      difficulty: "easy",
    },
    {
      id: 2,
      title: "some task 2",
      description: "some description 2",
      status: {
        label: "done",
        value: "done",
      },
      difficulty: "medium",
    },
    {
      id: 3,
      title: "some task 3",
      description: "some description 3",
      status: {
        label: "done",
        value: "done",
      },
      difficulty: "hard",
    },
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        {/* Utilize el metodo map,en el arreglo de data para iterar para cada objeto */}
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.status.label}</td>
              <td>{item.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
