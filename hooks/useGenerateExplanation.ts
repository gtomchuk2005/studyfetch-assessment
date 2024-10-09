import { useState } from "react";
import { useRouter } from "next/navigation";

export default function useGenerateExplanation() {
  const [name, setName] = useState('');
  const [topic, setTopic] = useState('');

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/generate-explanation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, topic }),
      });
      router.push('/catalog');
    }
    catch (error) {
      console.log(error);
    }
    setName('');
    setTopic('');
  }

  return { name, topic, setName, setTopic, handleSubmit }
}
