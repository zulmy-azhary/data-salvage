import { collection, where } from "firebase/firestore";
import { useState, useTransition } from "react";
import { Card, Table } from "../../components";
import { Layout } from "../../components/layout";
import { db } from "../../firebase";
import useQuery from "../../hooks/useQuery";

const Salvages = () => {
	const dataSalvageRef = collection(db, "data-salvage");
	const [category, setCategory] = useState("");
	const [isPending, startTransition] = useTransition();
	const [data, loading] = useQuery(dataSalvageRef, where("vendor", "==", category));

	const optionHandler = (e) => {
		startTransition(() => {
			setCategory(e.target.value);
		});
	};

	return (
		<Layout title={category ? category : "Data Salvage"}>
			<select value={category} onChange={optionHandler}>
				<option value="">Pilih Vendor</option>
				<option value="WIS">WIS</option>
				<option value="SPA">SPA</option>
			</select>
			{category &&
				(!isPending ? (
					<>
						<h1 className="content__header pt-8">TIM {category}</h1>
						<div className="content__body grid lg:grid-cols-4 xl:grid-cols-5 auto-rows-max gap-8">
							<Card className="p-8 text-left lg:col-span-4 xl:col-span-3">
								<Table data={{ data, loading }} />
							</Card>
							<Card className="py-14 lg:col-span-4 xl:col-span-2  w-full">
								<div className="w-full h-full px-8">
									<h1 className="text-3xl">Deskripsi</h1>
									<div className="flex flex-row justify-between gap-x-5 mt-7">
										<p className="basis-1/3">Nomor Polisi</p>
										<div className="basis-2/3 text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300">
											<p></p>
										</div>
									</div>
									<div className="flex flex-row justify-between gap-x-5 mt-6">
										<p className="basis-1/3">Nama Service Advisor</p>
										<div className="basis-2/3 text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300">
											<p></p>
										</div>
									</div>
									<div className="flex flex-row justify-between gap-x-5 mt-6">
										<p className="basis-1/3">Nomor WO</p>
										<div className="basis-2/3 text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300">
											<p></p>
										</div>
									</div>
									<div className="flex flex-row justify-between gap-x-5 mt-6">
										<p className="basis-1/3">Nama Vendor</p>
										<div className="basis-2/3 text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300">
											<p></p>
										</div>
									</div>
									<div className="flex flex-row justify-between gap-x-5 mt-6">
										<p className="basis-1/3">Nama Asuransi</p>
										<div className="basis-2/3 text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300">
											<p></p>
										</div>
									</div>
									<div className="flex flex-row justify-between gap-x-5 mt-6">
										<p className="basis-1/3">Nama Item</p>
										<div className="basis-2/3 text-gray-900 bg-transparent border-0 border-b-[1px] border-gray-300"></div>
									</div>
									<div className="flex flex-col justify-between gap-y-3 mt-6">
										<p className="basis-1/3">Foto</p>
										<div className="basis-2/3 text-gray-900 bg-transparent border-[1px] border-black/25 px-5 md:px-10 py-32"></div>
									</div>
									<div className="flex flex-row justify-end mt-6">
										<button className="button disabled:opacity-75">
											Print
										</button>
									</div>
								</div>
							</Card>
						</div>
					</>
				) : (
					<p>Loading...</p>
				))}
		</Layout>
	);
};

export default Salvages;
