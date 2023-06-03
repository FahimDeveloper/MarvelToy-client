import { useEffect } from "react";


const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Marvel Toys`
    }, [title])
}
export default useTitle;