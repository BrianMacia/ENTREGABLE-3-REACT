import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination.jsx";
import ResidentInfo1 from "./Residentinfo";

const ResidentContainer = ({ url }) => {
  const [residents, setResidents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const residentsPerPage = 10;

  useEffect(() => {
    const promise = axios(url);
    promise.then((res) => {
      setResidents(res.data.residents);
      setCurrentPage(1);
    });
  }, [url]);

 
  const indexOfLastResident = currentPage * residentsPerPage;
  const indexOfFirstResident = indexOfLastResident - residentsPerPage;
  const currentResidentsShowed = residents.slice(
    indexOfFirstResident,
    indexOfLastResident
  );

 
  const paginate = (numberOfPage) => setCurrentPage(numberOfPage);

  return (
    <>
      <h3>Residents</h3>
      <div className="row">
        {currentResidentsShowed.map((url) => (
          <ResidentInfo1 key={url.substring(42)} url={url} />
        ))}
      </div>
      <Pagination
        residentsPerPage={residentsPerPage}
        totalResidents={residents.length}
        paginate={paginate}
        selected={currentPage}
      />
    </>
  );
};

export default ResidentContainer;
