import { useState } from 'react';
import { Layout } from '../components/layout';
import { Card } from '../components';
import { AiFillCloseCircle } from 'react-icons/ai';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

// Service Advisor Options
const serviceAdvisor = [
  "Ahmad Supardi",
  "Fadli",
  "Hariyadi",
  "Imam",
  "Muhammad Fachri",
  "Musrin Noor",
  "Reza",
  "Syamsuryanan Amir"
];

const CreateData = () => {
  const router = useRouter();

  // Each item
  const [item, setItem] = useState({
    name: ""
  });

  // All data
  const [data, setData] = useState({
    nomorWO: "",
    nomorPolisi: "",
    serviceAdvisor: "Ahmad Supardi",
    asuransi: "",
    vendor: "WIS",
    itemList: [],
    image: ""
  });

  const inputDataHandler = e => {
    e.persist();
    setData({ ...data, [e.target.name]: e.target.value });
  }

  // Image Handler
  const imageHandler = e => {
    e.persist();
    setData({...data, image: e.target.files[0]})
  }

  const inputItemHandler = e => {
    e.persist();
    setItem({ ...item, name: e.target.value });
  }

  const addItemHandler = e => {
    e.preventDefault();
    if (item.name) {
      !data.itemList.includes(item.name) &&
        setData({ ...data, itemList: [...data.itemList, item.name] });
      setItem({name: ""})
    }
  }

  // Remove item
  const removeItemHandler = itemFetch => {
    const filteredItem = data.itemList.filter(item => {
        return item !== itemFetch
    })
    setData({...data, itemList: filteredItem});
  }

  const submitHandler = async e => {
    e.preventDefault();
    await addDoc(collection(db, 'data-salvage'), {
      nomorWO: data.nomorWO,
      nomorPolisi: data.nomorPolisi,
      serviceAdvisor: data.serviceAdvisor,
      asuransi: data.asuransi,
      vendor: data.vendor,
      imageURL: data.image.name,
      itemList: data.itemList,
      createdAt: serverTimestamp()
    }).then(() => {
      toast.success("Data berhasil ditambahkan!");
      setData({
        nomorWO: "",
        nomorPolisi: "",
        serviceAdvisor: "Ahmad Supardi",
        asuransi: "",
        vendor: "WIS",
        itemList: [],
        image: ""
      })
    }).catch(err => {
      toast.error(err.message);
    })
  }
  
  return (
    <Layout title="Create Data">
      <h1 className="content__header">CREATE DATA</h1>
      <Card>
        <form onSubmit={submitHandler} encType="multipart/form-data" className="w-full px-10 md:px-14 xl:px-24 my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 xl:gap-x-16 auto-rows-max">
            <div>
              <label htmlFor="nomorWO">NO. WO</label>
              <input value={data.nomorWO} onChange={inputDataHandler} type="text" id="nomorWO" name="nomorWO" autoComplete="off" autoFocus />
            </div>
            <div>
              <label htmlFor="nomorPolisi">Nomor Polisi</label>
              <input value={data.nomorPolisi} onChange={inputDataHandler} type="text" id="nomorPolisi" name="nomorPolisi" autoComplete="off" />
            </div>
            <div>
              <label htmlFor="serviceAdvisor">Nama Service Advisor</label>
              <select name="serviceAdvisor" id="serviceAdvisor" value={data.serviceAdvisor} onChange={inputDataHandler}>
                {serviceAdvisor.map((name, idx) => <option key={idx} value={name}>{name}</option> )}
              </select>
            </div>
            <div>
              <label htmlFor="asuransi">Nama Asuransi</label>
              <input value={data.asuransi} onChange={inputDataHandler} type="text" id="asuransi" name="asuransi" autoComplete="off" />
            </div>
            <div className="md:col-span-2 xl:col-span-1">
              <label htmlFor="vendor">Nama Vendor</label>
              <select value={data.vendor} onChange={inputDataHandler} name="vendor" id="vendor">
                <option value="WIS">WIS</option>
                <option value="SPA">SPA</option>
              </select>
            </div>
            <div className="md:col-span-2 xl:col-span-1">
              <label htmlFor="itemList">Nama Item</label>
              <div className="flex flex-row gap-2">
                <input type="text" onChange={inputItemHandler} value={item.name} id="itemList" name="itemList" autoComplete="off"  />
                <button onClick={addItemHandler} className="button mt-2">Tambah</button>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2 xl:col-span-3 gap-8">
              <label htmlFor="itemList">Item Salvage</label>
              <div className="bg-[#FAFAFA] border-[1px] border-black/25 mt-2 px-5 md:px-10 py-8">
                {data.itemList.length > 0 ? (
                  <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-cols-max gap-8">
                    {data.itemList.map((item, idx) => {
                      return (
                        <div key={idx} className="bg-[#FAFAFA] border-[1px] border-black/25 px-4 py-2 flex justify-between items-center gap-5 rounded-full w-full">
                          <p className="text-sm">{item}</p>
                          <AiFillCloseCircle className="cursor-pointer text-red-700 outline-primary text-lg" onClick={removeItemHandler.bind(this, item)} />
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  <p className="text-center text-gray-500">Tidak ada item salvage yang ditambahkan</p>
                )}
              </div>
            </div>
            <div className="flex justify-start items-center gap-5 col-span-1 md:col-span-2 xl:col-span-3 mt-12">
              <button type="submit" className="button">Simpan</button>
              <input type="file" name="image" accept="image/jpg, image/png, image/jpeg" onChange={imageHandler} className="text-black file:border-[1px] file:border-black/25 file:rounded-md file:px-5 file:py-2 file:bg-[#FAFAFA] file:text-black" />
            </div>
          </div>
        </form>
      </Card>
    </Layout>
  );
};

export default CreateData;