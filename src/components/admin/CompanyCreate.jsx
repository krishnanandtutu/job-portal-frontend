import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

import { toast } from 'sonner'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { setSingleCompany } from '@/redux/companySlice'

function CompanyCreate() {
    const navigate =useNavigate();
    const [companyName,setCompanyName] = useState();
    const dispatch = useDispatch();
    const registerNewCompany = async ()=>{
        try {
             const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                headers:{
                    'Content-Type':'application/json'

                },
                 withCredentials:true
             });
         if(res?.data?.success){
            dispatch(setSingleCompany(res.data.company));
            toast.success(res.data.message);
            const companyId = res?.data?.company?._id;
            navigate(`/admin/companies/${companyId}`);
         }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <Navbar/>
        <div className='max-w-4xl mx-auto'>
           <div className='my-10'>
               <h1 className='font-bold text-2xl'>Your Company Name</h1>
               <p>what would you like to give your compony name ? you can change this later.</p>
           </div>
           <Label>Company Name</Label>
           <Input
              type="text"
              className="my-2"
              placeholder="jobHunt , microsoft etc."
              onChange={(e)=>setCompanyName(e.target.value)}
           />
           <div className =" flex items-center gap-2 my-10">
            <Button variant="outline" onClick={()=>navigate("/admin/companies")}>Cancel</Button>
            <Button onClick={registerNewCompany}  className="bg-slate-700 rounded-xl">Continue</Button>

           </div>

        </div>
    </div>
  )
}

export default CompanyCreate