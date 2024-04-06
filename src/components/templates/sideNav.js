import React, { useState } from 'react';
import {
  EuiCollapsibleNav,
  EuiHeaderSectionItemButton,
  EuiCollapsibleNavGroup,
  EuiPinnableListGroup,
  EuiIcon,
  useGeneratedHtmlId,
    EuiButton,
    EuiSpacer
} from '@elastic/eui';
import { useNavigate } from "react-router-dom";
export const SideNav= () => {
  const navigate = useNavigate();
  const [navIsOpen, setNavIsOpen] =useState(
      JSON.parse(
          String(localStorage.getItem('euiCollapsibleNavExample--isDocked'))
      ) || false
  );
  const [navIsDocked, setNavIsDocked] = useState(
      JSON.parse(
          String(localStorage.getItem('euiCollapsibleNavExample--isDocked'))
      ) || false
  );
    const collapsibleNavId = useGeneratedHtmlId({ prefix: 'collapsibleNav' });
    const TopNavLinks: EuiPinnableListGroupItemProps[] = [
     {
         label: 'Home',
         iconType: 'home',
         isActive: true,
         pinnable: false,
         onClick: () => {navigate("/"); setNavIsOpen(false)},
     },
    { label: 'Network Scan', pinnable: false, onClick:  () => {navigate("/network_scan"); setNavIsOpen(false)} },
    { label: 'Ping Scan', pinnable: false, onClick: () => {navigate("/ping_scan"); setNavIsOpen(false)} },
    { label: 'Quick Scan', pinnable: false, onClick: () => {navigate("/quick_scan"); setNavIsOpen(false) } },
    { label: 'Extensive Scan', pinnable: false, onClick: () => {navigate("/extensive_scan"); setNavIsOpen(false) }},
    { label: 'Vulnerability scan', pinnable: false, onClick: () => {navigate("/vulnerability_scan"); setNavIsOpen(false)} },
];

  return(
      <>
        <EuiCollapsibleNav
          id={collapsibleNavId}
          isOpen={navIsOpen}
          isDocked={navIsDocked}
          size={240}
          button={
            <EuiHeaderSectionItemButton
                   aria-label="Toggle main navigation"
                   onClick={() => setNavIsOpen(!navIsOpen)}
            >
            <EuiIcon type={'menu'} size="m" aria-hidden="true" />
            </EuiHeaderSectionItemButton>
          }
          onClose={()=>setNavIsOpen(false)}
        >
            <EuiCollapsibleNavGroup background="light">
                 <EuiPinnableListGroup
                    listItems={TopNavLinks}
                    onPinClick={() => {}}
                    maxWidth="none"
                    color="text"
                    gutterSize="none"
                    size="s"
                 />
            </EuiCollapsibleNavGroup>
            <EuiSpacer />
            <span />
                <EuiButton
                  onClick={() => {
                    setNavIsDocked(!navIsDocked);
                    localStorage.setItem(
                        'euiCollapsibleNavExample--isDocked',
                        JSON.stringify(!navIsDocked)
                    );
                  }}
          >
            Docked: {navIsDocked ? 'on' : 'off'}
          </EuiButton>
        </EuiCollapsibleNav>
      </>
  );
};