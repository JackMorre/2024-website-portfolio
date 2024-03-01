import { StateProvider } from "./context/StateContext";
import Layout from "./pages/Layout";
function App() {
  return (
    <StateProvider>
      <Layout />
    </StateProvider>
  );
}

export default App;
