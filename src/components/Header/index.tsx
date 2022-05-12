import { Flex, Icon, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { RiUserLine } from "react-icons/ri";

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {menu && (
        <Flex
          zIndex="2"
          position="absolute"
          h="calc(100vh - 80px)"
          style={{ marginTop: 80 }}
          w="100vw"
          boxShadow="rgba(0,0,0,0.1) 0 0 10px"
          bg="#FFF"
        ></Flex>
      )}
      <Flex align="center" px="4" bg="#FFF" w="100vw" style={{ height: 80 }}>
        <Flex justify="space-between" w="100%" mx="auto" maxW={1000}>
          <Flex align="center">
            <Image
              src="http://localhost:5556/images/inconformedia.png"
              w="45"
              h="45"
              mr="2"
            />
            <Text fontWeight="bold" color="#000">
              Inconformedia
            </Text>
          </Flex>
          <Flex align="center">
            <Icon as={RiUserLine} cursor="pointer" color="#000" fontSize="20" />
            <Link href="/auth/signup">
              <Flex
                cursor="pointer"
                bg="#000"
                px="4"
                py="2"
                ml="4"
                borderRadius="5"
                justify="center"
                align="center"
              >
                <Text color="#FFF" fontSize="14" fontWeight="bold">
                  Sign Up
                </Text>
              </Flex>
            </Link>
            <Flex
              onClick={() => setMenu(!menu)}
              justify="center"
              align="center"
              flexDir="column"
              ml="4"
            >
              <div style={{ height: 2, width: 20, backgroundColor: "#000" }} />
              <div
                style={{
                  height: 2,
                  width: 20,
                  marginTop: 5,
                  backgroundColor: "#000",
                }}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}