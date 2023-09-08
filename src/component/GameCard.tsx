
import { Game } from "../hooks/usegames";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageurl from "../services/image-url";

interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <>
      <Card width={'250px'} borderRadius={10} overflow={"hidden"}>
        <Image src={getCroppedImageurl ( game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={'space-between'}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore  score={game.metacritic}/>
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
