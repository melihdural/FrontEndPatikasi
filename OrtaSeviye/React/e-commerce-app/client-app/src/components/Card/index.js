import React from 'react';
import {Box, Button, Image} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import moment from "moment";

function Card({item}) {
    return (
        <Box borderWidth={"1px"} borderRadius={"lg"} overflow={"hidden"} p={"3"}>
            <Link to={`/product/${item._id}`}>
                <Image src={item.photos[0]} alt={"product"} loading={"lazy"}/>

                <Box p={"6"}>
                    <Box d={"plex"} alignItems={"baseline"}>
                        {moment(item.createdAt).format("DD/MM/YYYY")}
                    </Box>
                </Box>

                <Box mt={"1"} pl={"6"} fontWeight={"semibold"} as={"h4"} lineHeight={"taller"}>
                    {item.title}
                </Box>

                <Box mt={"1"} pl={"6"}>
                    {item.price}
                </Box>
            </Link>
            <Button mt={"3"} ml={"3"} colorScheme={"pink"}>Add to basket</Button>
        </Box>
    );
}

export default Card;