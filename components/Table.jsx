import { ImSpinner10 } from "react-icons/im";
import { Pagination } from './'

const Table = ({ data: { data, loading } }) => {
  
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
                <th>Vendor</th>
              </tr>
            </thead>
              <tbody>
                {!loading ? (
                  data.length > 0 ? (
                    data.map((item, idx) => {
                      return (
                        <tr key={idx} className="odd:bg-transparent even:bg-black/5 hover:bg-black/10">
                          <td>{idx + 1}</td>
                          <td>{item.nomorWO}</td>
                          <td>{item.nomorPolisi}</td>
                          <td>{item.serviceAdvisor}</td>
                          <td>{item.asuransi}</td>
                          <td>{item.vendor}</td>
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
      <Pagination />
    </>
  );
};

export default Table;