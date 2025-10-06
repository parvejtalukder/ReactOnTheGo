import { useState } from "react";

const useInputField  = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);
    const handleOnChangeEx = e => {
        setFieldValue(e.target.value);
    }
    return [fieldValue, handleOnChangeEx];
}

export default useInputField;