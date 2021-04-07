import { useSandpack } from "@codesandbox/sandpack-react";
import { FC, useEffect } from "react";

export const SandpackListener: FC = () => {

    useEffect(() => {
        const listener = (event: MessageEvent) => {
            console.log(event)
        }

        window.addEventListener("message", listener, false);

        return () => window.removeEventListener('message', listener)
    }, []);

    return null;
}