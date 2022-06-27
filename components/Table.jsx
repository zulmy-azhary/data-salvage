const Table = ({ data: { data, loading } }) => {
  return (
    <>
      <h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">ITEM ASURANSI SALVAGE</h2>
        <div className="w-full overflow-x-scroll md:overflow-auto pt-5">
          <table className="table-auto w-full text-center">
            <thead className="bg-secondary text-primary">
              <tr>
                <th>No.</th>
                <th>No. WO</th>
                <th>No. POL</th>
                <th>SA</th>
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
                          <td>1</td>
                          <td>{item.nomorWO}</td>
                          <td>{item.nomorPolisi}</td>
                          <td>{item.serviceAdvisor}</td>
                          <td>{item.asuransi}</td>
                          <td>{item.vendor}</td>
                        </tr>
                      )
                    })
                  ) : (
                    <tr><td>Tidak ada data</td></tr>
                  )
                ) : (
                  <tr><td>Memuat...</td></tr>
                )}
              </tbody>
          </table>
        </div>
    </>
  );
};

export default Table;