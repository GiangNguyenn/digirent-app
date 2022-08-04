import React from "react";
import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../../store/selectors/user.selector";
import IMAGES from "../../../../utils/constants/image.constant";

const AvatarMenu = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(getCurrentUser);

  const logOut = () => {
    axios.post(
      "http://localhost:8000/v1/api/auth/logout",
      localStorage.getItem("currentUser"),
    );
    navigate(0);
  };

  return (
    <Flex alignItems="right">
      <Stack direction="row" spacing={7}>
        <Menu isLazy>
          <MenuButton
            as={Button}
            rounded="full"
            variant="link"
            cursor="pointer"
            minW={0}
            p="2"
          >
            <Avatar
              size="sm"
              src={window.location.origin + IMAGES.defaultAvatar}
            />
          </MenuButton>
          <MenuList alignItems="center">
            <br />
            <Center>
              <Avatar
                size="2xl"
                src={window.location.origin + IMAGES.defaultAvatar}
              />
            </Center>
            <br />
            <Center>
              <p>{currentUser.name}</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem onClick={() => navigate("/user/profile")}>
              Account Settings
            </MenuItem>
            <MenuItem onClick={() => navigate("/user/transactions")}>
              Transaction History
            </MenuItem>
            <MenuItem onClick={() => logOut()}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
};

export default AvatarMenu;
