import { useSandpack } from "@codesandbox/sandpack-react";
import { FC, useEffect } from "react";
import { mainFile } from './sandpack'

export const SandpackListener: FC = () => {
    const { sandpack: { updateCurrentFile} } = useSandpack()

    useEffect(() => {
        const listener = (event: MessageEvent) => {
            if (event.data?.type === 'click') {
                const newMainFile = mainFile.replace('Trigger', 'Do not trigger');

                console.log(newMainFile);

                updateCurrentFile(newMainFile);
            }
        }

        window.addEventListener("message", listener, false);

        return () => window.removeEventListener('message', listener)
    }, []);

    return null;
}