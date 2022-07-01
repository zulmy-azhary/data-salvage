import { forwardRef, useContext } from "react";
import { DataContext } from "../context";
import { AiOutlineCheck } from "react-icons/ai";

const PrintDocument = forwardRef((_, ref) => {
  const { details, imageValue, status } = useContext(DataContext);
	const currentDate = new Date().toLocaleString("id-ID", {
		day: "2-digit",
		month: "long",
		year: "numeric",
  });
  
	return (
		<div ref={ref} className="px-12 py-6" id="printDocument">
			<img
				src="/assets/kalla-toyota-urip.png"
				alt="Kalla Toyota Urip"
				className="w-48 mx-auto"
			/>
			<div className="pt-5 text-center mb-4">
				<p className="text-xl">PT. Hadji Kalla (II) Urip Sumoharjo</p>
				<p className="font-normal">Jl. Urip Sumoharjo No. 277, Makassar 90232</p>
				<p className="font-normal">No. Telp : (0411) 448044, (0411) 448844</p>
			</div>
			<hr className="border-[1px] border-dashed border-black" />
			<main className="pt-3 px-8">
				<div className="flex flex-row justify-between items-center gap-x-5 mt-5">
					<p className="basis-1/3 font-normal">Nomor WO</p>
					<p className="basis-2/3 font-normal before:content-[':'] before:mr-3">
						{details.nomorWO}
					</p>
				</div>
				<div className="flex flex-row justify-between items-center gap-x-5 mt-2">
					<p className="basis-1/3 font-normal">Nomor Polisi</p>
					<p className="basis-2/3 font-normal before:content-[':'] before:mr-3">
						{details.nomorPolisi}
					</p>
				</div>
				<div className="flex flex-row justify-between items-center gap-x-5 mt-2">
					<p className="basis-1/3 font-normal">Service Advisor</p>
					<p className="basis-2/3 font-normal before:content-[':'] before:mr-3">
						{details.serviceAdvisor}
					</p>
				</div>
				<div className="flex flex-row justify-between items-center gap-x-5 mt-2">
					<p className="basis-1/3 font-normal">Nama Vendor</p>
					<p className="basis-2/3 font-normal before:content-[':'] before:mr-3">
						{details.vendor}
					</p>
				</div>
				<div className="flex flex-row justify-between items-center gap-x-5 mt-2">
					<p className="basis-1/3 font-normal">Nama Asuransi</p>
					<p className="basis-2/3 font-normal before:content-[':'] before:mr-3">
						{details.asuransi}
					</p>
				</div>
				<div className="flex flex-col justify-between items-center gap-x-5 mt-5">
					<p className="mb-3 font-medium">Item Salvage</p>
					<table className="table-auto w-full text-center">
						<thead className="text-center">
							<tr className="">
								<th className="text-sm font-normal w-4 border">Ada</th>
								<th className="text-sm font-normal w-4 border">Hilang</th>
								<th className="text-sm font-normal border">Nama Item</th>
							</tr>
						</thead>
						<tbody className="text-center">
							{details.itemList.map((item, idx) => {
								return (
									<tr key={idx}>
										<td className="border">{Object.values(status)[idx] === "Ada" && <AiOutlineCheck className="text-sm mx-auto" />}</td>
										<td className="border">{Object.values(status)[idx] === "Hilang" && <AiOutlineCheck className="text-sm mx-auto" />}</td>
										<td className="border text-start md:pl-5 text-sm">{item}</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
				<div className="flex flex-col justify-center items-center gap-y-3 mt-3">
					<p className="text-sm font-medium">Lampiran Gambar Salvage</p>
					{imageValue && (
						<img className="object-cover h-60 w-96" src={imageValue} alt="Foto Item" />
					)}
				</div>
				<div className="mt-8 flex justify-end">
					<div className="text-center">
						<p className="font-normal">Makassar, {currentDate}</p>
						<p className="font-normal mt-2">TTD</p>
						<p className="font-normal mt-16">Person In Charge</p>
					</div>
				</div>
			</main>
		</div>
	);
});

PrintDocument.displayName = 'PrintDocument';

export default PrintDocument;
