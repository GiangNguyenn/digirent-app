import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

interface GalleryProps {
  firstImages?: string;
  secondImages?: string;
  thirdImages?: string;
  fourthImages?: string;
  fifthImages?: string;
  images: string[];
}
interface ShowAllButtonProps {
  images: string[];
}

const ShowAllButton = ({ images }: ShowAllButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        className=" lg:w-11/12 h-12 lg:left-0 lg:bottom-16 sm:right-44 sm:top-48 rounded-md border-2 border-black bg-white bg-opacity-90 hover:scale-[1.02]"
        onClick={onOpen}
      >
        Show all images
      </Button>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Swiper
              pagination={{
                enabled: true,
                type: "fraction",
              }}
              loop
              navigation
              modules={[Pagination, Navigation]}
              className="w-full mt-10"
            >
              {images.map((image, index) => {
                return (
                  <SwiperSlide className="lg:h-[800px] w-screen " key={index}>
                    <img src={image} alt="slide" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const Gallery = ({
  firstImages,
  secondImages,
  thirdImages,
  fourthImages,
  fifthImages,
  images,
}: GalleryProps) => {
  return (
    <div className="flex flex-col justify-center w-full lg:items-center ">
      <div className="w-4/5 h-full gap-2 lg:flex ">
        <div className="flex items-center lg:w-2/4 sm:w-screen">
          <img
            className="w-full h-[30vh] lg:rounded-l-2xl "
            src={firstImages}
            alt="firstImage"
          />
          <div className="sm:mb-20 md:mt-28 lg:hidden">
            <ShowAllButton images={images} />
          </div>
        </div>
        <div className="w-1/4 sm:hidden md:hidden h-[500px] lg:flex lg:flex-col gap-2">
          <div className=" bg-red h-3/6">
            <img
              className="w-full h-full"
              src={secondImages}
              alt="secondImage"
            />
          </div>
          <div className="bg-blue-100 h-3/6">
            <img className="w-full h-full" src={thirdImages} alt="thirdImage" />
          </div>
        </div>
        <div className="w-1/4 sm:hidden md:hidden lg:visible h-[500px] lg:flex lg:flex-col gap-2">
          <div className="bg-blue-100 h-3/6 rounded-tr-2xl">
            <img
              className="w-full h-full rounded-tr-2xl "
              src={fourthImages}
              alt="fourthImage"
            />
          </div>
          <div className="flex bg-green h-3/6 rounded-br-2xl">
            <img
              className="w-full h-full rounded-br-2xl "
              src={fifthImages}
              alt="fifthImage"
            />
            <ShowAllButton images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
