import React from "react";
import { BodyCard, Container, ContainerCard, FooterCard, HeaderCard, Card, Title, BoxPromotion, RowCard, RowCard1, Button, ContainerTitle, Card2,BodyCard2,HeaderCard2,RowCard2, HeaderTable, ContainerImg, LettersHeaderCard, Image, Icono, LettersRow  } from "./styled";
import imagen from "../../../img/oro2.jpg"
import imagen1 from "../../../img/silver.png"
import imagen2 from "../../../img/membresia-bronce.webp"
import { FcCheckmark } from 'react-icons/fc';

const Promocion = () => {
    return(
        <>
        
            <Container>
                <BoxPromotion>
                    <ContainerTitle>
                    <Title><h1> choose your membership </h1></Title>
                    </ContainerTitle>
                    <HeaderTable>
                    <HeaderTable className="hijo"></HeaderTable>
                    </HeaderTable>
                    <ContainerCard>
                        <Card>
                            <HeaderCard> 
                                <ContainerImg>
                                    <Image src={imagen1} alt="" />
                                </ContainerImg>
                                <LettersHeaderCard>
                                <LettersHeaderCard className="letters1"> free member</LettersHeaderCard>23
                                <LettersHeaderCard className="letters2"> free </LettersHeaderCard>
                                </LettersHeaderCard>
                            </HeaderCard>
                            <BodyCard>
                                
                                <RowCard>
                                <Icono><FcCheckmark/> </Icono>
                                <LettersRow> free</LettersRow>
                                    </RowCard>
                                <RowCard>
                                <Icono><FcCheckmark/></Icono>
                                <LettersRow> free </LettersRow>
                                    </RowCard>
                                <RowCard className="containerButton"> 
                                    <Button className="button1"> SIGN UP </Button>
                                </RowCard>
                            </BodyCard>
                        </Card>
                        <Card2>
                            <HeaderCard2>
                            <ContainerImg className="containerImg">
                                <Image src={imagen} alt="" />
                            </ContainerImg>
                                <LettersHeaderCard>
                                <LettersHeaderCard className="letters1"> Monthly</LettersHeaderCard>
                                <LettersHeaderCard className="letters2"> 1 week for free then $ 14.99/ </LettersHeaderCard>
                                <LettersHeaderCard className="letters3"> Month</LettersHeaderCard>
                                </LettersHeaderCard>
                            </HeaderCard2>
                            <BodyCard2>
                                <RowCard2>
                                <Icono><FcCheckmark/></Icono>
                                <LettersRow> Month </LettersRow>
                                </RowCard2>
                                <RowCard2> 
                                <Icono><FcCheckmark/></Icono>
                                <LettersRow> Month </LettersRow>
                                </RowCard2>
                                <RowCard2 className="card3"> <Icono className="icono3"><FcCheckmark/></Icono>
                                <LettersRow>Month</LettersRow>
                                </RowCard2>
                                <RowCard2> 
                                <Icono><FcCheckmark/></Icono>
                                <LettersRow> Month </LettersRow>
                                </RowCard2>
                                <RowCard2> 
                                <Icono><FcCheckmark/></Icono>
                                <LettersRow> Month </LettersRow>
                                </RowCard2>
                                <RowCard2 className="card6"> 
                                <Icono className="icono6"><FcCheckmark/></Icono>
                                <LettersRow> Month </LettersRow>
                                </RowCard2>
                            </BodyCard2>
                            <FooterCard>
                                <Button
                            
                                > SIGN UP </Button>
                            </FooterCard>
                        </Card2>
                        <Card>
                            <HeaderCard>
                            <ContainerImg>
                                <Image src={imagen2} alt="" />
                            </ContainerImg>
                                <LettersHeaderCard>
                                <LettersHeaderCard className="letters1"> Yearly </LettersHeaderCard>
                                <LettersHeaderCard className="letters2"> $129.99/ year </LettersHeaderCard>
                                </LettersHeaderCard>
                            </HeaderCard>
                            <BodyCard>
                                <RowCard1>
                                <Icono><FcCheckmark/></Icono>
                                <LettersRow>  Year </LettersRow>
                                </RowCard1>
                                <RowCard1>
                                <Icono><FcCheckmark/></Icono>
                                <LettersRow>  Year </LettersRow>
                                </RowCard1>
                                <RowCard1 className="row3"> 
                                <Icono className="icono3"><FcCheckmark/></Icono>
                                <LettersRow> Year </LettersRow>
                                </RowCard1>
                                <RowCard1> 
                                    <Icono><FcCheckmark/></Icono>
                                    <LettersRow>  Year </LettersRow>
                                    </RowCard1>
                                <RowCard1> 
                                <Icono><FcCheckmark/></Icono>
                                <LettersRow>  Year </LettersRow>
                                </RowCard1>
                                <RowCard1 className="row6">
                                <Icono className="icono6"><FcCheckmark/></Icono>
                                <LettersRow>  Year </LettersRow>
                                </RowCard1>
                            </BodyCard>
                            <FooterCard>
                                <Button>SIGN UP</Button>
                            </FooterCard>
                        </Card>
                    </ContainerCard>
                </BoxPromotion>
            </Container>
            </>
            
    )
}
export default Promocion