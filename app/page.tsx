import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AuthContextProvider from "@/context/authContextProvider";

const page = () => {
  return (
    <AuthContextProvider>
      <Navbar />
      <Hero />
    </AuthContextProvider>
  );
};

export default page;
