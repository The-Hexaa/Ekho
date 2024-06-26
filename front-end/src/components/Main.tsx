"use client";

import { useRouter } from 'next/navigation';

const users = [
  { id: '1234', name: 'John Doe', description: 'Software Engineer\nLoves coding and coffee' },
  { id: '5678', name: 'Jane Smith', description: 'Product Manager\nPassionate about UX/UI' },
  { id: '9101', name: 'Sam Wilson', description: 'Data Scientist\nEnjoys working with data' },
];

const Main: React.FC = () => {
  const router = useRouter();

  const handleTalkClick = (id: string) => {
    router.push(`/call?id=${id}`);
  };

  return (
    <div className="bg-black min-h-screen py-8">
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
          {users.map(user => (
            <div key={user.id} className="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl">
                    {user.name[0]}
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg font-bold">{user.name}</h5>
                </div>
              </div>
              <p className="whitespace-pre-line mb-4">
                {user.description}
              </p>
              <button
                onClick={() => handleTalkClick(user.id)}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                Talk
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
