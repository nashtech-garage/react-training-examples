import React, {Profiler, StrictMode} from 'react';
import ReactDOM, {hydrateRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, RouterProvider} from "react-router-dom";
import router from "./routes/routes";
import ErrorBoundary from "./components/error-boundary/error-boundary";
import BrokenPage from "./pages/broken-page/broken-page";

// hydrateRoot(
//     document.getElementById('root') as HTMLElement,
//     <RouterProvider router={router}/>
// );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);

// root.render(
//     <StrictMode>
//         <RouterProvider router={router}/>
//     </StrictMode>
// );

// root.render(
//     <StrictMode>
//         <BrowserRouter>
//             <App></App>
//         </BrowserRouter>
//     </StrictMode>
// )

// root.render(
//   <React.StrictMode>
//       <Profiler id='BrokenPage' onRender={(id,
//                                            phase,
//                                            actualDuration,
//                                            baseDuration,
//                                            startTime,
//                                            commitTime
//       ) => console.log(
//               id,
//               phase,
//               actualDuration,
//               baseDuration,
//               startTime,
//               commitTime)}>
//           <ErrorBoundary fallback={<p>Something went wrong!</p>}>
//               <BrokenPage />
//           </ErrorBoundary>
//       </Profiler>
//
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
