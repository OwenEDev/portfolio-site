import { Dispatch, SetStateAction, createContext } from "react";

type contextType = {currentTheme: string | undefined, setCurrentTheme: Dispatch<SetStateAction<string>> | undefined}
const colourModeContext = createContext<contextType | null>(null);
export default colourModeContext;