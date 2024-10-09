import Button from "./ui/Button";

interface FormProps {
  name: string;
  topic: string;
  setName: (name: string) => void;
  setTopic: (topic: string) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

export default function Form({ name, topic, setName, setTopic, handleSubmit }: FormProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-1/2 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-center text-xl font-bold">Generate Explanation</h2>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded p-2"
          required
        />
        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="border border-gray-300 rounded p-2"
          required
        />
        <Button></Button>
      </form>
    </div>
  );
}
