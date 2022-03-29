import './Show.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Chart from '../../../components/chart/Chart';
import List from '../../../components/list/List';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Single = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(productId);
    const GetUsers = async () => {
      const result = await axios.get(
        `http://localhost:3000/api/v1/products/${productId}`
      );
      setData(result?.data?.data?.data);
    };
    GetUsers();
  }, []);
  console.log(data);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edite</div>
            <div className="title">Information</div>
            <div className="item">
              <img src={data.photo} alt="butfile girle" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{data.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Name :</span>
                  <span className="itemValue">{data.name}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{data.listPrice}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Adress:</span>
                  <span className="itemValue">
                    {data?.address?.country} {''}
                    {data?.address?.city} {''}
                    {data?.address?.street} {''}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Zip Code:</span>
                  <span className="itemValue">{data?.address?.zip}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{data.role}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
