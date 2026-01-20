import { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-[#8B1538]';
  const icon = type === 'success' ? 'check_circle' : 'favorite';

  return (
    <div className="fixed top-4 right-4 z-[9999] animate-slide-in-right">
      <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 min-w-[300px] max-w-[400px]`}>
        <span className="material-symbols-outlined text-2xl">{icon}</span>
        <div className="flex-1">
          <p className="font-medium text-sm">{message}</p>
        </div>
        <button 
          onClick={onClose}
          className="hover:bg-white/10 rounded p-1 transition-colors"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>
    </div>
  );
};

export default Toast;
