import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { CgChevronDoubleLeftO, CgChevronDoubleRightO } from "react-icons/cg";
import { ImSpinner10 } from "react-icons/im";
import ReactPaginate from "react-paginate";
import { DataContext, ModalContext } from "../context";
import { Modal } from "./";

const Table = ({ itemsPerPage }) => {
  const router = useRouter();
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const { setModal } = useContext(ModalContext);
  const { data, loading, setDetails } = useContext(DataContext);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (!loading) {
      setPageCount(Math.ceil(data.length / itemsPerPage));
      setCurrentItems(data.slice(itemOffset, endOffset));
    }
  }, [data, itemOffset, itemsPerPage]);

  const handlePageClick = e => {
    const newOffset = e.selected * itemsPerPage % data.length;
    setItemOffset(newOffset);
  }

  const actionHandler = (itemFetch, e) => {
    setDetails(itemFetch);
    setModal(true);
  }

  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">ITEM ASURANSI SALVAGE</h2>
        <div className="w-full overflow-x-scroll md:overflow-auto pt-5">
          <table className="table-auto w-full text-center border-separate">
            <thead className="bg-secondary text-primary">
              <tr>
                <th>No.</th>
                <th>No. WO</th>
                <th>No. Polisi</th>
                <th>Service Advisor</th>
                <th>Asuransi</th>
                {router.pathname === "/" ? <th>Vendor</th> : <th>Action</th>}
              </tr>
            </thead>
              <tbody>
                {!loading ? (
                  currentItems.length > 0 ? (
                    currentItems.map((item, idx) => {
                      return (
                        <tr key={idx} className="odd:bg-transparent even:bg-black/5 hover:bg-black/10">
                          <td>{itemOffset + (idx + 1)}</td>
                          <td>{item.nomorWO}</td>
                          <td>{item.nomorPolisi}</td>
                          <td>{item.serviceAdvisor}</td>
                          <td>{item.asuransi}</td>
                          {router.pathname === "/" ? <td>{item.vendor}</td> : <td><button onClick={actionHandler.bind(this, item)} className="text-sky-600 hover:text-sky-800 font-semibold">Detail</button></td>}
                        </tr>
                      )
                    })
                  ) : (
                    <tr>
                      <td align="center" colSpan="6">
                        <div className="flex justify-center items-center">
                          <p>Tidak ada data</p>
                          </div>
                      </td>
                    </tr>
                  )
                ) : (
                  <tr>
                    <td align="center" colSpan="6">
                      <div className="flex justify-center items-center gap-x-2 h-[420px]">
                        <ImSpinner10 className="animate-spin" />
                        <p className="animate-pulse">Memuat data...</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
          </table>
        </div>
      {/* <Pagination /> */}
      <ReactPaginate
        nextLabel={<CgChevronDoubleRightO />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel={<CgChevronDoubleLeftO />}
        previousLinkClassName="text-3xl"
        nextLinkClassName="text-3xl"
        breakLabel="..."
        containerClassName="mt-5 flex justify-center items-center gap-x-7 text-secondary"
        activeClassName="text-secondary text-2xl"
        disabledClassName="text-secondary/50"
        breakLinkClassName="text-secondary/50"
        renderOnZeroPageCount={null}
      />
      {router.pathname === "/data-salvage" && <Modal />}
    </>
  );
};

export default Table;