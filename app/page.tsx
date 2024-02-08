import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AuthContextProvider from "@/context/authContextProvider";

const page = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <div className="mx-[1.25rem] ">
        <Hero />
      </div>
    </AuthContextProvider>
  );
};

export default page;
