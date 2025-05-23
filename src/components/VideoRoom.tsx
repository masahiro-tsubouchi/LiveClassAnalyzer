import { useState } from "react";

// Mock data for development
const mockStudents = [
  { id: "student1", name: "田中太郎", isActive: true },
  { id: "student2", name: "山田花子", isActive: true },
  { id: "student3", name: "佐藤研二", isActive: false },
  { id: "student4", name: "伊藤美咲", isActive: true },
];

// Mock VideoRoom component that doesn't require LiveKit backend
export const VideoRoom = ({ url, token }: { url: string; token: string }) => {
  // We don't actually use url and token in the mock, but keep the props for future implementation
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  
  return (
    <div className="flex flex-col h-full bg-gray-900 rounded-lg overflow-hidden">
      {/* Video grid */}
      <div className="flex-1 grid grid-cols-2 gap-2 p-2">
        {mockStudents.map((student) => (
          <div 
            key={student.id} 
            className={`relative rounded-lg overflow-hidden ${!student.isActive ? 'opacity-50' : ''}`}
          >
            {/* Mock video placeholder */}
            <div className="bg-gray-800 w-full h-48 flex items-center justify-center">
              <div className="text-white text-xl font-semibold">
                {student.isActive ? (
                  isVideoOff ? (
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-2xl mb-2">
                        {student.name.substring(0, 1)}
                      </div>
                      <div>{student.name}</div>
                    </div>
                  ) : (
                    <img 
                      src={`https://i.pravatar.cc/300?u=${student.id}`} 
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="text-red-500 mb-2">非アクティブ</div>
                    <div>{student.name}</div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Student name overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white">
              <div className="flex items-center">
                <span className="mr-auto">{student.name}</span>
                {!student.isActive && <span className="text-red-500 text-xs">離席中</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Control bar */}
      <div className="p-4 bg-gray-800 flex justify-center space-x-4">
        <button 
          className={`rounded-full p-3 ${isMuted ? 'bg-red-500' : 'bg-gray-600'}`}
          onClick={() => setIsMuted(!isMuted)}
        >
          <span className="text-white">{isMuted ? '🔇' : '🔊'}</span>
        </button>
        <button 
          className={`rounded-full p-3 ${isVideoOff ? 'bg-red-500' : 'bg-gray-600'}`}
          onClick={() => setIsVideoOff(!isVideoOff)}
        >
          <span className="text-white">{isVideoOff ? '📵' : '📹'}</span>
        </button>
        <button className="rounded-full p-3 bg-gray-600">
          <span className="text-white">📊</span>
        </button>
        <button className="rounded-full p-3 bg-red-600">
          <span className="text-white">🚪 退出</span>
        </button>
      </div>
    </div>
  );
};
