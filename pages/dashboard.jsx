import { collection, orderBy, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Card, Table } from "../components";
import { Layout } from "../components/layout";
import { db } from "../firebase";

const Dashboard = () => {
	const getVendor = (ref, vendor) => {
		const getDataVendor = query(ref, where("vendor", "==", vendor));
		const [dataVendor] = useCollectionData(getDataVendor);
		return dataVendor;
	}
	
	const dataSalvageRef = collection(db, "data-salvage")
	const getAllData = query(dataSalvageRef, orderBy("createdAt", "desc"));
	const WIS = getVendor(dataSalvageRef, "WIS")
	const SPA = getVendor(dataSalvageRef, "SPA");

	const [data, loading] = useCollectionData(getAllData);

	return (
		<Layout title="Dashboard">
			<h1 className="content__header">DASHBOARD</h1>
			<div className="content__body grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-max gap-8">
				<Card className="px-5 py-10 md:col-span-2 xl:col-span-1">
					<h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">
						TOTAL SALVAGE ASURANSI
					</h2>
					<h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">{data?.length || 0}</h3>
				</Card>
				<Card className="px-5 py-10">
					<h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">WIS</h2>
					<h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">{WIS?.length || 0}</h3>
				</Card>
				<Card className="px-5 py-10">
					<h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">SPA</h2>
					<h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">{SPA?.length || 0}</h3>
				</Card>
				<Card className="p-8 text-left row-span-2 col-span-1 md:col-span-2 xl:col-span-3">
					<Table name="Dashboard" data={{ data, loading }} />
				</Card>
				{/* <Card className="p-5 row-span-2 md:col-span-2 xl:col-span-1">NOTE</Card> */}
			</div>
		</Layout>
	);
};

export default Dashboard;
