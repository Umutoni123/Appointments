import React, { useEffect, useState } from "react";

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch("http://localhost:3001/appointments", {
          headers: {
            Authorization: "Bearer your-auth-token",
          },
        });
        const data = await response.json();
        setAppointments(data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2 className="font-bold text-3xl p-8">Appointments</h2>

      <div className="flex justify-center">
        <table class="table-auto border">
          <thead>
            <tr className="p-2 border font-bold">
              <th>Id</th>
              <th className="border">Full Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Reason</th>
            </tr>
          </thead>
          {appointments.map((appointment) => (
            <tbody>
              <tr className="p-2 border">
                <td className="p-4 border">{appointment.id}</td>
                <td className="p-4 border">{appointment.name}</td>
                <td className="p-4 border">{appointment.phone}</td>
                <td className="p-4 border">{appointment.email}</td>
                <td className="p-4 border">{appointment.date}</td>
                <td className="p-4 border">{appointment.time}</td>
                <td className="p-4 border">{appointment.reason}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Appointments;
