import { useEffect, useState } from "react";
import Paginate from "./Pagination";
import { data } from "./data";

const Home = () => {
  const [pageSize, setPageSize] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [domain, setDomain] = useState("");
  const [gender, setGender] = useState("");
  const [availability, setAvailability] = useState("");
  const [userList, setUserList] = useState(data);

  const indexOfLastAdd = currentPage * pageSize;
  const indexOfFirstAdd = indexOfLastAdd - pageSize;

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // filter data

  // const filteredData = data.filter((item) => {
  //   return (
  //     item.gender.toLowerCase() === gender.toLowerCase() &&
  //     item.domain === domain &&
  //     item.available === availability
  //   );
  // });

  useEffect(() => {
    const filteredData = data.filter(
      (item) =>
        (domain === "" || item.domain === domain) &&
        (gender === "" || item.gender === gender) &&
        (availability === "" || String(item.available) === String(availability))
    );
    setUserList(filteredData);
    console.log(filteredData, "filteredData");
  }, [domain, availability, gender]);

  return (
    <div>
      <div className="d-flex">
        <select
          className="form-select  mx-2 "
          aria-label="Default select example"
          onChange={(e) => setPageSize(e.target.value)}
        >
          <option value="1">Pages</option>
          <option value="1">1</option>
          <option value="3">3</option>
          <option value="5">5</option>
        </select>

        <select
          className="form-select  mx-2"
          aria-label="Default select example"
          onChange={(e) => setDomain(e.target.value)}
        >
          <option value="">Domain</option>
          <option value="Sales">Sales</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>

        <select
          className="form-select  mx-2"
          aria-label="Default select example"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Gender </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <select
          className="form-select  mx-2"
          aria-label="Default select example"
          onChange={(e) => setAvailability(e.target.value)}
        >
          <option value="">Availability </option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">avatar</th>
            <th scope="col">first name</th>
            <th scope="col">last_name</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            userList.slice(indexOfFirstAdd, indexOfLastAdd).map((i, index) => {
              return (
                <tr key={i.id}>
                  <td>{indexOfFirstAdd + index + 1}</td>
                  <td>
                    <img src={i.avatar} alt="" />
                  </td>
                  <td>{i.first_name}</td>
                  <td>{i.last_name}</td>
                  <td>{i.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Paginate
        pageSize={pageSize}
        totalItemLength={userList.length}
        pagination={pagination}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
