"use client";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";
import useGenerateExplanation from "@/hooks/useGenerateExplanation";

export default function GenerateExplanation() {
  const { name, topic, setName, setTopic, handleSubmit } = useGenerateExplanation();

  return (
    <>
      <Navbar></Navbar>
      <Form name={name} topic={topic} setName={setName} setTopic={setTopic} handleSubmit={handleSubmit}></Form>
    </>
  );
}
