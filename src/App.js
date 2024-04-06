import './App.css';
import { Routes } from './routes'
import React from "react";
import {
  EuiHeader,
  EuiHeaderLogo,
  EuiProvider,
} from '@elastic/eui';
import {SideNav} from "./components/templates/sideNav";
import scansvg from "./components/sentinel/scan.svg";
function App() {

    const headers=(
        <>
            <EuiHeader
                sections={[
                    {
                        items: [
                            <SideNav/>,
                            <EuiHeaderLogo iconType={scansvg}>Security Scanner</EuiHeaderLogo>,
                        ],
                        borders: 'none',
                    },
                ]}
            />
        </>
    )
  return (
    <div>
        <EuiProvider>
            {headers}
            <Routes />
        </EuiProvider>
    </div>
  );
}

export default App;
