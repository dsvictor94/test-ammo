import { useMemo, useState, useEffect } from "react"
import { generateId } from "./utils"

export const useId = () => {
    return useMemo(generateId, [])
}

export function useFetch<T>(fetchFunction: () => Promise<T>) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [result, setResult] = useState<T>();


    useEffect(() => {
        let interSetResult = setResult;
        let innerSetIsLoading = setIsLoading;
        let innerIsError = setIsError;
        
        innerSetIsLoading(true);

        const dataRequest = async () => {
            try {
                const data = await fetchFunction();
                console.log(data);
                interSetResult(data);
                innerSetIsLoading(false);
                innerIsError(false);
            } catch {
                innerIsError(true);
                innerSetIsLoading(false);
            }
        }

        dataRequest();
        return () => {
            interSetResult = () => {}
            innerSetIsLoading = () => {}
            innerIsError = () => {}
        }
    }, [fetchFunction])

    return {
        result: result,
        isLoading: isLoading,
        isError: isError
    }
}

export const useDocumentTitle = (title: string) => {
    useEffect(() => {
        const oldTitle = document.title;
        
        document.title = title;

        return () => {document.title = oldTitle;}
    }, [title])
}