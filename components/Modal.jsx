import { useContext, useRef } from "react";
import { MdClose } from "react-icons/md";
import { ModalContext, DataContext } from "../context";
import ReactToPrint from "react-to-print";
import { PrintDocument } from "./";

const Modal = () => {
  const { modal, setModal } = useContext(ModalContext);
  const printRef = useRef(null)
  const { details, status, setStatus, imageValue } = useContext(DataContext)
  
  if (!modal) return
  
  const statusHandler = e => {
    setStatus({ ...status, [e.target.name]: e.target.value })
  }
  // console.log(Object.keys(status).find(s => s === "itemStatus-2"));
  
  const modalHandler = () => {
    setModal(false)
    setStatus({})
  }
  

	return (
		<div tabIndex="-1" className="overflow-hidden backdrop-blur-sm bg-black/25 fixed top-0 inset-x-0 z-50 w-full md:inset-0 h-screen md:h-full flex justify-center items-center">
			<div className="absolute md:static top-0 p-4 w-full max-w-4xl min-h-max">
				<div className="relative bg-white rounded-lg">
					<div className="flex justify-between items-center p-5 border-b border-gray-300">
						<h3 className="text-3xl font-medium text-gray-900">Item Asuransi Salvage</h3>
            <MdClose onClick={modalHandler} className="cursor-pointer text-black text-xl" />
					</div>
          <div id="modalBody" className="overflow-y-auto scrollbar-auto">
            <div className="w-full h-[600px]">
              <div className="md:px-14 py-16 ">
                <div className="flex flex-col md:flex-row justify-between gap-y-1 md:gap-x-5">
                  <p className="basis-1/3 text-center md:text-start">Nomor Polisi</p>
                  <div className="basis-2/3 text-gray-500 text-center md:text-start bg-transparent border-0 md:border-b-[1px] border-gray-300">
                    <p className="text-lg md:text-sm">{details.nomorPolisi}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-y-1 md:gap-x-5 mt-6">
                  <p className="basis-1/3 text-center md:text-start">Nama Service Advisor</p>
                  <div className="basis-2/3 text-gray-500 text-center md:text-start bg-transparent border-0 md:border-b-[1px] border-gray-300">
                    <p className="text-lg md:text-sm">{details.serviceAdvisor}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-y-1 md:gap-x-5 mt-6">
                  <p className="basis-1/3 text-center md:text-start">Nomor WO</p>
                  <div className="basis-2/3 text-gray-500 text-center md:text-start bg-transparent border-0 md:border-b-[1px] border-gray-300">
                    <p className="text-lg md:text-sm">{details.nomorWO}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-y-1 md:gap-x-5 mt-6">
                  <p className="basis-1/3 text-center md:text-start">Nama Vendor</p>
                  <div className="basis-2/3 text-gray-500 text-center md:text-start bg-transparent border-0 md:border-b-[1px] border-gray-300">
                    <p className="text-lg md:text-sm">{details.vendor}</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-y-1 md:gap-x-5 mt-6">
                  <p className="basis-1/3 text-center md:text-start">Nama Asuransi</p>
                  <div className="basis-2/3 text-gray-500 text-center md:text-start bg-transparent border-0 md:border-b-[1px] border-gray-300">
                    <p className="text-lg md:text-sm">{details.asuransi}</p>
                  </div>
                </div>
                <div className="mt-8">
                  <table className="table-auto w-full text-center">
                    <thead className="text-center">
                      <tr>
                        <th className="text-sm font-medium w-4">Ada</th>
                        <th className="text-sm font-medium w-4">Hilang</th>
                        <th className="text-sm font-medium">Nama Item</th>
                      </tr>
                    </thead>
                    <tbody>
                      {details.itemList.map((item, idx) => (
                        <tr key={idx} className="odd:bg-transparent even:bg-black/5">
                          <td className="text-center"><input type="radio" value="Ada" onChange={statusHandler} name={`itemStatus-${idx}`} className="basis-1/2 text-blue-600 bg-gray-100 border-gray-300 rounded" /></td>
                          <td className="text-center"><input type="radio" value="Hilang" onChange={statusHandler} name={`itemStatus-${idx}`} className="basis-1/2 text-blue-600 bg-gray-100 border-gray-300 rounded" /></td>
                          <td className="text-start pl-5 text-sm text-black disabled:text-gray-500" disabled={true}>{item}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex flex-col justify-between gap-y-3 mt-6">
                  <p className="basis-1/3">Foto</p>
                  <div className={`basis-2/3 text-gray-900 bg-transparent border-[1px] border-gray-300 ${imageValue ? "mx-auto" : "px-5 md:px-10 py-32"}`}>
                    {imageValue && <img className="object-cover h-60 w-96" src={imageValue} alt="Foto Item" />}
                  </div>
                </div>
              </div>
            </div>
					</div>
          <div className="flex justify-end items-center p-6 border-t border-gray-300 gap-x-3">
            <ReactToPrint
              trigger={() => <button className="button disabled:opacity-75" disabled={Object.keys(status).length !== details.itemList.length}>Print</button>}
              content={() => printRef.current}
              documentTitle={`${details.vendor}-${details.nomorWO}-${details.serviceAdvisor}`}
            />
            <PrintDocument ref={printRef} />
						<button onClick={modalHandler} type="button" className="py-2 px-5 bg-primary hover:bg-gray-100 text-black font-semibold rounded-md text-center text-sm border-[1px] hover:border-transparent border-black/25">Tutup</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;