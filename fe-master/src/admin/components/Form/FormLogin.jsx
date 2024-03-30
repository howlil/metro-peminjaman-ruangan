import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input/Input";
import Judul from "../Judul";
import InputPass from "../Input/InputPass";
import { ButtonSimple } from "../ButtonSimple";
import loginAdmin from "@/api/admin/loginAdmin";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result;
    try{
      setIsLoading(true);
      result = await loginAdmin(email, password)
      if (result.success) {
        setMsg(result.message);
        navigate("/admin/dashboard");
      } else {
        setMsg(result.message);
      }
    } catch (error) {
      setMsg("Fetch error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center w-full">
        <div className="h-screen w-1/2">
          <img src="/bg-login.svg" alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="flex items-center justify-center h-screen w-1/2">
          <form onSubmit={handleSubmit} className="items-center">
            <Judul judul="Login to Your Account" />
            <Input
              label="Email"
              placeholder="Masukkan Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputPass
              label="Password"
              placeholder="Masukkan Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonSimple
              type="submit"
              label={isLoading ? "Loading..." : "Login"}
              background="bg-custom-100 w-full flex items-center justify-center mt-4 py-3"
              disabled={isLoading}
            />
            <span className="text-custom-700 font-medium">{msg}</span>
          </form>
        </div>
      </div>
    </>
  );
}
