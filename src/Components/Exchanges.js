import axios from 'axios'
import React, { useEffect } from 'react'
import {server} from '../index'
import { useState } from 'react';
import { Container, HStack } from '@chakra-ui/react';
import Loader from './Loader';
import ExchangeCard from './ExchangeCard';

export default function Exchanges() {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchExchanges();
  }, []);


  return (
     <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  )
}