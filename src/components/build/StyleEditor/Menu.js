import React from "react";
import styled from "styled-components";
import { Button } from "./LayoutComponents";
import * as buildActions from "../../../redux/actions/buildActions";
import { useSelector, useDispatch } from "react-redux";

const MenuWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: ${(props) => (props.showMenu ? "0" : "-100%")};
  background-color: ${(props) => props.backgroundColor};
  padding-top: ${(props) => props.paddingTop};
  box-sizing: border-box;
  overflow: hidden;
`;

const TabButton = styled(Button)`
  position: relative;
  left: calc(50vw - ${(props) => props.width} / 2);
  margin-bottom: ${(props) => props.marginBottom};
`;

const ActiveTabButton = styled(TabButton)`
  color: ${(props) => props.color};
  border: ${(props) => props.border};
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.backgroundColor};
  }
`;

const Menu = (props) => {
  const components = useSelector(
    (state) => state.build.components.componentsByIds
  );
  const showMenu = useSelector((state) => state.build.styleEditorUI.showMenu);
  const view = useSelector((state) => state.build.styleEditorUI.view);
  const dispatch = useDispatch();

  const { wrapper, tabButton, activeTabButton } = props;

  return (
    <MenuWrapper {...wrapper} showMenu={showMenu}>
      {Object.entries(components).map(([componentID, component]) =>
        componentID === view ? (
          <ActiveTabButton
            {...tabButton}
            {...activeTabButton}
            key={componentID}
          >
            {component.type}
          </ActiveTabButton>
        ) : (
          <TabButton
            {...tabButton}
            key={componentID}
            onClick={() => {
              dispatch(buildActions.styleEditorShowComponent(componentID));
            }}
          >
            {component.type}
          </TabButton>
        )
      )}
    </MenuWrapper>
  );
};

export default Menu;
