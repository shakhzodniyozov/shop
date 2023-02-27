import { Button, Card, CardBody, CardFooter, Flex, Image, Stack, Text } from "@chakra-ui/react"
import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"
import p1 from "../../images/parfume/p1.webp";
import p2 from "../../images/parfume/p2.webp";
import p3 from "../../images/parfume/p3.webp";
import p4 from "../../images/parfume/p4.webp";
import p5 from "../../images/parfume/p5.webp";
import k1 from "../../images/cosmetics/k1.webp";
import k2 from "../../images/cosmetics/k2.webp";
import k3 from "../../images/cosmetics/k3.webp";
import k4 from "../../images/cosmetics/k4.webp";
import k5 from "../../images/cosmetics/k5.webp";

export function Home() {
    return (
        <>
            <Link to="/parfume">
                <Flex direction="row" align="center" px="3">
                    <Text fontSize="1.8rem" fontWeight="500">Парфюмерия</Text>
                    <MdOutlineKeyboardArrowRight fontSize="2rem" />
                </Flex>
            </Link>
            <Stack direction="row" overflow="scroll" mt="2">
                <Link style={{ margin: 0 }}>
                    <Card size="sm" variant="unstyled" minWidth={"47vw"} p="2" h="100%">
                        <CardBody>
                            <Image src={p1} />
                            <Text mt="1.5">DOLCE&GABBANA Light Blue Italian Love Eau De Toilette</Text>
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <Text fontWeight="600">4 200&#8381;</Text>
                                <Button colorScheme="pink">В корзину</Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
                <Link style={{ margin: 0 }}>
                    <Card size="sm" variant="unstyled" minWidth={"47vw"} p="2" h="100%">
                        <CardBody>
                            <Image src={p2} />
                            <Text mt="1.5">PACO RABANNE Phantom</Text>
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <Text fontWeight="600">4 200&#8381;</Text>
                                <Button colorScheme="pink">В корзину</Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
                <Link style={{ margin: 0 }}>
                    <Card size="sm" variant="unstyled" minWidth={"47vw"} p="2" h="100%">
                        <CardBody>
                            <Image src={p3} />
                            <Text mt="1.5">ZADIG&VOLTAIRE This Is Her! ART 4 ALL</Text>
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <Text fontWeight="600">4 200&#8381;</Text>
                                <Button colorScheme="pink">В корзину</Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
                <Link style={{ margin: 0 }}>
                    <Card size="sm" variant="unstyled" minWidth={"47vw"} p="2" h="100%">
                        <CardBody>
                            <Image src={p4} />
                            <Text mt="1.5">DOLCE&GABBANA L'Imperatrice Limited Edition</Text>
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <Text fontWeight="600">4 200&#8381;</Text>
                                <Button colorScheme="pink">В корзину</Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
                <Link style={{ margin: 0 }}>
                    <Card size="sm" variant="unstyled" minWidth={"50vw"} p="2" h="100%">
                        <CardBody>
                            <Image src={p5} />
                            <Text mt="1.5">LANVIN Mon Éclat D'Arpège</Text>
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <Text fontWeight="600">4 200&#8381;</Text>
                                <Button colorScheme="pink">В корзину</Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
            </Stack>

            {/* cosmetics */}
            <Link to="/cosmetics">
                <Flex direction="row" align="center" px="3">
                    <Text fontSize="1.8rem" fontWeight="500">Косметика</Text>
                    <MdOutlineKeyboardArrowRight fontSize="2rem" />
                </Flex>
            </Link>
            <Stack direction="row" overflow="scroll" mt="2">
                <Link style={{ margin: 0 }}>
                    <Card size="sm" variant="unstyled" minWidth={"47vw"} p="2" h="100%">
                        <CardBody>
                            <Image src={k1} />
                            <Text mt="1.5">VIVIENNE SABO Губная помада Nude Createur</Text>
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <Text fontWeight="600">4 200&#8381;</Text>
                                <Button colorScheme="pink">В корзину</Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
                <Link style={{ margin: 0 }}>
                    <Card size="sm" variant="unstyled" minWidth={"47vw"} p="2" h="100%">
                        <CardBody>
                            <Image src={k2} />
                            <Text mt="1.5">VIVIENNE SABO Карандаш для губ устойчивый гелевый Le Grand Volume</Text>
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <Text fontWeight="600">4 200&#8381;</Text>
                                <Button colorScheme="pink">В корзину</Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
                <Link style={{ margin: 0 }}>
                    <Card size="sm" variant="unstyled" minWidth={"47vw"} p="2" h="100%">
                        <CardBody>
                            <Image src={k3} />
                            <Text mt="1.5">NARS Румяна ORGASM 2021</Text>
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <Text fontWeight="600">4 200&#8381;</Text>
                                <Button colorScheme="pink">В корзину</Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
                <Link style={{ margin: 0 }}>
                    <Card size="sm" variant="unstyled" minWidth={"47vw"} p="2" h="100%">
                        <CardBody>
                            <Image src={k4} />
                            <Text mt="1.5">DOLCE MILK Бальзам для губ "Ягодный бум"</Text>
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <Text fontWeight="600">4 200&#8381;</Text>
                                <Button colorScheme="pink">В корзину</Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
                <Link style={{ margin: 0 }}>
                    <Card size="sm" variant="unstyled" minWidth={"50vw"} p="2" h="100%">
                        <CardBody>
                            <Image src={k5} />
                            <Text mt="1.5">LUXVISAGE Тени для век METAL HYPE</Text>
                        </CardBody>
                        <CardFooter>
                            <Stack>
                                <Text fontWeight="600">4 200&#8381;</Text>
                                <Button colorScheme="pink">В корзину</Button>
                            </Stack>
                        </CardFooter>
                    </Card>
                </Link>
            </Stack>
        </>
    )
}
