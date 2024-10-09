"use client";
import Navbar from "@/components/Navbar";
import Table from "@/components/Table";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [explanations, setExplanations] = useState([]);

  useEffect(() => {
    const fetchExplanations = async () => {
      try {
        const response = await fetch('/api/get-explanations');
        const data = await response.json();
        setExplanations(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchExplanations();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <Table explanations={explanations}></Table>
    </>
  );
}
