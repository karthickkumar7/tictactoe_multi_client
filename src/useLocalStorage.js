import { useState } from "react";

const useLocalStorage = (init) => {
    const [text, setText] = useState(init);

    return [text, setText];
};

export default useLocalStorage;
