
const Hr = () => {
  // Пример данных — можешь заменить на реальные
  const applicants = [
    {
      firstName: "Anna",
      lastName: "Ivanova",
      email:"test",
      resumeLink: "https://example.com/resume/anna.pdf",
    },
    {
      firstName: "John",
      lastName: "Smith",
      email:"test",
      resumeLink: "https://example.com/resume/john.pdf",
    },
    {
      firstName: "Elena",
      lastName: "Petrova",
      email:"test",
      resumeLink: "https://example.com/resume/elena.pdf",
    },
  ];
  return (
    <div>
        <h2>Hello HR</h2>
      <div className="hr-wrapper">
        <h3>List of applicants</h3>
        <table className="applicant-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>CV (PDF)</th>
          
            </tr>
          </thead>
          <tbody>
            {applicants.map((applicant, index) => (
              <tr key={index}>
                <td>{applicant.firstName}</td>
                <td>{applicant.lastName}</td>
                <td>{applicant.email}</td>
                <td>
                  <a href={applicant.resumeLink} target="_blank" rel="noreferrer">
                    Open CV
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
  );
};

export default Hr;
