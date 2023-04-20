import {renderToPipeableStream} from "react-dom/server";
import BootstrapApp from "./src/bootstrap-app";

const renderPipe = (request: any, response: any) => {
    const { pipe } = renderToPipeableStream(<BootstrapApp/>, {
        bootstrapModules: ['/static/js/main.e0a04c49.js'],
        onShellReady: () => {
            pipe(response);
        }
    });

}

export default renderPipe