import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import AuthContextProvider from "@/context/authContextProvider";

const page = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <div className="mx-[1.25rem] ">
        <Hero />
        <Features />
        <Pricing />
      </div>
    </AuthContextProvider>
  );
};

export default page;
