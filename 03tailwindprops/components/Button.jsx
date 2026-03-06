export const Button = ({ children, variant = 'primary', ...props }) => {
  const variants = {
    primary: "bg-primary hover:bg-primary-hover text-white",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button 
      className={`px-4 py-2 rounded-md font-medium transition-all active:scale-95 ${variants[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};