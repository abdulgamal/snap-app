import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex items-center h-screen">
      <section className="flex justify-center items-center flex-1">
        <Outlet />
      </section>
      <section className="hidden h-screen md:flex flex-1">
        <img
          src="https://images.unsplash.com/photo-1657363607750-6d20c66e781a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"
          alt="banner"
          className="h-full object-cover w-full"
        />
      </section>
    </div>
  );
}

export default AuthLayout;
