import React, { useState } from 'react';
import axios from 'axios';

const AppointmentForm = () => {
    const [name,setName]= useState('');
    const [phone,setPhone]= useState('');
    const [email,setEmail]= useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [reason, setReason] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3001/appointments', {
          name,
          phone,
          email,
          date,
          time,
          reason
        });
  
        console.log('Appointment created:', response.data);
  
        // Reset the form fields
        setName('');
        setPhone('');
        setEmail('');
        setDate('');
        setTime('');
        setReason('');
      } catch (error) {
        console.error('Error creating appointment:', error);
      }
    };
  
    return (
        <div class="flex items-center justify-center p-12">
   
    <div class="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={handleSubmit}>
            <div class="mb-5">
                <label for="name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                </label>
                <input type="text" name="name" id="name" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number" value={phone} onChange={(e) => setPhone(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="mb-5">
                <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                    Email Address
                </label>
                <input type="email" name="email" id="email" placeholder="Enter your email" value={email}   onChange={(e) => setEmail(e.target.value)}
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
            <div class="-mx-3 flex flex-wrap">
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="date" class="mb-3 block text-base font-medium text-[#07074D]">
                            Date
                        </label>
                        <input type="date" name="date" id="date" value={date}   onChange={(e) => setDate(e.target.value)}
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
                <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                        <label for="time" class="mb-3 block text-base font-medium text-[#07074D]">
                            Time
                        </label>
                        <input type="time" name="time" id="time" value={time}   onChange={(e) => setTime(e.target.value)}
                            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                    </div>
                </div>
            </div>

            <div className="mb-4">
             <label htmlFor="reason" className="block mb-2 font-bold">Reason:</label>
             <textarea
              id="reason"
               value={reason}
               onChange={(e) => setReason(e.target.value)}
               class="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your reason"
               rows="4"
               required
             ></textarea>
           </div>

            <div>
                <button
                    class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                    Book Appointment
                </button>
            </div>
        </form>
    </div>
</div>
    //   <div>
    //     <h2 className="text-xl font-bold mb-4">Request an Appointment</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="mb-4">
    //         <label htmlFor="date" className="block mb-2 font-bold">Date:</label>
    //         <input
    //           type="date"
    //           id="date"
    //           value={date}
    //           onChange={(e) => setDate(e.target.value)}
    //           className="border border-gray-300 p-2 rounded"
    //           required
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label htmlFor="reason" className="block mb-2 font-bold">Reason:</label>
    //         <textarea
    //           id="reason"
    //           value={reason}
    //           onChange={(e) => setReason(e.target.value)}
    //           className="border border-gray-300 p-2 rounded"
    //           rows="4"
    //           required
    //         ></textarea>
    //       </div>
    //       <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    );
  };
  
  export default AppointmentForm;