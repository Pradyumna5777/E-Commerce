import { useContext, useState } from "react";
import "../paginationBtn.css";
import ItemContext from "./context/itemContext";

function Pagination() {
  const {allCards,rowsPerPage,setCurrentPage,
    setRowsPerPage} =
    useContext(ItemContext);

    const totalPages=Math.ceil(allCards.total/rowsPerPage);

    const handlePrev=()=>{
      setCurrentPage((prev)=>Math.max(prev-1,1))
    }

    const handleNext=()=>{
      setCurrentPage((prev)=>Math.min(prev+1,totalPages))
    }

    const handlePageClick=()=>{
      setCurrentPage(pageNumber);
    }
  
  return (
    <div className="pagination">
    <button onClick={handlePrev}>Prev</button>
    {Array.from({ length: totalPages }, (_, index) => (
      <button onClick={()=>handlePageClick(index+1)}>{index + 1}</button>
    ))}
    <button onClick={handleNext}>Next</button>
  </div>
  );
}

export default Pagination;
