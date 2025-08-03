import UpdateBooking from '@/components/Forms/UpdateBooking';
import React from 'react';

const UpdateBookingPage = async({params}) => {
    const p= await params
    const res= await fetch(`http://localhost:3000/api/my_booking/${p.id}`)
    const data= await res.json()
    return (
        <div>
            <UpdateBooking data={data}/>
        </div>
    );
};

export default UpdateBookingPage;