import { GlobalStyle } from "./GlobalStyle";
import { AuthProvider } from "./hooks/contexts/auth";
import { Routes } from "./Routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;
