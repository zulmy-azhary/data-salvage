import { useContext, useEffect, useTransition } from "react";
import { Card, Table } from "../../components";
import { Layout } from "../../components/layout";
import { DataContext } from "../../context";

const Salvages = () => {
	const [isPending, startTransition] = useTransition();
	const { category, setCategory } = useContext(DataContext);

	useEffect(() => {
		setCategory("");
	}, []);

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
						<div className="content__body">
							<Card className="p-8 text-left lg:col-span-4 xl:col-span-3">
								<Table itemsPerPage={10} />
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
