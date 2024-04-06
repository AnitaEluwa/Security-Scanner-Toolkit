import '@elastic/eui/dist/eui_theme_light.css'
import React from "react";
import {
    EuiCard,
    EuiProvider,
    EuiPage,
    EuiPageBody,
    useEuiTheme,
    EuiText,
    EuiSpacer
} from '@elastic/eui';
import scanner from './scanner.svg';

export const Sentinel = ({ Page }) => {
    const euiTheme = useEuiTheme();
    return (
      <EuiProvider colorMode={euiTheme.colorMode}>
          <EuiPage>
                <EuiPageBody>
                    <EuiCard title={"Security Scanner"} image={<div><img src={scanner} alt="scanner" height={250} /> </div>} >
                       <EuiText>
                           <h3>A smart network scan toolkit</h3>
                           <h4>Check your network and system for vulnerabilities</h4>
                             <div style={{textAlign:"center"}}>
                                 <ul style={{display:"inline-table"}}>
                                     <li style={{textAlign:"left"}}>Network Scan</li>
                                     <li style={{textAlign:"left"}}>Ping Scan</li>
                                     <li style={{textAlign:"left"}}>Quick Scan</li>
                                     <li style={{textAlign:"left"}}>Extensive Scan</li>
                                     <li style={{textAlign:"left"}}>Vulnerability Scan</li>
                                 </ul>
                                 <EuiSpacer size="xxl" />
                             </div>
                       </EuiText>
                    </EuiCard>
                </EuiPageBody>
          </EuiPage>
       </EuiProvider>
    );
};


