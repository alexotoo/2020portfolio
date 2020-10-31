import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, title }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
