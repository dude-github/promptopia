import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
import { Suspense } from "react";
import Loading from "./profile/loading";

export const metadata = {
  title: "Promptopia",
  description: "Discover and share AI prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<Loading />}>
          <Provider>
            <div className="main">
              <div className="gradient" />
            </div>
            <main className="app">
              <Nav />
              {children}
            </main>
          </Provider>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
