import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { ReactNode } from 'react';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  
  interface StatsCardProps {
    title: string;
    stat: string;
    icon: ReactNode;
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function Webdevelopement() {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Web Devlopment Technologies 
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'HTML'}
            stat={'5,000'}
            icon={<FontAwesomeIcon icon="fab fa-html5" size={'3em'} />}
          />
            <StatsCard
            title={'CSS'}
            stat={'5,000'}
            icon={<FontAwesomeIcon icon="fab fa-html5" size={'3em'} />}
          />  <StatsCard
          title={'REACTjs'}
          stat={'5,000'}
          icon={<FontAwesomeIcon icon="fab fa-html5" size={'3em'} />}
        />  <StatsCard
        title={'Nodejs'}
        stat={'5,000'}
        icon={<FontAwesomeIcon icon="fab fa-html5" size={'3em'} />}
      />  <StatsCard
      title={'HTML'}
      stat={'5,000'}
      icon={<FontAwesomeIcon icon="fab fa-html5" size={'3em'} />}
    />  <StatsCard
    title={'HTML'}
    stat={'5,000'}
    icon={<FontAwesomeIcon icon="fab fa-html5" size={'3em'} />}
  />  <StatsCard
  title={'HTML'}
  stat={'5,000'}
  icon={<FontAwesomeIcon icon="fab fa-html5" size={'3em'} />}
/>  <StatsCard
            title={'HTML'}
            stat={'5,000'}
            icon={<FontAwesomeIcon icon="fab fa-html5" size={'3em'} />}
          />
          <StatsCard
            title={'Servers'}
            stat={'1,000'}
            icon={<FontAwesomeIcon icon="fa-brands fa-react" size={'3em'} />}
          />
          <StatsCard
            title={'Datacenters'}
            stat={'7'}
            icon={<GoLocation size={'3em'} />}
          />
        </SimpleGrid>
      </Box>
    );
  }