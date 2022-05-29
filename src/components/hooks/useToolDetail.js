import { useEffect, useState } from "react";

const useToolDetail = toolId => {
    const [tool, setTool] = useState({});

    useEffect(() => {
        const url = `https://hidden-lake-23294.herokuapp.com/tools/${toolId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data))
    }, [toolId])
    return [tool]
}
export default useToolDetail;