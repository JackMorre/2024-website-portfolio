import { createContext, useCallback, useContext, useReducer } from "react";

let StateContext = createContext();

let initialState = {
  desktopMode: false,
  menuOpen: false,
  mainWidth: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "mobileMenu/toggle":
      return { ...state, menuOpen: !state.menuOpen };
    case "desktopMenu/on":
      return { ...state, desktopMode: true, menuOpen: true };
    case "desktopMenu/off":
      return { ...state, desktopMode: false, menuOpen: false };
    case "mainWidth/change":
      return { ...state, mainWidth: action.payload };
    default:
      throw new Error("couldn't find action on reducer");
  }
}

function StateProvider({ children }) {
  const [{ desktopMode, menuOpen, mainWidth }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const toggleMenu = () => {
    dispatch({ type: "mobileMenu/toggle" });
  };
  const onDesktop = useCallback(() => {
    dispatch({ type: "desktopMenu/on" });
  }, []);
  const offDesktop = useCallback(() => {
    dispatch({ type: "desktopMenu/off" });
  }, []);
  const updateMainWidth = (width) => {
    dispatch({ type: "mainWidth/change", payload: width });
  };
  return (
    <StateContext.Provider
      value={{
        desktopMode,
        menuOpen,
        toggleMenu,
        onDesktop,
        offDesktop,
        updateMainWidth,
        mainWidth,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

function useUi() {
  const context = useContext(StateContext);

  if (context === undefined) {
    throw new Error("State context is used outside of stateProvider");
  }
  return context;
}

export { useUi, StateProvider };
