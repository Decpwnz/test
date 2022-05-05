import Table from 'react-bootstrap/Table';

function Tables({ state }) {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Employe/Employer</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Workplace Number</th>
            <th>Lunch Time</th>
            <th>Business Hours</th>
          </tr>
        </thead>
        {
          state.map((item) => (
            <tbody key={item.id}>
              <tr>
                <th>{item.type}</th>
                <th>{item.name}</th>
                <th>{item.salary}</th>
                <th>{item.workplaceNumber}</th>
                <th>{item.lunchTime}</th>
                <th>{item.businessHours}</th>
              </tr>
            </tbody>
          ))
        }
      </Table>
    </div>
  );
}

export default Tables;
