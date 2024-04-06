import React from "react";
import {
    EuiPage,
    EuiPageBody,
    EuiProvider,
    useEuiTheme, EuiCard
} from "@elastic/eui";
export const Quick_Scan = () => {
    const euiTheme = useEuiTheme();
    return (
        <EuiProvider colorMode={euiTheme.colorMode}>
            <EuiPage>
                <EuiPageBody>
                    <EuiCard title={"Quick Scan"}>
                        Description
                    </EuiCard>
                </EuiPageBody>
            </EuiPage>
        </EuiProvider>
    )
}