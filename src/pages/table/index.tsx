const Table = () => {
  return (
    <main className="p-4">
      <section className="bg-neutral-100 rounded-lg p-4 shadow mb-4">
        <h2 className="text-xl mb-2">School Information</h2>
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-200">
              <th className="py-2 px-4 border-b">School</th>
              <th className="py-2 px-4 border-b">Teacher</th>
              <th className="py-2 px-4 border-b">Student</th>
              <th className="py-2 px-4 border-b">Subject</th>
              <th className="py-2 px-4 border-b">Assessment</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-100">
              <td className="py-2 px-4 border-b">Greenwood High</td>
              <td className="py-2 px-4 border-b">Mr. Smith</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">Mathematics</td>
              <td className="py-2 px-4 border-b">A</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="py-2 px-4 border-b">Greenwood High</td>
              <td className="py-2 px-4 border-b">Ms. Johnson</td>
              <td className="py-2 px-4 border-b">Jane Smith</td>
              <td className="py-2 px-4 border-b">Science</td>
              <td className="py-2 px-4 border-b">B+</td>
            </tr>
            <tr className="bg-blue-100">
              <td className="py-2 px-4 border-b">Sunrise Elementary</td>
              <td className="py-2 px-4 border-b">Mr. Brown</td>
              <td className="py-2 px-4 border-b">Alice Johnson</td>
              <td className="py-2 px-4 border-b">English</td>
              <td className="py-2 px-4 border-b">A-</td>
            </tr>
            <tr className="bg-blue-50">
              <td className="py-2 px-4 border-b">Sunrise Elementary</td>
              <td className="py-2 px-4 border-b">Ms. Davis</td>
              <td className="py-2 px-4 border-b">Bob Brown</td>
              <td className="py-2 px-4 border-b">History</td>
              <td className="py-2 px-4 border-b">B</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Table;
