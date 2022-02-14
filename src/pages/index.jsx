import Heading from "components/Heading";
import Image from "next/image"
import Head from "next/head";

import styled from "styled-components"
import beach1 from "../../public/pictures/Beach-1.jpg"
import beach2 from "../../public/pictures/Beach-2.jpg"
import beach3 from "../../public/pictures/Beach-3.jpg"
import beach4 from "../../public/pictures/Beach-4.jpg"
import beach5 from "../../public/pictures/Beach-5.jpg"
import beach6 from "../../public/pictures/Beach-6.jpg"
import beach7 from "../../public/pictures/Beach-7.jpg"
import beach8 from "../../public/pictures/Beach-8.jpg"
import beach9 from "../../public/pictures/Beach-9.jpg"
import cliffs1 from "../../public/pictures/Cliffs-1.jpg"
import cliffs2 from "../../public/pictures/Cliffs-2.jpg"
import cliffs3 from "../../public/pictures/Cliffs-3.jpg"
import cliffs4 from "../../public/pictures/Cliffs-4.jpg"
import cliffs5 from "../../public/pictures/Cliffs-5.jpg"
import cliffs6 from "../../public/pictures/Cliffs-6.jpg"
import cliffs7 from "../../public/pictures/Cliffs-7.jpg"
import cliffs8 from "../../public/pictures/Cliffs-8.jpg"
import desert1 from "../../public/pictures/Desert-1.jpg"
import desert2 from "../../public/pictures/Desert-2.jpg"
import desert3 from "../../public/pictures/Desert-3.jpg"
import desert4 from "../../public/pictures/Desert-4.jpg"
import desert5 from "../../public/pictures/Desert-5.jpg"
import desert6 from "../../public/pictures/Desert-6.jpg"
import desert7 from "../../public/pictures/Desert-7.jpg"
import desert8 from "../../public/pictures/Desert-8.jpg"
import dome1 from "../../public/pictures/Dome-1.jpg"
import dome2 from "../../public/pictures/Dome-2.jpg"
import lake1 from "../../public/pictures/Lake-1.jpg"
import lake2 from "../../public/pictures/Lake-2.jpg"
import lake3 from "../../public/pictures/Lake-3.jpg"
import lake4 from "../../public/pictures/Lake-4.jpg"
import lake6 from "../../public/pictures/Lake-6.jpg"
import lake7 from "../../public/pictures/Lake-7.jpg"
import lake8 from "../../public/pictures/Lake-8.jpg"
import peak1 from "../../public/pictures/Peak-1.jpg"
import peak2 from "../../public/pictures/Peak-2.jpg"
import tree1 from "../../public/pictures/Tree-1.jpg"
import tree2 from "../../public/pictures/Tree-2.jpg"
import valley1 from "../../public/pictures/Valley-1.jpg"
import valley2 from "../../public/pictures/Valley-2.jpg"


const pictures = [beach1, beach2, beach3, beach4, beach5, beach6, beach7, beach8, beach9, cliffs1, cliffs2, cliffs3,
    cliffs4, cliffs5, cliffs6, cliffs7, cliffs8, desert1, desert2, desert3, desert4, desert5, desert5, desert6, desert7,
    desert8, dome1, dome2, lake1, lake2, lake3, lake4, lake6, lake7, lake8, peak1, peak2, tree1, tree2, valley1, valley2,
]

const Home = () => {

    const Wrapper = styled.div`
      display: grid;
      grid-template-columns: repeat(1);
      grid-gap: 10px;
      justify-items: center;
      justify-content: center;
    `

    const ImageRound = styled(Image)`
      border-radius: 10px;
    `

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Heading title="Pictures" tag="h2"/>
            <Wrapper>
                {
                    pictures.map((item, index) => (
                            <ImageRound
                                key={index}
                                src={item}
                                alt="photo"
                                placeholder="blur"
                                width="800"
                                height="600"
                            />
                        )
                    )
                }
            </Wrapper>
        </>
    )
}

export default Home