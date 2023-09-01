import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const AddProductStatus = () => {

    const [products,setProducts]=useState([])
    const {user}=useContext(AuthContext)
    useEffect(()=>{
        fetch(`https://fanal-project-server.vercel.app/addProduct`)
        .then(res=>res.json())
        .then(data=>{

            const myProducts=data.filter((pd)=>pd?.email=== user?.email)
          
            setProducts(myProducts)
        })
       },[])

console.log(products);

    return (
        <div className='bg-[#a849b8] rounded-md p-5 text-white'>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          No
        </th>
        <th>Product Image</th>
        <th>Product Name </th>
        <th>Price </th>
        <th>Product Status</th>
        <th>Product Feedback</th>
      </tr>
    </thead>
    <tbody>
    
      {
        products?.map((dt,index)=>(<>
        
        <tr>
        <th>
          <label>
           {index+1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={dt.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
          </div>
        </td>
        <td>
        {dt.productName}
        </td>
        <td>
        ${dt.price}
        </td>
        <td>{dt.status}</td>
        <th>
         {dt.feedback}
        </th>
      </tr>
        </>))
      }
     
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default AddProductStatus;