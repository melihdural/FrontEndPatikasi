import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "react-query";
import {fetchProduct, fetchProductList} from "../../api";
import {Box, Button, Text} from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from 'react-image-gallery';

function ProductDetail() {
    const {product_id} = useParams();
    const { isLoading, error, data } = useQuery(["products", product_id], ()=>
        fetchProduct(product_id));

    if (isLoading) return "Loading...";

    if (error) return "An error has occured: " + error.message;

    console.log(data)

    const images = data.photos.map((url) => ({ original: url}));

    console.log(images[0])

    return (
        <div className={"content"}>
            <Button colorScheme={"pink"}>
                Add to basket
            </Button>
            <Text as={"h2"} fontSize={"2xl"}>
                {data.title}
            </Text>
            <Text>{moment(data.createdAt).format("DD/MM/YYYY")}</Text>
            <p>{data.description}</p>
            <Box margin={"10px"}>
                <ImageGallery items={images}/>
            </Box>
        </div>
    );
}

export default ProductDetail;