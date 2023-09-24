import { Outlet , useNavigation} from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/footer";
export default function LayoutPublic() {
  const navigation = useNavigation();
  return (
    <>
        <Nav />
        {navigation.state === "loading" && (
          <div className="alert alert-info my-5">Loading...</div>
        )}
        <main className="container">
            <Outlet />
        </main>
        <Footer />
    </>
  )
}
