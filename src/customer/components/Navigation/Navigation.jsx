import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

export default function Navigation() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("user"));

  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/"
    },
    {
      id: 2,
      title: "Products",
      link: "/products"
    },
    {
      id: 3,
      title: "My Orders",
      link: "/account/order"
    },
    {
      id: 4,
      title: "About",
      link: "/about"
    },
    {
      id: 5,
      title: "Contact",
      link: "/contact"
    },
  ]

  useEffect(() => {
    if (token) {
      const fetchUserProfile = async () => {
        try {
          const response = await fetch("https://e-commerce-backend-springboot.onrender.com/auth/profile", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUser(data);
            setLoading(false);
          } else if (response.status === 401 || response.status === 403) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            setUser(null);
            setLoading(false);
            navigate("/login");
          } else {
            setLoading(false);
            setUser(null);
            return (
              <div>
                <p>Failed to fetch user profile. Please log in.</p>
                <button onClick={() => (window.location.href = "/login")}>
                  Login
                </button>
              </div>
            );
          }
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchUserProfile();
    } else {
      setLoading(false);
    }
  }, [token, navigate]);

  const handleNavigation = (e) => {
    if (!currentUser) {
      e.preventDefault();
      toast.error("Please log in first", { autoClose: 2000 });
      navigate("/login");
      return;
    }

    switch (currentUser.role) {
      case "USER":
        // Allow navigation to "My Assessments"
        break;
      case "TUTOR":
        navigate("/tutor_dashboard");
        break;
      case "ADMIN":
        navigate("/admin_dashboard");
        break;
      default:
        e.preventDefault();
        toast.error("Unauthorized access", { autoClose: 2000 });
        navigate("/login");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const handleCartRedirection = () => {
    navigate("/cart")
  }

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4">

          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
            <p className="text-primary">Attire</p>
            <p className="text-secondary">Store</p>
            <FaShoppingCart className="text-green-500" />
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((menu) => (
                <li key={menu.id} className="text-md">
                  <a href={menu.link} className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold">{menu.title}</a>
                </li>
              ))}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2" onClick={handleCartRedirection}>
                <MdOutlineShoppingCart />
              </button>
              <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                {user && token ? (
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center text-sm">
                      {user.firstName ? user.firstName.charAt(0).toUpperCase() : ""}
                    </div>
                    <div className="mx-5">
                      <a
                        href="/"
                        onClick={handleLogout}
                        className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                ) : (
                  <a
                    href="/login"
                    className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                  >
                    Login
                  </a>
                )}
              </div>
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex" onClick={() => setOpen(!open)}>
            <button className="text-3xl hover:bg-primary hover:text-white rounded-full mx-2" onClick={handleCartRedirection}>
              <MdOutlineShoppingCart />
            </button>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Selection */}
      <ResponsiveMenu open={open} />
    </>
  );
}