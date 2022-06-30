import { forwardRef, useContext } from "react";
import { DataContext } from "../context";

const PrintDocument = forwardRef((_, ref) => {
  const { details, imageValue, status } = useContext(DataContext);
	const current = new Date().toLocaleString("id-ID", {
		day: "2-digit",
		month: "short",
		year: "numeric",
  });
  
	return (
		<div ref={ref} className="px-12 py-8" id="printDocument">
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
			<main className="pt-5 px-8">
				<div className="flex flex-row justify-between items-center gap-x-5 mt-5">
					<p className="basis-1/3 font-normal">Nomor WO</p>
					<p className="basis-2/3 font-normal before:content-[':'] before:mr-3">
						{details.nomorWO}
					</p>
				</div>
				<div className="flex flex-row justify-between items-center gap-x-5 mt-3">
					<p className="basis-1/3 font-normal">Nomor Polisi</p>
					<p className="basis-2/3 font-normal before:content-[':'] before:mr-3">
						{details.nomorPolisi}
					</p>
				</div>
				<div className="flex flex-row justify-between items-center gap-x-5 mt-3">
					<p className="basis-1/3 font-normal">Service Advisor</p>
					<p className="basis-2/3 font-normal before:content-[':'] before:mr-3">
						{details.serviceAdvisor}
					</p>
				</div>
				<div className="flex flex-row justify-between items-center gap-x-5 mt-3">
					<p className="basis-1/3 font-normal">Nama Vendor</p>
					<p className="basis-2/3 font-normal before:content-[':'] before:mr-3">
						{details.vendor}
					</p>
				</div>
				<div className="flex flex-row justify-between items-center gap-x-5 mt-3">
					<p className="basis-1/3 font-normal">Nama Asuransi</p>
					<p className="basis-2/3 font-normal before:content-[':'] before:mr-3">
						{details.asuransi}
					</p>
				</div>
				<div className="flex flex-col justify-between gap-x-5 mt-3">
					<div className="flex flex-row justify-between items-center gap-x-5">
						<p className="basis-1/3 font-normal">Nama Item Salvage</p>
						<div className="basis-2/3 before:content-[':'] before:mr-3"></div>
					</div>
					<div className="mt-2 px-7">
						<ol className="grid grid-flow-col grid-rows-5 gap-x-3 gap-y-1 list-decimal font-normal text-sm">
							{details.itemList.map((item, idx) => {
                return (
                  <li key={idx}>{Object.keys(status) === `itemStatus-${idx}` && <p>Ada</p>}{item}</li>
                )
							})}
						</ol>
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-y-3 mt-5">
					{imageValue && (
						<img className="object-cover h-60 w-full" src={imageValue} alt="Foto Item" />
					)}
					<p className="text-xs font-normal">Lampiran Gambar Salvage</p>
				</div>
				<div className="mt-10 flex justify-end">
					<div className="text-center">
						<p className="font-normal">Makassar, {current}</p>
						<p className="font-normal mt-3">TTD</p>
						<p className="font-normal mt-16">Person In Charge</p>
					</div>
				</div>
			</main>
		</div>
	);
});

export default PrintDocument;
