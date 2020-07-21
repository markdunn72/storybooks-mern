import React, { useState, useEffect } from "react";
import "./customers.css";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then((res) => res.json())
      .then((customers) => {
        setCustomers(customers);
        return customers;
      })
      .then((customers) => {
        console.log("Customers fetched...", customers);
      });
  }, []);

  return (
    <div>
      <h2>Customers1</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            {customer.firstName} {customer.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
