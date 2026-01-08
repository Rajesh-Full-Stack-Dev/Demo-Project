import $ from "jquery";
import { useEffect } from "react";
import API_BASE_URL from "../../helper";

function AllUsers() {
  useEffect(() => {
    $.ajax({
      url: `${API_BASE_URL}/api/users`,
      type: "GET",
      success: function (data) {
        let rows = "";
        data.forEach((u, i) => {
          rows += `
            <tr>
              <td class="text-white">${i + 1}</td>
              <td  class="text-white"><img src="${API_BASE_URL}/Images/${u.profile}" height="60px" width="60"/></td>
              <td  class="text-white">${u.name}</td>
              <td  class="text-white">${u.email}</td>
              <td  class="text-white">${u.password}</td>
              <td  class="text-white">${u.phone}</td>
              <td  class="text-white">${u.city}</td>
              <td  class="text-white">
                <button class="btn btn-primary btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          `;
        });
        $("#usersData").html(rows);
      }
    });
  }, []);
  return (
    <div>
        <section>
          <div className="container-fluid bg-dark">
            <h2 className="text-center text-white"><u>All Users</u></h2>
            <table className="table table-borderer table-dark">
                <thead>
                    <tr>
                        <td className="text-white fw-semibold">Sr. No.</td>
                        <td className="text-white fw-semibold">Profile</td>
                        <td className="text-white fw-semibold">Name</td>
                        <td className="text-white fw-semibold">Email</td>
                        <td className="text-white fw-semibold">Password</td>
                        <td className="text-white fw-semibold">Phone No.</td>
                        <td className="text-white fw-semibold">City</td>
                        <td className="text-white fw-semibold">Action</td>
                    </tr>
                </thead>
                <tbody id="usersData"></tbody>
            </table>
          </div>
        </section>
    </div>
  );
}

export default AllUsers;