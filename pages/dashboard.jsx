import { collection, where } from "firebase/firestore";
import { useContext } from "react";
import { Card, Table } from "../components";
import { Layout } from "../components/layout";
import { DashboardCardSkeleton } from "../components/skeleton";
import { DataContext } from "../context";
import { db } from "../firebase";
import { useQuery } from "../hooks/useQuery";

const Dashboard = () => {
	const dataSalvageRef = collection(db, "data-salvage");
	const { data } = useContext(DataContext);
	const [WIS] = useQuery(dataSalvageRef, where("vendor", "==", "WIS"));
	const [SPA] = useQuery(dataSalvageRef, where("vendor", "==", "SPA"));

	return (
		<Layout title="Dashboard">
			<h1 className="content__header">DASHBOARD</h1>
			<div className="content__body grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-max gap-8">
				<Card className="px-5 py-10 md:col-span-2 xl:col-span-1">
					{data ? (
						<>
							<h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">TOTAL SALVAGE ASURANSI</h2>
							<h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">{data.length ?? 0}</h3>
						</>
					) : <DashboardCardSkeleton />}
				</Card>
				<Card className="px-5 py-10">
					{WIS ? (
						<>
							<h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">WIS</h2>
							<h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">{WIS.length ?? 0}</h3>
						</>
					) : <DashboardCardSkeleton />}
				</Card>
				<Card className="px-5 py-10">
					{SPA ? (
						<>
							<h2 className="text-lg md:text-xl xl:text-2xl text-center font-bold">SPA</h2>
							<h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-5">{SPA.length ?? 0}</h3>
						</>
					) : <DashboardCardSkeleton />}
				</Card>
				<Card className="p-8 text-left row-span-2 col-span-1 md:col-span-2 xl:col-span-3">
					<Table itemsPerPage={10} />
				</Card>
				{/* <Card className="p-5 row-span-2 md:col-span-2 xl:col-span-1">NOTE</Card> */}
			</div>
		</Layout>
	);
};

export default Dashboard;
