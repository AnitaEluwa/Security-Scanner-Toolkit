import React from "react";
import { Route, Routes as Switch} from "react-router-dom";
import {Network_Scan, Ping_Scan, Quick_Scan, Extensive_Scan, Vulnerability_Scan} from './components/sentinel';
import {Sentinel} from "./pages/sentinel";
export const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" element={<Sentinel />}/>
                <Route exact path="/network_scan" element={<Network_Scan />}/>
                <Route path='/ping_scan' element={<Ping_Scan />} />
                <Route path='/quick_scan' element={<Quick_Scan />} />
                <Route path='/extensive_scan' element={<Extensive_Scan />} />
                <Route path='/vulnerability_scan' element={<Vulnerability_Scan />} />
            </Switch>
    )
}