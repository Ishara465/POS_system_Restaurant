import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleRoleSelection = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Employee Name
          </label>
          <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name="name"
              placeholder="Enter employee name"
              className="bg-transparent  text-white focus:outline-none"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mt-2 text-sm font-medium">
            Employee Email
          </label>
          <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="email"
              name="email"
              placeholder="Enter employee email"
              className="bg-transparent text-white focus:outline-none"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mt-2 text-sm font-medium">
            Employee Phone
          </label>
          <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="text"
              name="phone"
              placeholder="Enter employee phone"
              className="bg-transparent text-white focus:outline-none"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mt-2 text-sm font-medium">
            Password
          </label>
          <div className="flex item-center rounded-lg p-5 px-4 bg-[#1f1f1f]">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className="bg-transparent text-white focus:outline-none"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-[#ababab] mt-2 text-sm font-medium">
            Choose your role
          </label>

          <div className="flex item-center gap-3 mt-4">
            {["Waiter", "Cashier", "Admin"].map((role) => {
              return (
                <button
                  className={`
                    bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab]
                    ${formData.role === role ? "bg-indigo-700" : ""}
                    `}
                  key={role}
                  type="button"
                  onClick={() => handleRoleSelection(role)}
                >
                  {role}
                </button>
              );
            })}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 py-3 rounded-lg text-lg bg-yellow-400 text-gray-900 font-bold"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
